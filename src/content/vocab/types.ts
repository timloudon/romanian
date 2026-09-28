import type { PartOfSpeech } from '../types'

/** "v-" + cleaned word, e.g. "v-vreau" — stable per word, not positional, since rank shifts
 *  whenever the frequency list is regenerated but SRS progress must keep pointing at the same item. */
export type VocabId = string

export interface VocabItem {
  id: VocabId
  /** 1 = most frequent. Display/sort only, not part of identity. */
  rank: number
  word: string
  corpusCount: number
  /** Filled in by hand, incrementally. Items with no translation yet are simply skipped by
   *  vocab-drill sessions until authored — the list doesn't need 10,000 translations up front. */
  translation?: string
  exampleSentence?: string
  pos?: PartOfSpeech
}
