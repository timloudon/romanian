import type { Unit } from '../../types'

export const unit07: Unit = {
  id: 'u07',
  stage: 'Building up',
  title: 'What will happen',
  lessons: [
    {
      id: 'u07-l01',
      title: '"O să..." — talking about the future',
      intro:
        'The everyday way to talk about the future is "o să," which — like "trebuie" — never changes form. What follows it works exactly like it did after "vreau să."',
      drills: [
        {
          id: 'u07-l01-d01',
          prompt: 'I will go tomorrow.',
          answer: 'O să merg mâine.',
          teachingNote: '"O să" is invariant, same word no matter who\'s doing the action — only the verb after it changes, the same way it already did after "vreau să."',
          introduces: [{ lemma: 'mâine', pos: 'adv', freqRank: 1717 }],
        },
        {
          id: 'u07-l01-d02',
          prompt: 'I will eat later.',
          answer: 'O să mănânc mai târziu.',
          introduces: [{ lemma: 'târziu', pos: 'adv', freqRank: 1748 }],
        },
        {
          id: 'u07-l01-d03',
          prompt: 'Will you come?',
          answer: 'O să vii?',
          introduces: [{ lemma: 'veni', pos: 'verb', freqRank: 436 }],
        },
        {
          id: 'u07-l01-d04',
          prompt: 'She will call.',
          answer: 'O să sune.',
          teachingNote: 'Same small shift you saw with "meargă" — third person often bends the verb slightly ("sună" becomes "sune") where "I/you" wouldn\'t.',
        },
        {
          id: 'u07-l01-d05',
          prompt: "We'll see.",
          answer: 'O să vedem.',
        },
      ],
    },
    {
      id: 'u07-l02',
      title: 'Recombining the future',
      intro: 'Everything you already have — object words, negation, the "să" fusings — slots straight in after "o să."',
      drills: [
        {
          id: 'u07-l02-d01',
          prompt: "I'll help you.",
          answer: 'O să te ajut.',
        },
        {
          id: 'u07-l02-d02',
          prompt: "He'll buy bread.",
          answer: 'O să cumpere pâine.',
        },
        {
          id: 'u07-l02-d03',
          prompt: "I won't eat that.",
          answer: 'N-o să mănânc asta.',
          teachingNote: '"Nu" and "o" fuse to "n-o," same elision you\'ve seen at other boundaries like this.',
        },
        {
          id: 'u07-l02-d04',
          prompt: "I'll see him tomorrow.",
          answer: 'O să-l văd mâine.',
        },
        {
          id: 'u07-l02-d05',
          prompt: 'They will come too.',
          answer: 'O să vină și ei.',
        },
      ],
    },
    {
      id: 'u07-l03',
      title: 'The formal future — "va, vom, vor"',
      intro:
        'You\'ll hear a second future on the news, in announcements, and from older relatives: "va" plus the plain verb. Recognising it matters more than using it — "o să" is what you\'ll actually say.',
      drills: [
        {
          id: 'u07-l03-d01',
          prompt: 'It will rain.',
          answer: 'Va ploua.',
          teachingNote: '"Va" plus the plain verb — the weather forecast\'s future.',
        },
        {
          id: 'u07-l03-d02',
          prompt: "We'll see.",
          answer: 'Vom vedea.',
          acceptedAlternates: ['O să vedem.'],
        },
        {
          id: 'u07-l03-d03',
          prompt: "They'll come tomorrow.",
          answer: 'Vor veni mâine.',
        },
        {
          id: 'u07-l03-d04',
          prompt: "You'll see!",
          answer: 'Vei vedea!',
        },
        {
          id: 'u07-l03-d05',
          prompt: '(politely) What will you do?',
          answer: 'Ce veți face?',
        },
      ],
    },
  ],
}
