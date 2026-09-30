import type { LifeTopic } from '../types'

export const storiesAndSongs: LifeTopic = {
  id: 'life-stories',
  emoji: '📚',
  title: 'Stories, books & songs',
  summary: 'Once upon a time, animal noises, picture books and bedtime stories.',
  intro:
    'Stories and songs are how Romanian children get their language — and how you can give him yours, one page at a time.',
  drills: [
    {
      id: 'life-stories-01',
      prompt: 'Once upon a time…',
      answer: 'A fost odată ca niciodată…',
      teachingNote: 'The opening of every Romanian fairy tale — "there was once, as never".',
    },
    {
      id: 'life-stories-02',
      prompt: '…and they lived happily ever after.',
      answer: '…și au trăit fericiți până la adânci bătrâneți.',
      teachingNote: 'Literally "until deep old age".',
    },
    {
      id: 'life-stories-03',
      prompt: 'Which book do you want?',
      answer: 'Ce carte vrei?',
    },
    {
      id: 'life-stories-04',
      prompt: 'Shall I read it to you again?',
      answer: 'Să ți-o mai citesc o dată?',
    },
    {
      id: 'life-stories-05',
      prompt: 'Turn the page.',
      answer: 'Întoarce pagina.',
    },
    {
      id: 'life-stories-06',
      prompt: 'Where\'s the wolf?',
      answer: 'Unde e lupul?',
    },
    {
      id: 'life-stories-07',
      prompt: 'What does the cow say?',
      answer: 'Ce face vaca?',
      teachingNote: 'Romanians ask what an animal "does", not what it "says".',
    },
    {
      id: 'life-stories-08',
      prompt: 'The dog goes woof.',
      answer: 'Câinele face ham-ham.',
    },
    {
      id: 'life-stories-09',
      prompt: 'The cat goes miaow.',
      answer: 'Pisica face miau.',
    },
    {
      id: 'life-stories-10',
      prompt: 'Little Red Riding Hood.',
      answer: 'Scufița Roșie.',
    },
    {
      id: 'life-stories-11',
      prompt: 'The Three Little Pigs.',
      answer: 'Cei trei purceluși.',
    },
    {
      id: 'life-stories-12',
      prompt: 'Let\'s look at the pictures.',
      answer: 'Hai să ne uităm la poze.',
    },
    {
      id: 'life-stories-13',
      prompt: 'Let\'s sing a song.',
      answer: 'Hai să cântăm un cântec.',
    },
    {
      id: 'life-stories-14',
      prompt: 'Last story, then bed.',
      answer: 'Ultima poveste, apoi la culcare.',
    },
  ],
  conversationPrompts: [
    'Read one picture book in Romanian each night — translating on the fly counts.',
    'Ask your partner and the grandparents which stories and songs they grew up with.',
  ],
}
