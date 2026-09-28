export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adj'
  | 'adv'
  | 'pron'
  | 'prep'
  | 'conj'
  | 'phrase'
  | 'other'

/** Stable forever once shipped, e.g. "u01-l02-d05" — SRS progress in IndexedDB is keyed off
 *  this string. Retiring a drill means deleting it from content, not reassigning its id. */
export type DrillId = string

export interface VocabTag {
  /** Dictionary/lemma form, e.g. "merge" not "merg". */
  lemma: string
  pos: PartOfSpeech
  /** Cross-referenced against src/content/generated/vocab-top10k.json at authoring time, for
   *  prioritization only — not a foreign key, and not re-validated at runtime. */
  freqRank?: number
}

export interface Drill {
  id: DrillId
  /** English cue, shown and (in Driving Mode) spoken. */
  prompt: string
  /** Canonical Romanian answer, shown on reveal and spoken via the audio resolver. */
  answer: string
  /** Other phrasings accepted as correct in typed mode (dropped pronoun, word-order variant,
   *  an equally natural alternate construction) — on top of grading.ts's fuzzy/diacritic tolerance. */
  acceptedAlternates?: string[]
  /** Plain-language, Michel-Thomas-style aside shown on reveal. No grammar terminology dumps —
   *  point out the one thing worth noticing, in a sentence, the way a teacher would say it aloud. */
  teachingNote?: string
  introduces?: VocabTag[]
}

export interface Lesson {
  id: string
  title: string
  /** One short paragraph framing the lesson before the first drill, spoken-style. */
  intro?: string
  drills: Drill[]
}

export interface Unit {
  id: string
  title: string
  lessons: Lesson[]
}

export interface Course {
  id: string
  title: string
  units: Unit[]
}
