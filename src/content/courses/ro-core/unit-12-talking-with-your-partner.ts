import type { Unit } from '../../types'

export const unit12: Unit = {
  id: 'u12',
  title: 'Talking with your partner',
  lessons: [
    {
      id: 'u12-l01',
      title: 'Affection and checking in',
      intro:
        'Different from talking *about* family — this is what you actually say *to* the person across from you. First stage of an ongoing thread; more of this is coming.',
      drills: [
        {
          id: 'u12-l01-d01',
          prompt: 'I miss you.',
          answer: 'Mi-e dor de tine.',
          teachingNote: 'Same "mi-e ___" shape as "mi-e foame" — here the feeling is "dor" (longing), pointed "de tine" (at you).',
          introduces: [{ lemma: 'dor', pos: 'noun', freqRank: 873 }],
        },
        {
          id: 'u12-l01-d02',
          prompt: 'I love you.',
          answer: 'Te iubesc.',
          introduces: [{ lemma: 'iubi', pos: 'verb', freqRank: 2550 }],
        },
        {
          id: 'u12-l01-d03',
          prompt: 'How was your day?',
          answer: 'Cum a fost ziua ta?',
          introduces: [{ lemma: 'zi', pos: 'noun', freqRank: 219 }],
        },
        {
          id: 'u12-l01-d04',
          prompt: 'What are you thinking about?',
          answer: 'La ce te gândești?',
          teachingNote: '"A se gândi" (to think) is reflexive, same "te" you already have — "la ce" is just "at/about what."',
          introduces: [{ lemma: 'gândi', pos: 'verb', freqRank: 8934 }],
        },
        {
          id: 'u12-l01-d05',
          prompt: "I'm glad you're here.",
          answer: 'Mă bucur că ești aici.',
          introduces: [{ lemma: 'aici', pos: 'adv', freqRank: 35 }],
        },
      ],
    },
    {
      id: 'u12-l02',
      title: 'Deciding together, small repairs',
      intro: 'The small, constant maintenance of a relationship — proposing, deciding, apologizing, reassuring.',
      drills: [
        {
          id: 'u12-l02-d01',
          prompt: 'What do you think about this?',
          answer: 'Ce zici de asta?',
          teachingNote: '"Ce zici" (what do you say) is the everyday, casual way to ask someone\'s opinion — "zice" is a common colloquial stand-in for "spune."',
          introduces: [{ lemma: 'zice', pos: 'verb', freqRank: 691 }],
        },
        {
          id: 'u12-l02-d02',
          prompt: "Let's decide together.",
          answer: 'Hai să decidem împreună.',
        },
        {
          id: 'u12-l02-d03',
          prompt: "I'm sorry.",
          answer: 'Îmi pare rău.',
          teachingNote: 'Literally "it seems bad to me" — a fixed phrase, not something you build piece by piece.',
        },
        {
          id: 'u12-l02-d04',
          prompt: "It's nothing.",
          answer: 'Nu-i nimic.',
          teachingNote: 'Your go-to reassurance — "nu" plus "îi" fuses to "nu-i," same elision pattern as always.',
          introduces: [{ lemma: 'nimic', pos: 'pron', freqRank: 84 }],
        },
        {
          id: 'u12-l02-d05',
          prompt: 'Good night, my love.',
          answer: 'Noapte bună, iubire.',
          introduces: [{ lemma: 'iubire', pos: 'noun', freqRank: 1265 }],
        },
      ],
    },
  ],
}
