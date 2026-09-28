import type { LifeTopic } from '../types'

export const bedtimeAndMornings: LifeTopic = {
  id: 'life-bedtime',
  emoji: '🌙',
  title: 'Bedtime & mornings',
  summary: 'Bath, story, sleep, the night shift — and the first coffee.',
  intro:
    'The two ends of every day with a little one. Short phrases you\'ll say half-asleep, which is exactly why they stick.',
  drills: [
    {
      id: 'life-bedtime-01',
      prompt: "It's bath time.",
      answer: 'E ora de baie.',
    },
    {
      id: 'life-bedtime-02',
      prompt: "I'll read him a story.",
      answer: 'Îi citesc o poveste.',
    },
    {
      id: 'life-bedtime-03',
      prompt: '(to him) Good night, sweetheart.',
      answer: 'Noapte bună, puiule.',
      teachingNote: '"Puiule" (literally "little chick") is the classic Romanian term of endearment for a child.',
    },
    {
      id: 'life-bedtime-04',
      prompt: 'Is he asleep yet?',
      answer: 'A adormit?',
      teachingNote: '"A adormi" is to fall asleep; "a dormi" is to be asleep.',
    },
    {
      id: 'life-bedtime-05',
      prompt: "He's sleeping.",
      answer: 'Doarme.',
    },
    {
      id: 'life-bedtime-06',
      prompt: 'He woke up three times last night.',
      answer: 'S-a trezit de trei ori azi-noapte.',
      teachingNote: '"Azi-noapte" — literally "today-night" — is the night just gone.',
    },
    {
      id: 'life-bedtime-07',
      prompt: "It's your turn.",
      answer: 'E rândul tău.',
    },
    {
      id: 'life-bedtime-08',
      prompt: 'Can you go to him?',
      answer: 'Poți să mergi tu la el?',
    },
    {
      id: 'life-bedtime-09',
      prompt: "He's woken up.",
      answer: 'S-a trezit.',
    },
    {
      id: 'life-bedtime-10',
      prompt: 'Good morning!',
      answer: 'Bună dimineața!',
    },
    {
      id: 'life-bedtime-11',
      prompt: 'Did you sleep well?',
      answer: 'Ai dormit bine?',
    },
    {
      id: 'life-bedtime-12',
      prompt: "I'm so sleepy.",
      answer: 'Mi-e atât de somn.',
      teachingNote: 'Same "mi-e ___" shape as "mi-e foame" — literally "to me is so much sleep."',
    },
    {
      id: 'life-bedtime-13',
      prompt: 'I need a coffee.',
      answer: 'Am nevoie de o cafea.',
    },
  ],
  conversationPrompts: [
    'Do the whole bedtime routine in Romanian one night this week — bath, story, "Noapte bună, puiule."',
    'Every morning, ask your partner "Ai dormit bine?" — and answer properly when they ask you back.',
    'When it\'s someone\'s turn in the night, settle it in Romanian. "E rândul tău" will get plenty of use.',
  ],
}
