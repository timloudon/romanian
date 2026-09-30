import type { LifeTopic } from '../types'

export const unwell: LifeTopic = {
  id: 'life-unwell',
  emoji: '🤒',
  title: "When he's unwell",
  summary: 'Temperatures, runny noses, medicine, and whether to call the doctor.',
  intro:
    'Worth having ready before you need it — the conversation when he\'s poorly is exactly when you won\'t want to reach for English.',
  drills: [
    {
      id: 'life-unwell-01',
      prompt: "How's he feeling?",
      answer: 'Cum se simte?',
    },
    {
      id: 'life-unwell-02',
      prompt: "He's not feeling well.",
      answer: 'Nu se simte bine.',
    },
    {
      id: 'life-unwell-03',
      prompt: 'He has a temperature.',
      answer: 'Are febră.',
      teachingNote: '"Are" (he has) is the full verb — not the "a" from "a mâncat," which only marks the past.',
    },
    {
      id: 'life-unwell-04',
      prompt: 'He has a cough.',
      answer: 'Are tuse.',
    },
    {
      id: 'life-unwell-05',
      prompt: 'He has a runny nose.',
      answer: 'Îi curge nasul.',
      teachingNote: 'Literally "the nose runs to him" — the same "to him" shape as "îi ies dinții."',
    },
    {
      id: 'life-unwell-06',
      prompt: '(sympathetically) Poor little thing!',
      answer: 'Săracul de el!',
      acceptedAlternates: ['Săracul!'],
    },
    {
      id: 'life-unwell-07',
      prompt: 'Shall we call the doctor?',
      answer: 'Să sunăm la doctor?',
      teachingNote: '"Să ___?" on its own is "shall we ___?"',
    },
    {
      id: 'life-unwell-08',
      prompt: "I'll take him to the doctor.",
      answer: 'Îl duc eu la doctor.',
    },
    {
      id: 'life-unwell-09',
      prompt: 'Did you give him his medicine?',
      answer: 'I-ai dat medicamentul?',
    },
    {
      id: 'life-unwell-10',
      prompt: 'He needs to rest.',
      answer: 'Trebuie să se odihnească.',
    },
    {
      id: 'life-unwell-11',
      prompt: 'Did he sleep through the night?',
      answer: 'A dormit toată noaptea?',
    },
    {
      id: 'life-unwell-12',
      prompt: 'His temperature has come down.',
      answer: 'I-a scăzut febra.',
    },
    {
      id: 'life-unwell-13',
      prompt: "He's feeling better.",
      answer: 'Se simte mai bine.',
    },
    {
      id: 'life-unwell-14',
      prompt: "He's been sick.",
      answer: 'A vomitat.',
    },
    {
      id: 'life-unwell-15',
      prompt: 'His ear hurts.',
      answer: 'Îl doare urechea.',
      teachingNote: 'Literally "the ear hurts him" — the same shape as "te doare?"',
    },
    {
      id: 'life-unwell-16',
      prompt: "Where's the thermometer?",
      answer: 'Unde e termometrul?',
    },
    {
      id: 'life-unwell-17',
      prompt: 'Give him plenty of water.',
      answer: 'Dă-i multă apă.',
    },
    {
      id: 'life-unwell-18',
      prompt: "I think he's coming down with something.",
      answer: 'Cred că se îmbolnăvește.',
    },
    {
      id: 'life-unwell-19',
      prompt: "I don't feel well either.",
      answer: 'Nici eu nu mă simt bine.',
    },
  ],
  conversationPrompts: [
    'Next time he\'s under the weather, talk it through with your partner in Romanian — symptoms, medicine, whether to call the doctor.',
    'Ask "Cum se simte?" when you get home, and follow the answer.',
  ],
}
