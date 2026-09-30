import type { Unit } from '../../types'

export const unit15: Unit = {
  id: 'u15',
  stage: 'Complex conversation',
  title: 'What you think, what they said',
  lessons: [
    {
      id: 'u15-l01',
      title: '"Cred că…" — giving an opinion',
      intro:
        'Opinions mostly hang off "cred că" (I think that) — and unlike English, Romanian never drops the "that."',
      drills: [
        {
          id: 'u15-l01-d01',
          prompt: 'I think so.',
          answer: 'Cred că da.',
          teachingNote: 'Literally "I think that yes."',
        },
        {
          id: 'u15-l01-d02',
          prompt: "I don't think so.",
          answer: 'Nu cred.',
          acceptedAlternates: ['Cred că nu.'],
        },
        {
          id: 'u15-l01-d03',
          prompt: "I think he's hungry.",
          answer: 'Cred că i-e foame.',
        },
        {
          id: 'u15-l01-d04',
          prompt: 'It seems too expensive to me.',
          answer: 'Mi se pare prea scump.',
          teachingNote: '"Mi se pare" — "it seems to me" — is a softer way in than "cred."',
        },
        {
          id: 'u15-l01-d05',
          prompt: 'I agree.',
          answer: 'Sunt de acord.',
        },
        {
          id: 'u15-l01-d06',
          prompt: "You're right.",
          answer: 'Ai dreptate.',
          teachingNote: 'Literally "you have rightness."',
        },
        {
          id: 'u15-l01-d07',
          prompt: "I'm not sure.",
          answer: 'Nu știu sigur.',
          teachingNote: 'Literally "I don\'t know for sure" — handy because "sigur" in "sunt sigur/sigură" would change with who\'s speaking.',
        },
        {
          id: 'u15-l01-d08',
          prompt: 'Really?',
          answer: 'Serios?',
        },
        {
          id: 'u15-l01-d09',
          prompt: 'What do you think?',
          answer: 'Ce crezi?',
        },
      ],
    },
    {
      id: 'u15-l02',
      title: 'What someone said',
      intro: 'Reporting what someone said keeps their original tense — Romanian doesn\'t shift "is" to "was" the way English does.',
      drills: [
        {
          id: 'u15-l02-d01',
          prompt: "He said he's coming.",
          answer: 'A zis că vine.',
          teachingNote: 'Romanian keeps "vine" (comes) where English shifts to "was coming."',
        },
        {
          id: 'u15-l02-d02',
          prompt: "Your mum said she'd call.",
          answer: 'Mama ta a zis că o să sune.',
        },
        {
          id: 'u15-l02-d03',
          prompt: "They asked if we're coming.",
          answer: 'Au întrebat dacă venim.',
        },
        {
          id: 'u15-l02-d04',
          prompt: "I told her we can't come.",
          answer: 'I-am spus că nu putem veni.',
        },
        {
          id: 'u15-l02-d05',
          prompt: 'What did the doctor say?',
          answer: 'Ce a zis doctorul?',
        },
        {
          id: 'u15-l02-d06',
          prompt: 'Did you hear that?',
          answer: 'Ai auzit asta?',
        },
      ],
    },
    {
      id: 'u15-l03',
      title: 'Keeping the conversation going',
      intro:
        'The phrases that stop you switching to English when you get stuck — possibly the most useful lesson in the whole course.',
      drills: [
        {
          id: 'u15-l03-d01',
          prompt: 'How do you say this in Romanian?',
          answer: 'Cum se spune asta în română?',
        },
        {
          id: 'u15-l03-d02',
          prompt: 'What does that mean?',
          answer: 'Ce înseamnă asta?',
        },
        {
          id: 'u15-l03-d03',
          prompt: 'Can you say that again?',
          answer: 'Poți să repeți?',
        },
        {
          id: 'u15-l03-d04',
          prompt: 'Slower, please.',
          answer: 'Mai încet, te rog.',
        },
        {
          id: 'u15-l03-d05',
          prompt: "I didn't understand.",
          answer: 'N-am înțeles.',
        },
        {
          id: 'u15-l03-d06',
          prompt: "Wait, I'm thinking.",
          answer: 'Stai, mă gândesc.',
        },
        {
          id: 'u15-l03-d07',
          prompt: 'I understand a little, but not everything.',
          answer: 'Înțeleg puțin, dar nu tot.',
        },
      ],
    },
  ],
}
