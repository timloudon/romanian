import type { LifeTopic } from '../types'

export const romanianFood: LifeTopic = {
  id: 'life-food',
  emoji: '🥘',
  title: 'Cooking Romanian food',
  summary: 'Sarmale, ciorbă, mici, mămăligă — and cooking with the family.',
  intro:
    'Food is where Romanian family life happens. Learn the dishes, the kitchen verbs, and how to ask for the recipe.',
  drills: [
    {
      id: 'life-food-01',
      prompt: 'Can you show me how to make sarmale?',
      answer: 'Îmi arăți cum se fac sarmalele?',
    },
    {
      id: 'life-food-02',
      prompt: 'What did you put in the soup?',
      answer: 'Ce ai pus în ciorbă?',
      teachingNote: 'Ciorbă — the sour soup at the heart of Romanian cooking.',
    },
    {
      id: 'life-food-03',
      prompt: 'Chop the onion.',
      answer: 'Toacă ceapa.',
    },
    {
      id: 'life-food-04',
      prompt: 'Stir it.',
      answer: 'Amestecă.',
    },
    {
      id: 'life-food-05',
      prompt: 'Put it on a low heat.',
      answer: 'Pune-l la foc mic.',
    },
    {
      id: 'life-food-06',
      prompt: 'How long does it go in the oven?',
      answer: 'Cât stă la cuptor?',
    },
    {
      id: 'life-food-07',
      prompt: 'Taste it — does it need more salt?',
      answer: 'Gustă — mai trebuie sare?',
    },
    {
      id: 'life-food-08',
      prompt: 'With sour cream and a hot pepper.',
      answer: 'Cu smântână și ardei iute.',
    },
    {
      id: 'life-food-09',
      prompt: 'Polenta with cheese and sour cream.',
      answer: 'Mămăligă cu brânză și smântână.',
    },
    {
      id: 'life-food-10',
      prompt: 'Mici with mustard.',
      answer: 'Mici cu muștar.',
    },
    {
      id: 'life-food-11',
      prompt: 'It\'s just like your mum\'s!',
      answer: 'E exact ca a mamei tale!',
    },
    {
      id: 'life-food-12',
      prompt: 'Can I have the recipe?',
      answer: 'Îmi dai rețeta?',
    },
    {
      id: 'life-food-13',
      prompt: 'I made them!',
      answer: 'Le-am făcut eu!',
    },
    {
      id: 'life-food-14',
      prompt: 'It\'s the best ciorbă I\'ve ever had.',
      answer: 'E cea mai bună ciorbă pe care am mâncat-o vreodată.',
    },
  ],
  conversationPrompts: [
    'Cook one Romanian dish with your partner this week, narrating every step in Romanian.',
    'Ask a grandparent for a recipe on a video call — in Romanian.',
  ],
}
