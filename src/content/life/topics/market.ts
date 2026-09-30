import type { LifeTopic } from '../types'

export const market: LifeTopic = {
  id: 'life-market',
  emoji: '🛒',
  title: 'At the market & shops',
  summary: 'Prices, kilos, paying, and the polite forms for strangers.',
  intro:
    'Shopping in Romania — the piață and the corner shop. With strangers, Romanian switches to the polite "voi" form: "aveți," "păstrați."',
  drills: [
    {
      id: 'life-market-01',
      prompt: 'Hello! (walking into a shop)',
      answer: 'Bună ziua!',
      teachingNote: '"Bună ziua" — "good day" — is the polite greeting with strangers from morning to evening.',
    },
    {
      id: 'life-market-02',
      prompt: 'How much is a kilo of tomatoes?',
      answer: 'Cât costă un kilogram de roșii?',
      acceptedAlternates: ['Cât costă un kil de roșii?'],
    },
    {
      id: 'life-market-03',
      prompt: "I'd like half a kilo.",
      answer: 'Aș vrea jumătate de kilogram.',
      acceptedAlternates: ['Aș vrea jumătate de kil.'],
    },
    {
      id: 'life-market-04',
      prompt: 'Are they fresh?',
      answer: 'Sunt proaspete?',
    },
    {
      id: 'life-market-05',
      prompt: "It's too expensive.",
      answer: 'E prea scump.',
    },
    {
      id: 'life-market-06',
      prompt: "I'm just looking.",
      answer: 'Doar mă uit.',
    },
    {
      id: 'life-market-07',
      prompt: 'Where can I find bread?',
      answer: 'Unde găsesc pâine?',
    },
    {
      id: 'life-market-08',
      prompt: 'Do you have a bag?',
      answer: 'Aveți o pungă?',
      teachingNote: '"Aveți" — the polite "you have" for someone you don\'t know.',
    },
    {
      id: 'life-market-09',
      prompt: "That's all, thanks.",
      answer: 'Asta e tot, mulțumesc.',
    },
    {
      id: 'life-market-10',
      prompt: 'Can I pay by card?',
      answer: 'Pot să plătesc cu cardul?',
    },
    {
      id: 'life-market-11',
      prompt: 'Do you have change?',
      answer: 'Aveți mărunt?',
    },
    {
      id: 'life-market-12',
      prompt: 'Keep the change.',
      answer: 'Păstrați restul.',
    },
    {
      id: 'life-market-13',
      prompt: 'Just one, please.',
      answer: 'Doar unul, vă rog.',
      teachingNote: '"Vă rog" is the polite "please" for strangers — "te rog" is for people you know.',
    },
    {
      id: 'life-market-14',
      prompt: 'Can I taste it?',
      answer: 'Pot să gust?',
    },
    {
      id: 'life-market-15',
      prompt: 'Are they Romanian?',
      answer: 'Sunt românești?',
      teachingNote: 'What people really ask at the market about tomatoes, cherries, peppers — home-grown beats imported.',
    },
    {
      id: 'life-market-16',
      prompt: 'A loaf of bread, please.',
      answer: 'O pâine, vă rog.',
    },
    {
      id: 'life-market-17',
      prompt: 'Do you have any cherries?',
      answer: 'Aveți cireșe?',
    },
    {
      id: 'life-market-18',
      prompt: 'Two hundred grams of cheese, please.',
      answer: 'Două sute de grame de brânză, vă rog.',
    },
    {
      id: 'life-market-19',
      prompt: "Where's the checkout?",
      answer: 'Unde e casa?',
      teachingNote: '"Casa" is both "house" and "checkout" — context makes it obvious.',
    },
    {
      id: 'life-market-20',
      prompt: 'Could I have the receipt, please?',
      answer: 'Îmi dați bonul, vă rog?',
    },
  ],
  conversationPrompts: [
    'On the next trip, do the bread-and-coffee run yourself, in Romanian.',
    'Practise at home first: have your partner play the stallholder.',
  ],
}
