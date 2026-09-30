import type { LifeTopic } from '../types'

export const hisDay: LifeTopic = {
  id: 'life-his-day',
  emoji: '👶',
  title: 'His day',
  summary: 'What the little one did today — sleep, food, play, new words.',
  intro:
    'The conversation that happens every evening: what did he do today? Drill these all week, then actually have that conversation in Romanian.',
  drills: [
    {
      id: 'life-his-day-01',
      prompt: 'What did the little one do today?',
      answer: 'Ce a făcut cel mic azi?',
      acceptedAlternates: ['Ce a făcut azi?'],
      teachingNote: '"Cel mic" (the little one) is how Romanian parents often refer to a small boy.',
    },
    {
      id: 'life-his-day-02',
      prompt: 'He slept well.',
      answer: 'A dormit bine.',
    },
    {
      id: 'life-his-day-03',
      prompt: 'He napped at lunchtime.',
      answer: 'A dormit la prânz.',
    },
    {
      id: 'life-his-day-04',
      prompt: 'He ate everything.',
      answer: 'A mâncat tot.',
    },
    {
      id: 'life-his-day-05',
      prompt: "He didn't want to eat.",
      answer: 'N-a vrut să mănânce.',
      teachingNote: '"Să mănânce" — the third-person shift again ("mănâncă" becomes "mănânce" after "să").',
    },
    {
      id: 'life-his-day-06',
      prompt: 'He played outside.',
      answer: 'S-a jucat afară.',
      teachingNote: '"A se juca" (to play) is reflexive — "se" plus "a" fuses to "s-a."',
    },
    {
      id: 'life-his-day-07',
      prompt: 'We went to the park.',
      answer: 'Am fost în parc.',
      teachingNote: 'In the past tense "am" covers both "I" and "we" — context does the rest.',
    },
    {
      id: 'life-his-day-08',
      prompt: 'He cried a lot.',
      answer: 'A plâns mult.',
    },
    {
      id: 'life-his-day-09',
      prompt: 'He was really good today.',
      answer: 'A fost foarte cuminte azi.',
      teachingNote: '"Cuminte" is the everyday word for a well-behaved child.',
    },
    {
      id: 'life-his-day-10',
      prompt: "He's teething.",
      answer: 'Îi ies dinții.',
      teachingNote: 'Literally "the teeth are coming out to him" — the same "to him" word as "îi place."',
    },
    {
      id: 'life-his-day-11',
      prompt: 'I changed his nappy.',
      answer: 'I-am schimbat scutecul.',
      teachingNote: '"I-am" (to him + I have) is how Romanian says "his" here — "I changed the nappy to him."',
    },
    {
      id: 'life-his-day-12',
      prompt: 'He said a new word!',
      answer: 'A zis un cuvânt nou!',
      acceptedAlternates: ['A spus un cuvânt nou!'],
    },
    {
      id: 'life-his-day-13',
      prompt: 'He laughed so much.',
      answer: 'A râs atât de mult.',
    },
    {
      id: 'life-his-day-14',
      prompt: "He's crying again.",
      answer: 'Iar plânge.',
      teachingNote: '"Iar" at the front — "again" — usually said with a sigh.',
    },
    {
      id: 'life-his-day-15',
      prompt: 'What did he have for lunch?',
      answer: 'Ce a mâncat la prânz?',
    },
    {
      id: 'life-his-day-16',
      prompt: 'He had a bath.',
      answer: 'A făcut baie.',
      teachingNote: '"A face baie" — literally "to make a bath" — is how you say "to have a bath."',
    },
    {
      id: 'life-his-day-17',
      prompt: 'He played with his cars.',
      answer: 'S-a jucat cu mașinuțele.',
      teachingNote: '"-uțe" makes things small and sweet: mașină (car) → mașinuță (little car).',
    },
    {
      id: 'life-his-day-18',
      prompt: 'He drew a picture.',
      answer: 'A făcut un desen.',
    },
    {
      id: 'life-his-day-19',
      prompt: "He fell over, but he's fine.",
      answer: 'A căzut, dar e bine.',
    },
    {
      id: 'life-his-day-20',
      prompt: "He wouldn't sleep.",
      answer: 'N-a vrut să doarmă.',
    },
    {
      id: 'life-his-day-21',
      prompt: 'He was asking for you all day.',
      answer: 'Te-a căutat toată ziua.',
      teachingNote: 'Literally "he looked for you all day" — how Romanians say a child kept asking for someone.',
    },
    {
      id: 'life-his-day-22',
      prompt: 'He had a tantrum.',
      answer: 'A făcut o criză de nervi.',
    },
  ],
  conversationPrompts: [
    'Every evening this week, ask your partner "Ce a făcut cel mic azi?" — and when they ask you back, answer in Romanian, even if it\'s just "A dormit bine."',
    'Ask your partner to answer only in Romanian at dinner one night. You\'ll follow more than you expect.',
    'When something new happens — a new word, a first step — tell your partner in Romanian first.',
  ],
}
