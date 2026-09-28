import type { Drill } from '../content/types'

const DIACRITIC_FOLD: Record<string, string> = {
  ă: 'a',
  â: 'a',
  î: 'i',
  ș: 's',
  ş: 's',
  ț: 't',
  ţ: 't',
}

/** Folds Romanian diacritics (both correct comma-below and legacy cedilla forms) to plain
 *  ASCII and strips punctuation/casing, so grading is tolerant of missing diacritics — matching
 *  the "good enough" philosophy rather than requiring exact-character matches. */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .split('')
    .map((ch) => DIACRITIC_FOLD[ch] ?? ch)
    .join('')
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function levenshtein(a: string, b: string): number {
  const rows = a.length + 1
  const cols = b.length + 1
  const dist: number[][] = Array.from({ length: rows }, () => new Array<number>(cols).fill(0))
  for (let i = 0; i < rows; i++) dist[i][0] = i
  for (let j = 0; j < cols; j++) dist[0][j] = j

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      dist[i][j] = Math.min(dist[i - 1][j] + 1, dist[i][j - 1] + 1, dist[i - 1][j - 1] + cost)
    }
  }
  return dist[rows - 1][cols - 1]
}

export interface GradeResult {
  correct: boolean
  /** 1 = identical after normalization, 0 = completely different. For UI/debugging, not stored. */
  closeness: number
  matchedAgainst: string
}

/** Grades against the canonical answer and any accepted alternates, tolerating small typos and
 *  missing diacritics via fuzzy (Levenshtein) matching on top of the exact alternates list. */
export function gradeTypedAnswer(input: string, drill: Drill): GradeResult {
  const normInput = normalize(input)
  const candidates = [drill.answer, ...(drill.acceptedAlternates ?? [])]

  let best: GradeResult = { correct: false, closeness: 0, matchedAgainst: drill.answer }
  for (const candidate of candidates) {
    const normCandidate = normalize(candidate)
    const dist = levenshtein(normInput, normCandidate)
    const longest = Math.max(normInput.length, normCandidate.length, 1)
    const closeness = 1 - dist / longest
    const maxAllowedDist = Math.max(1, Math.round(normCandidate.length * 0.15))

    if (closeness > best.closeness) {
      best = { correct: dist <= maxAllowedDist, closeness, matchedAgainst: candidate }
    }
  }
  return best
}
