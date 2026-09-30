/**
 * Reports how much of the most common Romanian vocabulary (the cleaned top-10k frequency list)
 * the app's drills actually use, and which high-frequency words are still missing — a guide for
 * choosing vocabulary when writing new content.
 *
 * Run with: npm run coverage:vocab [-- <how many top words to list gaps for, default 300>]
 */
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { everyDrill } from '../src/content/index.ts'

interface VocabEntry {
  word: string
  rank: number
}

const BANDS = [100, 250, 500, 1000, 2000, 5000]
const gapLimit = Number(process.argv[2] ?? 300)

const vocabPath = path.join(import.meta.dirname, '..', 'src', 'content', 'generated', 'vocab-top10k.json')
const vocab = JSON.parse(await readFile(vocabPath, 'utf-8')) as VocabEntry[]

const DIACRITIC_FOLD: Record<string, string> = { ă: 'a', â: 'a', î: 'i', ș: 's', ş: 's', ț: 't', ţ: 't' }

/** The subtitle corpus lists many words twice — with and without diacritics ("și" and "si") —
 *  so compare folded forms, or every diacritic-less duplicate shows up as a false gap. */
function fold(word: string): string {
  return word.replace(/[ăâîșşțţ]/g, (ch) => DIACRITIC_FOLD[ch] ?? ch)
}

/** Whole words plus the parts of hyphen-fused forms, so "s-a" counts "s-a", "s" and "a". */
function tokens(text: string): string[] {
  return fold(text.toLowerCase())
    .replace(/[«»"“”„.,!?;:()…]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .flatMap((word) => [word, ...word.split('-')])
    .filter(Boolean)
}

const used = new Set(
  everyDrill()
    .flatMap((drill) => [drill.answer, ...(drill.acceptedAlternates ?? [])])
    .flatMap(tokens),
)

console.log(`${everyDrill().length} drills, ${used.size} distinct word forms.\n`)
const isUsed = (entry: VocabEntry) => used.has(fold(entry.word))

for (const band of BANDS) {
  const covered = vocab.slice(0, band).filter(isUsed).length
  console.log(`Top ${String(band).padStart(4)}: ${String(covered).padStart(4)} / ${band}  (${Math.round((covered / band) * 100)}%)`)
}

const gaps = vocab.slice(0, gapLimit).filter((entry) => !isUsed(entry))
console.log(`\nNot yet used from the top ${gapLimit} (${gaps.length}):`)
console.log(gaps.map((entry) => entry.word).join(', '))
