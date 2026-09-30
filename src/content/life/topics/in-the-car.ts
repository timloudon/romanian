import type { LifeTopic } from '../types'

export const inTheCar: LifeTopic = {
  id: 'life-car',
  emoji: '🚗',
  title: 'In the car',
  summary: 'Seatbelts, directions, traffic, and "are we nearly there?"',
  intro: 'Made for Drive with it: practise these on the road, then use them on the next family drive.',
  drills: [
    {
      id: 'life-car-01',
      prompt: 'Put your seatbelt on.',
      answer: 'Pune-ți centura.',
    },
    {
      id: 'life-car-02',
      prompt: 'Is he strapped into his seat?',
      answer: 'E legat în scaun?',
    },
    {
      id: 'life-car-03',
      prompt: 'Where are we going?',
      answer: 'Unde mergem?',
    },
    {
      id: 'life-car-04',
      prompt: 'Turn left here.',
      answer: 'Fă la stânga aici.',
      acceptedAlternates: ['Ia-o la stânga aici.'],
    },
    {
      id: 'life-car-05',
      prompt: 'Keep going straight on.',
      answer: 'Mergi drept înainte.',
    },
    {
      id: 'life-car-06',
      prompt: 'We need petrol.',
      answer: 'Trebuie să punem benzină.',
    },
    {
      id: 'life-car-07',
      prompt: "There's a lot of traffic.",
      answer: 'E mult trafic.',
    },
    {
      id: 'life-car-08',
      prompt: 'Are we nearly there?',
      answer: 'Mai avem mult?',
      teachingNote: 'Literally "do we still have much?" — the universal back-seat question.',
    },
    {
      id: 'life-car-09',
      prompt: 'Slow down!',
      answer: 'Mai încet!',
    },
    {
      id: 'life-car-10',
      prompt: "Let's stop for a coffee.",
      answer: 'Hai să oprim la o cafea.',
    },
    {
      id: 'life-car-11',
      prompt: 'Where can we park?',
      answer: 'Unde putem să parcăm?',
    },
    {
      id: 'life-car-12',
      prompt: "He fell asleep in the car.",
      answer: 'A adormit în mașină.',
    },
    {
      id: 'life-car-13',
      prompt: "I'll drive.",
      answer: 'Conduc eu.',
    },
    {
      id: 'life-car-14',
      prompt: 'Where did you park?',
      answer: 'Unde ai parcat?',
    },
    {
      id: 'life-car-15',
      prompt: 'Watch out!',
      answer: 'Ai grijă!',
    },
    {
      id: 'life-car-16',
      prompt: 'Turn right at the lights.',
      answer: 'Fă la dreapta la semafor.',
    },
    {
      id: 'life-car-17',
      prompt: "We're lost.",
      answer: 'Ne-am rătăcit.',
    },
    {
      id: 'life-car-18',
      prompt: 'Put some music on.',
      answer: 'Pune niște muzică.',
    },
    {
      id: 'life-car-19',
      prompt: 'How long does the journey take?',
      answer: 'Cât durează drumul?',
    },
  ],
  conversationPrompts: [
    'Be the navigator in Romanian on one drive this week — left, right, straight on.',
    'Put this topic on Drive with it for your commute all week.',
  ],
}
