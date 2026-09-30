import type { LifeTopic } from '../types'

export const nursery: LifeTopic = {
  id: 'life-nursery',
  emoji: '🧸',
  title: 'Nursery & other children',
  summary: 'Drop-off, pick-up, friends, sharing, and whose turn it is.',
  intro:
    "The school gate, the playground, the friend's birthday party — the part of his life that happens with other children.",
  drills: [
    {
      id: 'life-nursery-01',
      prompt: 'How was nursery?',
      answer: 'Cum a fost la creșă?',
      teachingNote: '"Creșă" is nursery for under-threes; from three it\'s "grădiniță" — literally "little garden."',
    },
    {
      id: 'life-nursery-02',
      prompt: "Who's taking him to nursery?",
      answer: 'Cine îl duce la creșă?',
    },
    {
      id: 'life-nursery-03',
      prompt: "I'll take him.",
      answer: 'Îl duc eu.',
    },
    {
      id: 'life-nursery-04',
      prompt: "He doesn't want to go.",
      answer: 'Nu vrea să meargă.',
    },
    {
      id: 'life-nursery-05',
      prompt: 'He cried when I left.',
      answer: 'A plâns când am plecat.',
    },
    {
      id: 'life-nursery-06',
      prompt: 'He ate at nursery.',
      answer: 'A mâncat la creșă.',
    },
    {
      id: 'life-nursery-07',
      prompt: "He's made a friend.",
      answer: 'Și-a făcut un prieten.',
    },
    {
      id: 'life-nursery-08',
      prompt: 'He played with the other children.',
      answer: 'S-a jucat cu ceilalți copii.',
    },
    {
      id: 'life-nursery-09',
      prompt: '(to him) Share with him!',
      answer: 'Dă-i și lui!',
      teachingNote: 'Literally "give him some too" — how Romanian parents say "share."',
    },
    {
      id: 'life-nursery-10',
      prompt: "(to him) Don't hit!",
      answer: 'Nu lovi!',
    },
    {
      id: 'life-nursery-11',
      prompt: '(to him) Say sorry.',
      answer: 'Cere-ți scuze.',
    },
    {
      id: 'life-nursery-12',
      prompt: 'Whose turn is it?',
      answer: 'Al cui e rândul?',
    },
    {
      id: 'life-nursery-13',
      prompt: "His friend's party is on Sunday.",
      answer: 'Petrecerea prietenului lui e duminică.',
    },
  ],
  conversationPrompts: [
    'After every pick-up this week, tell your partner how his day went in Romanian — who he played with, what he ate.',
    'At the playground, narrate turns and sharing to him in Romanian: "Al cui e rândul?"',
  ],
}
