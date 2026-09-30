import type { StructureLesson } from '../types'

export const past: StructureLesson = {
  id: 's-past',
  part: 'Time',
  title: 'Every past is "I have done"',
  tagline: '"I ate", "I\'ve eaten" and "I did eat" are all am mâncat.',
  shift: {
    english: 'English has "I ate", "I have eaten", "I did eat" — and you have to pick one.',
    romanian: 'Everyday Romanian has one past, shaped like "I have eaten": {{am mâncat}}. It covers all of them.',
  },
  steps: [
    {
      kind: 'funnel',
      title: 'One past for everything',
      english: ['I ate', "I've eaten", 'I did eat'],
      ro: 'Am mâncat.',
      caption: 'Always think "have": "I have eaten". That one shape is your whole everyday past.',
    },
    {
      kind: 'explain',
      title: 'Have + done',
      body: [
        '{{am}} is "I have" — you know it already from {{Am o întrebare}} (I have a question). Put it in front of the "done" form: {{am mâncat}} — "I have eaten" — I ate.',
        'The "have" changes for who; the "done" part never does:',
        '**am** mâncat — I ate · **ai** mâncat — you ate · **a** mâncat — he / she ate',
        '**am** mâncat — we ate · **ați** mâncat — you all ate · **au** mâncat — they ate',
        '"I" and "we" are the same word. Context sorts it out, just like "you" does in English.',
      ],
      glosses: [
        { ro: 'Am mâncat.', words: [['Am', 'I-have'], ['mâncat', 'eaten']], en: 'I ate.' },
        { ro: 'Ce ai făcut?', words: [['Ce', 'what'], ['ai', 'you-have'], ['făcut', 'done']], en: 'What did you do?' },
      ],
    },
    {
      kind: 'explain',
      title: 'Making the "done" form',
      body: [
        'Most verbs: take the "to" form and add **-t**. {{a mânca}} → {{mâncat}}, {{a lucra}} → {{lucrat}}, {{a vorbi}} → {{vorbit}}, {{a dormi}} → {{dormit}}.',
        'A big family ends in **-ut** — Romanian\'s version of English "done", "seen", "had": {{făcut}} (done / made), {{văzut}} (seen), {{avut}} (had), {{putut}} (been able), {{vrut}} (wanted), {{fost}} (been).',
      ],
    },
    {
      kind: 'funnel',
      title: 'No "did" in questions',
      english: ['Did you eat?', 'Have you eaten?'],
      ro: 'Ai mâncat?',
      caption: 'There\'s no "did" to translate. "Have you eaten?" covers both.',
    },
    {
      kind: 'explain',
      title: '"Didn\'t" is n-am',
      body: [
        '{{nu am}} squashes to {{n-am}}: {{N-am mâncat.}} — I didn\'t eat, I haven\'t eaten. {{N-ai}} — you didn\'t. {{N-a}} — he or she didn\'t.',
      ],
    },
    {
      kind: 'explain',
      title: 'Am fost: I was, and I went',
      body: [
        '{{am fost}} is both "I was" and "I went (somewhere)": {{Am fost la mare.}} — we went to the seaside / we\'ve been to the seaside.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Build it up',
      rungs: [
        { id: 's06-01', prompt: 'I ate.', answer: 'Am mâncat.' },
        { id: 's06-02', prompt: 'Have you eaten?', answer: 'Ai mâncat?' },
        { id: 's06-03', prompt: "He's eaten everything.", answer: 'A mâncat tot.', hint: 'a = he has; tot = everything' },
        { id: 's06-04', prompt: "I didn't sleep.", answer: 'N-am dormit.' },
        { id: 's06-05', prompt: 'Did you sleep well?', answer: 'Ai dormit bine?' },
        { id: 's06-06', prompt: 'What did you do today?', answer: 'Ce ai făcut azi?' },
        { id: 's06-07', prompt: 'I worked a lot.', answer: 'Am lucrat mult.' },
        { id: 's06-08', prompt: 'I talked to your mum.', answer: 'Am vorbit cu mama ta.', hint: 'talked with: vorbit cu' },
        { id: 's06-09', prompt: 'We saw a film.', answer: 'Am văzut un film.' },
        { id: 's06-10', prompt: "I couldn't.", answer: 'N-am putut.' },
        { id: 's06-11', prompt: "I didn't want to.", answer: 'N-am vrut.' },
        { id: 's06-12', prompt: 'Where have you been?', answer: 'Unde ai fost?' },
      ],
    },
    {
      kind: 'choose',
      question: '"Did you understand?"',
      options: [{ text: 'Ai înțeles?', correct: true }, { text: 'Ai înțelege?' }, { text: 'Făcut înțeles?' }],
      explanation: '"Have you understood?" — ai + înțeles. Înțeles is one of the odd "done" forms, like English "understood".',
    },
    {
      kind: 'assemble',
      prompt: "We didn't sleep at all last night.",
      answer: 'N-am dormit deloc azi-noapte.',
      distractors: ['nu', 'dormim'],
      note: 'Deloc — at all. Azi-noapte — last night (literally "today-night").',
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's06-13', prompt: 'We went to the seaside.', answer: 'Am fost la mare.' },
        { id: 's06-14', prompt: '(looking back on the day) It was lovely.', answer: 'A fost frumos.', teachingNote: 'Looking back on the whole thing — a fost.' },
        { id: 's06-15', prompt: 'I forgot.', answer: 'Am uitat.' },
        { id: 's06-16', prompt: 'What did you say?', answer: 'Ce ai zis?' },
        { id: 's06-17', prompt: 'I haven\'t finished.', answer: 'N-am terminat.' },
        { id: 's06-18', prompt: 'We didn\'t have time.', answer: 'N-am avut timp.' },
        { id: 's06-19', prompt: 'Did you understand everything?', answer: 'Ai înțeles tot?' },
        { id: 's06-20', prompt: 'I told you!', answer: 'Ți-am zis!', teachingNote: 'Ți — "to you" — goes in front.' },
      ],
    },
  ],
  shortcut: 'Every past is "have done": am / ai / a / am / ați / au + mâncat. No "did": "Ai mâncat?" is "Have you eaten?"',
  useItToday: 'At the end of the day, tell your partner three things you did, each one starting with "Am…".',
  seeAlso: { lessonId: 'u03-l01', label: 'Course: "Am mers..." — saying what you did' },
}

export const future: StructureLesson = {
  id: 's-future',
  part: 'Time',
  title: 'The future costs nothing',
  tagline: 'Put o să in front of what you already know.',
  shift: {
    english: 'English has "I\'ll go" and "I\'m going to go".',
    romanian: 'Romanian puts {{o să}} in front of the present: {{o să merg}}. The "o" never changes.',
  },
  steps: [
    {
      kind: 'funnel',
      title: 'Think "gonna"',
      english: ["I'll go", "I'm going to go", "I'm gonna go"],
      ro: 'O să merg.',
      caption: 'O să is "gonna". Everything after it is the present you already know.',
    },
    {
      kind: 'explain',
      title: 'Nothing new to learn',
      body: [
        '{{o să}} never changes. The verb after it is exactly what comes after {{vreau să}}: {{o să merg}} (I\'ll go), {{o să mergi}} (you\'ll go), {{o să mergem}} (we\'ll go). If you can say it now, you can say it tomorrow.',
        '"Won\'t" is {{n-o să}}: {{N-o să uit.}} — I won\'t forget.',
        'And just like English "Tomorrow I\'m working", Romanian often uses the plain present when the time is clear: {{Mâine lucrez.}}',
      ],
      glosses: [
        { ro: 'O să plouă.', words: [['O să', 'gonna'], ['plouă', 'it-rains']], en: "It's going to rain." },
      ],
    },
    {
      kind: 'timeline',
      title: 'Yesterday, now, tomorrow',
      intro: 'Tap between the three and watch what changes. Only the front of the sentence moves.',
      sentences: [
        {
          past: { en: 'I worked from home.', ro: 'Am lucrat de acasă.' },
          present: { en: "I'm working from home.", ro: 'Lucrez de acasă.' },
          future: { en: "I'll work from home.", ro: 'O să lucrez de acasă.' },
        },
        {
          past: { en: 'We went to the park.', ro: 'Am mers în parc.' },
          present: { en: "We're going to the park.", ro: 'Mergem în parc.' },
          future: { en: "We'll go to the park.", ro: 'O să mergem în parc.' },
        },
        {
          past: { en: 'He slept well.', ro: 'A dormit bine.' },
          present: { en: "He's sleeping well.", ro: 'Doarme bine.' },
          future: { en: "He'll sleep well.", ro: 'O să doarmă bine.' },
        },
        {
          past: { en: "I didn't understand.", ro: 'N-am înțeles.' },
          present: { en: "I don't understand.", ro: 'Nu înțeleg.' },
          future: { en: "I won't understand.", ro: 'N-o să înțeleg.' },
        },
      ],
    },
    {
      kind: 'explain',
      title: 'The one you\'ll hear on the news',
      body: [
        '{{Voi merge}}, {{vom vedea}} — the formal future. You\'ll hear {{Vom vedea}} ("we\'ll see") all the time, but for your own speaking, {{o să}} is all you need.',
      ],
    },
    {
      kind: 'explain',
      title: 'Two more futures you\'ll hear',
      body: [
        '{{am să merg}} — a slightly more careful everyday future: "I\'m to go". {{Am să-ți spun.}} — I\'ll tell you.',
        'In Moldova and from older people: {{oi merge}} — "I\'ll go". Recognise both; {{o să}} still does everything you need.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Build it up',
      rungs: [
        { id: 's07-01', prompt: "I'll call you.", answer: 'O să te sun.', acceptedAlternates: ['Te sun'], hint: 'te = you, before the verb' },
        { id: 's07-02', prompt: "I'll call you tonight.", answer: 'O să te sun diseară.' },
        { id: 's07-03', prompt: "It's going to rain.", answer: 'O să plouă.' },
        {
          id: 's07-04',
          prompt: "We'll see.",
          answer: 'Vom vedea.',
          acceptedAlternates: ['O să vedem.'],
          teachingNote: 'The formal future, used as a fixed phrase. "O să vedem" is fine too.',
        },
        {
          id: 's07-05',
          prompt: "He's going to be tired.",
          answer: 'O să fie obosit.',
          teachingNote: 'Fie is how "is" (e) looks after să — the same shift as doarme → doarmă.',
        },
        { id: 's07-06', prompt: "I won't be late.", answer: 'N-o să întârzii.' },
        { id: 's07-07', prompt: 'What are we going to do?', answer: 'Ce o să facem?' },
        { id: 's07-08', prompt: "Tomorrow I'm working.", answer: 'Mâine lucrez.' },
        {
          id: 's07-09',
          prompt: "You're going to like it.",
          answer: 'O să-ți placă.',
          teachingNote: 'From îmi place — "to me it pleases". There\'s a whole lesson on that shape.',
        },
        {
          id: 's07-10',
          prompt: "We'll talk later.",
          answer: 'Vorbim mai târziu.',
          teachingNote: 'The plain present for the future again — very common.',
        },
      ],
    },
    {
      kind: 'choose',
      question: '"I\'ll do it tomorrow."',
      options: [
        { text: 'O să fac asta mâine.', correct: true },
        { text: 'Voi să fac asta mâine.' },
        { text: 'O fac să mâine.' },
      ],
      explanation: 'O să + fac. Don\'t mix the two: it\'s either "o să fac" or the formal "voi face" — never "voi să".',
    },
    {
      kind: 'assemble',
      prompt: "We're going to spend Christmas in Romania.",
      answer: 'O să petrecem Crăciunul în România.',
      distractors: ['vom', 'petrec'],
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's07-11', prompt: 'I\'ll tell you later.', answer: 'O să-ți spun mai târziu.' },
        { id: 's07-12', prompt: 'It\'ll be fine.', answer: 'O să fie bine.' },
        { id: 's07-13', prompt: 'Are you going to come?', answer: 'O să vii?' },
        { id: 's07-14', prompt: 'He\'s going to fall!', answer: 'O să cadă!' },
        { id: 's07-15', prompt: 'I\'ll never forget.', answer: 'N-o să uit niciodată.' },
        { id: 's07-16', prompt: 'What are you going to eat?', answer: 'Ce o să mănânci?' },
        { id: 's07-17', prompt: 'Next week we\'re going to Romania.', answer: 'Săptămâna viitoare mergem în România.', teachingNote: 'Plain present with a time word.' },
      ],
    },
  ],
  shortcut: 'Future = o să + the present you already know. Won\'t = n-o să. Or just the present, with a time word.',
  useItToday: 'Tell your partner your plans for tomorrow with "O să…" — or the plain present: "Mâine lucrez."',
  seeAlso: { lessonId: 'u07-l01', label: 'Course: "O să..." — talking about the future' },
}

export const since: StructureLesson = {
  id: 's-since',
  part: 'Time',
  title: '"I\'ve been waiting an hour" = "I wait since an hour"',
  tagline: 'No "have been -ing": if it\'s still going on, use the present with de.',
  shift: {
    english: 'English says "I\'ve been living here for ten years" — a three-part verb.',
    romanian: 'Romanian says "I live here since ten years" — {{locuiesc aici de zece ani}}. It\'s still happening, so it\'s the present.',
  },
  steps: [
    {
      kind: 'funnel',
      title: 'Still going on? Present.',
      english: ["I've been waiting for an hour", "I've waited an hour (and I'm still waiting)"],
      ro: 'Aștept de o oră.',
      caption: 'De means "since" or "for" here.',
    },
    {
      kind: 'explain',
      title: 'Ask: is it still happening?',
      body: [
        'If yes, use the plain present and add {{de}} + the time: {{Lucrez aici de doi ani.}} — "I work here since two years".',
        'To ask "How long have you…?", use {{De când}} — "since when": {{De când aștepți?}}',
      ],
      glosses: [
        {
          ro: 'Ne cunoaștem de mult.',
          words: [['Ne cunoaștem', 'we-know-each-other'], ['de mult', 'since-long']],
          en: "We've known each other for a long time.",
        },
      ],
    },
    {
      kind: 'explain',
      title: 'De, the busy little word',
      body: [
        '{{de}} does jobs that take several words in English: "of" — {{o cană de cafea}} · "from" — {{de acasă}} · "for / since" — {{de o oră}} · "to" in "something to eat" — {{ceva de mâncare}}.',
        'When you\'re not sure which little word goes somewhere, {{de}} is a good first guess.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Build it up',
      rungs: [
        { id: 's08-01', prompt: "I've been waiting for an hour.", answer: 'Aștept de o oră.' },
        { id: 's08-02', prompt: 'How long have you been waiting?', answer: 'De când aștepți?' },
        {
          id: 's08-03',
          prompt: "We've been together for twelve years.",
          answer: 'Suntem împreună de doisprezece ani.',
          hint: 'suntem = we are; împreună = together',
        },
        {
          id: 's08-04',
          prompt: "I've been living here for years.",
          answer: 'Locuiesc aici de ani de zile.',
          teachingNote: '"Ani de zile" — "years of days" — is how Romanians say "for years".',
        },
        { id: 's08-05', prompt: "He's been crying for ten minutes.", answer: 'Plânge de zece minute.' },
        {
          id: 's08-06',
          prompt: "I've known her for a long time.",
          answer: 'O cunosc de mult.',
          hint: 'o = her, before the verb',
        },
        { id: 's08-07', prompt: "I've been learning Romanian for a year.", answer: 'Învăț română de un an.' },
        { id: 's08-08', prompt: 'Since when?', answer: 'De când?' },
        { id: 's08-09', prompt: 'A cup of coffee.', answer: 'O cană de cafea.' },
        { id: 's08-10', prompt: 'Something to eat.', answer: 'Ceva de mâncare.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I\'ve been working since eight."',
      options: [
        { text: 'Am lucrat de la opt.' },
        { text: 'Lucrez de la opt.', correct: true },
        { text: 'Sunt lucrând de la opt.' },
      ],
      explanation: 'Still working, so the present. "Since eight o\'clock" is de la opt — "from eight".',
    },
    {
      kind: 'assemble',
      prompt: "We've been waiting since this morning.",
      answer: 'Așteptăm de azi-dimineață.',
      distractors: ['am', 'așteptat'],
      note: 'Azi-dimineață — this morning, literally "today-morning".',
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's08-11', prompt: 'How long have you known each other?', answer: 'De când vă cunoașteți?' },
        { id: 's08-12', prompt: 'I\'ve been here since Monday.', answer: 'Sunt aici de luni.' },
        { id: 's08-13', prompt: 'He\'s been asleep since eight.', answer: 'Doarme de la opt.' },
        { id: 's08-14', prompt: 'We\'ve been living here for three years.', answer: 'Locuim aici de trei ani.' },
        { id: 's08-15', prompt: 'It\'s been raining since this morning.', answer: 'Plouă de azi-dimineață.' },
        { id: 's08-16', prompt: 'A glass of water.', answer: 'Un pahar de apă.' },
        { id: 's08-17', prompt: 'Something to drink.', answer: 'Ceva de băut.' },
      ],
    },
  ],
  shortcut: 'Still going on? Present + de: "Aștept de o oră." Ask with "De când…?"',
  useItToday: 'Ask your partner a "De când…?" question — how long they\'ve known a friend, lived somewhere, had something.',
}

export const usedTo: StructureLesson = {
  id: 's-used-to',
  part: 'Time',
  title: 'Was -ing and used to: one form',
  tagline: 'The background of a story: mâncam, eram, aveam.',
  shift: {
    english: 'English has "I was eating", "I used to eat" and "I would eat (every summer)".',
    romanian: 'Romanian has one form for all three — {{mâncam}} — the scenery of a story.',
  },
  steps: [
    {
      kind: 'funnel',
      title: 'Ongoing or habitual in the past',
      english: ['I was eating', 'I used to eat', 'I would eat (every summer)'],
      ro: 'Mâncam.',
      caption: 'Anything that was going on, or kept happening.',
    },
    {
      kind: 'explain',
      title: 'Scenery and events',
      body: [
        'Think of a story as a stage. {{am mâncat}} is an **event** — something happened. {{mâncam}} is the **scenery** — what was going on, or what used to happen.',
        '"I was eating (scenery) when you called (event)": {{Mâncam când ai sunat.}}',
      ],
      glosses: [
        {
          ro: 'Mâncam când ai sunat.',
          words: [['Mâncam', 'I-was-eating'], ['când', 'when'], ['ai sunat', 'you-have called']],
          en: 'I was eating when you called.',
        },
      ],
    },
    {
      kind: 'explain',
      title: 'The endings',
      body: [
        'They\'re the endings you know from "have": **-am, -ai, -a, -am, -ați, -au**. {{mâncam}}, {{mâncai}}, {{mânca}}…',
        'Verbs ending in -i or -e use **-eam**: {{dormeam}}, {{făceam}}, {{puteam}}, {{mergeam}}.',
        'Three to learn as words, because you\'ll use them in every story: {{eram}} (I was), {{aveam}} (I had), {{voiam}} (I wanted).',
      ],
      glosses: [
        { ro: 'Când eram copil…', words: [['Când', 'when'], ['eram', 'I-was'], ['copil', 'child']], en: 'When I was a kid…' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Tell a story',
      rungs: [
        { id: 's09-01', prompt: 'I was a kid.', answer: 'Eram copil.' },
        {
          id: 's09-02',
          prompt: 'When I was a kid, I used to play football.',
          answer: 'Când eram copil, jucam fotbal.',
        },
        {
          id: 's09-03',
          prompt: 'We used to go to the seaside every summer.',
          answer: 'Mergeam la mare în fiecare vară.',
          hint: 'în fiecare vară = every summer',
        },
        { id: 's09-04', prompt: 'I was sleeping.', answer: 'Dormeam.' },
        { id: 's09-05', prompt: 'I was sleeping when you called.', answer: 'Dormeam când ai sunat.' },
        { id: 's09-06', prompt: 'What were you doing?', answer: 'Ce făceai?' },
        {
          id: 's09-07',
          prompt: 'I wanted to tell you something.',
          answer: 'Voiam să-ți spun ceva.',
          teachingNote: 'Voiam is softer than am vrut — like English "I was wanting to…".',
        },
        { id: 's09-08', prompt: '(setting the scene) It was lovely.', answer: 'Era frumos.' },
        { id: 's09-09', prompt: "I didn't know.", answer: 'Nu știam.' },
        {
          id: 's09-10',
          prompt: "We didn't have a car back then.",
          answer: 'Nu aveam mașină pe atunci.',
          hint: 'pe atunci = back then',
        },
      ],
    },
    {
      kind: 'choose',
      question: '"I was cooking when he woke up."',
      options: [{ text: 'Am gătit când s-a trezit.' }, { text: 'Găteam când s-a trezit.', correct: true }],
      explanation: 'The cooking is the scenery (găteam); waking up is the event (s-a trezit).',
    },
    {
      kind: 'assemble',
      prompt: 'When he was little, he used to sleep a lot.',
      answer: 'Când era mic, dormea mult.',
      distractors: ['am', 'dormit'],
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's09-11', prompt: 'I used to live in London.', answer: 'Locuiam în Londra.' },
        { id: 's09-12', prompt: 'We used to go out every weekend.', answer: 'Ieșeam în oraș în fiecare weekend.' },
        { id: 's09-13', prompt: 'It was raining.', answer: 'Ploua.' },
        { id: 's09-14', prompt: 'It was cold.', answer: 'Era frig.' },
        { id: 's09-15', prompt: 'I wanted to ask you something.', answer: 'Voiam să te întreb ceva.' },
        { id: 's09-16', prompt: 'I thought you were at work.', answer: 'Credeam că ești la serviciu.', teachingNote: 'Romanian keeps "you are" after că — more on that in "Never drop the that".' },
        { id: 's09-17', prompt: 'What did you want?', answer: 'Ce voiai?' },
        { id: 's09-18', prompt: 'He used to cry every night.', answer: 'Plângea în fiecare seară.' },
      ],
    },
  ],
  shortcut: 'Events: am mâncat. Scenery and habits — was -ing, used to: mâncam, eram, aveam.',
  useItToday: 'Tell your partner — or your son — one thing you used to do as a kid: "Când eram copil, …"',
  seeAlso: { lessonId: 'u16-l01', label: 'Course: Used to, was, were' },
}

export const would: StructureLesson = {
  id: 's-would',
  part: 'Time',
  title: 'I\'d, you\'d, it\'d: aș, ai, ar',
  tagline: 'One little word turns "I want" into "I\'d like".',
  shift: {
    english: 'English squeezes "would" into \'d: I\'d like, I\'d go, it\'d be.',
    romanian: 'Romanian has its own little \'d in front of the verb: {{aș vrea}}, {{aș merge}}, {{ar fi}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Aș is "I\'d"',
      body: [
        '{{aș}} works just like "I\'d": put it in front of the plain verb. {{Aș vrea}} — I\'d like. {{Aș merge}} — I\'d go.',
        'You\'ll mostly need three: {{aș}} (I\'d), {{ai}} (you\'d), {{ar}} (it\'d / he\'d / she\'d / they\'d).',
        'The verb after it is the dictionary form without the "a": {{a merge}} → {{aș merge}}, {{a fi}} → {{ar fi}} (it would be).',
      ],
      glosses: [
        { ro: 'Ar fi frumos.', words: [['Ar', "it'd"], ['fi', 'be'], ['frumos', 'lovely']], en: 'It would be lovely.' },
      ],
    },
    {
      kind: 'explain',
      title: '"If I\'d have time"',
      body: [
        '"If I had time, I\'d go" — Romanian puts the \'d on both halves: {{Dacă aș avea timp, aș merge.}} — "If I\'d have time, I\'d go". Exactly what English teachers correct; exactly what Romanian wants.',
      ],
    },
    {
      kind: 'explain',
      title: 'Should and could, for free',
      body: [
        '"Should" is "it would be necessary": {{ar trebui}}. {{Ar trebui să plecăm.}} — We should go.',
        '"Could you…?" is "would you be able": {{Ai putea să…?}} — the politest way to ask for something.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Build it up',
      rungs: [
        { id: 's10-01', prompt: "I'd like a coffee.", answer: 'Aș vrea o cafea.' },
        { id: 's10-02', prompt: 'Would you like a coffee?', answer: 'Ai vrea o cafea?' },
        { id: 's10-03', prompt: 'It would be lovely.', answer: 'Ar fi frumos.' },
        { id: 's10-04', prompt: 'It would be better.', answer: 'Ar fi mai bine.', hint: 'mai bine = better' },
        { id: 's10-05', prompt: "I'd go, but I have to work.", answer: 'Aș merge, dar trebuie să lucrez.' },
        { id: 's10-06', prompt: "If I had time, I'd go.", answer: 'Dacă aș avea timp, aș merge.' },
        { id: 's10-07', prompt: 'What would you do?', answer: 'Ce ai face?' },
        {
          id: 's10-08',
          prompt: 'Could you help me?',
          answer: 'Ai putea să mă ajuți?',
          hint: 'mă = me, before the verb',
        },
        { id: 's10-09', prompt: "I'd rather stay at home.", answer: 'Aș prefera să rămân acasă.' },
        { id: 's10-10', prompt: 'We should go.', answer: 'Ar trebui să mergem.' },
      ],
    },
    {
      kind: 'choose',
      question: '"You should rest."',
      options: [
        { text: 'Trebuie să te odihnești.' },
        { text: 'Ar trebui să te odihnești.', correct: true },
        { text: 'Aș trebui să te odihnești.' },
      ],
      explanation: '"Should" is "it would need": ar trebui. Trebuie on its own is the stronger "must". Aș would be "I\'d".',
    },
    {
      kind: 'assemble',
      prompt: 'It would be nice to go to the seaside.',
      answer: 'Ar fi frumos să mergem la mare.',
      distractors: ['aș', 'e'],
      note: 'Romanian says "it would be nice that we go" — să + we.',
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's10-11', prompt: 'I\'d like to go to the seaside.', answer: 'Aș vrea să merg la mare.' },
        { id: 's10-12', prompt: 'It\'d be better to stay.', answer: 'Ar fi mai bine să rămânem.' },
        { id: 's10-13', prompt: 'Would you like to come?', answer: 'Ai vrea să vii?' },
        { id: 's10-14', prompt: 'I wouldn\'t do that.', answer: 'N-aș face asta.' },
        { id: 's10-15', prompt: 'What would you like to eat?', answer: 'Ce ai vrea să mănânci?' },
        { id: 's10-16', prompt: 'You should sleep.', answer: 'Ar trebui să dormi.' },
        { id: 's10-17', prompt: 'I\'d like to, but I can\'t.', answer: 'Aș vrea, dar nu pot.' },
        { id: 's10-18', prompt: 'Could you pass me the water?', answer: 'Ai putea să-mi dai apa?' },
      ],
    },
  ],
  shortcut: "'d = aș / ai / ar + the plain verb. Should = ar trebui. Could you…? = Ai putea să…?",
  useItToday: 'Ask for something politely today with "Aș vrea…" or "Ai putea să…?"',
  seeAlso: { lessonId: 'u09-l01', label: 'Course: "Aș vrea..." — a softer way to ask' },
}

export const agoAndIn: StructureLesson = {
  id: 's-ago',
  part: 'Time',
  title: 'Ago, in, every, twice',
  tagline: '"Two years ago" = "now two years": acum doi ani.',
  shift: {
    english: 'English says "two years ago", "in an hour", "every day", "twice a week".',
    romanian: 'Romanian puts the time word first: {{acum doi ani}} ("now two years"), {{peste o oră}} ("over an hour"), {{în fiecare zi}}, {{de două ori}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Ago and in',
      body: [
        '{{acum}} + time = ago: {{acum doi ani}} — two years ago. {{acum o oră}} — an hour ago.',
        '{{peste}} + time = in (from now): {{peste o oră}} — in an hour. {{peste o săptămână}} — in a week.',
      ],
      glosses: [
        { ro: 'Acum doi ani.', words: [['Acum', 'now'], ['doi ani', 'two years']], en: 'Two years ago.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Every, once, twice, sometimes',
      body: [
        '{{în fiecare zi}} — every day. {{o dată}} — once. {{de două ori}} — twice. {{de trei ori pe săptămână}} — three times a week.',
        '{{mereu}} — always · {{uneori}} — sometimes · {{rar}} — rarely · {{zilnic}} — daily.',
      ],
    },
    {
      kind: 'explain',
      title: 'Last, next, and the two extra days',
      body: [
        '{{anul trecut}} — last year · {{săptămâna viitoare}} — next week · {{luna asta}} — this month.',
        'Romanian has single words for {{alaltăieri}} — the day before yesterday — and {{poimâine}} — the day after tomorrow.',
      ],
    },
    {
      kind: 'ladder',
      title: 'When?',
      rungs: [
        { id: 's56-01', prompt: 'Two years ago.', answer: 'Acum doi ani.' },
        { id: 's56-02', prompt: 'An hour ago.', answer: 'Acum o oră.' },
        { id: 's56-03', prompt: 'We met ten years ago.', answer: 'Ne-am cunoscut acum zece ani.' },
        { id: 's56-04', prompt: 'In an hour.', answer: 'Peste o oră.' },
        { id: 's56-05', prompt: 'I\'ll be home in ten minutes.', answer: 'Ajung acasă peste zece minute.' },
        { id: 's56-06', prompt: 'Every day.', answer: 'În fiecare zi.' },
        { id: 's56-07', prompt: 'Twice a week.', answer: 'De două ori pe săptămână.' },
        { id: 's56-08', prompt: 'Once a year.', answer: 'O dată pe an.' },
        { id: 's56-09', prompt: 'Sometimes.', answer: 'Uneori.' },
        { id: 's56-10', prompt: 'Last year.', answer: 'Anul trecut.' },
        { id: 's56-11', prompt: 'The day after tomorrow.', answer: 'Poimâine.' },
        { id: 's56-12', prompt: 'The day before yesterday.', answer: 'Alaltăieri.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Three days ago."',
      options: [{ text: 'Trei zile acum.' }, { text: 'Acum trei zile.', correct: true }],
      explanation: '"Ago" comes first, as acum: acum trei zile.',
    },
    {
      kind: 'assemble',
      prompt: 'We go to Romania once a year.',
      answer: 'Mergem în România o dată pe an.',
      distractors: ['fiecare', 'de'],
    },
  ],
  shortcut: 'Ago = acum + time. In (from now) = peste + time. Every = în fiecare. Twice = de două ori. Last year = anul trecut.',
  useItToday: 'Tell your partner one thing that happened "acum…" and one that\'s happening "peste…".',
}

export const everBefore: StructureLesson = {
  id: 's-ever-before',
  part: 'Time',
  title: 'Have you ever…? Have you been before?',
  tagline: 'Ai mai fost aici? — "have you again been here?"',
  shift: {
    english: 'English says "Have you ever…?", "I\'ve been here before", "I haven\'t seen him since".',
    romanian: 'Romanian uses {{vreodată}} for "ever" — and a little {{mai}} for "before / again": {{Ai mai fost aici?}} — have you been here before?',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Ever',
      body: [
        '{{vreodată}} — ever: {{Ai fost vreodată în Deltă?}} — have you ever been to the Delta? Answers: {{Da, o dată.}} / {{Niciodată.}}',
      ],
    },
    {
      kind: 'explain',
      title: 'Mai in the past: before, again',
      body: [
        'Right after the "have", {{mai}} means before or again: {{Am mai fost aici.}} — I\'ve been here before. {{N-am mai fost niciodată.}} — I\'ve never been before.',
        '{{Te mai sun.}} — I\'ll call you again. {{Să nu mai faci asta!}} — don\'t do that again!',
      ],
      glosses: [
        { ro: 'Ai mai fost aici?', words: [['Ai', 'you-have'], ['mai', 'again'], ['fost aici', 'been here']], en: 'Have you been here before?' },
      ],
    },
    {
      kind: 'explain',
      title: 'Not since',
      body: [
        'With nu in the past, mai often means "not since": {{Nu l-am mai văzut.}} — I haven\'t seen him since.',
        '{{N-am mai văzut așa ceva!}} — I\'ve never seen anything like it!',
      ],
    },
    {
      kind: 'ladder',
      title: 'Before and again',
      rungs: [
        { id: 's70-01', prompt: 'Have you ever been to Romania?', answer: 'Ai fost vreodată în România?' },
        { id: 's70-02', prompt: 'Never.', answer: 'Niciodată.' },
        { id: 's70-03', prompt: 'Have you been here before?', answer: 'Ai mai fost aici?' },
        { id: 's70-04', prompt: 'I\'ve been here before.', answer: 'Am mai fost aici.' },
        { id: 's70-05', prompt: 'I\'ve never been here before.', answer: 'N-am mai fost niciodată aici.' },
        { id: 's70-06', prompt: 'Have you ever eaten sarmale?', answer: 'Ai mâncat vreodată sarmale?' },
        { id: 's70-07', prompt: 'I\'ve never seen anything like it!', answer: 'N-am mai văzut așa ceva!' },
        { id: 's70-08', prompt: 'Don\'t do that again!', answer: 'Să nu mai faci asta!' },
        { id: 's70-09', prompt: 'I haven\'t seen him since.', answer: 'Nu l-am mai văzut.' },
        { id: 's70-10', prompt: 'I\'ll call you again tomorrow.', answer: 'Te mai sun mâine.' },
        { id: 's70-11', prompt: '(to guests leaving) Come again!', answer: 'Să mai veniți!' },
      ],
    },
    {
      kind: 'choose',
      question: '"Have you been here before?"',
      options: [{ text: 'Ai mai fost aici?', correct: true }, { text: 'Ai fost aici mai?' }],
      explanation: 'Mai sits right after the "have": ai mai fost.',
    },
    {
      kind: 'assemble',
      prompt: 'We\'ve never been to the mountains before.',
      answer: 'N-am mai fost niciodată la munte.',
      distractors: ['vreodată', 'în'],
    },
  ],
  shortcut: 'Ever = vreodată. Before / again = mai, right after the "have": Ai mai fost? N-am mai fost niciodată. Nu l-am mai văzut = not since.',
  useItToday: 'Ask your partner "Ai mai fost…?" about a place you\'re planning to go.',
}

export const timesOfDay: StructureLesson = {
  id: 's-times-of-day',
  part: 'Time',
  title: 'In the morning, on Mondays: "the" does the work',
  tagline: 'Dimineața, seara, lunea, diseară.',
  shift: {
    english: 'English says "in the morning", "at night", "on Mondays", "this evening", "last night".',
    romanian: 'Romanian just puts "the" on the time word — {{dimineața}} (in the morning), {{lunea}} (on Mondays) — and has single words for {{diseară}}, {{aseară}} and {{azi-noapte}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The time word with "the"',
      body: [
        '{{dimineața}} — in the morning · {{la prânz}} — at lunchtime · {{după-amiaza}} — in the afternoon · {{seara}} — in the evening · {{noaptea}} — at night.',
        'For habits: {{Dimineața beau cafea.}} — in the mornings I drink coffee.',
      ],
      glosses: [
        { ro: 'Dimineața beau cafea.', words: [['Dimineața', 'the-morning'], ['beau', 'I-drink'], ['cafea', 'coffee']], en: 'In the mornings I drink coffee.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Days and seasons, the same trick',
      body: [
        '{{lunea}} — on Mondays · {{duminica}} — on Sundays · {{vara}} — in summer · {{iarna}} — in winter.',
        'Without "the" it\'s one particular day: {{luni}} — on Monday (this one).',
      ],
    },
    {
      kind: 'explain',
      title: 'Today, tonight, last night',
      body: [
        '{{azi-dimineață}} — this morning · {{diseară}} — this evening · {{la noapte}} — tonight · {{aseară}} — yesterday evening · {{azi-noapte}} — last night · {{mâine-dimineață}} — tomorrow morning.',
      ],
    },
    {
      kind: 'ladder',
      title: 'When?',
      rungs: [
        { id: 's91-01', prompt: 'In the morning.', answer: 'Dimineața.' },
        { id: 's91-02', prompt: 'In the evening.', answer: 'Seara.' },
        { id: 's91-03', prompt: 'At night he sleeps well.', answer: 'Noaptea doarme bine.' },
        { id: 's91-04', prompt: 'In the mornings I drink coffee.', answer: 'Dimineața beau cafea.' },
        { id: 's91-05', prompt: 'On Mondays I work from home.', answer: 'Lunea lucrez de acasă.' },
        { id: 's91-06', prompt: 'In winter it\'s very cold.', answer: 'Iarna e foarte frig.' },
        { id: 's91-07', prompt: 'This evening.', answer: 'Diseară.' },
        { id: 's91-08', prompt: 'Yesterday evening.', answer: 'Aseară.' },
        { id: 's91-09', prompt: 'Last night.', answer: 'Azi-noapte.' },
        { id: 's91-10', prompt: 'Tomorrow morning.', answer: 'Mâine-dimineață.' },
        { id: 's91-11', prompt: 'This morning I overslept.', answer: 'Azi-dimineață am dormit prea mult.' },
        { id: 's91-12', prompt: 'In the afternoon we go to the park.', answer: 'După-amiaza mergem în parc.' },
      ],
    },
    {
      kind: 'choose',
      question: '"On Saturdays we go to the market."',
      options: [{ text: 'Sâmbătă mergem la piață.' }, { text: 'Sâmbăta mergem la piață.', correct: true }],
      explanation: 'With "the" (sâmbăta) it\'s every Saturday. Sâmbătă is this Saturday.',
    },
    {
      kind: 'assemble',
      prompt: 'Yesterday evening we watched a film.',
      answer: 'Aseară ne-am uitat la un film.',
      distractors: ['ieri', 'seara'],
    },
  ],
  shortcut: 'Time word + "the" = in / on: dimineața, seara, lunea, vara. Diseară = this evening, aseară = yesterday evening, azi-noapte = last night.',
  useItToday: 'Describe your routine in Romanian: "Dimineața…, seara…".',
}
