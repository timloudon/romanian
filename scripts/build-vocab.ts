/**
 * Fetches (if not already cached locally) and cleans the Romanian word-frequency list from
 * hermitdave/FrequencyWords (OpenSubtitles-derived — https://github.com/hermitdave/FrequencyWords),
 * writing the top 10,000 usable words to src/content/generated/vocab-top10k.json.
 *
 * The raw file is gitignored (scripts/vocab-raw/) and re-fetched on demand, so this script is
 * the only thing that needs to run to reproduce the generated output from scratch.
 *
 * Run with: npm run build:vocab
 */
import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

// A deliberately standalone shape (not imported from src/content/vocab/types.ts): this script
// is a Node-side data pipeline in a separate TS project (see tsconfig.node.json) from the app
// bundle, and the fields it actually produces are a strict subset of the app's VocabItem anyway
// (translation/pos are filled in by hand, later).
interface GeneratedVocabEntry {
  id: string
  rank: number
  word: string
  corpusCount: number
}

const SOURCE_URL =
  'https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/ro/ro_50k.txt'
const RAW_PATH = path.join(import.meta.dirname, 'vocab-raw', 'ro_50k.txt')
const EXCLUSIONS_PATH = path.join(import.meta.dirname, 'vocab-exclusions.json')
const OUTPUT_PATH = path.join(
  import.meta.dirname,
  '..',
  'src',
  'content',
  'generated',
  'vocab-top10k.json',
)
const TARGET_SIZE = 10_000

/**
 * The upstream file mangles Romanian diacritics through what looks like a Romanian 8-bit
 * encoding misread as a different codepage. Confirmed by direct inspection (not assumed):
 * "sã"/"cã"/"dupã" -> should be "să"/"că"/"după" (ã stands in for ă); "ºi"/"aºa"/"niºte" and
 * "ªi"/"ªtii" -> "și"/"așa"/"niște"/"știi" (both º and ª stand in for ș); "îþi"/"poþi"/"viaþa"
 * -> "îți"/"poți"/"viața" (þ, the Icelandic thorn, stands in for ț). Must run before diacritic
 * canonicalization below, since it's turning these into real letters in the first place.
 */
const MOJIBAKE_MAP: Record<string, string> = { ã: 'ă', º: 'ș', ª: 'ș', þ: 'ț' }

/** The source also mixes legacy cedilla forms (ş,ţ) with correct comma-below forms (ș,ț) for
 *  *different words within the same file* (e.g. rank 8 "şi" vs rank 5428 "greșit") — canonicalize
 *  everything to comma-below so typed-answer grading only ever has to deal with one convention. */
const CEDILLA_MAP: Record<string, string> = { ş: 'ș', ţ: 'ț', Ş: 'Ș', Ţ: 'Ț' }

const ALLOWED_WORD = /^[a-zăâîșț'-]+$/
// Every other single-letter "word" in the raw list (i,s,l,m,n,c,t,d,b,r,u,v,p,y,f,g,x,h,j,k,z,w)
// is a subtitle/tokenization artifact, not real standalone Romanian vocabulary.
const ALLOWED_SINGLE_LETTER_WORDS = new Set(['a', 'o', 'e'])

function repairAndNormalize(rawWord: string): string {
  let word = rawWord
  for (const [bad, good] of Object.entries(MOJIBAKE_MAP)) word = word.split(bad).join(good)
  for (const [bad, good] of Object.entries(CEDILLA_MAP)) word = word.split(bad).join(good)
  return word.toLowerCase()
}

function isUsableWord(word: string, exclusions: ReadonlySet<string>): boolean {
  if (!ALLOWED_WORD.test(word)) return false
  if (word.length === 1 && !ALLOWED_SINGLE_LETTER_WORDS.has(word)) return false
  if (exclusions.has(word)) return false
  return true
}

async function ensureRawFile(): Promise<string> {
  if (!existsSync(RAW_PATH)) {
    console.log(`Fetching ${SOURCE_URL} ...`)
    const res = await fetch(SOURCE_URL)
    if (!res.ok) {
      throw new Error(`Failed to fetch frequency list: ${res.status} ${res.statusText}`)
    }
    const text = await res.text()
    await mkdir(path.dirname(RAW_PATH), { recursive: true })
    await writeFile(RAW_PATH, text, 'utf-8')
  }
  return readFile(RAW_PATH, 'utf-8')
}

interface Exclusions {
  words: string[]
}

async function main() {
  const [raw, exclusionsRaw] = await Promise.all([
    ensureRawFile(),
    readFile(EXCLUSIONS_PATH, 'utf-8'),
  ])
  const exclusions = new Set((JSON.parse(exclusionsRaw) as Exclusions).words)

  const counts = new Map<string, number>()
  let totalLines = 0
  let rejectedLines = 0

  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) continue

    const [rawWord, rawCount] = trimmed.split(/\s+/)
    if (!rawWord || !rawCount) continue
    totalLines++

    const word = repairAndNormalize(rawWord)
    const count = Number(rawCount)

    if (!Number.isFinite(count) || !isUsableWord(word, exclusions)) {
      rejectedLines++
      continue
    }

    // Mojibake/cedilla repair can make two distinct raw rows collapse onto the same cleaned
    // word (e.g. "şi" + "ºi" + "ªi" all become "și") — merge their counts instead of keeping
    // only the first occurrence, so combined frequency (not an arbitrary pick) decides the rank.
    counts.set(word, (counts.get(word) ?? 0) + count)
  }

  const ranked: GeneratedVocabEntry[] = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, TARGET_SIZE)
    .map(([word, corpusCount], index) => ({
      id: `v-${word}`,
      rank: index + 1,
      word,
      corpusCount,
    }))

  if (ranked.length < TARGET_SIZE) {
    console.warn(`Warning: only ${ranked.length} usable words survived cleaning (wanted ${TARGET_SIZE}).`)
  }

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true })
  await writeFile(OUTPUT_PATH, JSON.stringify(ranked, null, 2) + '\n', 'utf-8')

  const mergedAway = totalLines - rejectedLines - counts.size
  console.log(
    `Wrote top ${ranked.length} of ${counts.size} cleaned words to ` +
      `${path.relative(process.cwd(), OUTPUT_PATH)} ` +
      `(read ${totalLines} raw lines: ${rejectedLines} discarded as noise/junk/known-exclusions, ` +
      `${mergedAway} merged into another entry via mojibake/diacritic repair).`,
  )
}

main().catch((err: unknown) => {
  console.error(err)
  process.exitCode = 1
})
