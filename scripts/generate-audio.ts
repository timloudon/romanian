/**
 * Pre-generates natural-sounding audio for every phrase with ElevenLabs, into
 * public/audio/phrases/, and writes src/audio/generated/audio-manifest.json mapping
 * "<lang>|<exact text>" to its file. The app plays these instead of the device's built-in voice
 * — they work offline, play with the iPhone's silent switch on, and keep going in Driving Mode.
 *
 * Files are named by a hash of (model, voice, text), so re-running only generates phrases that
 * are new or changed; everything else is reused. Credentials come from .env.local (gitignored).
 *
 *   npm run generate:audio -- --dry-run              count clips and characters, generate nothing
 *   npm run generate:audio -- --list-voices          voices already in your ElevenLabs account
 *   npm run generate:audio -- --find-voices ro female  search the shared voice library
 *   npm run generate:audio -- --add-voice <publicOwnerId> <voiceId> <name>
 *   npm run generate:audio -- --design-voice "<description>" "<sample text, 100+ chars>" <outDir>
 *   npm run generate:audio -- --save-voice <generatedVoiceId> <name> "<description>"
 *   npm run generate:audio [-- --only ro|en] [-- --max-chars <n>]
 *
 * On the free plan, library voices can't be used through the API — a voice designed with
 * --design-voice belongs to the account, so it can.
 */
import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { roCore } from '../src/content/courses/ro-core/index.ts'
import { lifeTopics } from '../src/content/life/index.ts'

type Lang = 'ro' | 'en'

interface Phrase {
  lang: Lang
  /** Exactly what the app passes to the audio layer — the manifest key. */
  text: string
  /** What's actually sent for speech; may differ (see toSpokenPrompt). */
  spoken: string
}

const API = 'https://api.elevenlabs.io'
const ROOT = path.join(import.meta.dirname, '..')
const AUDIO_DIR = path.join(ROOT, 'public', 'audio', 'phrases')
const MANIFEST_PATH = path.join(ROOT, 'src', 'audio', 'generated', 'audio-manifest.json')
const OUTPUT_FORMAT = 'mp3_44100_64'
const CONCURRENCY = 2

const envPath = path.join(ROOT, '.env.local')
if (existsSync(envPath)) process.loadEnvFile(envPath)

const args = process.argv.slice(2)
const flag = (name: string) => args.includes(name)
const flagValue = (name: string) => {
  const index = args.indexOf(name)
  return index === -1 ? undefined : args[index + 1]
}

const apiKey = process.env.ELEVENLABS_API_KEY?.trim()
const model = process.env.ELEVENLABS_MODEL?.trim() || 'eleven_multilingual_v2'
const voices: Record<Lang, string | undefined> = {
  ro: process.env.ELEVENLABS_VOICE_RO?.trim() || undefined,
  en: process.env.ELEVENLABS_VOICE_EN?.trim() || undefined,
}

function requireKey(): string {
  if (!apiKey) {
    console.error('No ELEVENLABS_API_KEY in .env.local — add your key there first.')
    process.exit(1)
  }
  return apiKey
}

async function api(pathname: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${API}${pathname}`, {
    ...init,
    headers: { 'xi-api-key': requireKey(), ...init.headers },
  })
}

/** "(the book) Will you give it to me?" reads better aloud as "The book: will you give it to me?" */
function toSpokenPrompt(prompt: string): string {
  const match = /^\(([^)]+)\)\s*(.+)$/.exec(prompt)
  if (!match) return prompt
  const [, context, rest] = match
  return `${context.charAt(0).toUpperCase()}${context.slice(1)}: ${rest}`
}

function collectPhrases(only?: Lang): Phrase[] {
  const seen = new Set<string>()
  const phrases: Phrase[] = []
  const add = (phrase: Phrase) => {
    const key = `${phrase.lang}|${phrase.text}`
    if (seen.has(key) || (only && phrase.lang !== only)) return
    seen.add(key)
    phrases.push(phrase)
  }
  // Priority order for when free credits run out mid-run: the weekly real-life phrases first
  // (what gets said at home), then the course from the beginning.
  const drills = [
    ...lifeTopics.flatMap((topic) => topic.drills),
    ...roCore.units.flatMap((unit) => unit.lessons.flatMap((lesson) => lesson.drills)),
  ]
  for (const drill of drills) {
    add({ lang: 'ro', text: drill.answer, spoken: drill.answer })
    add({ lang: 'en', text: drill.prompt, spoken: toSpokenPrompt(drill.prompt) })
  }
  return phrases
}

function fileNameFor(phrase: Phrase): string {
  const hash = createHash('sha1')
    .update([model, voices[phrase.lang] ?? '', phrase.lang, phrase.spoken].join('|'))
    .digest('hex')
    .slice(0, 16)
  return `${hash}.mp3`
}

class QuotaExceeded extends Error {}

async function synthesize(phrase: Phrase, voiceId: string): Promise<Buffer> {
  const body: Record<string, unknown> = {
    text: phrase.spoken,
    model_id: model,
    voice_settings: { stability: 0.5, similarity_boost: 0.75 },
  }
  // Only the v2.5 models accept an explicit language lock; others detect it from the text.
  if (model.includes('v2_5')) body.language_code = phrase.lang

  for (let attempt = 1; ; attempt++) {
    const res = await api(`/v1/text-to-speech/${voiceId}?output_format=${OUTPUT_FORMAT}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
      body: JSON.stringify(body),
    })
    if (res.ok) return Buffer.from(await res.arrayBuffer())

    const detail = await res.text()
    if (detail.includes('quota_exceeded')) throw new QuotaExceeded(detail)
    if (res.status === 429 && attempt < 4) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 2000))
      continue
    }
    throw new Error(`HTTP ${res.status}: ${detail.slice(0, 300)}`)
  }
}

async function writeManifest(phrases: Phrase[]): Promise<number> {
  const manifest: Record<string, string> = {}
  for (const phrase of phrases) {
    const file = fileNameFor(phrase)
    if (voices[phrase.lang] && existsSync(path.join(AUDIO_DIR, file))) {
      manifest[`${phrase.lang}|${phrase.text}`] = `audio/phrases/${file}`
    }
  }
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)))
  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true })
  await writeFile(MANIFEST_PATH, JSON.stringify(sorted, null, 2) + '\n', 'utf-8')

  // Drop clips nothing points at any more (edited text, a changed voice) so they don't pile up.
  const referenced = new Set(Object.values(sorted).map((file) => path.basename(file)))
  if (existsSync(AUDIO_DIR)) {
    for (const file of await readdir(AUDIO_DIR)) {
      if (file.endsWith('.mp3') && !referenced.has(file)) await rm(path.join(AUDIO_DIR, file))
    }
  }
  return Object.keys(sorted).length
}

async function generate() {
  const onlyValue = flagValue('--only')
  if (onlyValue && onlyValue !== 'ro' && onlyValue !== 'en') throw new Error('--only must be "ro" or "en"')
  const only = onlyValue as Lang | undefined
  const maxChars = Number(flagValue('--max-chars') ?? Infinity)

  const everything = collectPhrases()
  const phrases = collectPhrases(only)
  const missing = phrases.filter((phrase) => !existsSync(path.join(AUDIO_DIR, fileNameFor(phrase))))
  const chars = (list: Phrase[]) => list.reduce((sum, phrase) => sum + phrase.spoken.length, 0)

  for (const lang of ['ro', 'en'] as const) {
    const ofLang = phrases.filter((phrase) => phrase.lang === lang)
    const todo = missing.filter((phrase) => phrase.lang === lang)
    if (ofLang.length === 0) continue
    console.log(
      `${lang}: ${ofLang.length} clips (${chars(ofLang)} chars) — ${todo.length} to generate (${chars(todo)} chars)` +
        (voices[lang] ? '' : ' — no voice set, skipping'),
    )
  }
  if (flag('--dry-run')) return

  requireKey()
  await mkdir(AUDIO_DIR, { recursive: true })
  const queue = missing.filter((phrase) => voices[phrase.lang])
  let spent = 0
  let made = 0
  let stopReason: string | undefined

  async function worker() {
    for (let phrase = queue.shift(); phrase && !stopReason; phrase = queue.shift()) {
      if (spent + phrase.spoken.length > maxChars) {
        stopReason = `reached --max-chars ${maxChars}`
        return
      }
      spent += phrase.spoken.length
      try {
        const audio = await synthesize(phrase, voices[phrase.lang]!)
        await writeFile(path.join(AUDIO_DIR, fileNameFor(phrase)), audio)
        made++
        if (made % 25 === 0) console.log(`  …${made} generated`)
      } catch (error) {
        if (error instanceof QuotaExceeded) stopReason = 'your ElevenLabs character quota is used up'
        else console.warn(`  skipped "${phrase.text}": ${(error as Error).message}`)
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker))

  const inManifest = await writeManifest(everything)
  console.log(`\nGenerated ${made} clips (~${spent} chars). ${inManifest} phrases now have recorded audio.`)
  if (stopReason) console.log(`Stopped early: ${stopReason}. Re-run later to continue where it left off.`)
}

interface AccountVoice {
  voice_id: string
  name: string
  category?: string
  labels?: Record<string, string>
}

interface SharedVoice {
  public_owner_id: string
  voice_id: string
  name: string
  accent?: string
  gender?: string
  age?: string
  language?: string
  use_case?: string
  descriptive?: string
  cloned_by_count?: number
  description?: string
}

async function listVoices() {
  const res = await api('/v1/voices')
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  const { voices: list } = (await res.json()) as { voices: AccountVoice[] }
  for (const voice of list) {
    const labels = Object.values(voice.labels ?? {}).join(', ')
    console.log(`${voice.voice_id}  ${voice.name}  [${voice.category ?? ''}] ${labels}`)
  }
}

async function findVoices() {
  const index = args.indexOf('--find-voices')
  const language = args[index + 1] ?? 'ro'
  const gender = args[index + 2]
  const params = new URLSearchParams({ page_size: '30', language, sort: 'cloned_by_count' })
  if (gender) params.set('gender', gender)
  const res = await api(`/v1/shared-voices?${params}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  const { voices: list } = (await res.json()) as { voices: SharedVoice[] }
  for (const voice of list) {
    console.log(
      [
        `${voice.public_owner_id} ${voice.voice_id}`,
        voice.name,
        [voice.gender, voice.age, voice.accent, voice.language, voice.use_case, voice.descriptive].filter(Boolean).join(', '),
        `used by ${voice.cloned_by_count ?? 0}`,
        (voice.description ?? '').replace(/\s+/g, ' ').slice(0, 100),
      ].join('  |  '),
    )
  }
}

async function addVoice() {
  const index = args.indexOf('--add-voice')
  const [ownerId, voiceId, name] = args.slice(index + 1)
  if (!ownerId || !voiceId || !name) throw new Error('usage: --add-voice <publicOwnerId> <voiceId> <name>')
  const res = await api(`/v1/voices/add/${ownerId}/${voiceId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ new_name: name }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  const { voice_id } = (await res.json()) as { voice_id: string }
  console.log(`Added "${name}" to your account as ${voice_id}`)
}

interface VoicePreview {
  generated_voice_id: string
  audio_base_64: string
}

/** Asks ElevenLabs for candidate voices matching a description, saving each as an mp3 sample. */
async function designVoice() {
  const index = args.indexOf('--design-voice')
  const [description, text, outDir] = args.slice(index + 1)
  if (!description || !text || !outDir) throw new Error('usage: --design-voice "<description>" "<text>" <outDir>')
  const body = JSON.stringify({ voice_description: description, text })
  const init = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body }

  // The endpoint was renamed at some point; try the current name, then the older one.
  let res = await api('/v1/text-to-voice/design', init)
  if (res.status === 404) res = await api('/v1/text-to-voice/create-previews', init)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)

  const { previews } = (await res.json()) as { previews: VoicePreview[] }
  await mkdir(outDir, { recursive: true })
  for (const [i, preview] of previews.entries()) {
    const file = path.join(outDir, `candidate-${i + 1}.mp3`)
    await writeFile(file, Buffer.from(preview.audio_base_64, 'base64'))
    console.log(`candidate ${i + 1}: ${preview.generated_voice_id}  ->  ${file}`)
  }
}

async function saveVoice() {
  const index = args.indexOf('--save-voice')
  const [generatedVoiceId, name, description] = args.slice(index + 1)
  if (!generatedVoiceId || !name || !description) {
    throw new Error('usage: --save-voice <generatedVoiceId> <name> "<description>"')
  }
  const init = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ voice_name: name, voice_description: description, generated_voice_id: generatedVoiceId }),
  }
  let res = await api('/v1/text-to-voice', init)
  if (res.status === 404 || res.status === 405) res = await api('/v1/text-to-voice/create-voice-from-preview', init)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  const { voice_id } = (await res.json()) as { voice_id: string }
  console.log(`Saved "${name}" as ${voice_id}`)
}

try {
  if (flag('--list-voices')) await listVoices()
  else if (flag('--find-voices')) await findVoices()
  else if (flag('--add-voice')) await addVoice()
  else if (flag('--design-voice')) await designVoice()
  else if (flag('--save-voice')) await saveVoice()
  else await generate()
} catch (error) {
  console.error((error as Error).message)
  process.exitCode = 1
}
