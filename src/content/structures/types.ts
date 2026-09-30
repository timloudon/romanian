import type { Drill } from '../types'

/**
 * The Structures section: how Romanian works, explained from English outwards rather than from
 * Romanian grammar. Each lesson is built around one "shift" — a habit English gives you that
 * Romanian doesn't share — and a card-by-card sequence of steps that explains it, shows it, and
 * then has you say it out loud.
 *
 * Text fields support two bits of inline markup (see RichText): **bold**, and {{Romanian}} for a
 * Romanian word or phrase, which is highlighted and plays when tapped.
 */

export type StructurePart = 'Starting from English' | 'Time' | 'People and things' | 'Joining ideas'

/** A Romanian sentence with a word-by-word literal ("think it as") gloss underneath. */
export interface Gloss {
  ro: string
  /** [Romanian chunk, literal English] pairs, in Romanian order. */
  words: [string, string][]
  /** How you'd actually say it in English. */
  en: string
}

export interface EnRo {
  en: string
  ro: string
}

/** A spoken build-up step: an English cue you think out and say aloud before revealing. */
export interface StructureDrill extends Drill {
  /** The pieces you need, offered before the reveal — "think it out" rather than "remember it". */
  hint?: string
}

export type StructureStep =
  | { kind: 'explain'; title: string; body: string[]; glosses?: Gloss[] }
  /** Several English phrasings that all collapse into one Romanian one. */
  | { kind: 'funnel'; title: string; english: string[]; ro: string; caption: string }
  /** The same sentences across yesterday / now / tomorrow, to see which part moves. */
  | { kind: 'timeline'; title: string; intro: string; sentences: { past: EnRo; present: EnRo; future: EnRo }[] }
  /** Michel Thomas–style build-up: each rung reuses the last and adds one thing. Self-assessed,
   *  and every rung is a real drill that feeds Review and Driving Mode. */
  | { kind: 'ladder'; title: string; intro?: string; rungs: StructureDrill[] }
  /** Put the Romanian words in order, from tiles. Word order is where English instincts misfire. */
  | { kind: 'assemble'; prompt: string; answer: string; distractors?: string[]; note?: string }
  /** "Spot the English habit": one right option, and why. */
  | { kind: 'choose'; question: string; options: { text: string; correct?: true }[]; explanation: string }

export interface StructureLesson {
  id: string
  part: StructurePart
  title: string
  tagline: string
  /** The difference this lesson is about, framed from where an English speaker starts. */
  shift: { english: string; romanian: string }
  steps: StructureStep[]
  /** The one-line mental rule to carry away — collected on the Shortcuts page. */
  shortcut: string
  /** A small real-life habit for the day: how the pattern gets into your head for good. */
  useItToday: string
  /** Where the course drills the same pattern further. */
  seeAlso?: { lessonId: string; label: string }
}
