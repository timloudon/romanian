import type { Unit } from '../../types'

export const unit19: Unit = {
  id: 'u19',
  stage: 'Complex conversation',
  title: 'Giving it to someone',
  lessons: [
    {
      id: 'u19-l01',
      title: '"Mi-l," "ți-o" — two small words together',
      intro:
        'When "to me" and "it" come together, "to me" always goes first: "mi-l," "mi-o." In the past tense the feminine "o" still jumps to the end.',
      drills: [
        {
          id: 'u19-l01-d01',
          prompt: '(the book) Will you give it to me?',
          answer: 'Mi-o dai?',
          teachingNote: '"Mi" (to me) + "o" (it, for a feminine thing) — "to me" always goes first.',
        },
        {
          id: 'u19-l01-d02',
          prompt: "(the key) I'll give it to you.",
          answer: 'Ți-o dau.',
        },
        {
          id: 'u19-l01-d03',
          prompt: '(the phone) Give it to me!',
          answer: 'Dă-mi-l!',
          teachingNote: 'In a command, both small words follow the verb.',
        },
        {
          id: 'u19-l01-d04',
          prompt: '(the present) I gave it to him.',
          answer: 'I l-am dat.',
        },
        {
          id: 'u19-l01-d05',
          prompt: '(the photo) She sent it to us.',
          answer: 'Ne-a trimis-o.',
          teachingNote: '"O" at the end, as always in the past tense.',
        },
      ],
    },
    {
      id: 'u19-l02',
      title: 'More of the same shape',
      intro: 'The same pairing with different verbs and people — the part that makes it automatic.',
      drills: [
        {
          id: 'u19-l02-d01',
          prompt: "(the video) I'll show it to you.",
          answer: 'Ți-l arăt.',
        },
        {
          id: 'u19-l02-d02',
          prompt: '(the toy) Who gave it to you?',
          answer: 'Cine ți-a dat-o?',
        },
        {
          id: 'u19-l02-d03',
          prompt: '(the book) I bought it for you.',
          answer: 'Ți-am cumpărat-o.',
        },
        {
          id: 'u19-l02-d04',
          prompt: '(the photo) Send it to me!',
          answer: 'Trimite-mi-o!',
        },
        {
          id: 'u19-l02-d05',
          prompt: '(the pushchair) They gave it to us.',
          answer: 'Ni l-au dat.',
          teachingNote: 'Before "l," "ne" changes to "ni."',
        },
      ],
    },
  ],
}
