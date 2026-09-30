import type { Unit } from '../../types'

export const unit21: Unit = {
  id: 'u21',
  stage: 'Complex conversation',
  title: 'The handy "se"',
  lessons: [
    {
      id: 'u21-l01',
      title: 'What people say, what can be done',
      intro: '"Se" plus a verb makes a sentence about nobody in particular — "it\'s said," "you can see," "it can\'t be done."',
      drills: [
        {
          id: 'u21-l01-d01',
          prompt: "That's not possible.",
          answer: 'Nu se poate.',
          teachingNote: 'One of the most-used phrases in Romanian — also "you can\'t do that."',
        },
        {
          id: 'u21-l01-d02',
          prompt: "You can tell he's tired.",
          answer: 'Se vede că e obosit.',
        },
        {
          id: 'u21-l01-d03',
          prompt: "They say it's going to snow.",
          answer: 'Se spune că o să ningă.',
        },
        {
          id: 'u21-l01-d04',
          prompt: "What's this called?",
          answer: 'Cum se numește asta?',
        },
        {
          id: 'u21-l01-d05',
          prompt: 'How is it made?',
          answer: 'Cum se face?',
        },
      ],
    },
    {
      id: 'u21-l02',
      title: 'Things that happen by themselves',
      intro: 'The same "se" for things nobody in particular is doing — it\'s getting late, it happens.',
      drills: [
        {
          id: 'u21-l02-d01',
          prompt: "It's getting late.",
          answer: 'Se face târziu.',
        },
        {
          id: 'u21-l02-d02',
          prompt: "It's getting dark.",
          answer: 'Se întunecă.',
        },
        {
          id: 'u21-l02-d03',
          prompt: "It's eaten cold.",
          answer: 'Se mănâncă rece.',
        },
        {
          id: 'u21-l02-d04',
          prompt: 'You can hear something.',
          answer: 'Se aude ceva.',
        },
        {
          id: 'u21-l02-d05',
          prompt: 'It happens.',
          answer: 'Se întâmplă.',
          teachingNote: 'The everyday shrug — "these things happen."',
        },
      ],
    },
  ],
}
