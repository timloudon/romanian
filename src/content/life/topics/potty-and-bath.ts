import type { LifeTopic } from '../types'

export const pottyAndBath: LifeTopic = {
  id: 'life-potty',
  emoji: '🛁',
  title: 'Potty & bath time',
  summary: 'Potty training, nappies, bath time and drying off.',
  intro:
    'The daily routines of a two-year-old — said a hundred times a week, so they stick fast.',
  drills: [
    {
      id: 'life-potty-01',
      prompt: 'Do you need a wee?',
      answer: 'Vrei să faci pipi?',
      teachingNote: '"Pipi" and "caca" are the everyday toddler words.',
    },
    {
      id: 'life-potty-02',
      prompt: 'Do you need a poo?',
      answer: 'Vrei să faci caca?',
    },
    {
      id: 'life-potty-03',
      prompt: 'Let\'s go to the potty.',
      answer: 'Hai la oliță.',
    },
    {
      id: 'life-potty-04',
      prompt: 'Sit on the potty.',
      answer: 'Stai pe oliță.',
    },
    {
      id: 'life-potty-05',
      prompt: 'Well done, you did it in the potty!',
      answer: 'Bravo, ai făcut la oliță!',
    },
    {
      id: 'life-potty-06',
      prompt: 'He\'s wet.',
      answer: 'E ud.',
    },
    {
      id: 'life-potty-07',
      prompt: 'Nappy change!',
      answer: 'Schimbăm scutecul!',
    },
    {
      id: 'life-potty-08',
      prompt: 'Flush the toilet.',
      answer: 'Trage apa.',
      teachingNote: 'Literally "pull the water".',
    },
    {
      id: 'life-potty-09',
      prompt: 'The water\'s too hot.',
      answer: 'Apa e prea fierbinte.',
    },
    {
      id: 'life-potty-10',
      prompt: 'Let\'s wash your hair.',
      answer: 'Hai să te spălăm pe cap.',
      teachingNote: 'Romanians wash "on the head" — pe cap.',
    },
    {
      id: 'life-potty-11',
      prompt: 'Close your eyes.',
      answer: 'Închide ochii.',
    },
    {
      id: 'life-potty-12',
      prompt: 'Out of the bath!',
      answer: 'Afară din cadă!',
    },
    {
      id: 'life-potty-13',
      prompt: 'Let\'s dry you off.',
      answer: 'Hai să te ștergem.',
    },
    {
      id: 'life-potty-14',
      prompt: 'Let\'s brush your teeth.',
      answer: 'Hai să ne spălăm pe dinți.',
    },
  ],
  conversationPrompts: [
    'Do bath time entirely in Romanian this week — every step, out loud.',
    'Use the same potty words your partner uses, so he hears the same ones from both of you.',
  ],
}
