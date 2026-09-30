import type { LifeTopic } from '../types'

export const bigFeelings: LifeTopic = {
  id: 'life-tantrums',
  emoji: '🌋',
  title: 'Big feelings & tantrums',
  summary: 'Tantrums, calming down, choices, and \'not now\'.',
  intro:
    'Two-year-old feelings arrive fast and loud. Short, calm phrases — the same ones every time — are what help.',
  drills: [
    {
      id: 'life-tantrums-01',
      prompt: 'I know you\'re cross.',
      answer: 'Știu că ești supărat.',
    },
    {
      id: 'life-tantrums-02',
      prompt: 'It\'s OK to be sad.',
      answer: 'E în regulă să fii trist.',
    },
    {
      id: 'life-tantrums-03',
      prompt: 'Take a deep breath.',
      answer: 'Respiră adânc.',
    },
    {
      id: 'life-tantrums-04',
      prompt: 'Come here, let me give you a cuddle.',
      answer: 'Vino să te iau în brațe.',
      teachingNote: '"A lua în brațe" — to take in your arms — is to cuddle or pick up.',
    },
    {
      id: 'life-tantrums-05',
      prompt: 'We don\'t hit.',
      answer: 'Nu lovim.',
      teachingNote: 'Parents often use "we": nu lovim, nu aruncăm.',
    },
    {
      id: 'life-tantrums-06',
      prompt: 'We don\'t throw food.',
      answer: 'Nu aruncăm mâncarea.',
    },
    {
      id: 'life-tantrums-07',
      prompt: 'Tell me what you want.',
      answer: 'Spune-mi ce vrei.',
    },
    {
      id: 'life-tantrums-08',
      prompt: 'Not now, later.',
      answer: 'Nu acum, mai târziu.',
    },
    {
      id: 'life-tantrums-09',
      prompt: 'First shoes, then the park.',
      answer: 'Întâi pantofii, apoi parcul.',
    },
    {
      id: 'life-tantrums-10',
      prompt: 'Do you want the red one or the blue one?',
      answer: 'Îl vrei pe cel roșu sau pe cel albastru?',
      acceptedAlternates: ['Vrei pe cel roșu sau pe cel albastru?'],
      teachingNote: 'The heads-up îl comes along whenever pe points at the thing you want.',
    },
    {
      id: 'life-tantrums-11',
      prompt: 'That\'s enough now.',
      answer: 'Gata acum.',
    },
    {
      id: 'life-tantrums-12',
      prompt: 'I\'m here.',
      answer: 'Sunt aici.',
    },
    {
      id: 'life-tantrums-13',
      prompt: 'It\'s hard, I know.',
      answer: 'E greu, știu.',
    },
    {
      id: 'life-tantrums-14',
      prompt: 'You can have it after dinner.',
      answer: 'Îl primești după masă.',
    },
  ],
  conversationPrompts: [
    'Agree with your partner on three calm-down phrases, and both use them in Romanian all week.',
    'Offer him choices in Romanian: "Vrei… sau…?"',
  ],
}
