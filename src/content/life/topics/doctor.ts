import type { LifeTopic } from '../types'

export const doctor: LifeTopic = {
  id: 'life-doctor',
  emoji: '💊',
  title: 'Doctor & pharmacy',
  summary: 'Appointments, symptoms, prescriptions and the pharmacy.',
  intro:
    'Hopefully rare — but these are the moments you most want to be understood. Worth having ready before you need it.',
  drills: [
    {
      id: 'life-doctor-01',
      prompt: 'I\'d like to make an appointment.',
      answer: 'Aș vrea să fac o programare.',
    },
    {
      id: 'life-doctor-02',
      prompt: 'It\'s for my son.',
      answer: 'E pentru fiul meu.',
    },
    {
      id: 'life-doctor-03',
      prompt: 'He\'s had a temperature since yesterday.',
      answer: 'Are febră de ieri.',
    },
    {
      id: 'life-doctor-04',
      prompt: 'He\'s allergic to penicillin.',
      answer: 'E alergic la penicilină.',
    },
    {
      id: 'life-doctor-05',
      prompt: 'Where does it hurt?',
      answer: 'Unde te doare?',
    },
    {
      id: 'life-doctor-06',
      prompt: 'My back hurts.',
      answer: 'Mă doare spatele.',
    },
    {
      id: 'life-doctor-07',
      prompt: 'I\'ve got a sore throat.',
      answer: 'Mă doare gâtul.',
    },
    {
      id: 'life-doctor-08',
      prompt: 'Do I need a prescription?',
      answer: 'Am nevoie de rețetă?',
    },
    {
      id: 'life-doctor-09',
      prompt: 'Something for a cough, please.',
      answer: 'Ceva pentru tuse, vă rog.',
    },
    {
      id: 'life-doctor-10',
      prompt: 'How many times a day?',
      answer: 'De câte ori pe zi?',
    },
    {
      id: 'life-doctor-11',
      prompt: 'Before or after meals?',
      answer: 'Înainte sau după masă?',
    },
    {
      id: 'life-doctor-12',
      prompt: 'Is there a pharmacy open now?',
      answer: 'E vreo farmacie deschisă acum?',
    },
    {
      id: 'life-doctor-13',
      prompt: 'It\'s an emergency.',
      answer: 'E o urgență.',
    },
    {
      id: 'life-doctor-14',
      prompt: 'Call an ambulance!',
      answer: 'Sunați la ambulanță!',
      teachingNote: 'The emergency number in Romania is 112.',
    },
    {
      id: 'life-doctor-15',
      prompt: 'Get well soon!',
      answer: 'Să te faci bine!',
    },
  ],
  conversationPrompts: [
    'Save "Aș vrea să fac o programare" and "E pentru fiul meu" in your phone notes.',
    'Role-play a pharmacy visit with your partner — you\'re the customer.',
  ],
}
