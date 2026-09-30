import type { Unit } from '../../types'

export const unit16: Unit = {
  id: 'u16',
  stage: 'Complex conversation',
  title: 'How things used to be',
  lessons: [
    {
      id: 'u16-l01',
      title: 'Used to, was, were',
      intro:
        'One set of endings — "-am, -ai, -a" — turns a verb into "was doing" or "used to do." It\'s the tense for describing the past, rather than listing what happened in it.',
      drills: [
        {
          id: 'u16-l01-d01',
          prompt: 'When I was a child, I lived in the countryside.',
          answer: 'Când eram copil, locuiam la țară.',
          teachingNote: '"Eram" (I was) and "locuiam" (I used to live) share the same ending — that\'s the pattern.',
        },
        {
          id: 'u16-l01-d02',
          prompt: 'We used to go to the seaside every summer.',
          answer: 'Mergeam la mare în fiecare vară.',
        },
        {
          id: 'u16-l01-d03',
          prompt: 'It was cold.',
          answer: 'Era frig.',
        },
        {
          id: 'u16-l01-d04',
          prompt: 'There were lots of people.',
          answer: 'Erau mulți oameni.',
        },
        {
          id: 'u16-l01-d05',
          prompt: "I didn't know that.",
          answer: 'Nu știam asta.',
          teachingNote: 'Not knowing is a state, so it takes this tense — "nu știam," never "n-am știut," for this.',
        },
        {
          id: 'u16-l01-d06',
          prompt: "Before, I didn't understand anything.",
          answer: 'Înainte nu înțelegeam nimic.',
          teachingNote: '"Nimic" still needs its "nu" — Romanian doubles the negative.',
        },
      ],
    },
    {
      id: 'u16-l02',
      title: 'Setting the scene',
      intro:
        'Background in this tense, the event in the ordinary past: "he was sleeping" (dormea) when "you called" (ai sunat).',
      drills: [
        {
          id: 'u16-l02-d01',
          prompt: 'He was sleeping when you called.',
          answer: 'Dormea când ai sunat.',
        },
        {
          id: 'u16-l02-d02',
          prompt: 'I was cooking when he woke up.',
          answer: 'Găteam când s-a trezit.',
        },
        {
          id: 'u16-l02-d03',
          prompt: 'What were you doing?',
          answer: 'Ce făceai?',
        },
        {
          id: 'u16-l02-d04',
          prompt: 'I wanted to tell you something.',
          answer: 'Voiam să-ți spun ceva.',
          teachingNote: '"Voiam" is also the soft way to open a request — like "I was wanting to…"',
        },
        {
          id: 'u16-l02-d05',
          prompt: "Your mum was saying he's grown.",
          answer: 'Mama ta spunea că a crescut.',
        },
        {
          id: 'u16-l02-d06',
          prompt: 'It was wonderful!',
          answer: 'A fost minunat!',
          teachingNote: 'A finished experience takes "a fost" — "era" is for describing.',
        },
      ],
    },
  ],
}
