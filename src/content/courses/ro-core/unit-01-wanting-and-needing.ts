import type { Unit } from '../../types'

export const unit01: Unit = {
  id: 'u01',
  stage: 'Foundations',
  title: 'Wanting, needing, being able to',
  lessons: [
    {
      id: 'u01-l01',
      title: '"Vreau să..." — I want to...',
      intro:
        'One pattern gets you a huge number of sentences: "vreau să" plus a verb. Whatever you want to do, this is how you say it — just change the verb at the end.',
      drills: [
        {
          id: 'u01-l01-d01',
          prompt: 'I want to go.',
          answer: 'Vreau să merg.',
          acceptedAlternates: ['Eu vreau să merg.'],
          teachingNote: '"Vreau să" + a verb is your basic "I want to ___." Swap the verb at the end for anything you want to do.',
          introduces: [
            { lemma: 'vrea', pos: 'verb', freqRank: 124 },
            { lemma: 'merge', pos: 'verb', freqRank: 211 },
          ],
        },
        {
          id: 'u01-l01-d02',
          prompt: 'I want to eat.',
          answer: 'Vreau să mănânc.',
          teachingNote: '"Mănânc" (I eat) comes from "a mânca." Common verbs often change shape a lot in the "I" form — that sinks in through repetition, not rules.',
          introduces: [{ lemma: 'mânca', pos: 'verb', freqRank: 6909 }],
        },
        {
          id: 'u01-l01-d03',
          prompt: 'I want to see.',
          answer: 'Vreau să văd.',
          introduces: [{ lemma: 'vedea', pos: 'verb', freqRank: 327 }],
        },
        {
          id: 'u01-l01-d04',
          prompt: 'I want to buy a coffee.',
          answer: 'Vreau să cumpăr o cafea.',
          introduces: [
            { lemma: 'cumpăra', pos: 'verb', freqRank: 5330 },
            { lemma: 'cafea', pos: 'noun', freqRank: 799 },
          ],
        },
        {
          id: 'u01-l01-d05',
          prompt: "I don't want to go.",
          answer: 'Nu vreau să merg.',
          teachingNote: 'Negation is just "nu" right before "vreau." Everything else stays exactly the same.',
        },
      ],
    },
    {
      id: 'u01-l02',
      title: '"Pot să... / Trebuie să..." — I can / I have to...',
      intro:
        'Same shape as "vreau să," two more building blocks: "pot să" for what you can do, and "trebuie să" for what you have to do.',
      drills: [
        {
          id: 'u01-l02-d01',
          prompt: 'I can go.',
          answer: 'Pot să merg.',
          introduces: [{ lemma: 'putea', pos: 'verb', freqRank: 91 }],
        },
        {
          id: 'u01-l02-d02',
          prompt: 'I have to go.',
          answer: 'Trebuie să merg.',
          teachingNote: '"Trebuie" never changes form — it\'s the same word whether it\'s "I have to," "you have to," or "she has to." One less thing to conjugate.',
          introduces: [{ lemma: 'trebui', pos: 'verb', freqRank: 37 }],
        },
        {
          id: 'u01-l02-d03',
          prompt: "I can't eat that.",
          answer: 'Nu pot să mănânc asta.',
          introduces: [{ lemma: 'asta', pos: 'pron', freqRank: 17 }],
        },
        {
          id: 'u01-l02-d04',
          prompt: 'I have to buy bread.',
          answer: 'Trebuie să cumpăr pâine.',
          introduces: [{ lemma: 'pâine', pos: 'noun', freqRank: 2751 }],
        },
        {
          id: 'u01-l02-d05',
          prompt: 'Can you help me?',
          answer: 'Poți să mă ajuți?',
          teachingNote: '"Mă" here means "me." There\'s a full pattern for words like this coming up next — for now just notice it sits right before the verb.',
          introduces: [{ lemma: 'ajuta', pos: 'verb', freqRank: 335 }],
        },
      ],
    },
  ],
}
