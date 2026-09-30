import type { Unit } from '../../types'

export const unit18: Unit = {
  id: 'u18',
  stage: 'Complex conversation',
  title: 'Who, which, what',
  lessons: [
    {
      id: 'u18-l01',
      title: '"Care" — the one who, the one which',
      intro:
        '"Care" joins a description onto a noun: the man who, the book which. When it\'s the object, it becomes "pe care" and brings its small word along.',
      drills: [
        {
          id: 'u18-l01-d01',
          prompt: 'The man who called is my uncle.',
          answer: 'Omul care a sunat e unchiul meu.',
        },
        {
          id: 'u18-l01-d02',
          prompt: "The book I'm reading is good.",
          answer: 'Cartea pe care o citesc e bună.',
          teachingNote: 'As the object, "care" becomes "pe care" — and "o" still turns up.',
        },
        {
          id: 'u18-l01-d03',
          prompt: 'Do you know anyone who speaks English?',
          answer: 'Știi pe cineva care vorbește engleză?',
        },
        {
          id: 'u18-l01-d04',
          prompt: 'Is that the house where you grew up?',
          answer: 'Asta e casa unde ai crescut?',
        },
        {
          id: 'u18-l01-d05',
          prompt: 'The friends we saw yesterday are from Cluj.',
          answer: 'Prietenii pe care i-am văzut ieri sunt din Cluj.',
        },
      ],
    },
    {
      id: 'u18-l02',
      title: 'What, whoever, everyone',
      intro: '"Ce" can mean "what" in the middle of a sentence too, and "cine" can mean "whoever."',
      drills: [
        {
          id: 'u18-l02-d01',
          prompt: 'What you said is true.',
          answer: 'Ce ai spus e adevărat.',
        },
        {
          id: 'u18-l02-d02',
          prompt: 'Do whatever you want.',
          answer: 'Fă ce vrei.',
        },
        {
          id: 'u18-l02-d03',
          prompt: 'I understand what you mean.',
          answer: 'Înțeleg ce vrei să spui.',
          teachingNote: 'Literally "what you want to say."',
        },
        {
          id: 'u18-l02-d04',
          prompt: "That's all I know.",
          answer: 'Asta e tot ce știu.',
        },
        {
          id: 'u18-l02-d05',
          prompt: 'Whoever wants to can come.',
          answer: 'Cine vrea poate să vină.',
        },
        {
          id: 'u18-l02-d06',
          prompt: 'Everyone was there.',
          answer: 'Toată lumea era acolo.',
          teachingNote: '"Toată lumea" — literally "all the world" — is how Romanians say "everyone."',
        },
      ],
    },
  ],
}
