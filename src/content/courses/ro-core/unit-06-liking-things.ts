import type { Unit } from '../../types'

export const unit06: Unit = {
  id: 'u06',
  title: 'Saying what you like',
  lessons: [
    {
      id: 'u06-l01',
      title: '"Îmi place..." — talking about what you like',
      intro:
        'Romanian doesn\'t say "I like coffee" — closer to "coffee is pleasing to me." Same shape as "mi-e foame" from before: a little word for the person, then the thing doing the pleasing.',
      drills: [
        {
          id: 'u06-l01-d01',
          prompt: 'I like coffee.',
          answer: 'Îmi place cafeaua.',
          teachingNote: 'Literally "to me is-pleasing the coffee." Same logic as "mi-e foame" — the feeling word just changes.',
          introduces: [{ lemma: 'plăcea', pos: 'verb', freqRank: 152 }],
        },
        {
          id: 'u06-l01-d02',
          prompt: 'I like apples.',
          answer: 'Îmi plac merele.',
          teachingNote: '"Plac," not "place" — the verb matches what\'s doing the pleasing, and "merele" (the apples) is plural.',
        },
        {
          id: 'u06-l01-d03',
          prompt: 'Do you like it?',
          answer: 'Îți place?',
        },
        {
          id: 'u06-l01-d04',
          prompt: "I don't like it.",
          answer: 'Nu-mi place.',
          teachingNote: '"Nu" and "îmi" fuse into "nu-mi" the same way "să" and "îl" fused into "să-l" earlier.',
        },
        {
          id: 'u06-l01-d05',
          prompt: 'Does he like coffee?',
          answer: 'Îi place cafeaua?',
          teachingNote: '"Îi" (to him/to her) is the same word either way — Romanian doesn\'t distinguish gender here the way "îl/o" does.',
          introduces: [{ lemma: 'cafea', pos: 'noun', freqRank: 799 }],
        },
      ],
    },
    {
      id: 'u06-l02',
      title: 'More small words like this one',
      intro:
        'The same "to me / to you / to him..." words work for giving and telling, not just liking — and you\'ve already met most of them.',
      drills: [
        {
          id: 'u06-l02-d01',
          prompt: 'I told her.',
          answer: 'I-am spus.',
          teachingNote: '"Îi" (to her) plus "am" fuses to "i-am" — same fusing pattern as "mi-e," just a different small word.',
          introduces: [{ lemma: 'spune', pos: 'verb' }],
        },
        {
          id: 'u06-l02-d02',
          prompt: 'Will you give me the book?',
          answer: 'Îmi dai cartea?',
          introduces: [{ lemma: 'da', pos: 'verb' }, { lemma: 'carte', pos: 'noun' }],
        },
        {
          id: 'u06-l02-d03',
          prompt: 'I gave them the book.',
          answer: 'Le-am dat cartea.',
        },
        {
          id: 'u06-l02-d04',
          prompt: 'She told us.',
          answer: 'Ne-a spus.',
          teachingNote: 'Nothing new — "ne" you already have, "a spus" is just "told" in the past-tense shape from before.',
        },
        {
          id: 'u06-l02-d05',
          prompt: 'They like Romania.',
          answer: 'Le place România.',
        },
      ],
    },
  ],
}
