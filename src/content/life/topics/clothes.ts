import type { LifeTopic } from '../types'

export const clothes: LifeTopic = {
  id: 'life-clothes',
  emoji: '👕',
  title: 'Getting dressed & clothes shopping',
  summary: 'Dressing him in the morning, and trying things on in shops.',
  intro:
    'Every morning is a Romanian lesson if you narrate it — and the same words work in the changing room.',
  drills: [
    {
      id: 'life-clothes-01',
      prompt: 'Let\'s get dressed.',
      answer: 'Hai să ne îmbrăcăm.',
    },
    {
      id: 'life-clothes-02',
      prompt: 'Arms up!',
      answer: 'Mâinile sus!',
    },
    {
      id: 'life-clothes-03',
      prompt: 'Put your socks on.',
      answer: 'Pune-ți șosetele.',
    },
    {
      id: 'life-clothes-04',
      prompt: 'Which T-shirt do you want?',
      answer: 'Ce tricou vrei?',
    },
    {
      id: 'life-clothes-05',
      prompt: 'Your shoes are on the wrong feet.',
      answer: 'Ți-ai pus pantofii invers.',
    },
    {
      id: 'life-clothes-06',
      prompt: 'It\'s too small for him now.',
      answer: 'Acum îi e mic.',
      teachingNote: '"To him it\'s small" — the "to me it\'s…" shape again.',
    },
    {
      id: 'life-clothes-07',
      prompt: 'Can I try it on?',
      answer: 'Pot să-l probez?',
    },
    {
      id: 'life-clothes-08',
      prompt: 'What size?',
      answer: 'Ce mărime?',
    },
    {
      id: 'life-clothes-09',
      prompt: 'Do you have it in a bigger size?',
      answer: 'Îl aveți pe o mărime mai mare?',
    },
    {
      id: 'life-clothes-10',
      prompt: 'It fits well.',
      answer: 'Îmi vine bine.',
      teachingNote: '"It comes well to me" — how Romanian says something fits.',
    },
    {
      id: 'life-clothes-11',
      prompt: 'It doesn\'t fit.',
      answer: 'Nu-mi vine.',
    },
    {
      id: 'life-clothes-12',
      prompt: 'Where are the changing rooms?',
      answer: 'Unde sunt cabinele de probă?',
    },
    {
      id: 'life-clothes-13',
      prompt: 'Is it in the sale?',
      answer: 'E la reducere?',
    },
    {
      id: 'life-clothes-14',
      prompt: 'I\'ll take it.',
      answer: 'Îl iau.',
    },
  ],
  conversationPrompts: [
    'Dress him in Romanian every morning this week — every item, every step.',
    'Next time you shop for clothes, try "Pot să-l probez?" and "Ce mărime?"',
  ],
}
