import type { Drill } from '../types'
import {
  asIf,
  beforeAfter,
  ever,
  hadDone,
  mustHave,
  neitherNor,
  passive,
  presumptive,
  soThat,
  someAny,
  whileDoing,
  wordBuilding,
  ownThings,
  thingsToDo,
} from './lessons/advanced'
import {
  genitive,
  handySe,
  reported,
  saAlone,
  smallAndSweet,
  stillAlready,
  twoLittleWords,
  whoWhich,
  wouldHave,
} from './lessons/going-further'
import { commands, neverDropThat, storytelling } from './lessons/joining-ideas'
import {
  beIsHave,
  comparing,
  himHer,
  myself,
  places,
  possession,
  theOnTheEnd,
  thisAndThat,
  toMe,
  plurals,
  toSomeone,
} from './lessons/people-and-things'
import {
  canAndKnow,
  cognates,
  doubleNegatives,
  endings,
  noIng,
  questions,
  saBridge,
  verbFamilies,
  sounds,
  verbPairs,
  verbPrepositions,
} from './lessons/starting-from-english'
import {
  exclaiming,
  fillers,
  getTakeMake,
  greetings,
  idioms,
  numbersAndTime,
  opinions,
  polite,
  requests,
  streetRomanian,
  wordOrder,
} from './lessons/sounding-natural'
import { agoAndIn, future, past, since, usedTo, would } from './lessons/time'
import type { StructureLesson, StructurePart } from './types'

/** In suggested order — each lesson leans only on the ones before it, but any can be opened. */
export const structureLessons: StructureLesson[] = [
  cognates,
  sounds,
  noIng,
  endings,
  verbFamilies,
  questions,
  saBridge,
  canAndKnow,
  verbPairs,
  verbPrepositions,
  doubleNegatives,
  past,
  future,
  since,
  agoAndIn,
  usedTo,
  would,
  theOnTheEnd,
  plurals,
  places,
  possession,
  thisAndThat,
  comparing,
  beIsHave,
  toMe,
  myself,
  himHer,
  toSomeone,
  commands,
  neverDropThat,
  storytelling,
  saAlone,
  wouldHave,
  genitive,
  ownThings,
  stillAlready,
  handySe,
  twoLittleWords,
  whoWhich,
  smallAndSweet,
  reported,
  mustHave,
  presumptive,
  hadDone,
  whileDoing,
  passive,
  ever,
  beforeAfter,
  soThat,
  neitherNor,
  asIf,
  someAny,
  wordBuilding,
  thingsToDo,
  greetings,
  requests,
  exclaiming,
  getTakeMake,
  fillers,
  idioms,
  wordOrder,
  polite,
  opinions,
  numbersAndTime,
  streetRomanian,
]

export const structureParts: { part: StructurePart; blurb: string }[] = [
  { part: 'Starting from English', blurb: 'The English habits to drop first — and the head start you already have.' },
  { part: 'Time', blurb: 'Past, future, "used to", "would" — mostly simpler than English.' },
  { part: 'People and things', blurb: 'The, my, to me, myself, him — where the little words go.' },
  { part: 'Joining ideas', blurb: 'Telling people what to do, and gluing thoughts together.' },
  {
    part: 'Going further',
    blurb: 'The advanced shapes that make you sound fluent — should have, whose, the one that, I wonder, had done.',
  },
  {
    part: 'Sounding natural',
    blurb: 'Beyond grammar: the verbs, fillers, idioms, word order and politeness that make you sound like you live there.',
  },
]

/** How to learn with this section — Michel Thomas and Say Something In… principles, in plain words. */
export const learningPrinciples: { title: string; body: string }[] = [
  {
    title: "Don't try to remember",
    body: "Understand it, then use it. If something doesn't stick, that's the explanation's fault, not yours — go back to it rather than drilling harder.",
  },
  {
    title: 'Think it out, slowly',
    body: 'Build each sentence piece by piece in your head before you say it. The pause while you work it out is where the learning happens — never rush it.',
  },
  {
    title: 'Say it out loud',
    body: 'Every time, even under your breath. Your mouth has to learn it too, and saying it is what makes it yours.',
  },
  {
    title: 'Think it in "Romglish" first',
    body: 'Turn the English into literal Romanian-shaped English — "to me it\'s cold", "I have eaten", "the house my" — and the Romanian falls out of it. Over time the middle step disappears.',
  },
  {
    title: 'Narrate your day',
    body: "Commentate what you're doing in your head, in Romanian, in the patterns you've learned: \"Fac cafea. O să plec la opt. Mi-e somn.\" This is how the language starts running on its own.",
  },
  {
    title: 'Near enough is good enough',
    body: 'A slightly wrong sentence that gets said beats a perfect one that stays in your head. Your partner will understand — and correct you, which is free teaching.',
  },
]

export function findStructureLesson(id: string | null | undefined): StructureLesson | undefined {
  return structureLessons.find((lesson) => lesson.id === id)
}

export function nextStructureLesson(id: string): StructureLesson | undefined {
  const index = structureLessons.findIndex((lesson) => lesson.id === id)
  return index === -1 ? undefined : structureLessons[index + 1]
}

/** The spoken build-up drills in a lesson — the part that goes into Review and Driving Mode. */
export function structureDrills(lesson: StructureLesson): Drill[] {
  return lesson.steps.flatMap((step) => (step.kind === 'ladder' ? step.rungs : []))
}

const INLINE_ROMANIAN = /\{\{(.+?)\}\}/g

/** Every Romanian phrase a lesson can play (inline examples, glosses, funnels, timelines, tile
 *  sentences) — so the audio generator can record them all. */
export function structureRomanianPhrases(lesson: StructureLesson): string[] {
  const phrases: string[] = []
  const inline = (text: string) => {
    for (const match of text.matchAll(INLINE_ROMANIAN)) phrases.push(match[1])
  }
  inline(lesson.shift.romanian)
  for (const step of lesson.steps) {
    switch (step.kind) {
      case 'explain':
        step.body.forEach(inline)
        step.glosses?.forEach((gloss) => phrases.push(gloss.ro))
        break
      case 'funnel':
        phrases.push(step.ro)
        break
      case 'timeline':
        for (const sentence of step.sentences) {
          phrases.push(sentence.past.ro, sentence.present.ro, sentence.future.ro)
        }
        break
      case 'ladder':
        phrases.push(...step.rungs.map((rung) => rung.answer))
        break
      case 'assemble':
        phrases.push(step.answer)
        break
      case 'choose':
        break
    }
  }
  return [...new Set(phrases)]
}
