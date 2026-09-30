import type { LifeTopic } from '../types'

export const familyHome: LifeTopic = {
  id: 'life-family-home',
  emoji: '🏡',
  title: 'At the family home',
  summary: 'Arriving, the table, the garden, and saying goodbye in Romania.',
  intro:
    'The visit itself: the welcome, the endless food, the neighbours dropping by — and the goodbyes. Drill this one in the weeks before you fly.',
  drills: [
    {
      id: 'life-family-home-01',
      prompt: "It's so good to see you all!",
      answer: 'Ce bine că ne vedem!',
      teachingNote: 'Literally "how good that we see each other."',
    },
    {
      id: 'life-family-home-02',
      prompt: 'How was the journey?',
      answer: 'Cum a fost drumul?',
    },
    {
      id: 'life-family-home-03',
      prompt: 'Enjoy your meal!',
      answer: 'Poftă bună!',
    },
    {
      id: 'life-family-home-04',
      prompt: 'Cheers!',
      answer: 'Noroc!',
      teachingNote: 'Literally "luck."',
    },
    {
      id: 'life-family-home-05',
      prompt: 'The food is delicious.',
      answer: 'Mâncarea e delicioasă.',
    },
    {
      id: 'life-family-home-06',
      prompt: "(at the table) I can't eat another thing!",
      answer: 'Nu mai pot!',
      teachingNote: 'Literally "I can\'t any more" — you\'ll need it at a Romanian table.',
    },
    {
      id: 'life-family-home-07',
      prompt: 'Can I help with anything?',
      answer: 'Pot să ajut cu ceva?',
    },
    {
      id: 'life-family-home-08',
      prompt: 'The garden is really beautiful.',
      answer: 'Grădina e foarte frumoasă.',
    },
    {
      id: 'life-family-home-09',
      prompt: 'We slept really well.',
      answer: 'Am dormit foarte bine.',
    },
    {
      id: 'life-family-home-10',
      prompt: 'The neighbours came over.',
      answer: 'Au venit vecinii.',
    },
    {
      id: 'life-family-home-11',
      prompt: 'Thank you for everything.',
      answer: 'Mulțumim pentru tot.',
      teachingNote: '"Mulțumim" — "we thank" — speaking for all of you.',
    },
    {
      id: 'life-family-home-12',
      prompt: "We're going to miss you.",
      answer: 'O să ne fie dor de voi.',
    },
    {
      id: 'life-family-home-13',
      prompt: "We'll come back next year.",
      answer: 'Venim din nou la anul.',
    },
    {
      id: 'life-family-home-14',
      prompt: "We're all here!",
      answer: 'Suntem toți aici!',
    },
    {
      id: 'life-family-home-15',
      prompt: '(politely, to your partner\'s parents) Did you sleep well?',
      answer: 'Ați dormit bine?',
      teachingNote: '"Ați" — the polite "you" form, for your partner\'s parents or anyone older.',
    },
  ],
  conversationPrompts: [
    'In the weeks before the trip, drill the table phrases until "Poftă bună," "Noroc!" and "Nu mai pot!" come out without thinking.',
    'Thank the hosts in Romanian at the end of the first meal.',
  ],
}
