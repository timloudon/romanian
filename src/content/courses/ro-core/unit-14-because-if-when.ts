import type { Unit } from '../../types'

export const unit14: Unit = {
  id: 'u14',
  stage: 'Complex conversation',
  title: 'Why, because, if, when',
  lessons: [
    {
      id: 'u14-l01',
      title: 'Because, so that, but',
      intro:
        'Joining two thoughts into one sentence is the step from phrases to real conversation. "Pentru că" gives a reason; "ca să" gives a purpose.',
      drills: [
        {
          id: 'u14-l01-d01',
          prompt: 'Why are you laughing?',
          answer: 'De ce râzi?',
          teachingNote: '"De ce" — why.',
        },
        {
          id: 'u14-l01-d02',
          prompt: "I'm staying home because it's raining.",
          answer: 'Stau acasă pentru că plouă.',
        },
        {
          id: 'u14-l01-d03',
          prompt: "Because I don't have time.",
          answer: 'Pentru că n-am timp.',
          teachingNote: '"N-am" is "nu am" fused — how it\'s actually said.',
        },
        {
          id: 'u14-l01-d04',
          prompt: "I'm calling so we can talk.",
          answer: 'Te sun ca să vorbim.',
          teachingNote: '"Ca să" plus the "să" form of a verb means "so that / in order to."',
        },
        {
          id: 'u14-l01-d05',
          prompt: "I'm learning Romanian so I can talk to your family.",
          answer: 'Învăț română ca să pot vorbi cu familia ta.',
        },
        {
          id: 'u14-l01-d06',
          prompt: "But I don't know.",
          answer: 'Dar nu știu.',
        },
      ],
    },
    {
      id: 'u14-l02',
      title: 'If, when, before, after, until',
      intro: 'After "dacă" and "când," Romanian talks about the future in the plain present — no "o să" needed.',
      drills: [
        {
          id: 'u14-l02-d01',
          prompt: "If it rains, we'll stay home.",
          answer: 'Dacă plouă, stăm acasă.',
          teachingNote: 'Plain present for the future after "dacă" — "if it rains, we stay."',
        },
        {
          id: 'u14-l02-d02',
          prompt: "When he wakes up, we'll go out.",
          answer: 'Când se trezește, ieșim.',
        },
        {
          id: 'u14-l02-d03',
          prompt: 'Call me when you get there.',
          answer: 'Sună-mă când ajungi.',
        },
        {
          id: 'u14-l02-d04',
          prompt: 'Before we leave, we need to pack.',
          answer: 'Înainte să plecăm, trebuie să facem bagajele.',
          teachingNote: '"Înainte să" takes the "să" form.',
        },
        {
          id: 'u14-l02-d05',
          prompt: "After we eat, we'll go for a walk.",
          answer: 'După ce mâncăm, ieșim la plimbare.',
          teachingNote: '"După ce" takes the plain form — no "să."',
        },
        {
          id: 'u14-l02-d06',
          prompt: "I don't know if he's asleep.",
          answer: 'Nu știu dacă doarme.',
          teachingNote: '"Dacă" also means "whether."',
        },
        {
          id: 'u14-l02-d07',
          prompt: "I'll stay with him until he falls asleep.",
          answer: 'Stau cu el până adoarme.',
          teachingNote: '"Până" — until.',
        },
      ],
    },
  ],
}
