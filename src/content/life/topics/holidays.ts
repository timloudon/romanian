import type { LifeTopic } from '../types'

export const holidays: LifeTopic = {
  id: 'life-holidays',
  emoji: '✈️',
  title: 'Holidays',
  summary: 'Planning the trip to Romania — dates, packing, family waiting at the other end.',
  intro:
    'Everything that goes into the yearly trip: booking, packing with a little one, and everyone waiting to see him.',
  drills: [
    {
      id: 'life-holidays-01',
      prompt: 'When are we going to Romania?',
      answer: 'Când mergem în România?',
    },
    {
      id: 'life-holidays-02',
      prompt: "I've booked the flights.",
      answer: 'Am rezervat zborurile.',
    },
    {
      id: 'life-holidays-03',
      prompt: 'How long are we staying?',
      answer: 'Cât timp stăm?',
    },
    {
      id: 'life-holidays-04',
      prompt: "We're staying two weeks.",
      answer: 'Stăm două săptămâni.',
    },
    {
      id: 'life-holidays-05',
      prompt: 'We need to pack.',
      answer: 'Trebuie să facem bagajele.',
      teachingNote: '"A face bagajele" — literally "to make the luggage" — is how you say "to pack."',
    },
    {
      id: 'life-holidays-06',
      prompt: 'Have you packed the passports?',
      answer: 'Ai pus pașapoartele?',
    },
    {
      id: 'life-holidays-07',
      prompt: "Don't forget the pushchair.",
      answer: 'Nu uita căruciorul.',
      teachingNote: '"Don\'t ___" is just "nu" plus the plain verb — "nu uita," "nu pleca." Nothing else changes.',
    },
    {
      id: 'life-holidays-08',
      prompt: 'Your parents are waiting for us.',
      answer: 'Părinții tăi ne așteaptă.',
    },
    {
      id: 'life-holidays-09',
      prompt: "I can't wait!",
      answer: 'Abia aștept!',
      teachingNote: '"Abia aștept" — literally "I can barely wait" — is the go-to phrase for looking forward to something.',
    },
    {
      id: 'life-holidays-10',
      prompt: "They can't wait to see him.",
      answer: 'Abia așteaptă să-l vadă.',
    },
    {
      id: 'life-holidays-11',
      prompt: "Let's go to the seaside.",
      answer: 'Hai să mergem la mare.',
      teachingNote: '"Mare" here is the sea — the same word as "big."',
    },
    {
      id: 'life-holidays-12',
      prompt: "Let's go to the mountains.",
      answer: 'Hai să mergem la munte.',
    },
    {
      id: 'life-holidays-13',
      prompt: 'The flight is early in the morning.',
      answer: 'Zborul e dimineața devreme.',
    },
    {
      id: 'life-holidays-14',
      prompt: 'The flight is delayed.',
      answer: 'Zborul are întârziere.',
    },
    {
      id: 'life-holidays-15',
      prompt: "Who's picking us up from the airport?",
      answer: 'Cine ne ia de la aeroport?',
    },
    {
      id: 'life-holidays-16',
      prompt: "We've landed!",
      answer: 'Am aterizat!',
    },
    {
      id: 'life-holidays-17',
      prompt: "Let's hire a car.",
      answer: 'Hai să închiriem o mașină.',
    },
    {
      id: 'life-holidays-18',
      prompt: "It's so hot here!",
      answer: 'Ce cald e aici!',
    },
    {
      id: 'life-holidays-19',
      prompt: 'Put some sun cream on him.',
      answer: 'Dă-l cu cremă de soare.',
    },
    {
      id: 'life-holidays-20',
      prompt: 'The suitcase is too heavy.',
      answer: 'Valiza e prea grea.',
    },
    {
      id: 'life-holidays-21',
      prompt: "I don't want to leave.",
      answer: 'Nu vreau să plec.',
    },
  ],
  conversationPrompts: [
    'Plan one real thing about the next trip with your partner in Romanian this week — dates, where you\'re staying, who you\'ll see.',
    'Whenever you book or pack anything, say it out loud in Romanian: "Am rezervat…", "Trebuie să facem bagajele."',
    'If you speak to family in Romania this week, tell them when you\'re coming — in Romanian.',
  ],
}
