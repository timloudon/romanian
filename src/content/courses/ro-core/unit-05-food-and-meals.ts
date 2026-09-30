import type { Unit } from '../../types'

export const unit05: Unit = {
  id: 'u05',
  stage: 'Foundations',
  title: 'Food & meals',
  lessons: [
    {
      id: 'u05-l01',
      title: 'Hungry, thirsty, at the table',
      intro:
        'Romanian doesn\'t say "I am hungry" — it says something closer to "hunger is happening to me." Odd at first, but it\'s a fixed little shape that also covers thirst, cold, fear, and more, so it\'s worth getting comfortable with now.',
      drills: [
        {
          id: 'u05-l01-d01',
          prompt: "I'm hungry.",
          answer: 'Mi-e foame.',
          teachingNote: 'Literally "to-me is hunger." "Mi-e" plus a feeling-word is a whole pattern — you\'ll reuse this shape for thirst, cold, and more.',
          introduces: [{ lemma: 'foame', pos: 'noun', freqRank: 907 }],
        },
        {
          id: 'u05-l01-d02',
          prompt: "I'm thirsty.",
          answer: 'Mi-e sete.',
          teachingNote: 'Exactly the same pattern as "mi-e foame" — just swap the feeling-word.',
          introduces: [{ lemma: 'sete', pos: 'noun', freqRank: 4204 }],
        },
        {
          id: 'u05-l01-d03',
          prompt: 'This is very tasty.',
          answer: 'Asta e foarte gustoasă.',
          introduces: [{ lemma: 'gustos', pos: 'adj' }],
        },
        {
          id: 'u05-l01-d04',
          prompt: 'Did you cook this?',
          answer: 'Ai gătit asta?',
          introduces: [{ lemma: 'găti', pos: 'verb' }],
        },
        {
          id: 'u05-l01-d05',
          prompt: 'I want more.',
          answer: 'Mai vreau.',
          teachingNote: '"Mai" tucked in front of a verb means "some more/again" — "mai vreau" is what you say to get a second helping.',
        },
      ],
    },
    {
      id: 'u05-l02',
      title: 'Offering and accepting',
      intro: 'The small exchange that happens at every Romanian table — offered something, accepting or politely declining it.',
      drills: [
        {
          id: 'u05-l02-d01',
          prompt: 'Do you want coffee?',
          answer: 'Vrei o cafea?',
          acceptedAlternates: ['Vrei cafea'],
        },
        {
          id: 'u05-l02-d02',
          prompt: 'Yes, please.',
          answer: 'Da, te rog.',
          teachingNote: '"Te rog" (literally "I ask/beg you") is your all-purpose "please" — the same phrase whether you\'re accepting food or asking a favor.',
          introduces: [{ lemma: 'ruga', pos: 'verb', freqRank: 102 }],
        },
        {
          id: 'u05-l02-d03',
          prompt: 'No thank you, I already ate.',
          answer: 'Nu, mulțumesc, am mâncat deja.',
          introduces: [{ lemma: 'deja', pos: 'adv', freqRank: 222 }],
        },
        {
          id: 'u05-l02-d04',
          prompt: 'It smells good.',
          answer: 'Miroase bine.',
          introduces: [{ lemma: 'mirosi', pos: 'verb', freqRank: 1590 }],
        },
        {
          id: 'u05-l02-d05',
          prompt: 'Thank you for the meal.',
          answer: 'Mulțumesc pentru masă.',
          introduces: [{ lemma: 'pentru', pos: 'prep', freqRank: 18 }],
        },
      ],
    },
  ],
}
