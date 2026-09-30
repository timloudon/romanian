import type { LifeTopic } from '../types'

export const mealtimes: LifeTopic = {
  id: 'life-mealtimes',
  emoji: '🍲',
  title: 'Mealtimes & cooking',
  summary: "What's for dinner, who's cooking, and feeding the little one.",
  intro: 'Three meals a day is three chances a day to use this — the most repetition any topic gets.',
  drills: [
    {
      id: 'life-mealtimes-01',
      prompt: 'What shall we eat tonight?',
      answer: 'Ce mâncăm diseară?',
    },
    {
      id: 'life-mealtimes-02',
      prompt: "I'll cook.",
      answer: 'Gătesc eu.',
      teachingNote: 'Putting "eu" after the verb is how you say "*I\'ll* do it" — "fac eu," "gătesc eu."',
    },
    {
      id: 'life-mealtimes-03',
      prompt: 'Is he hungry?',
      answer: 'I-e foame?',
      acceptedAlternates: ['Îi e foame?', 'Îi este foame?'],
      teachingNote: '"Mi-e foame" for "to him" — "îi" plus "e" fuses to "i-e."',
    },
    {
      id: 'life-mealtimes-04',
      prompt: 'He wants more.',
      answer: 'Mai vrea.',
    },
    {
      id: 'life-mealtimes-05',
      prompt: "He's eating by himself!",
      answer: 'Mănâncă singur!',
      teachingNote: '"Singur" is "by himself" — you\'d say "singură" for a girl.',
    },
    {
      id: 'life-mealtimes-06',
      prompt: "Dinner's ready!",
      answer: 'E gata masa!',
    },
    {
      id: 'life-mealtimes-07',
      prompt: 'Will you pass me the salt?',
      answer: 'Îmi dai sarea?',
    },
    {
      id: 'life-mealtimes-08',
      prompt: 'Do you want some soup?',
      answer: 'Vrei niște supă?',
    },
    {
      id: 'life-mealtimes-09',
      prompt: 'It smells delicious.',
      answer: 'Miroase delicios.',
    },
    {
      id: 'life-mealtimes-10',
      prompt: "We're out of milk.",
      answer: 'Nu mai avem lapte.',
      teachingNote: '"Nu mai" is "not any more" — the same "mai" as in "mai vreau."',
    },
    {
      id: 'life-mealtimes-11',
      prompt: 'We need to go shopping.',
      answer: 'Trebuie să mergem la cumpărături.',
    },
    {
      id: 'life-mealtimes-12',
      prompt: 'Thanks, it was delicious.',
      answer: 'Mulțumesc, a fost delicios.',
    },
    {
      id: 'life-mealtimes-13',
      prompt: "Anything's fine.",
      answer: 'Orice e bine.',
    },
  ],
  conversationPrompts: [
    'Decide what to eat in Romanian every evening this week — start with "Ce mâncăm diseară?" and settle it without switching to English.',
    'Do one whole mealtime with him in Romanian: "Mai vrea?", "Mănâncă singur!"',
    'Write this week\'s shopping list in Romanian.',
  ],
}
