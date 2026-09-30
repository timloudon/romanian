import type { LifeTopic } from '../types'

export const aroundTheHouse: LifeTopic = {
  id: 'life-house',
  emoji: '🏠',
  title: 'Around the house',
  summary: 'Chores, lost keys, toys everywhere, and who is doing the washing-up.',
  intro: 'The running negotiation of a shared home. Short, repetitive, and said every single day.',
  drills: [
    {
      id: 'life-house-01',
      prompt: "Who's doing the washing-up?",
      answer: 'Cine spală vasele?',
      teachingNote: '"A spăla vasele" — literally "to wash the dishes."',
    },
    {
      id: 'life-house-02',
      prompt: "I'll do it.",
      answer: 'Fac eu.',
    },
    {
      id: 'life-house-03',
      prompt: 'Can you put the washing on?',
      answer: 'Poți să pui rufele la spălat?',
    },
    {
      id: 'life-house-04',
      prompt: 'Can you take the rubbish out?',
      answer: 'Poți să duci gunoiul?',
    },
    {
      id: 'life-house-05',
      prompt: 'The toys are everywhere.',
      answer: 'Jucăriile sunt peste tot.',
    },
    {
      id: 'life-house-06',
      prompt: "He's making a mess.",
      answer: 'Face mizerie.',
    },
    {
      id: 'life-house-07',
      prompt: "Let's tidy up.",
      answer: 'Hai să facem ordine.',
      teachingNote: '"A face ordine" — literally "to make order" — is "to tidy up."',
    },
    {
      id: 'life-house-08',
      prompt: 'Where are the keys?',
      answer: 'Unde sunt cheile?',
    },
    {
      id: 'life-house-09',
      prompt: "I can't find my phone.",
      answer: 'Nu-mi găsesc telefonul.',
      teachingNote: 'Literally "I don\'t find the phone to me" — "nu-mi" makes it *my* phone.',
    },
    {
      id: 'life-house-10',
      prompt: 'Thanks for doing that.',
      answer: 'Mersi că ai făcut asta.',
    },
    {
      id: 'life-house-11',
      prompt: 'Can you turn off the light?',
      answer: 'Poți să stingi lumina?',
    },
    {
      id: 'life-house-12',
      prompt: "I'm going to bed.",
      answer: 'Mă duc la culcare.',
    },
    {
      id: 'life-house-13',
      prompt: 'Did you take the keys?',
      answer: 'Ai luat cheile?',
    },
    {
      id: 'life-house-14',
      prompt: 'Can you hoover?',
      answer: 'Poți să dai cu aspiratorul?',
    },
    {
      id: 'life-house-15',
      prompt: "The heating isn't working.",
      answer: 'Nu merge căldura.',
    },
    {
      id: 'life-house-16',
      prompt: "Close the door, it's cold.",
      answer: 'Închide ușa, e frig.',
    },
    {
      id: 'life-house-17',
      prompt: "There's someone at the door.",
      answer: 'Sună cineva la ușă.',
    },
    {
      id: 'life-house-18',
      prompt: "I'll hang the washing out.",
      answer: 'Întind eu rufele.',
    },
    {
      id: 'life-house-19',
      prompt: 'Where did you put it?',
      answer: 'Unde l-ai pus?',
      teachingNote: "\"L\" is \"it\" for a masculine or neuter thing (the phone, the key-ring); for a feminine one (the bag) it's \"Unde ai pus-o?\"",
    },
  ],
  conversationPrompts: [
    'Divide up this week\'s chores with your partner in Romanian.',
    'Whenever you\'re looking for something, ask in Romanian first: "Unde sunt cheile?"',
  ],
}
