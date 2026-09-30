import type { LifeTopic } from '../types'

// Drill ids keep their original "u12-..." form from when this lived in the course as Unit 12 —
// spaced-repetition progress is keyed off them, so renaming would silently reset it.
export const justUs: LifeTopic = {
  id: 'life-just-us',
  emoji: '💞',
  title: 'Just us',
  summary: 'Affection, checking in on each other, deciding things together, small repairs.',
  intro:
    'Not talking about family — talking to the person across from you. Small phrases, said often.',
  drills: [
    {
      id: 'u12-l01-d01',
      prompt: 'I miss you.',
      answer: 'Mi-e dor de tine.',
      teachingNote: 'Same "mi-e ___" shape as "mi-e foame" — here the feeling is "dor" (longing), pointed "de tine" (at you).',
    },
    {
      id: 'u12-l01-d02',
      prompt: 'I love you.',
      answer: 'Te iubesc.',
    },
    {
      id: 'u12-l01-d03',
      prompt: 'How was your day?',
      answer: 'Cum a fost ziua ta?',
    },
    {
      id: 'u12-l01-d04',
      prompt: 'What are you thinking about?',
      answer: 'La ce te gândești?',
      teachingNote: '"A se gândi" (to think) is reflexive, same "te" you already have — "la ce" is just "at/about what."',
    },
    {
      id: 'u12-l01-d05',
      prompt: "I'm glad you're here.",
      answer: 'Mă bucur că ești aici.',
    },
    {
      id: 'u12-l02-d01',
      prompt: 'What do you think about this?',
      answer: 'Ce zici de asta?',
      teachingNote: '"Ce zici" (what do you say) is the everyday, casual way to ask someone\'s opinion.',
    },
    {
      id: 'u12-l02-d02',
      prompt: "Let's decide together.",
      answer: 'Hai să decidem împreună.',
    },
    {
      id: 'u12-l02-d03',
      prompt: "I'm sorry.",
      answer: 'Îmi pare rău.',
      teachingNote: 'Literally "it seems bad to me" — a fixed phrase, not something you build piece by piece.',
    },
    {
      id: 'u12-l02-d04',
      prompt: "It's nothing.",
      answer: 'Nu-i nimic.',
      teachingNote: 'Your go-to reassurance — "nu" plus "îi" fuses to "nu-i."',
    },
    {
      id: 'u12-l02-d05',
      prompt: 'Good night, my love.',
      answer: 'Noapte bună, iubire.',
    },
    {
      id: 'life-just-us-01',
      prompt: 'You look lovely.',
      answer: 'Arăți foarte bine.',
    },
    {
      id: 'life-just-us-02',
      prompt: 'Shall we watch a film tonight?',
      answer: 'Ne uităm la un film diseară?',
    },
    {
      id: 'life-just-us-03',
      prompt: 'Thank you for everything you do.',
      answer: 'Mulțumesc pentru tot ce faci.',
    },
    {
      id: 'life-just-us-04',
      prompt: "Let's go out somewhere, just us.",
      answer: 'Hai să ieșim undeva, doar noi.',
    },
    {
      id: 'life-just-us-05',
      prompt: 'You make me laugh.',
      answer: 'Mă faci să râd.',
    },
    {
      id: 'life-just-us-06',
      prompt: 'What would you like to do?',
      answer: 'Ce ți-ar plăcea să faci?',
    },
    {
      id: 'life-just-us-07',
      prompt: "Let's have an early night.",
      answer: 'Hai să ne culcăm devreme.',
    },
  ],
  conversationPrompts: [
    'Say "Mi-e dor de tine" the next time you\'re apart — a message counts.',
    'Ask "Cum a fost ziua ta?" every evening this week, and listen to the answer in Romanian.',
    'Settle one small decision entirely in Romanian: "Ce zici de asta?"',
  ],
}
