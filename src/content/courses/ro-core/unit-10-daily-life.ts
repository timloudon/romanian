import type { Unit } from '../../types'

export const unit10: Unit = {
  id: 'u10',
  title: 'Daily life & plans',
  lessons: [
    {
      id: 'u10-l01',
      title: 'Making plans',
      intro: 'The everyday back-and-forth of arranging to do something — almost entirely built from pieces you already have.',
      drills: [
        {
          id: 'u10-l01-d01',
          prompt: 'What are you doing today?',
          answer: 'Ce faci azi?',
          introduces: [{ lemma: 'azi', pos: 'adv', freqRank: 287 }],
        },
        {
          id: 'u10-l01-d02',
          prompt: 'I have plans.',
          answer: 'Am planuri.',
        },
        {
          id: 'u10-l01-d03',
          prompt: "Let's go together.",
          answer: 'Hai să mergem împreună.',
          teachingNote: '"Hai" is an invariant "come on / let\'s" — it just sits in front of the "să" pattern you already know.',
          introduces: [{ lemma: 'împreună', pos: 'adv', freqRank: 1683 }],
        },
        {
          id: 'u10-l01-d04',
          prompt: 'What time?',
          answer: 'La ce oră?',
          introduces: [{ lemma: 'oră', pos: 'noun', freqRank: 474 }],
        },
        {
          id: 'u10-l01-d05',
          prompt: "I'll call you later.",
          answer: 'Te sun mai târziu.',
        },
      ],
    },
    {
      id: 'u10-l02',
      title: 'Daily routine',
      intro: 'Talking through an ordinary day — waking up, working, resting — recombining the reflexive verbs and time words from before.',
      drills: [
        {
          id: 'u10-l02-d01',
          prompt: 'I wake up at seven.',
          answer: 'Mă trezesc la ora șapte.',
        },
        {
          id: 'u10-l02-d02',
          prompt: 'I work in the morning.',
          answer: 'Lucrez dimineața.',
          teachingNote: '"Dimineața/seara" work like "acasă" — no separate word for "in": the noun\'s own ending already carries it.',
          introduces: [{ lemma: 'lucra', pos: 'verb' }, { lemma: 'dimineață', pos: 'noun', freqRank: 1127 }],
        },
        {
          id: 'u10-l02-d03',
          prompt: 'In the evening I rest.',
          answer: 'Seara mă odihnesc.',
          introduces: [{ lemma: 'seară', pos: 'noun', freqRank: 281 }],
        },
        {
          id: 'u10-l02-d04',
          prompt: 'What are your plans for tomorrow?',
          answer: 'Ce planuri ai pentru mâine?',
        },
        {
          id: 'u10-l02-d05',
          prompt: "I don't have time today.",
          answer: 'Nu am timp azi.',
          introduces: [{ lemma: 'timp', pos: 'noun' }],
        },
      ],
    },
  ],
}
