import type { Unit } from '../../types'

export const unit03: Unit = {
  id: 'u03',
  stage: 'Foundations',
  title: 'What happened — talking about the past',
  lessons: [
    {
      id: 'u03-l01',
      title: '"Am mers..." — saying what you did',
      intro:
        'Talking about the past is just "am" (or "ai," "a") plus a changed form of the verb, stuck right on the front of the sentence. Learn that changed form once per verb, and you can talk about anything that already happened.',
      drills: [
        {
          id: 'u03-l01-d01',
          prompt: 'I went.',
          answer: 'Am mers.',
          teachingNote: '"Am" here isn\'t "I have [something]" — it\'s the marker for "I did something." "Mers" is the changed, past-talking form of "merge."',
          introduces: [{ lemma: 'merge', pos: 'verb' }],
        },
        {
          id: 'u03-l01-d02',
          prompt: 'I ate.',
          answer: 'Am mâncat.',
          introduces: [{ lemma: 'mânca', pos: 'verb', freqRank: 6909 }],
        },
        {
          id: 'u03-l01-d03',
          prompt: 'I saw.',
          answer: 'Am văzut.',
          introduces: [{ lemma: 'vedea', pos: 'verb', freqRank: 327 }],
        },
        {
          id: 'u03-l01-d04',
          prompt: 'I bought bread.',
          answer: 'Am cumpărat pâine.',
        },
        {
          id: 'u03-l01-d05',
          prompt: 'Did you go?',
          answer: 'Ai mers?',
          teachingNote: 'No "did" to worry about — it\'s the exact same shape as a statement, just said (or written) as a question. "Ai mers" is both "you went" and "did you go?"',
        },
      ],
    },
    {
      id: 'u03-l02',
      title: '"Ce ai făcut?" — recombining the past with what you know',
      intro:
        'Everything from "vreau/pot/trebuie" and the "him/her/it" words still works — it just sits alongside "am/ai/a" now. One exception worth knowing up front: "her/it" (feminine) jumps to the end instead of the front.',
      drills: [
        {
          id: 'u03-l02-d01',
          prompt: 'What did you do?',
          answer: 'Ce ai făcut?',
          introduces: [{ lemma: 'face', pos: 'verb', freqRank: 59 }],
        },
        {
          id: 'u03-l02-d02',
          prompt: 'I saw him.',
          answer: 'L-am văzut.',
          teachingNote: '"Îl" still shows up before a vowel-starting helper word, same fusing you already know — here it\'s "l-am," not "îl am."',
        },
        {
          id: 'u03-l02-d03',
          prompt: 'I saw her.',
          answer: 'Am văzut-o.',
          teachingNote: 'The one real exception in this whole pattern: "her/it" ("o") jumps to the *end*, after the changed verb, instead of the front like every other one of these small words does.',
        },
        {
          id: 'u03-l02-d04',
          prompt: 'I wanted to go.',
          answer: 'Am vrut să merg.',
          teachingNote: '"Vreau să" just becomes "am vrut să" — the "să merg" half doesn\'t change at all.',
        },
        {
          id: 'u03-l02-d05',
          prompt: 'I ate at home.',
          answer: 'Am mâncat acasă.',
          introduces: [{ lemma: 'acasă', pos: 'adv', freqRank: 870 }],
        },
      ],
    },
  ],
}
