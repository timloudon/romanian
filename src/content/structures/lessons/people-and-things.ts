import type { StructureLesson } from '../types'

export const theOnTheEnd: StructureLesson = {
  id: 's-the',
  part: 'People and things',
  title: '"The" goes on the end',
  tagline: 'Not "the phone" but "phone-the": telefonul.',
  shift: {
    english: 'English puts "the" in front: the phone, the car.',
    romanian: 'Romanian glues it onto the end: {{telefon}} → {{telefonul}}, {{mașină}} → {{mașina}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'A sticker on the end',
      body: [
        '"A phone" is {{un telefon}}. "The phone" is {{telefonul}} — "phone-the". Think of "the" as a sticker on the end of the word.',
        'Most words fall into two groups:',
        '**un** words — {{un băiat}}, {{un telefon}} — add **-ul**: {{băiatul}}, {{telefonul}}.',
        '**o** words — {{o mașină}}, {{o casă}} — swap the final **-ă** for **-a**: {{mașina}}, {{casa}}.',
        'Tip: a word ending in **-ă** is almost always an **o** word. Learn words with their {{un}} or {{o}} in front, and the "the" comes free.',
      ],
      glosses: [
        {
          ro: 'Unde e telefonul?',
          words: [['Unde', 'where'], ['e', 'is'], ['telefonul', 'phone-the']],
          en: "Where's the phone?",
        },
        { ro: 'Mașina e afară.', words: [['Mașina', 'car-the'], ['e', 'is'], ['afară', 'outside']], en: 'The car is outside.' },
      ],
    },
    {
      kind: 'explain',
      title: 'More than one',
      body: ['For plurals the sticker is usually **-i** or **-le**: {{copiii}} (the children), {{cheile}} (the keys), {{jucăriile}} (the toys).'],
    },
    {
      kind: 'explain',
      title: 'Where Romanian uses "the" and English doesn\'t',
      body: [
        'Romanian says "the" for things in general: "I like coffee" → {{Îmi place cafeaua}} — "to me pleases the coffee". "Life is beautiful" → {{Viața e frumoasă}}.',
        'But after the little place words — {{pe}} (on), {{în}} (in), {{la}} (at / to), {{cu}} (with) — the sticker comes off: {{pe masă}} (on the table), {{la magazin}} (to the shop). It only comes back if there\'s more description: {{pe masa din bucătărie}} (on the table in the kitchen).',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's11-01', prompt: 'The phone.', answer: 'Telefonul.' },
        { id: 's11-02', prompt: "Where's the phone?", answer: 'Unde e telefonul?' },
        { id: 's11-03', prompt: 'The car is outside.', answer: 'Mașina e afară.' },
        {
          id: 's11-04',
          prompt: 'The keys are on the table.',
          answer: 'Cheile sunt pe masă.',
          teachingNote: 'Pe masă — no "the" after pe.',
        },
        { id: 's11-05', prompt: 'The boy is asleep.', answer: 'Băiatul doarme.' },
        {
          id: 's11-06',
          prompt: 'The children are playing.',
          answer: 'Copiii se joacă.',
          teachingNote: 'Se joacă — they play "themselves". There\'s a lesson on that too.',
        },
        {
          id: 's11-07',
          prompt: 'I like coffee.',
          answer: 'Îmi place cafeaua.',
          teachingNote: 'Cafea → cafeaua: words ending in -ea take -ua.',
        },
        { id: 's11-08', prompt: 'The food is ready.', answer: 'Mâncarea e gata.' },
        { id: 's11-09', prompt: "I'm going to the shop.", answer: 'Merg la magazin.' },
        { id: 's11-10', prompt: 'The house is big.', answer: 'Casa e mare.' },
      ],
    },
    {
      kind: 'choose',
      question: '"The car" is…',
      options: [{ text: 'o mașină' }, { text: 'mașina', correct: true }, { text: 'la mașină' }],
      explanation: 'O mașină is "a car". Swap the -ă for -a and you have "the car".',
    },
    {
      kind: 'choose',
      question: '"The book is on the table."',
      options: [{ text: 'Cartea e pe masa.' }, { text: 'Cartea e pe masă.', correct: true }],
      explanation: 'After pe (on), no sticker: pe masă. It only comes back with more description — pe masa din bucătărie.',
    },
    {
      kind: 'assemble',
      prompt: 'The toys are under the bed.',
      answer: 'Jucăriile sunt sub pat.',
      distractors: ['patul', 'jucării'],
      note: 'Sub pat — under the bed, no sticker after sub.',
    },
  ],
  shortcut: '"The" is a sticker on the end: telefonul, mașina, cheile. After pe / în / la / cu it comes off.',
  useItToday: 'Name things round the house with the sticker on: "Telefonul. Cheile. Ușa. Masa. Cana."',
}

export const possession: StructureLesson = {
  id: 's-mine',
  part: 'People and things',
  title: 'My and your match the thing, not you',
  tagline: '"The house my" — casa mea — and "my" follows the house.',
  shift: {
    english: 'English "my" goes in front and never changes.',
    romanian: 'Romanian says "the house my" — {{casa mea}} — and "my" matches the thing owned, not the owner.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Backwards, then matched',
      body: [
        'The thing comes first, with its sticker, then "my": {{casa mea}} — "the-house my". {{telefonul meu}} — "the-phone my".',
        'Here\'s what trips English speakers up: {{meu}} or {{mea}} depends on the **thing**, not on you. Everyone says {{telefonul meu}}, and everyone says {{mașina mea}}.',
        'The pairs: **meu / mea** (my) · **tău / ta** (your) · **nostru / noastră** (our). Plural things: {{copiii mei}} (my children), {{cheile mele}} (my keys).',
      ],
      glosses: [
        {
          ro: 'Unde e telefonul meu?',
          words: [['Unde', 'where'], ['e', 'is'], ['telefonul', 'the-phone'], ['meu', 'my']],
          en: "Where's my phone?",
        },
        { ro: 'Mama ta.', words: [['Mama', 'the-mum'], ['ta', 'your']], en: 'Your mum.' },
      ],
    },
    {
      kind: 'explain',
      title: 'His, her, their never change',
      body: [
        'Good news: {{lui}} (his), {{ei}} (her) and {{lor}} (their) don\'t match anything. {{mașina lui}} — his car. {{casa ei}} — her house. {{copiii lor}} — their children.',
        'With a man\'s name, {{lui}} goes in front: {{mașina lui Andrei}} — Andrei\'s car.',
      ],
    },
    {
      kind: 'explain',
      title: '"Mine!"',
      body: [
        '"It\'s mine" is {{E al meu}} for an un-thing and {{E a mea}} for an o-thing. Toddlers learn {{Al meu!}} very fast.',
        '"Whose is it?" — {{Al cui e?}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's12-01', prompt: 'My phone.', answer: 'Telefonul meu.' },
        { id: 's12-02', prompt: "Where's my phone?", answer: 'Unde e telefonul meu?' },
        { id: 's12-03', prompt: 'My car.', answer: 'Mașina mea.', hint: 'o mașină → mea' },
        { id: 's12-04', prompt: 'Your mum.', answer: 'Mama ta.' },
        { id: 's12-05', prompt: 'Your dad.', answer: 'Tatăl tău.' },
        { id: 's12-06', prompt: 'Our boy.', answer: 'Băiatul nostru.' },
        { id: 's12-07', prompt: 'Our house.', answer: 'Casa noastră.' },
        { id: 's12-08', prompt: 'My keys.', answer: 'Cheile mele.' },
        { id: 's12-09', prompt: 'His toys.', answer: 'Jucăriile lui.', hint: 'lui never changes' },
        { id: 's12-10', prompt: 'Her mum.', answer: 'Mama ei.' },
        { id: 's12-11', prompt: "It's mine!", answer: 'E al meu!' },
        {
          id: 's12-12',
          prompt: 'Whose is it?',
          answer: 'Al cui e?',
          teachingNote: 'For an o-thing: "A cui e?"',
        },
      ],
    },
    {
      kind: 'choose',
      question: 'A woman talking about her phone says…',
      options: [{ text: 'Telefonul mea' }, { text: 'Telefonul meu', correct: true }],
      explanation: 'Telefon is an un-word, so it\'s meu — whoever owns it.',
    },
    {
      kind: 'assemble',
      prompt: 'Your keys are in my bag.',
      answer: 'Cheile tale sunt în geanta mea.',
      distractors: ['meu', 'tău'],
      note: 'Cheile tale (the keys yours), geanta mea (the bag my).',
    },
  ],
  shortcut: 'The thing first, then "my": casa mea. Meu / mea matches the thing. Lui, ei, lor never change.',
  useItToday: 'Point things out at home: "Cana mea. Telefonul tău. Jucăriile lui."',
  seeAlso: { lessonId: 'u20-l01', label: 'Course: "Al meu, a ta" — mine, yours' },
}

export const toMe: StructureLesson = {
  id: 's-to-me',
  part: 'People and things',
  title: 'Things happen to you: mi-e, îmi place',
  tagline: 'Not "I\'m cold" but "to me it\'s cold".',
  shift: {
    english: 'In English, you are the one doing it: I\'m cold, I like it, I miss you.',
    romanian: 'In Romanian, feelings happen to you: "to me it\'s cold" ({{mi-e frig}}), "to me it pleases" ({{îmi place}}).',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Mi-e: "to me it is"',
      body: [
        'Sensations and feelings use {{mi-e}}: {{Mi-e frig}} (cold), {{mi-e cald}} (hot), {{mi-e foame}} (hungry), {{mi-e sete}} (thirsty), {{mi-e somn}} (sleepy), {{mi-e frică}} (scared), {{mi-e dor de tine}} (I miss you).',
        'Swap the front for other people: {{ți-e}} (to you), {{îi e}} (to him / her), {{ne e}} (to us).',
        'Bonus: none of these change for men or women, because the feeling is a thing, not a description of you.',
      ],
      glosses: [
        { ro: 'Îi e foame.', words: [['Îi', 'to-him'], ['e', "it's"], ['foame', 'hunger']], en: "He's hungry." },
      ],
    },
    {
      kind: 'explain',
      title: 'Îmi place: "to me it pleases"',
      body: [
        '"I like coffee" is {{Îmi place cafeaua}} — "to me pleases the coffee". The coffee does the pleasing, so the coffee gets the "the".',
        'For more than one thing, it\'s {{plac}}: {{Îmi plac căpșunile}} — "to me please the strawberries".',
        'The "to" words: {{îmi}} (me) · {{îți}} (you) · {{îi}} (him / her) · {{ne}} (us) · {{vă}} (you all) · {{le}} (them). {{Îți place?}} — Do you like it?',
      ],
      glosses: [
        { ro: 'Nu-i place.', words: [['Nu-i', 'not-to-him'], ['place', 'it-pleases']], en: "He doesn't like it." },
      ],
    },
    {
      kind: 'explain',
      title: 'The same trick, more verbs',
      body: [
        '{{Mă doare capul}} — "me hurts the head": my head hurts.',
        '{{Îmi trebuie}} — "to me is needed": I need.',
        '{{Îmi pare rău}} — "to me it seems bad": I\'m sorry.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's13-01', prompt: "I'm cold.", answer: 'Mi-e frig.' },
        { id: 's13-02', prompt: 'Are you cold?', answer: 'Ți-e frig?' },
        { id: 's13-03', prompt: "He's hungry.", answer: 'Îi e foame.' },
        { id: 's13-04', prompt: "We're thirsty.", answer: 'Ne e sete.' },
        { id: 's13-05', prompt: 'I like it.', answer: 'Îmi place.' },
        { id: 's13-06', prompt: 'Do you like it?', answer: 'Îți place?' },
        { id: 's13-07', prompt: "He doesn't like vegetables.", answer: 'Nu-i plac legumele.', hint: 'more than one: plac' },
        { id: 's13-08', prompt: 'I like your parents.', answer: 'Îmi plac părinții tăi.' },
        { id: 's13-09', prompt: 'My head hurts.', answer: 'Mă doare capul.' },
        { id: 's13-10', prompt: "I'm sorry.", answer: 'Îmi pare rău.' },
        { id: 's13-11', prompt: 'I miss him.', answer: 'Mi-e dor de el.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I like these shoes."',
      options: [
        { text: 'Îmi place pantofii ăștia.' },
        { text: 'Îmi plac pantofii ăștia.', correct: true },
        { text: 'Eu plac pantofii ăștia.' },
      ],
      explanation: 'The shoes do the pleasing, and there\'s more than one — so plac.',
    },
    {
      kind: 'choose',
      question: 'Your partner says "Mi-e somn." They\'re…',
      options: [{ text: 'hungry' }, { text: 'sleepy', correct: true }, { text: 'bored' }],
      explanation: 'Somn is sleep: "to me it\'s sleep".',
    },
    {
      kind: 'assemble',
      prompt: 'Do you like living here?',
      answer: 'Îți place să locuiești aici?',
      distractors: ['tu', 'plac'],
      note: '"To you it pleases that you live here?"',
    },
  ],
  shortcut: 'Feelings happen to you: mi-e frig, îmi place, mă doare. Think "to me it\'s…".',
  useItToday: 'Say how you feel today using only mi-e: frig, cald, foame, sete, somn, dor.',
  seeAlso: { lessonId: 'u06-l01', label: 'Course: "Îmi place..." — talking about what you like' },
}

export const myself: StructureLesson = {
  id: 's-myself',
  part: 'People and things',
  title: 'Verbs that turn back on you',
  tagline: '"I wake myself", "I feel myself": mă trezesc, mă simt.',
  shift: {
    english: 'English says "I wake up", "I feel", "I\'m getting dressed".',
    romanian: 'Romanian adds a "myself": "I wake myself" ({{mă trezesc}}), "I feel myself" ({{mă simt}}), "I dress myself" ({{mă îmbrac}}).',
  },
  steps: [
    {
      kind: 'explain',
      title: 'A built-in "myself"',
      body: [
        'Many everyday verbs come with {{mă}} ("myself") in front: {{Mă trezesc}} — I wake up. {{Mă simt bine}} — I feel good. {{Mă gândesc}} — I\'m thinking.',
        'The "self" word follows the person: {{mă}} (myself), {{te}} (yourself), {{se}} (himself, herself, themselves), {{ne}} (ourselves), {{vă}} (yourselves).',
        'There\'s no rule for which verbs have one — treat the "myself" as part of the word.',
      ],
      glosses: [
        { ro: 'Mă duc acasă.', words: [['Mă', 'myself'], ['duc', 'I-take'], ['acasă', 'home']], en: "I'm going home." },
      ],
    },
    {
      kind: 'explain',
      title: 'In the past it squashes',
      body: [
        'Before "have" it loses a letter: {{m-am trezit}} (I woke up), {{te-ai trezit?}} (did you wake up?), {{s-a trezit}} (he woke up).',
      ],
    },
    {
      kind: 'explain',
      title: 'Each other',
      body: [
        '{{ne}} also means "each other": {{Ne vedem!}} — "we see each other" — see you! {{Ne iubim}} — we love each other.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's14-01', prompt: 'I feel good.', answer: 'Mă simt bine.' },
        { id: 's14-02', prompt: 'How do you feel?', answer: 'Cum te simți?' },
        { id: 's14-03', prompt: "He doesn't feel well.", answer: 'Nu se simte bine.' },
        { id: 's14-04', prompt: "I'm thinking.", answer: 'Mă gândesc.' },
        {
          id: 's14-05',
          prompt: "I'm thinking about you.",
          answer: 'Mă gândesc la tine.',
          teachingNote: 'Romanian thinks "at" you: la tine.',
        },
        { id: 's14-06', prompt: 'I woke up early.', answer: 'M-am trezit devreme.' },
        { id: 's14-07', prompt: 'Are you awake?', answer: 'Te-ai trezit?', teachingNote: 'Literally "have you woken yourself?"' },
        { id: 's14-08', prompt: "I'm getting dressed.", answer: 'Mă îmbrac.' },
        { id: 's14-09', prompt: 'See you tomorrow!', answer: 'Ne vedem mâine!' },
        {
          id: 's14-10',
          prompt: 'Hurry up!',
          answer: 'Grăbește-te!',
          teachingNote: 'In a command the "yourself" moves to the end.',
        },
        { id: 's14-11', prompt: "I'm going to bed.", answer: 'Mă culc.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I\'m glad."',
      options: [{ text: 'Sunt bucur.' }, { text: 'Mă bucur.', correct: true }],
      explanation: '"I gladden myself" — mă bucur. And it never changes for men or women.',
    },
    {
      kind: 'assemble',
      prompt: 'We met in Bucharest.',
      answer: 'Ne-am cunoscut în București.',
      distractors: ['am', 'la'],
      note: '"We got to know each other" — ne-am cunoscut — is how Romanians say "we met".',
    },
  ],
  shortcut: 'Many verbs carry a "myself": mă simt, mă trezesc, mă gândesc. In the past: m-am, te-ai, s-a.',
  useItToday: 'Describe your morning with "myself" verbs: "M-am trezit, m-am spălat, m-am îmbrăcat."',
  seeAlso: { lessonId: 'u08-l01', label: 'Course: "Mă simt..." — verbs that point back at you' },
}

export const himHer: StructureLesson = {
  id: 's-him-her',
  part: 'People and things',
  title: 'Him, her and it go in front',
  tagline: '"I him see": îl văd.',
  shift: {
    english: 'English puts "him", "her", "it" after the verb: I see him.',
    romanian: 'Romanian puts them before it: "him I-see" — {{îl văd}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Heads-up words',
      body: [
        '{{Îl văd}} — "him I-see". {{O văd}} — "her I-see". The little word comes first, like a heads-up about who\'s involved.',
        'The set: {{mă}} (me) · {{te}} (you) · {{îl}} (him, or "it" for an un-thing) · {{o}} (her, or "it" for an o-thing) · {{ne}} (us) · {{îi}} (them) · {{le}} (them, all female or things).',
      ],
      glosses: [
        { ro: 'Te iubesc.', words: [['Te', 'you'], ['iubesc', 'I-love']], en: 'I love you.' },
        { ro: 'Îl iau eu.', words: [['Îl', 'him'], ['iau', 'I-take'], ['eu', 'I']], en: "I'll pick him up." },
      ],
    },
    {
      kind: 'explain',
      title: 'In the past',
      body: [
        'They come before "have", and {{îl}} shrinks to {{l-}}: {{L-am văzut}} — "him I-have seen".',
        'Except {{o}}, which jumps to the end: {{Am văzut-o}} — I saw her.',
      ],
    },
    {
      kind: 'explain',
      title: 'The pe tag',
      body: [
        'With a named person, Romanian says "him" as a preview and then adds who, with a {{pe}} tag: {{Îl văd pe Andrei}} — "him I-see, Andrei".',
        'Things don\'t get the tag: {{Văd mașina}} — I see the car.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's15-01', prompt: 'I love you.', answer: 'Te iubesc.' },
        { id: 's15-02', prompt: "I'll pick him up.", answer: 'Îl iau eu.' },
        {
          id: 's15-03',
          prompt: "(the phone) I can't find it.",
          answer: 'Nu-l găsesc.',
          teachingNote: 'Telefon is an un-thing, so "it" is îl — squashed to -l after nu.',
        },
        { id: 's15-04', prompt: 'Do you know her?', answer: 'O cunoști?' },
        { id: 's15-05', prompt: 'I saw him.', answer: 'L-am văzut.' },
        { id: 's15-06', prompt: 'I saw her yesterday.', answer: 'Am văzut-o ieri.' },
        { id: 's15-07', prompt: "I'll call you.", answer: 'Te sun.' },
        {
          id: 's15-08',
          prompt: 'Call me!',
          answer: 'Sună-mă!',
          teachingNote: 'In a command, the little word goes on the end.',
        },
        { id: 's15-09', prompt: 'Wake him up.', answer: 'Trezește-l.' },
        {
          id: 's15-10',
          prompt: 'Give him some water.',
          answer: 'Dă-i apă.',
          teachingNote: '"To him" is îi — on the end of a command: dă-i.',
        },
        { id: 's15-11', prompt: 'Have you seen Andrei?', answer: 'L-ai văzut pe Andrei?' },
      ],
    },
    {
      kind: 'choose',
      question: '"I know him."',
      options: [{ text: 'Cunosc el.' }, { text: 'Îl cunosc.', correct: true }, { text: 'Cunosc îl.' }],
      explanation: '"Him" goes in front: îl cunosc. El is "he" — the one doing it, not the one it\'s done to.',
    },
    {
      kind: 'assemble',
      prompt: 'Can you pick him up from nursery?',
      answer: 'Poți să-l iei de la creșă?',
      distractors: ['îl', 'el'],
      note: 'After să, îl shrinks to -l: să-l.',
    },
  ],
  shortcut: 'Me, you, him, her, it go in front: îl văd, te iubesc. In commands, on the end: sună-mă.',
  useItToday: 'Use "Te iubesc", "Îl iau eu" and "Nu-l găsesc" today — three of the most useful sentences in family life.',
  seeAlso: { lessonId: 'u02-l01', label: 'Course: "Îl, o" — him/it, her/it' },
}
