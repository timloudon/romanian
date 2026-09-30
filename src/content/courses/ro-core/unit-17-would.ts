import type { Unit } from '../../types'

export const unit17: Unit = {
  id: 'u17',
  stage: 'Complex conversation',
  title: 'What would happen',
  lessons: [
    {
      id: 'u17-l01',
      title: '"Dacă aș…" — if I had, I would',
      intro:
        'Romanian puts "aș" on both sides of an "if" sentence — literally "if I would have time, I would come."',
      drills: [
        {
          id: 'u17-l01-d01',
          prompt: "If I had time, I'd come.",
          answer: 'Dacă aș avea timp, aș veni.',
        },
        {
          id: 'u17-l01-d02',
          prompt: 'What would you do?',
          answer: 'Ce ai face?',
        },
        {
          id: 'u17-l01-d03',
          prompt: "I'd like to live in Romania.",
          answer: 'Mi-ar plăcea să locuiesc în România.',
          teachingNote: '"Îmi place" made hypothetical: "mi-ar plăcea" — "it would please me."',
        },
        {
          id: 'u17-l01-d04',
          prompt: 'It would be better.',
          answer: 'Ar fi mai bine.',
        },
        {
          id: 'u17-l01-d05',
          prompt: "If I were you, I'd call them.",
          answer: 'Dacă aș fi în locul tău, i-aș suna.',
          teachingNote: 'Literally "if I were in your place." "I-aș" is "îi" (them) plus "aș."',
        },
        {
          id: 'u17-l01-d06',
          prompt: 'It would be a shame.',
          answer: 'Ar fi păcat.',
        },
      ],
    },
    {
      id: 'u17-l02',
      title: 'Would have, should have, could have',
      intro:
        '"Aș fi" plus the past form gives "would have" — and two everyday shortcuts give "should have" and "could have."',
      drills: [
        {
          id: 'u17-l02-d01',
          prompt: 'I would have come.',
          answer: 'Aș fi venit.',
        },
        {
          id: 'u17-l02-d02',
          prompt: "If I'd known, I'd have told you.",
          answer: 'Dacă aș fi știut, ți-aș fi spus.',
        },
        {
          id: 'u17-l02-d03',
          prompt: 'It would have been nice.',
          answer: 'Ar fi fost frumos.',
        },
        {
          id: 'u17-l02-d04',
          prompt: 'We should have left earlier.',
          answer: 'Trebuia să plecăm mai devreme.',
          teachingNote: '"Trebuia să" is the everyday "should have."',
        },
        {
          id: 'u17-l02-d05',
          prompt: 'You could have told me!',
          answer: 'Puteai să-mi spui!',
          teachingNote: '"Puteai să" — "you could have."',
        },
        {
          id: 'u17-l02-d06',
          prompt: "I'd have liked that.",
          answer: 'Mi-ar fi plăcut.',
        },
      ],
    },
  ],
}
