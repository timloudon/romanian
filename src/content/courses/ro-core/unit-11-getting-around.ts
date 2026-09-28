import type { Unit } from '../../types'

export const unit11: Unit = {
  id: 'u11',
  title: 'Getting around & practical',
  lessons: [
    {
      id: 'u11-l01',
      title: 'Directions and transport',
      intro: 'Finding your way and asking for it — mostly new vocabulary sitting on grammar you already have.',
      drills: [
        {
          id: 'u11-l01-d01',
          prompt: 'Where is the station?',
          answer: 'Unde e gara?',
          introduces: [{ lemma: 'unde', pos: 'adv', freqRank: 65 }],
        },
        {
          id: 'u11-l01-d02',
          prompt: 'How do I get there?',
          answer: 'Cum ajung acolo?',
          introduces: [{ lemma: 'ajunge', pos: 'verb', freqRank: 783 }, { lemma: 'acolo', pos: 'adv' }],
        },
        {
          id: 'u11-l01-d03',
          prompt: 'I need to turn left.',
          answer: 'Trebuie să merg la stânga.',
        },
        {
          id: 'u11-l01-d04',
          prompt: 'Is it far?',
          answer: 'E departe?',
          introduces: [{ lemma: 'departe', pos: 'adv', freqRank: 299 }],
        },
        {
          id: 'u11-l01-d05',
          prompt: "It's close.",
          answer: 'E aproape.',
          introduces: [{ lemma: 'aproape', pos: 'adv', freqRank: 234 }],
        },
      ],
    },
    {
      id: 'u11-l02',
      title: 'Practical needs',
      intro: 'Asking for what you need when you\'re out and about.',
      drills: [
        {
          id: 'u11-l02-d01',
          prompt: 'How much does it cost?',
          answer: 'Cât costă?',
          introduces: [{ lemma: 'cât', pos: 'adv', freqRank: 780 }, { lemma: 'costa', pos: 'verb', freqRank: 2569 }],
        },
        {
          id: 'u11-l02-d02',
          prompt: 'Where can I buy tickets?',
          answer: 'De unde pot să cumpăr bilete?',
        },
        {
          id: 'u11-l02-d03',
          prompt: 'I need help.',
          answer: 'Am nevoie de ajutor.',
          teachingNote: '"Am nevoie de" is a fixed shape for "I need" — literally "I have need of."',
          introduces: [{ lemma: 'nevoie', pos: 'noun', freqRank: 95 }],
        },
        {
          id: 'u11-l02-d04',
          prompt: 'Do you have a map?',
          answer: 'Ai o hartă?',
          introduces: [{ lemma: 'hartă', pos: 'noun', freqRank: 3353 }],
        },
        {
          id: 'u11-l02-d05',
          prompt: "I'm lost.",
          answer: 'M-am rătăcit.',
          teachingNote: 'Reflexive plus past tense, both fusing exactly the way you\'d now expect.',
        },
      ],
    },
  ],
}
