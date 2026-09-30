import type { Unit } from '../../types'

export const unit09: Unit = {
  id: 'u09',
  stage: 'Building up',
  title: 'Asking politely, comparing things',
  lessons: [
    {
      id: 'u09-l01',
      title: '"Aș vrea..." — a softer way to ask',
      intro:
        '"Aș vrea" is just a politer "vreau" — everything that follows it works exactly the same as it always has after "vreau."',
      drills: [
        {
          id: 'u09-l01-d01',
          prompt: 'I would like to go.',
          answer: 'Aș vrea să merg.',
          teachingNote: '"Aș vrea" softens "vreau" the way "would like" softens "want" in English — swap the word, keep everything after it.',
        },
        {
          id: 'u09-l01-d02',
          prompt: 'I would like a coffee.',
          answer: 'Aș vrea o cafea.',
        },
        {
          id: 'u09-l01-d03',
          prompt: 'Could you help me?',
          answer: 'Ai putea să mă ajuți?',
          teachingNote: '"Ai putea" is "poți" softened the same way "aș vrea" softens "vreau" — a politer "could you."',
        },
        {
          id: 'u09-l01-d04',
          prompt: 'I would like to see her.',
          answer: 'Aș vrea s-o văd.',
        },
        {
          id: 'u09-l01-d05',
          prompt: 'That would be nice.',
          answer: 'Ar fi frumos.',
          introduces: [{ lemma: 'frumos', pos: 'adj', freqRank: 307 }],
        },
      ],
    },
    {
      id: 'u09-l02',
      title: '"Mai..." — comparing things',
      intro: 'The same "mai" (more) you already used for "mai mică" (younger) and "mai vreau" (some more) does all the comparing work here too.',
      drills: [
        {
          id: 'u09-l02-d01',
          prompt: 'This is better.',
          answer: 'Asta e mai bine.',
        },
        {
          id: 'u09-l02-d02',
          prompt: 'This one is bigger.',
          answer: 'Asta e mai mare.',
          introduces: [{ lemma: 'mare', pos: 'adj', freqRank: 129 }],
        },
        {
          id: 'u09-l02-d03',
          prompt: "It's the best.",
          answer: 'E cel mai bun.',
          teachingNote: '"Cel mai" plus a word is "the most ___" — one step past plain "mai."',
          introduces: [{ lemma: 'bun', pos: 'adj', freqRank: 123 }],
        },
        {
          id: 'u09-l02-d04',
          prompt: 'I like this one more.',
          answer: 'Îmi place mai mult asta.',
        },
        {
          id: 'u09-l02-d05',
          prompt: "It's not as good.",
          answer: 'Nu e la fel de bun.',
          teachingNote: '"La fel de ___" is the "as ___ as" shape — here paired with "nu" to say it falls short.',
        },
      ],
    },
  ],
}
