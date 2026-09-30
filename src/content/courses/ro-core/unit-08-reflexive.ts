import type { Unit } from '../../types'

export const unit08: Unit = {
  id: 'u08',
  stage: 'Building up',
  title: 'Talking about yourself — reflexive verbs',
  lessons: [
    {
      id: 'u08-l01',
      title: '"Mă simt..." — verbs that point back at you',
      intro:
        'A cluster of very common verbs use the same small words you already know for "me/you" ("mă," "te," "ne"), plus one new one — "se," for "him/her/them" — paired with a verb that reflects back onto the person doing it.',
      drills: [
        {
          id: 'u08-l01-d01',
          prompt: 'My name is Ana.',
          answer: 'Mă numesc Ana.',
          teachingNote: 'Literally "I call myself Ana" — "mă" is the same word as "me" you already know, just paired with a verb that reflects back.',
        },
        {
          id: 'u08-l01-d02',
          prompt: 'I feel good.',
          answer: 'Mă simt bine.',
        },
        {
          id: 'u08-l01-d03',
          prompt: 'I wake up early.',
          answer: 'Mă trezesc devreme.',
          introduces: [{ lemma: 'devreme', pos: 'adv' }],
        },
        {
          id: 'u08-l01-d04',
          prompt: "He's in a hurry.",
          answer: 'El se grăbește.',
          teachingNote: '"Se" is the one genuinely new small word here — "himself/herself/themselves," used whenever the person isn\'t "I," "you," or "we."',
        },
        {
          id: 'u08-l01-d05',
          prompt: "I'm glad to see you.",
          answer: 'Mă bucur să te văd.',
          introduces: [{ lemma: 'bucura', pos: 'verb', freqRank: 3215 }],
        },
      ],
    },
    {
      id: 'u08-l02',
      title: 'More of the same pattern',
      intro: 'The same small set of reflexive verbs, recombined with the past tense and question words you already have.',
      drills: [
        {
          id: 'u08-l02-d01',
          prompt: 'Are you in a hurry?',
          answer: 'Te grăbești?',
        },
        {
          id: 'u08-l02-d02',
          prompt: "We're resting.",
          answer: 'Ne odihnim.',
          introduces: [{ lemma: 'odihni', pos: 'verb', freqRank: 7476 }],
        },
        {
          id: 'u08-l02-d03',
          prompt: "What's your name?",
          answer: 'Cum te numești?',
        },
        {
          id: 'u08-l02-d04',
          prompt: "They're watching TV.",
          answer: 'Se uită la televizor.',
          teachingNote: 'Worth knowing: "a uita" (no "se") means "to forget" — adding "se" changes the meaning entirely, to "to look/watch."',
          introduces: [{ lemma: 'uita', pos: 'verb', freqRank: 560 }],
        },
        {
          id: 'u08-l02-d05',
          prompt: 'I felt well yesterday.',
          answer: 'M-am simțit bine ieri.',
          teachingNote: 'The reflexive word and the past tense combine exactly like you\'d expect — "mă" plus "am" fuses to "m-am," same as always.',
          introduces: [{ lemma: 'ieri', pos: 'adv' }],
        },
      ],
    },
  ],
}
