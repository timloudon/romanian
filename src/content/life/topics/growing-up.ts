import type { LifeTopic } from '../types'

export const growingUp: LifeTopic = {
  id: 'life-growing-up',
  emoji: '🌱',
  title: 'Growing up',
  summary: 'Milestones, new skills, and who he takes after.',
  intro: 'The news everyone wants — especially the grandparents. Things you\'ll say about him for years.',
  drills: [
    {
      id: 'life-growing-up-01',
      prompt: "He's started walking!",
      answer: 'A început să meargă!',
    },
    {
      id: 'life-growing-up-02',
      prompt: "He's started talking.",
      answer: 'A început să vorbească.',
    },
    {
      id: 'life-growing-up-03',
      prompt: 'He has two new teeth.',
      answer: 'Are doi dinți noi.',
    },
    {
      id: 'life-growing-up-04',
      prompt: "He's grown out of his clothes.",
      answer: 'Nu-i mai vin hainele.',
      teachingNote: 'Literally "the clothes don\'t come to him any more."',
    },
    {
      id: 'life-growing-up-05',
      prompt: 'He understands everything.',
      answer: 'Înțelege tot.',
    },
    {
      id: 'life-growing-up-06',
      prompt: "He's getting so big.",
      answer: 'Se face mare.',
      teachingNote: 'Literally "he\'s making himself big."',
    },
    {
      id: 'life-growing-up-07',
      prompt: 'He sleeps through the night now.',
      answer: 'Acum doarme toată noaptea.',
    },
    {
      id: 'life-growing-up-08',
      prompt: 'He wants to do everything by himself.',
      answer: 'Vrea să facă totul singur.',
    },
    {
      id: 'life-growing-up-09',
      prompt: "He's very curious.",
      answer: 'E foarte curios.',
    },
    {
      id: 'life-growing-up-10',
      prompt: "He's shy with strangers.",
      answer: 'E timid cu străinii.',
    },
    {
      id: 'life-growing-up-11',
      prompt: 'He takes after you.',
      answer: 'Seamănă cu tine.',
    },
    {
      id: 'life-growing-up-12',
      prompt: 'He has your eyes.',
      answer: 'Are ochii tăi.',
    },
    {
      id: 'life-growing-up-13',
      prompt: 'Time flies!',
      answer: 'Ce repede trece timpul!',
    },
  ],
  conversationPrompts: [
    'Tell your partner one new thing he did this week in Romanian, before you\'d normally mention it in English.',
    'Send the grandparents a message in Romanian about what\'s new with him.',
  ],
}
