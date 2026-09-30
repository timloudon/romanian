import type { LifeTopic } from '../types'

export const playing: LifeTopic = {
  id: 'life-play',
  emoji: '🧸',
  title: 'Playing together',
  summary: 'Hide and seek, catch, building towers, drawing and tidying up.',
  intro:
    'Play is where he\'ll learn the most Romanian — and where you can practise without anyone minding mistakes.',
  drills: [
    {
      id: 'life-play-01',
      prompt: 'Shall we play?',
      answer: 'Ne jucăm?',
    },
    {
      id: 'life-play-02',
      prompt: 'Let\'s play hide and seek.',
      answer: 'Hai să ne jucăm de-a v-ați ascunselea.',
      teachingNote: 'De-a v-ați ascunselea — "at you-have-hidden-yourselves" — hide and seek.',
    },
    {
      id: 'life-play-03',
      prompt: 'Where are you? I can\'t find you!',
      answer: 'Unde ești? Nu te găsesc!',
    },
    {
      id: 'life-play-04',
      prompt: 'Found you!',
      answer: 'Te-am găsit!',
    },
    {
      id: 'life-play-05',
      prompt: 'Catch the ball!',
      answer: 'Prinde mingea!',
    },
    {
      id: 'life-play-06',
      prompt: '(the ball) Throw it to me!',
      answer: 'Aruncă-mi-o!',
    },
    {
      id: 'life-play-07',
      prompt: 'My turn!',
      answer: 'E rândul meu!',
    },
    {
      id: 'life-play-08',
      prompt: 'Let\'s build a tower.',
      answer: 'Hai să facem un turn.',
    },
    {
      id: 'life-play-09',
      prompt: 'Oh no, it fell down!',
      answer: 'Vai, a căzut!',
    },
    {
      id: 'life-play-10',
      prompt: 'Let\'s draw.',
      answer: 'Hai să desenăm.',
    },
    {
      id: 'life-play-11',
      prompt: 'What colour is this?',
      answer: 'Ce culoare e asta?',
    },
    {
      id: 'life-play-12',
      prompt: 'Let\'s count: one, two, three!',
      answer: 'Hai să numărăm: unu, doi, trei!',
    },
    {
      id: 'life-play-13',
      prompt: 'Ready, steady, go!',
      answer: 'Pe locuri, fiți gata, start!',
    },
    {
      id: 'life-play-14',
      prompt: 'Again?',
      answer: 'Încă o dată?',
    },
    {
      id: 'life-play-15',
      prompt: 'Let\'s tidy the toys away.',
      answer: 'Hai să strângem jucăriile.',
    },
  ],
  conversationPrompts: [
    'Play one game a day this week entirely in Romanian.',
    'Count everything you build, throw or stack out loud in Romanian.',
  ],
}
