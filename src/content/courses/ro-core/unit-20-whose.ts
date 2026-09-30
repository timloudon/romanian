import type { Unit } from '../../types'

export const unit20: Unit = {
  id: 'u20',
  stage: 'Complex conversation',
  title: 'Mine, yours, whose',
  lessons: [
    {
      id: 'u20-l01',
      title: '"Al meu, a ta" — mine, yours',
      intro:
        '"Al, a, ai, ale" in front of "meu, tău…" make "mine, yours" — and they agree with the thing owned, not with the owner.',
      drills: [
        {
          id: 'u20-l01-d01',
          prompt: 'Whose is this?',
          answer: 'Al cui e asta?',
          acceptedAlternates: ['A cui e asta?'],
        },
        {
          id: 'u20-l01-d02',
          prompt: "It's mine.",
          answer: 'E al meu.',
          teachingNote: '"Al" for a masculine thing; a feminine thing would be "a mea."',
        },
        {
          id: 'u20-l01-d03',
          prompt: 'Is this bag yours?',
          answer: 'Geanta asta e a ta?',
        },
        {
          id: 'u20-l01-d04',
          prompt: 'These toys are his.',
          answer: 'Jucăriile astea sunt ale lui.',
        },
        {
          id: 'u20-l01-d05',
          prompt: 'Our house is small.',
          answer: 'Casa noastră e mică.',
        },
      ],
    },
    {
      id: 'u20-l02',
      title: "Someone's something",
      intro:
        '"The child\'s toys" is "the toys of-the-child" — the owner\'s ending changes: "copilul" becomes "copilului," "mama" becomes "mamei."',
      drills: [
        {
          id: 'u20-l02-d01',
          prompt: "The child's toys are everywhere.",
          answer: 'Jucăriile copilului sunt peste tot.',
          teachingNote: '"-ului" means "the ___\'s" for a masculine noun.',
        },
        {
          id: 'u20-l02-d02',
          prompt: "Your mum's cooking is the best.",
          answer: 'Mâncarea mamei tale e cea mai bună.',
          teachingNote: '"-ei" for a feminine noun: "mama" becomes "mamei," and "ta" becomes "tale" to match.',
        },
        {
          id: 'u20-l02-d03',
          prompt: "My parents' house is far away.",
          answer: 'Casa părinților mei e departe.',
        },
        {
          id: 'u20-l02-d04',
          prompt: "It's my brother's birthday.",
          answer: 'E ziua fratelui meu.',
        },
        {
          id: 'u20-l02-d05',
          prompt: "This is Andrei's car.",
          answer: 'Asta e mașina lui Andrei.',
          teachingNote: 'With men\'s names, "lui" goes in front.',
        },
      ],
    },
  ],
}
