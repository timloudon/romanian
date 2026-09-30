import type { Drill } from '../types'
import {
  asIf,
  beforeAfter,
  ever,
  hadDone,
  ifLevels,
  mustHave,
  neitherNor,
  newsRegister,
  ownThings,
  passive,
  presumptive,
  someAny,
  soThat,
  thingsToDo,
  whatToDo,
  whileDoing,
  wishes,
  withoutDoing,
  wordBuilding,
  writingEmails,
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
import {
  commands,
  contrast,
  neverDropThat,
  storytelling,
} from './lessons/joining-ideas'
import {
  allEvery,
  asAs,
  beIsHave,
  comparing,
  describing,
  firstAndLast,
  goodAndWell,
  guessingGender,
  himHer,
  moreToMeVerbs,
  myself,
  otherSame,
  places,
  plurals,
  possession,
  theOnTheEnd,
  thisAndThat,
  toMe,
  toSomeone,
  usefulSelfVerbs,
  whereThingsAre,
  youAll,
} from './lessons/people-and-things'
import {
  canAndKnow,
  cognates,
  counting,
  doubleNegatives,
  endings,
  goingAndComing,
  howFar,
  irregularDozen,
  learnerTools,
  mustAndNeed,
  noIng,
  questions,
  saBridge,
  sounds,
  verbFamilies,
  verbPairs,
  verbPrepositions,
} from './lessons/starting-from-english'
import {
  compliments,
  emphasisWords,
  exclaiming,
  fillers,
  getTakeMake,
  gettingAWordIn,
  greetings,
  idioms,
  numbersAndTime,
  onThePhone,
  opinions,
  pictureIdioms,
  polite,
  proverbs,
  requests,
  roughly,
  signs,
  streetRomanian,
  sympathy,
  texting,
  wordOrder,
} from './lessons/sounding-natural'
import {
  agoAndIn,
  everBefore,
  future,
  past,
  since,
  timesOfDay,
  usedTo,
  would,
} from './lessons/time'
import { allOfDe, allOfMai, allOfPe, saCaCa } from './lessons/pulling-it-together'
import type { StructureLesson, StructurePart } from './types'

/** In suggested order — each lesson leans only on the ones before it, but any can be opened. */
export const structureLessons: StructureLesson[] = [
  cognates,
  sounds,
  counting,
  learnerTools,
  noIng,
  endings,
  verbFamilies,
  irregularDozen,
  questions,
  howFar,
  saBridge,
  canAndKnow,
  mustAndNeed,
  verbPairs,
  verbPrepositions,
  goingAndComing,
  doubleNegatives,
  past,
  future,
  since,
  agoAndIn,
  timesOfDay,
  everBefore,
  usedTo,
  would,
  theOnTheEnd,
  guessingGender,
  plurals,
  places,
  possession,
  thisAndThat,
  comparing,
  describing,
  asAs,
  goodAndWell,
  beIsHave,
  toMe,
  moreToMeVerbs,
  myself,
  usefulSelfVerbs,
  himHer,
  toSomeone,
  youAll,
  allEvery,
  whereThingsAre,
  otherSame,
  firstAndLast,
  commands,
  neverDropThat,
  contrast,
  storytelling,
  saAlone,
  withoutDoing,
  whatToDo,
  wouldHave,
  wishes,
  ifLevels,
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
  newsRegister,
  writingEmails,
  thingsToDo,
  greetings,
  requests,
  exclaiming,
  compliments,
  sympathy,
  onThePhone,
  texting,
  signs,
  getTakeMake,
  fillers,
  emphasisWords,
  idioms,
  pictureIdioms,
  proverbs,
  wordOrder,
  polite,
  opinions,
  gettingAWordIn,
  roughly,
  numbersAndTime,
  streetRomanian,
  allOfMai,
  allOfDe,
  allOfPe,
  saCaCa,
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
  {
    part: 'Pulling it together',
    blurb: 'The little words that do the most jobs — mai, de, pe, să / că — each laid out side by side.',
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

/** A mixed hands-free run across a whole part: its drills shuffled, capped so a run stays a drive. */
export function structurePartMix(part: StructurePart, size = 40): Drill[] {
  const drills = structureLessons.filter((lesson) => lesson.part === part).flatMap(structureDrills)
  for (let i = drills.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[drills[i], drills[j]] = [drills[j], drills[i]]
  }
  return drills.slice(0, size)
}

export function findStructurePart(name: string | null | undefined): StructurePart | undefined {
  return structureParts.find((entry) => entry.part === name)?.part
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
