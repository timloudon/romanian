import type { LifeTopic } from '../types'

export const plans: LifeTopic = {
  id: 'life-plans',
  emoji: '🗓️',
  title: 'Plans & arrangements',
  summary: 'Working out the week: who, when, what time, and "maybe another time."',
  intro:
    'Most of a shared life is logistics. These are the phrases for sorting it out — quick, practical, and needed daily.',
  drills: [
    {
      id: 'life-plans-01',
      prompt: 'What are we doing tomorrow?',
      answer: 'Ce facem mâine?',
    },
    {
      id: 'life-plans-02',
      prompt: 'Have you got time on Saturday?',
      answer: 'Ai timp sâmbătă?',
    },
    {
      id: 'life-plans-03',
      prompt: 'What time shall we leave?',
      answer: 'La ce oră plecăm?',
    },
    {
      id: 'life-plans-04',
      prompt: "Let's meet at the café.",
      answer: 'Ne vedem la cafenea.',
    },
    {
      id: 'life-plans-05',
      prompt: "I'll be ready in five minutes.",
      answer: 'Sunt gata în cinci minute.',
    },
    {
      id: 'life-plans-06',
      prompt: 'It depends on the weather.',
      answer: 'Depinde de vreme.',
    },
    {
      id: 'life-plans-07',
      prompt: 'Maybe next week.',
      answer: 'Poate săptămâna viitoare.',
    },
    {
      id: 'life-plans-08',
      prompt: "I've already got plans.",
      answer: 'Am deja planuri.',
    },
    {
      id: 'life-plans-09',
      prompt: "Let's leave it for another time.",
      answer: 'Hai s-o lăsăm pe altă dată.',
    },
    {
      id: 'life-plans-10',
      prompt: 'Does that suit you?',
      answer: 'Te aranjează?',
      teachingNote: 'Literally "does it arrange you?" — the everyday way to check a plan works for someone.',
    },
    {
      id: 'life-plans-11',
      prompt: "Did you tell them we're coming?",
      answer: 'Le-ai zis că venim?',
    },
    {
      id: 'life-plans-12',
      prompt: 'I completely forgot.',
      answer: 'Am uitat complet.',
    },
    {
      id: 'life-plans-13',
      prompt: 'Remind me later.',
      answer: 'Adu-mi aminte mai târziu.',
    },
  ],
  conversationPrompts: [
    "Plan this weekend together in Romanian — what, when, what time you'll leave.",
    'Each evening, ask "Ce facem mâine?" and talk tomorrow through in Romanian.',
  ],
}
