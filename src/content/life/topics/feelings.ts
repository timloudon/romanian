import type { LifeTopic } from '../types'

export const feelings: LifeTopic = {
  id: 'life-feelings',
  emoji: '🌦️',
  title: 'Feelings',
  summary: 'Cold, scared, fed up, worried, not in the mood — his feelings and yours.',
  intro:
    'Saying how you actually feel, in the moment. Many of these use the "mi-e ___" shape — "to me it\'s cold" — which never changes for who is speaking.',
  drills: [
    {
      id: 'life-feelings-01',
      prompt: "I'm cold.",
      answer: 'Mi-e frig.',
      teachingNote: 'Literally "to me it\'s cold" — the same shape as "mi-e foame" and "mi-e dor de tine."',
    },
    {
      id: 'life-feelings-02',
      prompt: "I'm hot.",
      answer: 'Mi-e cald.',
    },
    {
      id: 'life-feelings-03',
      prompt: "I'm scared.",
      answer: 'Mi-e frică.',
    },
    {
      id: 'life-feelings-04',
      prompt: "I'm embarrassed.",
      answer: 'Mi-e rușine.',
    },
    {
      id: 'life-feelings-05',
      prompt: "He's scared of the dog.",
      answer: 'Îi e frică de câine.',
      teachingNote: '"Mi-e" (to me) becomes "îi e" (to him).',
    },
    {
      id: 'life-feelings-06',
      prompt: "(to him) What's the matter, sweetheart?",
      answer: 'Ce-ai pățit, puiule?',
    },
    {
      id: 'life-feelings-07',
      prompt: "He's in a bad mood.",
      answer: 'E prost dispus.',
    },
    {
      id: 'life-feelings-08',
      prompt: "I'm worried about him.",
      answer: 'Îmi fac griji pentru el.',
    },
    {
      id: 'life-feelings-09',
      prompt: "Don't worry.",
      answer: 'Nu-ți face griji.',
      acceptedAlternates: ['Fii fără grijă'],
    },
    {
      id: 'life-feelings-10',
      prompt: "I'm bored.",
      answer: 'Mă plictisesc.',
    },
    {
      id: 'life-feelings-11',
      prompt: "I'm fed up.",
      answer: 'M-am săturat.',
      teachingNote: 'Literally "I\'ve had my fill" — also what you say after a big meal.',
    },
    {
      id: 'life-feelings-12',
      prompt: "I don't feel like it.",
      answer: 'N-am chef.',
      teachingNote: '"Chef" is the mood for something: "am chef de o cafea" — I fancy a coffee.',
    },
    {
      id: 'life-feelings-13',
      prompt: 'I feel like going out.',
      answer: 'Am chef să ies în oraș.',
    },
    {
      id: 'life-feelings-14',
      prompt: 'That annoys me.',
      answer: 'Asta mă enervează.',
    },
  ],
  conversationPrompts: [
    'Say how you feel in Romanian whenever it changes this week — cold, tired, fed up, in the mood for something.',
    'When he\'s upset, ask him "Ce-ai pățit?" and name the feeling for him in Romanian.',
  ],
}
