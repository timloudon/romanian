import type { StructureLesson } from '../types'

export const commands: StructureLesson = {
  id: 's-commands',
  part: 'Joining ideas',
  title: 'Do it! Don\'t do it!',
  tagline: '"Don\'t" is nu + the dictionary form.',
  shift: {
    english: 'English just uses the plain verb: Come! Wait! Don\'t touch!',
    romanian: 'Romanian commands mostly look like "he does it" — and "don\'t" is {{nu}} + the dictionary form.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Do it',
      body: [
        'For most verbs ending in -a, telling one person to do something sounds like "he / she does it": {{Mănâncă!}} (Eat!), {{Așteaptă!}} (Wait!), {{Ascultă!}} (Listen!).',
        'A handful of the most common ones are short and just worth knowing: {{Vino!}} (Come!), {{Fă!}} (Do!), {{Dă-mi!}} (Give me!), {{Stai!}} (Stay / Wait!), {{Hai!}} (Come on!).',
      ],
    },
    {
      kind: 'explain',
      title: 'Don\'t do it: the easy one',
      body: [
        '"Don\'t" is {{nu}} + the dictionary form, without its "a": {{a pleca}} → {{Nu pleca!}} (Don\'t go!). {{a atinge}} → {{Nu atinge!}} (Don\'t touch!). {{a plânge}} → {{Nu plânge!}} (Don\'t cry!).',
        'No new endings to learn — it\'s the form you\'d look up in a dictionary.',
      ],
      glosses: [{ ro: 'Nu pleca!', words: [['Nu', 'not'], ['pleca', 'to-leave']], en: "Don't go!" }],
    },
    {
      kind: 'explain',
      title: 'Me, it, him on the end',
      body: [
        'In a command, the little words go on the end with a hyphen: {{Dă-mi!}} (give me), {{Ia-l!}} (take it), {{Sună-mă!}} (call me).',
        'With "don\'t" they go back to the front: {{Nu-l lua!}} (don\'t take it).',
      ],
    },
    {
      kind: 'explain',
      title: 'Softening it',
      body: [
        'Romanians soften commands the way English uses "just" or "please": {{Hai, mănâncă!}} (Come on, eat!), {{Te rog, vino.}} (Please come.)',
        'For your partner\'s parents, use the polite -ți form: {{Veniți!}} (Come!), {{Stați jos.}} (Sit down.)',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's16-01', prompt: 'Wait!', answer: 'Așteaptă!' },
        { id: 's16-02', prompt: 'Listen!', answer: 'Ascultă!' },
        { id: 's16-03', prompt: 'Come here!', answer: 'Vino aici!' },
        { id: 's16-04', prompt: "Don't go!", answer: 'Nu pleca!', hint: 'a pleca = to leave' },
        { id: 's16-05', prompt: "Don't cry!", answer: 'Nu plânge!' },
        { id: 's16-06', prompt: "Don't touch!", answer: 'Nu atinge!' },
        { id: 's16-07', prompt: 'Give me the phone.', answer: 'Dă-mi telefonul.' },
        { id: 's16-08', prompt: 'Take it!', answer: 'Ia-l!' },
        { id: 's16-09', prompt: "Don't eat that!", answer: 'Nu mânca asta!' },
        {
          id: 's16-10',
          prompt: "(politely, to your partner's parents) Please sit down.",
          answer: 'Vă rog, stați jos.',
        },
        { id: 's16-11', prompt: 'Tell me!', answer: 'Spune-mi!' },
      ],
    },
    {
      kind: 'choose',
      question: '"Don\'t run!" (a alerga — to run)',
      options: [{ text: 'Nu aleargă!' }, { text: 'Nu alerga!', correct: true }],
      explanation: 'Don\'t = nu + the dictionary form: alerga. "Aleargă" is "he runs" — or "Run!"',
    },
    {
      kind: 'assemble',
      prompt: "Don't forget the keys!",
      answer: 'Nu uita cheile!',
      distractors: ['uită', 'chei'],
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's16-12', prompt: 'Look!', answer: 'Uite!', acceptedAlternates: ['Uită-te'] },
        { id: 's16-13', prompt: 'Look at me.', answer: 'Uită-te la mine.' },
        { id: 's16-14', prompt: 'Don\'t be scared.', answer: 'Nu-ți fie frică.', teachingNote: 'The "to you it\'s fear" shape, as a command.' },
        { id: 's16-15', prompt: 'Hold my hand.', answer: 'Ține-mă de mână.' },
        { id: 's16-16', prompt: 'Wait for me!', answer: 'Așteaptă-mă!' },
        { id: 's16-17', prompt: 'Go to sleep.', answer: 'Culcă-te.' },
        { id: 's16-18', prompt: 'Quiet, please!', answer: 'Liniște, te rog!' },
        { id: 's16-19', prompt: '(politely) Come in! / Go ahead!', answer: 'Poftiți!', teachingNote: 'The polite all-rounder: come in, go ahead, here you are.' },
      ],
    },
  ],
  shortcut: 'Do it: mostly the "he / she" form — mănâncă! Don\'t: nu + the dictionary form — nu pleca!',
  useItToday: 'Give your son his instructions in Romanian all day: "Vino! Stai! Nu atinge! Dă-mi!"',
  seeAlso: { lessonId: 'u13-l01', label: 'Course: Everyday commands' },
}

export const neverDropThat: StructureLesson = {
  id: 's-that',
  part: 'Joining ideas',
  title: 'Never drop the "that"',
  tagline: '"I think it\'s good" needs a că: cred că e bine.',
  shift: {
    english: 'English quietly drops "that": I think it\'s good, I know you\'re busy.',
    romanian: 'Romanian always says it: {{cred că e bine}} — "I think that it\'s good".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The glue you can\'t leave out',
      body: [
        'English lets you drop "that": "I think (that) he\'s asleep." Romanian never does. The "that" is {{că}}: {{Cred că doarme.}} — "I think that he sleeps".',
        'It follows thinking, saying, knowing and hoping: {{cred că}} (I think), {{știu că}} (I know), {{zice că}} (he / she says), {{sper că}} (I hope).',
      ],
      glosses: [
        {
          ro: 'Știu că e greu.',
          words: [['Știu', 'I-know'], ['că', 'that'], ['e', "it's"], ['greu', 'hard']],
          en: "I know it's hard.",
        },
      ],
    },
    {
      kind: 'explain',
      title: 'Că or să?',
      body: [
        'Two little words, easy to mix up:',
        '{{că}} is "that" for **facts**: "I know that he\'s asleep" → {{Știu că doarme.}}',
        '{{să}} is the bridge for **wishes and needs**: "I want him to sleep" → {{Vreau să doarmă.}}',
        'Facts take că. Wishes take să.',
      ],
    },
    {
      kind: 'explain',
      title: 'Romanian keeps the tense',
      body: [
        'English shifts tenses when reporting: "I didn\'t know you **were** here." Romanian usually keeps what was true at the time: {{Nu știam că ești aici.}} — "I didn\'t know that you **are** here".',
        'Same with plans: "I told you I\'d be late" → {{Ți-am zis că o să întârzii.}} — "I told you that I\'ll be late".',
      ],
    },
    {
      kind: 'explain',
      title: 'The other glue',
      body: [
        '{{pentru că}} — because (literally "for that") · {{dacă}} — if, whether · {{când}} — when · {{deci}} — so · {{dar}} — but.',
        '{{Nu știu dacă vine.}} — I don\'t know if he\'s coming.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        {
          id: 's17-01',
          prompt: 'I think so.',
          answer: 'Cred că da.',
          teachingNote: '"I think that yes." And "I don\'t think so" is "I think that no".',
        },
        { id: 's17-02', prompt: "I don't think so.", answer: 'Cred că nu.', acceptedAlternates: ['Nu cred'] },
        { id: 's17-03', prompt: "I think he's asleep.", answer: 'Cred că doarme.' },
        { id: 's17-04', prompt: "I know it's hard.", answer: 'Știu că e greu.' },
        { id: 's17-05', prompt: "I hope you're well.", answer: 'Sper că ești bine.' },
        { id: 's17-06', prompt: "She says she's coming.", answer: 'Zice că vine.' },
        { id: 's17-07', prompt: "I don't know if he's coming.", answer: 'Nu știu dacă vine.' },
        {
          id: 's17-08',
          prompt: "I'm staying home because it's raining.",
          answer: 'Stau acasă pentru că plouă.',
        },
        { id: 's17-09', prompt: 'I want him to sleep.', answer: 'Vreau să doarmă.' },
        { id: 's17-10', prompt: "I told you I'd be late.", answer: 'Ți-am zis că o să întârzii.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I think it\'s a good idea."',
      options: [
        { text: 'Cred e o idee bună.' },
        { text: 'Cred că e o idee bună.', correct: true },
        { text: 'Cred să e o idee bună.' },
      ],
      explanation: 'Thinking takes că — and it can\'t be dropped.',
    },
    {
      kind: 'choose',
      question: '"I want you to know."',
      options: [{ text: 'Vreau că știi.' }, { text: 'Vreau să știi.', correct: true }],
      explanation: 'A wish, not a fact — so să.',
    },
    {
      kind: 'assemble',
      prompt: "I didn't know you were here.",
      answer: 'Nu știam că ești aici.',
      distractors: ['să', 'sunt'],
      note: '"That you are here" — Romanian keeps the tense that was true at the time. ("Că erai aici" is fine too.)',
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's17-11', prompt: 'I\'m glad you came.', answer: 'Mă bucur că ai venit.' },
        { id: 's17-12', prompt: 'Maybe he\'s tired.', answer: 'Poate că e obosit.' },
        { id: 's17-13', prompt: 'It\'s a shame you can\'t come.', answer: 'Păcat că nu poți să vii.' },
        { id: 's17-14', prompt: 'I heard it\'s going to rain.', answer: 'Am auzit că o să plouă.' },
        { id: 's17-15', prompt: 'I forgot it\'s Sunday.', answer: 'Am uitat că e duminică.' },
        { id: 's17-16', prompt: 'Call me when you arrive.', answer: 'Sună-mă când ajungi.' },
        { id: 's17-17', prompt: 'If you want, we can go.', answer: 'Dacă vrei, putem să mergem.' },
        { id: 's17-18', prompt: 'It\'s late, but I\'m not sleepy.', answer: 'E târziu, dar nu mi-e somn.' },
      ],
    },
  ],
  shortcut: 'Never drop "that": cred că, știu că. Facts take că; wishes take să.',
  useItToday: 'Give an opinion today starting with "Cred că…" — about food, the weather, anything.',
  seeAlso: { lessonId: 'u15-l01', label: 'Course: "Cred că…" — giving an opinion' },
}

export const storytelling: StructureLesson = {
  id: 's-story',
  part: 'Joining ideas',
  title: 'Telling a story: and then, suddenly, in the end',
  tagline: 'Mai întâi, apoi, deodată, până la urmă.',
  shift: {
    english: 'Stories run on "first", "and then", "suddenly", "in the end".',
    romanian: 'So do Romanian ones: {{mai întâi}}, {{apoi}}, {{deodată}}, {{până la urmă}} — with scenery in the {{mâncam}} form and events in the {{am mâncat}} form.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Sequencing words',
      body: [
        '{{mai întâi}} — first · {{apoi}} / {{pe urmă}} — then · {{după aceea}} — after that · {{între timp}} — meanwhile',
        '{{deodată}} — suddenly · {{până la urmă}} — in the end · {{în sfârșit}} — finally, at last',
      ],
    },
    {
      kind: 'explain',
      title: 'Scenery and events, together',
      body: [
        '{{Era târziu și ploua}} (scenery) {{când deodată a sunat telefonul}} (event). Scenery takes the -am forms; events take am / a + done.',
      ],
    },
    {
      kind: 'explain',
      title: 'Keeping your listener with you',
      body: [
        '{{Și știi ce?}} — and you know what? · {{Închipuie-ți!}} — imagine! · {{Pe scurt…}} — in short… · {{Ce să-ți mai zic…}} — what can I tell you…',
      ],
    },
    {
      kind: 'ladder',
      title: 'Tell it',
      rungs: [
        { id: 's65-01', prompt: 'First, we had breakfast.', answer: 'Mai întâi am luat micul dejun.' },
        { id: 's65-02', prompt: 'Then we went to the park.', answer: 'Apoi am mers în parc.' },
        { id: 's65-03', prompt: 'After that, it started raining.', answer: 'După aceea a început să plouă.' },
        { id: 's65-04', prompt: 'Suddenly he started crying.', answer: 'Deodată a început să plângă.' },
        { id: 's65-05', prompt: 'Meanwhile, Grandma was cooking.', answer: 'Între timp, bunica gătea.' },
        { id: 's65-06', prompt: 'In the end, we went home.', answer: 'Până la urmă, am mers acasă.' },
        { id: 's65-07', prompt: 'Finally, he fell asleep!', answer: 'În sfârșit, a adormit!' },
        { id: 's65-08', prompt: 'It was late and it was raining.', answer: 'Era târziu și ploua.' },
        { id: 's65-09', prompt: 'And you know what?', answer: 'Și știi ce?' },
        { id: 's65-10', prompt: 'Imagine!', answer: 'Închipuie-ți!' },
        { id: 's65-11', prompt: 'In short, it was a lovely day.', answer: 'Pe scurt, a fost o zi frumoasă.' },
      ],
    },
    {
      kind: 'choose',
      question: '"In the end we stayed at home."',
      options: [{ text: 'Până la urmă am stat acasă.', correct: true }, { text: 'În urmă am stat acasă.' }],
      explanation: 'În urmă means "behind" or "back then". In the end = până la urmă.',
    },
    {
      kind: 'assemble',
      prompt: 'Then suddenly the phone rang.',
      answer: 'Apoi deodată a sunat telefonul.',
      distractors: ['după', 'sună'],
    },
  ],
  shortcut: 'Mai întâi → apoi → după aceea → deodată → până la urmă → în sfârșit. Scenery with -am, events with am / a + done.',
  useItToday: 'Tell your partner about your day as a story tonight, using at least four of these.',
}
