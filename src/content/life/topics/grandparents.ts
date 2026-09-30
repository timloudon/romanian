import type { LifeTopic } from '../types'

export const grandparents: LifeTopic = {
  id: 'life-grandparents',
  emoji: '👵',
  title: 'The grandparents',
  summary: 'Video calls, visits, and everything bunica and bunicul want to know.',
  intro:
    'The calls to Romania, and the recap afterwards. Grandparents ask the same few questions every time — which makes this one of the easiest places to start speaking.',
  drills: [
    {
      id: 'life-grandparents-01',
      prompt: "Let's call your parents.",
      answer: 'Hai să-i sunăm pe ai tăi.',
      acceptedAlternates: ['Hai să-i sunăm pe părinții tăi.'],
      teachingNote: '"Ai tăi" (literally "yours") is the everyday way to say "your folks." "Îi" here means "them" — a masculine or mixed group.',
    },
    {
      id: 'life-grandparents-02',
      prompt: '(to him) Look, it\'s Grandma!',
      answer: 'Uite, e bunica!',
    },
    {
      id: 'life-grandparents-03',
      prompt: 'Grandma wants to see him.',
      answer: 'Bunica vrea să-l vadă.',
    },
    {
      id: 'life-grandparents-04',
      prompt: 'He recognised Grandma!',
      answer: 'A recunoscut-o pe bunica!',
      teachingNote: 'The feminine "o" jumps to the end again, same rule as "am văzut-o."',
    },
    {
      id: 'life-grandparents-05',
      prompt: 'They miss him.',
      answer: 'Le e dor de el.',
      acceptedAlternates: ['Le este dor de el.'],
      teachingNote: 'Same shape as "mi-e dor de tine" — just "to them" (le) and "of him" (de el).',
    },
    {
      id: 'life-grandparents-06',
      prompt: "He's grown so much.",
      answer: 'A crescut atât de mult.',
    },
    {
      id: 'life-grandparents-07',
      prompt: 'When are they coming to visit?',
      answer: 'Când vin în vizită?',
    },
    {
      id: 'life-grandparents-08',
      prompt: 'Grandpa sent him a present.',
      answer: 'Bunicul i-a trimis un cadou.',
    },
    {
      id: 'life-grandparents-09',
      prompt: 'Your mum called.',
      answer: 'A sunat mama ta.',
    },
    {
      id: 'life-grandparents-10',
      prompt: 'What did your dad say?',
      answer: 'Ce a zis tatăl tău?',
    },
    {
      id: 'life-grandparents-11',
      prompt: "We'll see them in the summer.",
      answer: 'O să-i vedem la vară.',
    },
    {
      id: 'life-grandparents-12',
      prompt: '(ending a call) Love you, bye!',
      answer: 'Te pup, pa!',
      teachingNote: '"Te pup" (literally "I kiss you") is how family calls end — as automatic as "love you, bye."',
    },
    {
      id: 'life-grandparents-13',
      prompt: 'Is she coming too?',
      answer: 'Vine și ea?',
    },
    {
      id: 'life-grandparents-14',
      prompt: '(to him) Say hello to Grandma!',
      answer: 'Salut-o pe bunica!',
    },
    {
      id: 'life-grandparents-15',
      prompt: 'Send them some photos.',
      answer: 'Trimite-le niște poze.',
    },
    {
      id: 'life-grandparents-16',
      prompt: 'Say hi to your parents from me!',
      answer: 'Salutări alor tăi!',
      teachingNote: '"Ai tăi" — "yours" — is how Romanians say "your parents"; "alor tăi" is "to yours."',
    },
    {
      id: 'life-grandparents-17',
      prompt: 'How are they doing?',
      answer: 'Ce mai fac?',
    },
    {
      id: 'life-grandparents-18',
      prompt: "Grandma's going to spoil him.",
      answer: 'Bunica o să-l răsfețe.',
    },
    {
      id: 'life-grandparents-19',
      prompt: "They're coming for Christmas.",
      answer: 'Vin de Crăciun.',
    },
    {
      id: 'life-grandparents-20',
      prompt: 'Can they look after him on Saturday?',
      answer: 'Pot să stea cu el sâmbătă?',
      teachingNote: '"A sta cu" — literally "to stay with" — is "to look after" a child.',
    },
  ],
  conversationPrompts: [
    'On your next call with family, say at least three things in Romanian — even just "Uite, e bunica!" and "Te pup, pa!"',
    'After a call, recap it with your partner in Romanian: who called, what they said.',
    'Ask your partner what their parents said last time they spoke, and follow the answer in Romanian.',
  ],
}
