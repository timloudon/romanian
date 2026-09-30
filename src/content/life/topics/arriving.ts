import type { LifeTopic } from '../types'

export const arriving: LifeTopic = {
  id: 'life-arriving',
  emoji: '✈️',
  title: 'Arriving in Romania',
  summary: 'The airport, the hire car, the drive, and the first stop for mici.',
  intro:
    'The first few hours of every trip — the easiest moment to switch into Romanian for the whole holiday.',
  drills: [
    {
      id: 'life-arriving-01',
      prompt: 'Where\'s passport control?',
      answer: 'Unde e controlul pașapoartelor?',
    },
    {
      id: 'life-arriving-02',
      prompt: 'Our luggage hasn\'t arrived.',
      answer: 'Nu ne-au venit bagajele.',
    },
    {
      id: 'life-arriving-03',
      prompt: 'I\'ve booked a car.',
      answer: 'Am rezervat o mașină.',
    },
    {
      id: 'life-arriving-04',
      prompt: 'Is insurance included?',
      answer: 'Asigurarea e inclusă?',
    },
    {
      id: 'life-arriving-05',
      prompt: 'We need a child seat.',
      answer: 'Avem nevoie de un scaun pentru copil.',
    },
    {
      id: 'life-arriving-06',
      prompt: 'We need a road vignette.',
      answer: 'Avem nevoie de rovinietă.',
      teachingNote: 'Rovinieta — the road-tax sticker you need to drive on Romanian roads.',
    },
    {
      id: 'life-arriving-07',
      prompt: 'How do we get to Bucharest?',
      answer: 'Pe unde se ajunge la București?',
    },
    {
      id: 'life-arriving-08',
      prompt: 'How far is it to your parents\'?',
      answer: 'Cât mai e până la ai tăi?',
    },
    {
      id: 'life-arriving-09',
      prompt: 'Let\'s stop for some mici.',
      answer: 'Hai să oprim la niște mici.',
      teachingNote: 'Mici — little grilled sausages, the classic roadside stop.',
    },
    {
      id: 'life-arriving-10',
      prompt: 'We\'re nearly there.',
      answer: 'Aproape am ajuns.',
    },
    {
      id: 'life-arriving-11',
      prompt: 'The roads are much better now.',
      answer: 'Drumurile sunt mult mai bune acum.',
    },
    {
      id: 'life-arriving-12',
      prompt: 'Is there a cash machine round here?',
      answer: 'Există un bancomat pe aici?',
    },
    {
      id: 'life-arriving-13',
      prompt: 'Let\'s change some money.',
      answer: 'Hai să schimbăm niște bani.',
    },
    {
      id: 'life-arriving-14',
      prompt: 'We\'re so happy to be here!',
      answer: 'Ne bucurăm tare că suntem aici!',
    },
  ],
  conversationPrompts: [
    'Decide on the plane: from landing to arrival, the whole family speaks Romanian.',
    'Do the car-hire desk in Romanian, even if they answer in English.',
  ],
}
