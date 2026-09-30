import type { LifeTopic } from '../types'

export const weekends: LifeTopic = {
  id: 'life-weekends',
  emoji: '🌳',
  title: 'Weekends & outings',
  summary: 'Making plans, the playground, walks, and getting everyone out of the door.',
  intro: 'The small logistics of a day out with a toddler — plus a few things to say to him while you\'re there.',
  drills: [
    {
      id: 'life-weekends-01',
      prompt: 'What shall we do this weekend?',
      answer: 'Ce facem în weekend?',
    },
    {
      id: 'life-weekends-02',
      prompt: "Let's go for a walk.",
      answer: 'Hai să ieșim la plimbare.',
      teachingNote: '"A ieși" is "to go out" — "hai să ieșim" is "let\'s head out."',
    },
    {
      id: 'life-weekends-03',
      prompt: "Let's go to the playground.",
      answer: 'Hai să mergem la locul de joacă.',
    },
    {
      id: 'life-weekends-04',
      prompt: 'He loves the swing.',
      answer: 'Îi place mult leagănul.',
    },
    {
      id: 'life-weekends-05',
      prompt: '(to him) Do you want to go on the slide?',
      answer: 'Vrei să te dai pe tobogan?',
      acceptedAlternates: ['Vrei pe tobogan?'],
      teachingNote: '"A se da pe tobogan" is the verb for going down a slide — parents often just say "vrei pe tobogan?"',
    },
    {
      id: 'life-weekends-06',
      prompt: "It's too cold outside.",
      answer: 'E prea frig afară.',
    },
    {
      id: 'life-weekends-07',
      prompt: 'He needs a coat.',
      answer: 'Are nevoie de geacă.',
    },
    {
      id: 'life-weekends-08',
      prompt: "It's going to rain.",
      answer: 'O să plouă.',
    },
    {
      id: 'life-weekends-09',
      prompt: 'Shall we invite some friends over?',
      answer: 'Să chemăm niște prieteni?',
    },
    {
      id: 'life-weekends-10',
      prompt: 'He fell asleep in the pushchair.',
      answer: 'A adormit în cărucior.',
    },
    {
      id: 'life-weekends-11',
      prompt: "We're going to be late.",
      answer: 'O să întârziem.',
    },
    {
      id: 'life-weekends-12',
      prompt: "Let's go home.",
      answer: 'Hai să mergem acasă.',
      acceptedAlternates: ['Hai acasă.'],
    },
    {
      id: 'life-weekends-13',
      prompt: 'We had a walk around town.',
      answer: 'Ne-am plimbat prin oraș.',
    },
    {
      id: 'life-weekends-14',
      prompt: 'Can I have a lie-in?',
      answer: 'Pot să dorm mai mult?',
    },
    {
      id: 'life-weekends-15',
      prompt: "Let's feed the ducks.",
      answer: 'Hai să hrănim rațele.',
    },
    {
      id: 'life-weekends-16',
      prompt: "It's a lovely day.",
      answer: 'E o zi frumoasă.',
    },
    {
      id: 'life-weekends-17',
      prompt: 'Shall we eat out?',
      answer: 'Mâncăm în oraș?',
      teachingNote: '"În oraș" — "in town" — means going out anywhere: to eat, for a drink, for the evening.',
    },
    {
      id: 'life-weekends-18',
      prompt: "Don't forget his water bottle.",
      answer: 'Nu uita sticluța lui cu apă.',
    },
    {
      id: 'life-weekends-19',
      prompt: 'Take a photo!',
      answer: 'Fă o poză!',
    },
  ],
  conversationPrompts: [
    'Plan Saturday with your partner in Romanian — where, when, what to bring.',
    'At the playground, talk to him in Romanian: "Vrei pe tobogan?", "Hai acasă!"',
  ],
}
