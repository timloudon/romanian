import type { LifeTopic } from '../types'

export const work: LifeTopic = {
  id: 'life-work',
  emoji: '💼',
  title: 'Work & busy days',
  summary: 'How the day went, running late, and who is doing the pick-up.',
  intro: 'The logistics of two busy people and a small boy — plus the end-of-day check-in.',
  drills: [
    {
      id: 'life-work-01',
      prompt: 'How was work?',
      answer: 'Cum a fost la serviciu?',
      acceptedAlternates: ['Cum a fost la muncă?'],
    },
    {
      id: 'life-work-02',
      prompt: 'I had a long day.',
      answer: 'Am avut o zi lungă.',
    },
    {
      id: 'life-work-03',
      prompt: "I've got a lot on.",
      answer: 'Am mult de lucru.',
    },
    {
      id: 'life-work-04',
      prompt: 'I have a meeting at ten.',
      answer: 'Am o ședință la zece.',
    },
    {
      id: 'life-work-05',
      prompt: 'I have to work late.',
      answer: 'Trebuie să lucrez până târziu.',
    },
    {
      id: 'life-work-06',
      prompt: "I'm working from home today.",
      answer: 'Azi lucrez de acasă.',
    },
    {
      id: 'life-work-07',
      prompt: 'Can you pick him up today?',
      answer: 'Poți să-l iei tu azi?',
    },
    {
      id: 'life-work-08',
      prompt: "I'm on my way.",
      answer: 'Sunt pe drum.',
    },
    {
      id: 'life-work-09',
      prompt: "I'm going to be late.",
      answer: 'O să întârzii.',
    },
    {
      id: 'life-work-10',
      prompt: "I'll be home by six.",
      answer: 'Ajung acasă până la șase.',
    },
    {
      id: 'life-work-11',
      prompt: 'I need a break.',
      answer: 'Am nevoie de o pauză.',
    },
    {
      id: 'life-work-12',
      prompt: 'Finally, the weekend!',
      answer: 'În sfârșit, weekend!',
    },
    {
      id: 'life-work-13',
      prompt: "I've got lots of things to do.",
      answer: 'Am multe de făcut.',
    },
  ],
  conversationPrompts: [
    'Ask "Cum a fost la serviciu?" every day this week, and give a real answer back.',
    'Send your "on my way" and "running late" messages in Romanian.',
  ],
}
