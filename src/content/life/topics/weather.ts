import type { LifeTopic } from '../types'

export const weather: LifeTopic = {
  id: 'life-weather',
  emoji: '⛅',
  title: 'Weather & seasons',
  summary: 'Sun, rain, snow, heatwaves — the conversation everyone has.',
  intro:
    'Romanians talk about the weather nearly as much as the British do. Easy, safe, daily — perfect practice.',
  drills: [
    {
      id: 'life-weather-01',
      prompt: 'What\'s the weather like?',
      answer: 'Cum e vremea?',
    },
    {
      id: 'life-weather-02',
      prompt: 'It\'s sunny.',
      answer: 'E soare.',
    },
    {
      id: 'life-weather-03',
      prompt: 'It\'s cloudy.',
      answer: 'E înnorat.',
    },
    {
      id: 'life-weather-04',
      prompt: 'It\'s windy.',
      answer: 'Bate vântul.',
      teachingNote: 'Literally "the wind beats".',
    },
    {
      id: 'life-weather-05',
      prompt: 'It\'s snowing!',
      answer: 'Ninge!',
    },
    {
      id: 'life-weather-06',
      prompt: 'It\'s freezing.',
      answer: 'E ger.',
      teachingNote: 'Ger — hard frost, the bitter Romanian winter cold.',
    },
    {
      id: 'life-weather-07',
      prompt: 'It\'s a heatwave.',
      answer: 'E caniculă.',
    },
    {
      id: 'life-weather-08',
      prompt: 'Take your umbrella.',
      answer: 'Ia-ți umbrela.',
    },
    {
      id: 'life-weather-09',
      prompt: '(to him) Put your hat on.',
      answer: 'Pune-ți căciula.',
    },
    {
      id: 'life-weather-10',
      prompt: 'It\'s going to snow tomorrow.',
      answer: 'Mâine o să ningă.',
    },
    {
      id: 'life-weather-11',
      prompt: 'It\'s very hot in Romania in summer.',
      answer: 'Vara e foarte cald în România.',
    },
    {
      id: 'life-weather-12',
      prompt: 'I love autumn.',
      answer: 'Îmi place mult toamna.',
    },
    {
      id: 'life-weather-13',
      prompt: 'In winter we go sledging.',
      answer: 'Iarna mergem cu sania.',
    },
    {
      id: 'life-weather-14',
      prompt: 'What a lovely day!',
      answer: 'Ce zi frumoasă!',
    },
  ],
  conversationPrompts: [
    'Every morning this week, tell your partner the weather in Romanian.',
    'Read a Romanian forecast out loud once a day.',
  ],
}
