import type { LifeTopic } from '../types'

export const realConversations: LifeTopic = {
  id: 'life-talk',
  emoji: '💬',
  title: 'Real conversations',
  summary: 'Open questions to ask each other — the start of real conversations in Romanian.',
  intro:
    'Drills get you ready; these get you talking. Ask one a night, then keep the conversation going in Romanian as long as you can.',
  drills: [
    {
      id: 'life-talk-01',
      prompt: 'What do you remember from your childhood?',
      answer: 'Ce-ți amintești din copilărie?',
    },
    {
      id: 'life-talk-02',
      prompt: 'What were you like as a child?',
      answer: 'Cum erai în copilărie?',
    },
    {
      id: 'life-talk-03',
      prompt: 'What was your favourite food?',
      answer: 'Care era mâncarea ta preferată?',
    },
    {
      id: 'life-talk-04',
      prompt: 'What was school like?',
      answer: 'Cum era la școală?',
    },
    {
      id: 'life-talk-05',
      prompt: 'Tell me about your grandparents.',
      answer: 'Povestește-mi despre bunicii tăi.',
    },
    {
      id: 'life-talk-06',
      prompt: 'Who were your best friends?',
      answer: 'Cine erau cei mai buni prieteni ai tăi?',
    },
    {
      id: 'life-talk-07',
      prompt: 'What do you miss about Romania?',
      answer: 'Ce-ți lipsește din România?',
      teachingNote: '"What is missing to you" — the Romanian way to say what you miss about a place.',
    },
    {
      id: 'life-talk-08',
      prompt: 'What Romanian traditions do you want him to know?',
      answer: 'Ce tradiții românești vrei să cunoască?',
    },
    {
      id: 'life-talk-09',
      prompt: 'What are you looking forward to?',
      answer: 'Ce aștepți cu nerăbdare?',
    },
    {
      id: 'life-talk-10',
      prompt: 'Where would you like to live?',
      answer: 'Unde ți-ar plăcea să locuiești?',
    },
    {
      id: 'life-talk-11',
      prompt: 'What would you do if you didn\'t have to work?',
      answer: 'Ce ai face dacă n-ar trebui să lucrezi?',
    },
    {
      id: 'life-talk-12',
      prompt: 'If you could go anywhere, where would you go?',
      answer: 'Dacă ai putea merge oriunde, unde ai merge?',
    },
    {
      id: 'life-talk-13',
      prompt: 'What\'s your favourite memory of us?',
      answer: 'Care e cea mai frumoasă amintire a noastră?',
    },
    {
      id: 'life-talk-14',
      prompt: 'What are you proud of?',
      answer: 'Cu ce te mândrești?',
    },
    {
      id: 'life-talk-15',
      prompt: 'How come?',
      answer: 'Cum așa?',
      teachingNote: 'A handy follow-up to keep them talking — "how so?"',
    },
  ],
  conversationPrompts: [
    'Ask one question each evening this week, then keep going with follow-ups in Romanian: "Și?", "Adică?", "Cum așa?"',
    'Note down any new word from their answers and drill it next time.',
  ],
}
