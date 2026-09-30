import type { LifeTopic } from '../types'

export const guests: LifeTopic = {
  id: 'life-guests',
  emoji: '🏡',
  title: 'Neighbours & guests',
  summary: 'Welcoming visitors, hosting, and being a good neighbour.',
  intro:
    'Being a good host and a friendly neighbour — short, warm phrases you\'ll use on every visit.',
  drills: [
    {
      id: 'life-guests-01',
      prompt: 'Come in, come in!',
      answer: 'Intrați, intrați!',
    },
    {
      id: 'life-guests-02',
      prompt: 'Make yourselves comfortable.',
      answer: 'Faceți-vă comozi.',
    },
    {
      id: 'life-guests-03',
      prompt: 'What can I get you?',
      answer: 'Ce vă pot oferi?',
    },
    {
      id: 'life-guests-04',
      prompt: 'Coffee or tea?',
      answer: 'Cafea sau ceai?',
    },
    {
      id: 'life-guests-05',
      prompt: 'Thank you for coming.',
      answer: 'Mulțumim că ați venit.',
    },
    {
      id: 'life-guests-06',
      prompt: 'Drop by any time.',
      answer: 'Treceți oricând pe la noi.',
    },
    {
      id: 'life-guests-07',
      prompt: 'Come again soon!',
      answer: 'Să mai treceți pe la noi!',
    },
    {
      id: 'life-guests-08',
      prompt: 'How\'s the family?',
      answer: 'Ce face familia?',
    },
    {
      id: 'life-guests-09',
      prompt: 'Nice to meet you — we\'re the neighbours.',
      answer: 'Îmi pare bine, suntem vecinii.',
    },
    {
      id: 'life-guests-10',
      prompt: 'We\'re new here.',
      answer: 'Suntem noi aici.',
    },
    {
      id: 'life-guests-11',
      prompt: 'Sorry about the noise.',
      answer: 'Scuze pentru gălăgie.',
    },
    {
      id: 'life-guests-12',
      prompt: 'Could you keep an eye on the house?',
      answer: 'Ați putea să aveți grijă de casă?',
    },
    {
      id: 'life-guests-13',
      prompt: 'We brought you some cake.',
      answer: 'V-am adus niște prăjitură.',
    },
  ],
  conversationPrompts: [
    'Host someone this week and do the welcome and the goodbye in Romanian.',
    'Greet a Romanian-speaking neighbour or shopkeeper properly — bună ziua, how are you, have a good day.',
  ],
}
