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
      kind: 'explain',
      title: 'Words ending in -e',
      body: [
        'o-words ending in **-e** add **-a**: {{carte}} → {{cartea}}, {{floare}} → {{floarea}}.',
        'un-words ending in **-e** add **-le**: {{frate}} → {{fratele}} (the brother), {{nume}} → {{numele}} (the name).',
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
    {
      kind: 'dialogue',
      title: 'In real life: Where\'s the…?',
      setting: 'You and your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Unde e telefonul?', en: 'Where\'s the phone?' },
        { who: 'you', ro: 'Telefonul e pe masă.', en: 'The phone\'s on the table.' },
        { who: 'them', ro: 'Și cheile?', en: 'And the keys?' },
        { who: 'you', ro: 'Cheile sunt în mașină.', en: 'The keys are in the car.' },
        { who: 'them', ro: 'Și mașina unde e?', en: 'And where\'s the car?' },
        { who: 'you', ro: 'Mașina e afară, bineînțeles!', en: 'The car\'s outside, of course!' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's11-11', prompt: 'The door is open.', answer: 'Ușa e deschisă.' },
        { id: 's11-12', prompt: 'The water is cold.', answer: 'Apa e rece.' },
        { id: 's11-13', prompt: 'The weather is lovely.', answer: 'Vremea e frumoasă.' },
        { id: 's11-14', prompt: 'The child is asleep.', answer: 'Copilul doarme.' },
        { id: 's11-15', prompt: 'The book is on the table in the kitchen.', answer: 'Cartea e pe masa din bucătărie.', teachingNote: 'More description, so masa gets its "the" back.' },
        { id: 's11-16', prompt: 'I\'m going into town.', answer: 'Merg în oraș.' },
        { id: 's11-17', prompt: 'The shop is closed.', answer: 'Magazinul e închis.' },
      ],
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
      kind: 'explain',
      title: 'Often it\'s "to me", not "my"',
      body: [
        'With your body and your own things, Romanian often says "to me" + "the" instead of "my": {{Mi-am pierdut cheile}} — "to-me I-have lost the keys" — I\'ve lost my keys.',
        '{{Îți sună telefonul.}} — your phone\'s ringing. {{Mă doare capul.}} — my head hurts.',
        'Names work the same way: {{Cum te cheamă?}} — "how do they call you?" — what\'s your name?',
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
    {
      kind: 'dialogue',
      title: 'In real life: Whose is it?',
      setting: 'You and your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'A cui e geaca asta?', en: 'Whose is this jacket?' },
        { who: 'you', ro: 'E a mea.', en: 'It\'s mine.' },
        { who: 'them', ro: 'Și pantofii ăștia?', en: 'And these shoes?' },
        { who: 'you', ro: 'Sunt ai tăi!', en: 'They\'re yours!' },
        { who: 'them', ro: 'Ba nu, ai mei sunt negri.', en: 'No they\'re not — mine are black.' },
        { who: 'you', ro: 'Atunci sunt ai mei. Scuze!', en: 'Then they\'re mine. Sorry!' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's12-13', prompt: 'I\'ve lost my keys.', answer: 'Mi-am pierdut cheile.' },
        { id: 's12-14', prompt: 'Your phone\'s ringing.', answer: 'Îți sună telefonul.' },
        { id: 's12-15', prompt: 'My parents.', answer: 'Părinții mei.' },
        { id: 's12-16', prompt: 'Our friends.', answer: 'Prietenii noștri.' },
        { id: 's12-17', prompt: 'Your family.', answer: 'Familia ta.' },
        { id: 's12-18', prompt: 'Their house is big.', answer: 'Casa lor e mare.' },
        { id: 's12-19', prompt: 'What\'s his name?', answer: 'Cum îl cheamă?' },
        { id: 's12-20', prompt: 'What\'s your name?', answer: 'Cum te cheamă?', acceptedAlternates: ['Cum te numești'] },
      ],
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
    {
      kind: 'dialogue',
      title: 'In real life: Home, cold and hungry',
      setting: 'You and your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Ți-e foame?', en: 'Are you hungry?' },
        { who: 'you', ro: 'Da, mi-e foarte foame. Și mi-e frig.', en: 'Yes, I\'m really hungry. And I\'m cold.' },
        { who: 'them', ro: 'Îți fac o supă?', en: 'Shall I make you some soup?' },
        { who: 'you', ro: 'Da, mersi! Îmi place mult supa ta.', en: 'Yes, thanks! I love your soup.' },
        { who: 'them', ro: 'Și cel mic? Îi e foame?', en: 'And the little one? Is he hungry?' },
        { who: 'you', ro: 'Nu, îi e somn.', en: 'No, he\'s sleepy.' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's13-12', prompt: 'I\'m not hungry.', answer: 'Nu mi-e foame.' },
        { id: 's13-13', prompt: 'He\'s scared.', answer: 'Îi e frică.' },
        { id: 's13-14', prompt: 'Do you like the house?', answer: 'Îți place casa?' },
        { id: 's13-15', prompt: 'I really like it here.', answer: 'Îmi place mult aici.' },
        { id: 's13-16', prompt: 'We like Romania.', answer: 'Ne place România.' },
        { id: 's13-17', prompt: 'His tummy hurts.', answer: 'Îl doare burta.' },
        { id: 's13-18', prompt: 'I don\'t care.', answer: 'Nu-mi pasă.', teachingNote: '"To me it doesn\'t matter."' },
        { id: 's13-19', prompt: 'I think it\'s too expensive.', answer: 'Mi se pare prea scump.', teachingNote: '"To me it seems" — softer than cred că.' },
      ],
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
        { id: 's14-09', prompt: 'See you tomorrow!', answer: 'Ne vedem mâine!', acceptedAlternates: ['Pe mâine'] },
        {
          id: 's14-10',
          prompt: 'Hurry up!',
          answer: 'Grăbește-te!',
          teachingNote: 'In a command the "yourself" moves to the end.',
        },
        { id: 's14-11', prompt: "I'm going to bed.", answer: 'Mă culc.', acceptedAlternates: ['Mă duc la culcare'] },
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
    {
      kind: 'dialogue',
      title: 'In real life: A bad morning',
      setting: 'You and your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Te-ai trezit?', en: 'Are you awake?' },
        { who: 'you', ro: 'Da, m-am trezit, dar nu mă simt bine.', en: 'Yes, I\'m awake, but I don\'t feel well.' },
        { who: 'them', ro: 'Ce ai? Te doare ceva?', en: 'What\'s wrong? Does something hurt?' },
        { who: 'you', ro: 'Mă doare capul. Mă mai culc puțin.', en: 'I\'ve got a headache. I\'ll lie down a bit longer.' },
        { who: 'them', ro: 'Bine, mă ocup eu de cel mic.', en: 'OK, I\'ll look after the little one.' },
        { who: 'you', ro: 'Mersi. Ne vedem la prânz.', en: 'Thanks. See you at lunchtime.' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's14-12', prompt: 'I\'m getting ready.', answer: 'Mă pregătesc.' },
        { id: 's14-13', prompt: 'We\'re getting ready to go.', answer: 'Ne pregătim de plecare.' },
        { id: 's14-14', prompt: 'Calm down.', answer: 'Calmează-te.' },
        { id: 's14-15', prompt: 'Sit down!', answer: 'Așază-te!', acceptedAlternates: ['Stai jos'] },
        { id: 's14-16', prompt: 'Wash your hands.', answer: 'Spală-te pe mâini.' },
        { id: 's14-17', prompt: 'Did you have fun?', answer: 'Te-ai distrat?' },
        { id: 's14-18', prompt: 'We had a lovely time.', answer: 'Ne-am distrat foarte bine.' },
        { id: 's14-19', prompt: 'I don\'t remember.', answer: 'Nu-mi amintesc.', teachingNote: 'This one\'s "to myself": nu-mi amintesc.' },
      ],
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
        { id: 's15-07', prompt: "I'll call you.", answer: 'Te sun.', acceptedAlternates: ['O să te sun'] },
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
    {
      kind: 'dialogue',
      title: 'In real life: Have you seen them?',
      setting: 'You and your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'L-ai văzut pe Andrei?', en: 'Have you seen Andrei?' },
        { who: 'you', ro: 'Da, l-am văzut ieri.', en: 'Yes, I saw him yesterday.' },
        { who: 'them', ro: 'Și pe Ana?', en: 'And Ana?' },
        { who: 'you', ro: 'Nu, pe ea n-am văzut-o. O suni tu?', en: 'No, I haven\'t seen her. Will you call her?' },
        { who: 'them', ro: 'Da, o sun diseară.', en: 'Yes, I\'ll call her tonight.' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's15-12', prompt: 'I\'ll take him to the park.', answer: 'Îl duc în parc.' },
        { id: 's15-13', prompt: 'Did you see her?', answer: 'Ai văzut-o?' },
        { id: 's15-14', prompt: 'Help me!', answer: 'Ajută-mă!' },
        { id: 's15-15', prompt: 'I\'ll wait for you.', answer: 'Te aștept.', teachingNote: '"I you-await" — no "for".' },
        { id: 's15-16', prompt: 'Do you love me?', answer: 'Mă iubești?' },
        { id: 's15-17', prompt: 'Leave him, he\'s fine.', answer: 'Lasă-l, e bine.' },
        { id: 's15-18', prompt: 'Tell him!', answer: 'Spune-i!' },
        { id: 's15-19', prompt: '(the bag) Put it here.', answer: 'Pune-o aici.' },
        { id: 's15-20', prompt: 'We\'re waiting for you.', answer: 'Te așteptăm.' },
      ],
    },
  ],
  shortcut: 'Me, you, him, her, it go in front: îl văd, te iubesc. In commands, on the end: sună-mă.',
  useItToday: 'Use "Te iubesc", "Îl iau eu" and "Nu-l găsesc" today — three of the most useful sentences in family life.',
  seeAlso: { lessonId: 'u02-l01', label: 'Course: "Îl, o" — him/it, her/it' },
}

export const places: StructureLesson = {
  id: 's-places',
  part: 'People and things',
  title: 'At, to, in: la does most of the work',
  tagline: '"At mum\'s", "to the shop", "at the seaside" — all la.',
  shift: {
    english: 'English picks between at, to, in and on — and needs "\'s" for "at mum\'s".',
    romanian: 'Romanian uses {{la}} for going to and being at most places — and for someone\'s home: {{la mama}} is "at mum\'s".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'La: at and to',
      body: [
        '{{la}} covers both "to" and "at": {{Merg la magazin}} — I\'m going to the shop. {{Sunt la magazin}} — I\'m at the shop. Romanian doesn\'t care whether you\'re on your way or already there.',
        'It also does "at someone\'s": {{la bunica}} — at Grandma\'s. {{la noi}} — at ours. {{la voi}} — at yours.',
      ],
      glosses: [
        {
          ro: 'Suntem la bunica.',
          words: [['Suntem', 'we-are'], ['la', 'at'], ['bunica', 'the-grandma']],
          en: "We're at Grandma's.",
        },
      ],
    },
    {
      kind: 'explain',
      title: 'În and pe',
      body: [
        '{{în}} is "in" — inside something, a town, a country: {{în casă}}, {{în București}}, {{în România}}.',
        '{{pe}} is "on": {{pe masă}}. And Romanians are "on" the street, not in it: {{pe stradă}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'The odd ones out',
      body: [
        '{{acasă}} — home — needs nothing in front: {{Merg acasă}}, {{Sunt acasă}}.',
        'Seaside, mountains and work all take {{la}}: {{la mare}}, {{la munte}}, {{la serviciu}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'From',
      body: [
        '{{de la}} — from a place or a person: {{de la magazin}}, {{un cadou de la bunica}}.',
        '{{din}} — from inside, or from a town or country: {{Sunt din Anglia}} — I\'m from England.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Where is everyone?',
      rungs: [
        { id: 's20-01', prompt: "I'm going to the shop.", answer: 'Merg la magazin.' },
        { id: 's20-02', prompt: "I'm at the shop.", answer: 'Sunt la magazin.' },
        { id: 's20-03', prompt: "We're at Grandma's.", answer: 'Suntem la bunica.' },
        { id: 's20-04', prompt: '(to friends) Come round to ours!', answer: 'Veniți la noi!' },
        { id: 's20-05', prompt: "He's at nursery.", answer: 'E la creșă.' },
        { id: 's20-06', prompt: "I'm at home.", answer: 'Sunt acasă.' },
        { id: 's20-07', prompt: "We're going to the mountains.", answer: 'Mergem la munte.' },
        { id: 's20-08', prompt: 'The phone is on the table.', answer: 'Telefonul e pe masă.' },
        { id: 's20-09', prompt: "It's in the car.", answer: 'E în mașină.' },
        { id: 's20-10', prompt: "I'm from England.", answer: 'Sunt din Anglia.' },
        { id: 's20-11', prompt: "I'm coming from work.", answer: 'Vin de la serviciu.' },
        { id: 's20-12', prompt: 'A present from Grandma.', answer: 'Un cadou de la bunica.' },
      ],
    },
    {
      kind: 'dialogue',
      title: 'In real life: Where are you?',
      setting: 'A phone call with your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Unde ești?', en: 'Where are you?' },
        { who: 'you', ro: 'Sunt la magazin. Tu ești acasă?', en: 'I\'m at the shop. Are you at home?' },
        { who: 'them', ro: 'Nu, sunt la mama. Cel mic e cu mine.', en: 'No, I\'m at my mum\'s. The little one\'s with me.' },
        { who: 'you', ro: 'Bine. Vin la voi după magazin?', en: 'OK. Shall I come to you after the shop?' },
        { who: 'them', ro: 'Da, vino! Suntem în grădină.', en: 'Yes, come! We\'re in the garden.' },
      ],
    },
    {
      kind: 'choose',
      question: '"We\'re going to the seaside."',
      options: [{ text: 'Mergem în mare.' }, { text: 'Mergem la mare.', correct: true }],
      explanation: '"În mare" would be into the sea itself. The seaside is la mare.',
    },
    {
      kind: 'assemble',
      prompt: "We're spending the weekend at my parents'.",
      answer: 'Petrecem weekendul la părinții mei.',
      distractors: ['în', 'de'],
    },
  ],
  shortcut: 'La = at / to / at someone\'s. În = inside. Pe = on. Acasă needs nothing. From = de la, or din for towns and countries.',
  useItToday: 'Say where everyone is today: "Sunt la serviciu. E la creșă. Suntem acasă."',
}

export const thisAndThat: StructureLesson = {
  id: 's-this-that',
  part: 'People and things',
  title: 'This one, that one',
  tagline: 'Ăsta, asta, ăla, aia — the everyday pointing words.',
  shift: {
    english: 'English "this" and "that" go in front and never change.',
    romanian: 'Romanian\'s go after the thing and match it, just like "my": {{mașina asta}} — "the car this".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The spoken set',
      body: [
        '{{ăsta}} / {{asta}} — this (for an un-thing / an o-thing). {{ăla}} / {{aia}} — that.',
        'For more than one: {{ăștia}} / {{astea}} (these), {{ăia}} / {{alea}} (those).',
        'They come after the thing, which keeps its "the": {{telefonul ăsta}} — "the phone this". {{casa aia}} — that house.',
      ],
      glosses: [
        {
          ro: 'Vreau rochia asta.',
          words: [['Vreau', 'I-want'], ['rochia', 'the-dress'], ['asta', 'this']],
          en: 'I want this dress.',
        },
      ],
    },
    {
      kind: 'explain',
      title: 'Asta on its own',
      body: [
        '{{asta}} alone means "this" or "that" as an idea: {{Ce e asta?}} — what\'s this? {{Asta e!}} — that\'s it! {{Nu asta!}} — not that!',
        '"This time" is {{de data asta}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'The written ones',
      body: [
        '{{acesta}}, {{aceasta}}, {{acela}}, {{aceea}} are the formal versions. You\'ll read them and hear them on the news; you\'ll rarely need to say them.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Point at things',
      rungs: [
        { id: 's21-01', prompt: 'This phone.', answer: 'Telefonul ăsta.' },
        { id: 's21-02', prompt: 'This house.', answer: 'Casa asta.' },
        { id: 's21-03', prompt: 'That car.', answer: 'Mașina aia.' },
        {
          id: 's21-04',
          prompt: '(a dress) I want this one.',
          answer: 'O vreau pe asta.',
          teachingNote: '"Her I-want, this one" — o for an o-thing, with the pe tag.',
        },
        { id: 's21-05', prompt: "What's this?", answer: 'Ce e asta?' },
        { id: 's21-06', prompt: "That's it!", answer: 'Asta e!' },
        { id: 's21-07', prompt: '(the cup) Not that one!', answer: 'Nu aia!' },
        { id: 's21-08', prompt: 'These tomatoes are very good.', answer: 'Roșiile astea sunt foarte bune.' },
        { id: 's21-09', prompt: 'Those shoes.', answer: 'Pantofii ăia.' },
        { id: 's21-10', prompt: 'I like this.', answer: 'Îmi place asta.' },
        { id: 's21-11', prompt: 'This time.', answer: 'De data asta.' },
        { id: 's21-12', prompt: 'How much is this?', answer: 'Cât costă asta?' },
      ],
    },
    {
      kind: 'dialogue',
      title: 'In real life: At the cake shop',
      setting: 'You\'re buying cakes for the family. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Pe care o vreți, pe asta sau pe aia?', en: 'Which one would you like, this one or that one?' },
        { who: 'you', ro: 'Pe asta, vă rog. Și cât costă aia?', en: 'This one, please. And how much is that one?' },
        { who: 'them', ro: 'Aia e zece lei.', en: 'That one\'s ten lei.' },
        { who: 'you', ro: 'Atunci o iau și pe aia!', en: 'Then I\'ll take that one too!' },
        { who: 'them', ro: 'Poftim. Mai doriți ceva?', en: 'Here you are. Anything else?' },
        { who: 'you', ro: 'Nu, asta e tot.', en: 'No, that\'s all.' },
      ],
    },
    {
      kind: 'choose',
      question: '"This car."',
      options: [{ text: 'Asta mașină' }, { text: 'Mașina asta', correct: true }],
      explanation: 'The thing first, with its "the", then "this" — the same shape as mașina mea.',
    },
    {
      kind: 'assemble',
      prompt: 'How much are these apples?',
      answer: 'Cât costă merele astea?',
      distractors: ['ăștia', 'acesta'],
      note: 'Un măr, but in the plural mere behaves like an o-word — so astea.',
    },
  ],
  shortcut: 'Thing + "the" + this / that: mașina asta, telefonul ăla. Asta on its own = this / that idea.',
  useItToday: 'Point at things today: "Asta. Ăla. Cana asta. Jucăria aia."',
}

export const comparing: StructureLesson = {
  id: 's-more',
  part: 'People and things',
  title: 'Bigger, better, best: just add mai',
  tagline: 'No -er, no -est, no "good, better, best".',
  shift: {
    english: 'English adds -er and -est (bigger, biggest), uses "more" for long words, and has odd ones like good–better–best.',
    romanian: 'Romanian puts {{mai}} in front of everything: {{mai mare}} (bigger), {{mai bun}} (better). "The most" is {{cel mai}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Mai = more',
      body: [
        '{{mare}} (big) → {{mai mare}} (bigger). {{bun}} (good) → {{mai bun}} (better). {{frumos}} → {{mai frumos}}. No irregulars.',
        '"Than" is {{decât}}: {{E mai înalt decât mine.}} — he\'s taller than me.',
        '"The biggest" is {{cel mai mare}} — "the most big". The best: {{cel mai bun}}, or for an o-thing {{cea mai bună}}.',
      ],
      glosses: [{ ro: 'E mai bine.', words: [['E', "it's"], ['mai', 'more'], ['bine', 'well']], en: "It's better." }],
    },
    {
      kind: 'explain',
      title: 'Describing words come after, and match',
      body: [
        'As you\'ve seen: {{o casă mare}} — "a house big".',
        'They match the thing: {{un băiat mic}} but {{o casă mică}}; {{un vin bun}} but {{o idee bună}}. For an o-thing, the describing word usually adds **-ă**.',
      ],
    },
    {
      kind: 'explain',
      title: 'Mai does two more jobs',
      body: [
        '"More" as in "again" or "another": {{Mai vrei?}} — do you want more? {{Mai vreau.}} — I want more.',
        'With nu, "not any more": {{Nu mai plânge.}} — he\'s not crying any more.',
      ],
    },
    {
      kind: 'explain',
      title: 'Very, too, so, quite',
      body: ['{{foarte}} — very · {{prea}} — too · {{atât de}} — so · {{destul de}} — quite, fairly.'],
    },
    {
      kind: 'ladder',
      title: 'Compare it',
      rungs: [
        { id: 's22-01', prompt: 'Bigger.', answer: 'Mai mare.' },
        { id: 's22-02', prompt: "It's better.", answer: 'E mai bine.' },
        { id: 's22-03', prompt: "This one's better.", answer: 'Ăsta e mai bun.' },
        { id: 's22-04', prompt: "He's taller than me.", answer: 'E mai înalt decât mine.' },
        { id: 's22-05', prompt: 'The best.', answer: 'Cel mai bun.' },
        { id: 's22-06', prompt: "It's the best pizza.", answer: 'E cea mai bună pizza.' },
        { id: 's22-07', prompt: "It's cheaper at the market.", answer: 'E mai ieftin la piață.' },
        { id: 's22-08', prompt: 'Do you want more?', answer: 'Mai vrei?' },
        { id: 's22-09', prompt: "He's not crying any more.", answer: 'Nu mai plânge.' },
        { id: 's22-10', prompt: "It's too hot.", answer: 'E prea cald.' },
        { id: 's22-11', prompt: "It's quite far.", answer: 'E destul de departe.' },
        { id: 's22-12', prompt: 'A small house.', answer: 'O casă mică.' },
        {
          id: 's22-13',
          prompt: '(politely) Speak more slowly, please.',
          answer: 'Vorbiți mai rar, vă rog.',
          teachingNote: 'For speech, Romanians say "more rarely" — mai rar — rather than "more slowly".',
        },
      ],
    },
    {
      kind: 'dialogue',
      title: 'In real life: Sea or mountains?',
      setting: 'Planning the summer with your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Ce-ți place mai mult, marea sau muntele?', en: 'What do you like more, the sea or the mountains?' },
        { who: 'you', ro: 'Muntele. E mai liniștit și mai răcoros.', en: 'The mountains. It\'s quieter and cooler.' },
        { who: 'them', ro: 'Dar marea e mai frumoasă!', en: 'But the sea is more beautiful!' },
        { who: 'you', ro: 'Poate, dar e prea cald vara.', en: 'Maybe, but it\'s too hot in summer.' },
        { who: 'them', ro: 'Bine, atunci anul ăsta mergem la munte.', en: 'OK, the mountains this year, then.' },
        { who: 'you', ro: 'Cea mai bună idee!', en: 'The best idea!' },
      ],
    },
    {
      kind: 'choose',
      question: '"The best idea."',
      options: [{ text: 'Cel mai bun idee' }, { text: 'Cea mai bună idee', correct: true }, { text: 'Mai bună idee' }],
      explanation: 'Idee is an o-word, so cea mai bună.',
    },
    {
      kind: 'assemble',
      prompt: "It's the most beautiful place.",
      answer: 'E cel mai frumos loc.',
      distractors: ['cea', 'mult'],
    },
  ],
  shortcut: 'Mai = more / -er: mai mare, mai bun. The best = cel / cea mai. Than = decât. Nu mai = not any more.',
  useItToday: 'Compare two things today — "Asta e mai bună", "E mai frig azi" — and ask "Mai vrei?" at a meal.',
}

export const beIsHave: StructureLesson = {
  id: 's-have',
  part: 'People and things',
  title: 'When English "be" is Romanian "have"',
  tagline: 'I\'m right, I\'m forty, I\'m lucky — all "I have".',
  shift: {
    english: 'English uses "to be" for your age, being right, being lucky, being careful.',
    romanian: 'Romanian uses "have": {{am dreptate}} — "I have rightness". {{am patruzeci de ani}} — "I have forty years".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Have where English has be',
      body: [
        '{{Am dreptate}} — I\'m right. {{Ai dreptate}} — you\'re right.',
        '{{Am noroc}} — I\'m lucky ("I have luck"). {{Am grijă}} — I\'m careful ("I have care"). {{Am timp}} — I\'m free ("I have time"). {{Am nevoie de}} — I need ("I have need of").',
      ],
      glosses: [{ ro: 'Ai dreptate.', words: [['Ai', 'you-have'], ['dreptate', 'rightness']], en: "You're right." }],
    },
    {
      kind: 'explain',
      title: 'Age',
      body: [
        '{{Am patruzeci de ani}} — "I have forty years". {{Câți ani ai?}} — how old are you?',
        'From twenty upwards, numbers take {{de}}: {{doi ani}}, but {{douăzeci de ani}}.',
      ],
    },
    {
      kind: 'explain',
      title: '"Have a…" is just the wish',
      body: [
        'English says "have a good trip", "have fun". Romanian just says the wish: {{Drum bun!}} ("good road"), {{Distracție plăcută!}} ("pleasant fun"), {{Poftă bună!}} ("good appetite").',
      ],
    },
    {
      kind: 'explain',
      title: '"There is" needs no "there"',
      body: [
        '"There\'s a problem" — {{E o problemă.}} "There are lots of people" — {{Sunt mulți oameni.}} Just "is" and "are".',
        '"Is there any milk left?" — {{Mai e lapte?}} ("is there still milk?")',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's23-01', prompt: "You're right.", answer: 'Ai dreptate.' },
        { id: 's23-02', prompt: 'I was right!', answer: 'Am avut dreptate!' },
        { id: 's23-03', prompt: "We're lucky.", answer: 'Avem noroc.' },
        { id: 's23-04', prompt: 'I need help.', answer: 'Am nevoie de ajutor.' },
        { id: 's23-05', prompt: "He's two.", answer: 'Are doi ani.' },
        { id: 's23-06', prompt: "I'm forty.", answer: 'Am patruzeci de ani.' },
        { id: 's23-07', prompt: 'Are you free tomorrow?', answer: 'Ai timp mâine?' },
        { id: 's23-08', prompt: 'Have a good trip!', answer: 'Drum bun!' },
        { id: 's23-09', prompt: 'Have fun!', answer: 'Distracție plăcută!' },
        { id: 's23-10', prompt: "There's a problem.", answer: 'E o problemă.' },
        { id: 's23-11', prompt: 'There are lots of people here.', answer: 'Sunt mulți oameni aici.' },
        { id: 's23-12', prompt: 'Is there any milk left?', answer: 'Mai e lapte?' },
      ],
    },
    {
      kind: 'dialogue',
      title: 'In real life: A birthday coming up',
      setting: 'You and your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Ai timp mâine?', en: 'Are you free tomorrow?' },
        { who: 'you', ro: 'Da, am timp după-amiaza. De ce?', en: 'Yes, I\'m free in the afternoon. Why?' },
        { who: 'them', ro: 'E ziua mamei. Împlinește șaizeci de ani.', en: 'It\'s Mum\'s birthday. She\'s turning sixty.' },
        { who: 'you', ro: 'Ai dreptate, am uitat! Avem nevoie de un cadou.', en: 'You\'re right, I forgot! We need a present.' },
        { who: 'them', ro: 'Avem noroc, e o florărie lângă noi.', en: 'We\'re lucky, there\'s a florist near us.' },
        { who: 'you', ro: 'Perfect, luăm flori.', en: 'Perfect, we\'ll get flowers.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I\'m right."',
      options: [{ text: 'Sunt drept.' }, { text: 'Am dreptate.', correct: true }],
      explanation: '"Sunt drept" would be "I\'m straight / upright". Being right is having rightness: am dreptate.',
    },
    {
      kind: 'assemble',
      prompt: 'My mum is sixty.',
      answer: 'Mama mea are șaizeci de ani.',
      distractors: ['e', 'sunt'],
    },
  ],
  shortcut: 'Right, lucky, careful, age, need, time → have: am dreptate, am noroc, am 40 de ani. "There is" = e / sunt.',
  useItToday: 'Tell your partner "Ai dreptate" at least once today — good for the relationship, and for your Romanian.',
}

export const plurals: StructureLesson = {
  id: 's-plurals',
  part: 'People and things',
  title: 'Plurals, and the third gender',
  tagline: 'Un scaun, două scaune — "un" in the singular, "o" in the plural.',
  shift: {
    english: 'English makes almost every plural with -s.',
    romanian: 'Romanian has three plural endings — {{-i}}, {{-e}}, {{-uri}} — and a third kind of word: an un-word in the singular, an o-word in the plural.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The three endings',
      body: [
        '**-i** — most un-words, and many o-words: {{un prieten}} → {{doi prieteni}}; {{o carte}} → {{două cărți}}.',
        '**-e** — most o-words ending in -ă: {{o casă}} → {{două case}}.',
        '**-uri** — lots of short words: {{un tren}} → {{două trenuri}}, {{un lucru}} → {{două lucruri}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'The third gender',
      body: [
        'Some words are "un" in the singular but behave like "o" in the plural: {{un scaun}} → {{două scaune}}, {{un ou}} → {{două ouă}}.',
        'That\'s why they take {{două}}, {{astea}} and {{mele}} in the plural. They\'re nearly always things, not people.',
      ],
    },
    {
      kind: 'explain',
      title: 'Sound changes',
      body: [
        'Plurals often nudge a vowel or the last consonant: {{carte}} → {{cărți}}, {{băiat}} → {{băieți}}, {{om}} → {{oameni}}, {{zi}} → {{zile}}, {{soră}} → {{surori}}.',
        'It\'s the one thing you can\'t reliably guess — so learn the plural along with each new word.',
      ],
    },
    {
      kind: 'ladder',
      title: 'One, two',
      rungs: [
        { id: 's53-01', prompt: 'One friend, two friends.', answer: 'Un prieten, doi prieteni.' },
        { id: 's53-02', prompt: 'One house, two houses.', answer: 'O casă, două case.' },
        { id: 's53-03', prompt: 'One book, two books.', answer: 'O carte, două cărți.' },
        { id: 's53-04', prompt: 'One chair, two chairs.', answer: 'Un scaun, două scaune.' },
        { id: 's53-05', prompt: 'One egg, two eggs.', answer: 'Un ou, două ouă.' },
        { id: 's53-06', prompt: 'Two trains.', answer: 'Două trenuri.' },
        { id: 's53-07', prompt: 'Two children.', answer: 'Doi copii.' },
        { id: 's53-08', prompt: 'Two days.', answer: 'Două zile.' },
        { id: 's53-09', prompt: 'My sisters.', answer: 'Surorile mele.' },
        { id: 's53-10', prompt: 'These things are mine.', answer: 'Lucrurile astea sunt ale mele.', teachingNote: 'Lucru is third-gender, so in the plural: astea, ale mele.' },
        { id: 's53-11', prompt: 'Two coffees and two teas.', answer: 'Două cafele și două ceaiuri.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Two eggs."',
      options: [{ text: 'Doi ouă' }, { text: 'Două ouă', correct: true }],
      explanation: 'Un ou in the singular, but o-like in the plural — două.',
    },
    {
      kind: 'assemble',
      prompt: 'The children\'s toys are on the chairs.',
      answer: 'Jucăriile copiilor sunt pe scaune.',
      distractors: ['scaunele', 'copii'],
    },
  ],
  shortcut: 'Plurals: -i, -e or -uri. Un-words that turn "o" in the plural (un scaun → două scaune) take două, astea, mele. Learn each plural with the word.',
  useItToday: 'Count things round the house in twos: "două căni, două scaune, doi pantofi".',
}

export const toSomeone: StructureLesson = {
  id: 's-dative',
  part: 'People and things',
  title: 'To him, to Mum: giving and telling',
  tagline: 'Îi spun mamei — "to-her I-tell, to-Mum".',
  shift: {
    english: '"I gave Andrei the book", "tell Mum" — English just puts the person next to the verb.',
    romanian: 'Romanian marks the person receiving it: a heads-up {{îi}} before the verb, plus {{lui}} or an ending — {{Îi spun mamei}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The heads-up and the person',
      body: [
        'Giving, telling, showing, sending: whoever receives it gets a heads-up {{îi}} ("to him / to her") before the verb, then the person with a "to" marking.',
        '{{Îi dau lui Andrei cartea.}} — I\'m giving Andrei the book. {{Îi spun mamei.}} — I\'ll tell Mum.',
      ],
      glosses: [
        { ro: 'Îi spun mamei.', words: [['Îi', 'to-her'], ['spun', 'I-tell'], ['mamei', 'to-Mum']], en: 'I\'ll tell Mum.' },
      ],
    },
    {
      kind: 'explain',
      title: 'The "to" marking',
      body: [
        'Men\'s names and family words: {{lui}} in front — {{lui Andrei}}, {{lui tata}}.',
        'o-words and women\'s names: **-ei / -ii** — {{mamei}}, {{bunicii}}. un-words: **-ului** — {{bunicului}}.',
        'Plurals: **-lor**, with {{le}} as the heads-up: {{Le spun copiilor.}} — I\'ll tell the children.',
      ],
    },
    {
      kind: 'explain',
      title: 'One set of endings, two jobs',
      body: [
        'These "to" endings are exactly the "of" endings from "The \'s: an ending on the owner". Learn them once, use them twice.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Give it, tell them',
      rungs: [
        { id: 's57-01', prompt: 'I\'ll tell Mum.', answer: 'Îi spun mamei.' },
        { id: 's57-02', prompt: 'Give Andrei the ball.', answer: 'Dă-i lui Andrei mingea.' },
        { id: 's57-03', prompt: 'I sent Grandma a photo.', answer: 'I-am trimis bunicii o poză.' },
        { id: 's57-04', prompt: 'Show Dad what you drew.', answer: 'Arată-i lui tata ce ai desenat.' },
        { id: 's57-05', prompt: 'Say thank you to Grandpa!', answer: 'Spune-i mulțumesc bunicului!' },
        { id: 's57-06', prompt: 'Read him a story.', answer: 'Citește-i o poveste.' },
        { id: 's57-07', prompt: 'I told the children.', answer: 'Le-am spus copiilor.' },
        { id: 's57-08', prompt: 'What did you buy your mum?', answer: 'Ce i-ai cumpărat mamei tale?' },
        { id: 's57-09', prompt: 'Give the dog some water.', answer: 'Dă-i câinelui apă.' },
        { id: 's57-10', prompt: 'Tell your parents we\'re coming.', answer: 'Spune-le părinților tăi că venim.' },
      ],
    },
    {
      kind: 'choose',
      question: '(the book) "I\'ll give it to Andrei."',
      options: [{ text: 'I-o dau lui Andrei.', correct: true }, { text: 'O dau Andrei.' }, { text: 'Dau ea lui Andrei.' }],
      explanation: 'The heads-up i- (to him), then o (it, the book), then lui Andrei.',
    },
    {
      kind: 'assemble',
      prompt: 'I\'m reading the children a story.',
      answer: 'Le citesc copiilor o poveste.',
      distractors: ['îi', 'copiii'],
    },
  ],
  shortcut: 'Giving / telling someone: heads-up îi (le for "them") + lui Andrei / mamei / copiilor — the same endings as "of".',
  useItToday: 'Say who you\'re giving things to today: "Îi dau lui…", "Îi spun mamei…".',
}

export const allEvery: StructureLesson = {
  id: 's-all',
  part: 'People and things',
  title: 'All, every, each, both',
  tagline: 'Tot, toată, toți, toate — "all" matches the thing.',
  shift: {
    english: 'English "all" and "every" never change: all day, all the kids, everyone.',
    romanian: 'Romanian\'s "all" matches the thing: {{toată ziua}}, {{toți copiii}}, {{toate jucăriile}} — and "everyone" is "all the world": {{toată lumea}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Tot matches',
      body: [
        '{{tot}} (un-thing) · {{toată}} (o-thing) · {{toți}} (people, un-plural) · {{toate}} (o-plural).',
        '{{tot timpul}} — all the time · {{toată ziua}} — all day · {{toți copiii}} — all the children · {{toate lucrurile}} — all the things. The thing keeps its "the".',
      ],
      glosses: [
        { ro: 'Toată lumea e aici.', words: [['Toată', 'all'], ['lumea', 'the-world'], ['e', 'is'], ['aici', 'here']], en: 'Everyone\'s here.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Everyone, everything, people',
      body: [
        '{{toată lumea}} — everyone · {{tot}} — everything: {{Asta e tot.}} — that\'s all.',
        '{{lumea}} on its own often just means "people": {{E lume multă.}} — it\'s busy, there are lots of people.',
      ],
    },
    {
      kind: 'explain',
      title: 'Each, both',
      body: [
        '{{fiecare}} — each, every, and it never changes: {{fiecare zi}}, {{fiecare copil}}.',
        '{{amândoi}} / {{amândouă}} — both (men or mixed / women or o-things): {{amândoi bunicii}}, {{amândouă mâinile}}.',
      ],
    },
    {
      kind: 'ladder',
      title: 'All of it',
      rungs: [
        { id: 's66-01', prompt: 'All day.', answer: 'Toată ziua.' },
        { id: 's66-02', prompt: 'All the time.', answer: 'Tot timpul.' },
        { id: 's66-03', prompt: 'All week.', answer: 'Toată săptămâna.' },
        { id: 's66-04', prompt: 'All the children.', answer: 'Toți copiii.' },
        { id: 's66-05', prompt: 'All the toys.', answer: 'Toate jucăriile.' },
        { id: 's66-06', prompt: 'Everyone\'s here.', answer: 'Toată lumea e aici.' },
        { id: 's66-07', prompt: 'That\'s all.', answer: 'Asta e tot.' },
        { id: 's66-08', prompt: 'It\'s busy today.', answer: 'E lume multă azi.' },
        { id: 's66-09', prompt: 'Every child is different.', answer: 'Fiecare copil e diferit.' },
        { id: 's66-10', prompt: 'Both hands.', answer: 'Amândouă mâinile.' },
        { id: 's66-11', prompt: 'Both his grandparents are coming.', answer: 'Vin amândoi bunicii.' },
        { id: 's66-12', prompt: 'All of us.', answer: 'Noi toți.' },
      ],
    },
    {
      kind: 'choose',
      question: '"All the girls."',
      options: [{ text: 'Toți fetele' }, { text: 'Toate fetele', correct: true }],
      explanation: 'Fete is an o-plural, so toate.',
    },
    {
      kind: 'assemble',
      prompt: 'Everyone was asking after you.',
      answer: 'Toată lumea întreba de tine.',
      distractors: ['toți', 'despre'],
      note: 'A întreba de cineva — to ask after someone.',
    },
  ],
  shortcut: 'All = tot / toată / toți / toate, matching the thing (which keeps its "the"). Everyone = toată lumea. Each = fiecare. Both = amândoi / amândouă.',
  useItToday: 'Call the family to the table: "Toată lumea la masă!"',
}

export const whereThingsAre: StructureLesson = {
  id: 's-where-things',
  part: 'People and things',
  title: 'Up, down, next to, behind',
  tagline: 'Sus, jos, lângă, în spatele casei.',
  shift: {
    english: 'English: up, down, next to, under, behind, in front of, between.',
    romanian: 'Romanian: {{sus}}, {{jos}}, {{lângă}}, {{sub}}, {{între}} — and "behind" and "in front of" take the "of" ending: {{în spatele casei}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The simple ones',
      body: [
        '{{sus}} — up, upstairs · {{jos}} — down, downstairs · {{aici}} — here · {{acolo}} — there',
        '{{lângă}} — next to · {{sub}} — under · {{între}} — between · {{deasupra}} — above',
      ],
    },
    {
      kind: 'explain',
      title: 'The ones that take the "of" ending',
      body: [
        '{{în fața}} — in front of · {{în spatele}} — behind · {{în mijlocul}} — in the middle of.',
        'The thing after them takes the "of" ending: {{în fața casei}}, {{în spatele ușii}}, {{în mijlocul camerei}}. With people: {{în fața mea}}, {{lângă mine}}.',
      ],
      glosses: [
        { ro: 'În spatele ușii.', words: [['În spatele', 'in the-back'], ['ușii', 'of-the-door']], en: 'Behind the door.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Moving',
      body: [
        '{{Vino jos!}} — come down(stairs)! {{Stai jos!}} — sit down ("stay down"). {{Ridică-te!}} — stand up! {{Urcă sus!}} — go up(stairs)!',
      ],
    },
    {
      kind: 'ladder',
      title: 'Where is it?',
      rungs: [
        { id: 's67-01', prompt: 'Upstairs.', answer: 'Sus.' },
        { id: 's67-02', prompt: 'He\'s asleep upstairs.', answer: 'Doarme sus.' },
        { id: 's67-03', prompt: 'Come downstairs!', answer: 'Vino jos!' },
        { id: 's67-04', prompt: 'Sit down!', answer: 'Stai jos!', acceptedAlternates: ['Așază-te'] },
        { id: 's67-05', prompt: 'Stand up!', answer: 'Ridică-te!' },
        { id: 's67-06', prompt: 'Next to me.', answer: 'Lângă mine.' },
        { id: 's67-07', prompt: 'Under the bed.', answer: 'Sub pat.' },
        { id: 's67-08', prompt: 'Behind the door.', answer: 'În spatele ușii.' },
        { id: 's67-09', prompt: 'In front of the house.', answer: 'În fața casei.' },
        { id: 's67-10', prompt: 'Between us.', answer: 'Între noi.' },
        { id: 's67-11', prompt: 'In the middle of the room.', answer: 'În mijlocul camerei.' },
        { id: 's67-12', prompt: 'The park is next to the shop.', answer: 'Parcul e lângă magazin.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Behind the house."',
      options: [{ text: 'În spatele casa' }, { text: 'În spatele casei', correct: true }],
      explanation: 'After în spatele and în fața, the thing takes the "of" ending.',
    },
    {
      kind: 'assemble',
      prompt: 'The car is parked in front of the house.',
      answer: 'Mașina e parcată în fața casei.',
      distractors: ['casa', 'spatele'],
    },
  ],
  shortcut: 'Sus, jos, lângă, sub, între. În fața / în spatele / în mijlocul + the "of" ending: în fața casei. Stai jos = sit down.',
  useItToday: 'Play "where is it?" with your son: "Unde e mingea? Sub masă! Lângă canapea!"',
}

export const otherSame: StructureLesson = {
  id: 's-other-same',
  part: 'People and things',
  title: 'Another, one more, else, the same, alone',
  tagline: 'Alt, încă un, altceva, același, singur.',
  shift: {
    english: 'English "another" means both "a different one" and "one more".',
    romanian: 'Romanian splits them: {{altă cafea}} is a different coffee, {{încă o cafea}} is one more. Plus {{altceva}} (something else), {{același}} (the same), {{singur}} (alone).',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Different, or one more?',
      body: [
        '{{alt}} / {{altă}} — another, a different one: {{altă dată}} — another time. Plural {{alți}} / {{alte}}. The other one: {{celălalt}} / {{cealaltă}}.',
        '{{încă un}} / {{încă o}} — one more: {{încă o cafea}}, {{încă o dată}} — once more.',
      ],
    },
    {
      kind: 'explain',
      title: 'Else',
      body: [
        '{{altceva}} — something else · {{altcineva}} — someone else · {{altundeva}} — somewhere else.',
      ],
    },
    {
      kind: 'explain',
      title: 'The same',
      body: [
        '{{același}} / {{aceeași}} — the same: {{același lucru}}, {{aceeași mașină}}.',
        '{{la fel}} — the same, likewise: {{E la fel.}} — it\'s the same. {{La fel!}} — same to you!',
      ],
    },
    {
      kind: 'explain',
      title: 'Alone, only',
      body: [
        '{{singur}} / {{singură}} — alone, by yourself: {{Mănâncă singur.}} — he eats by himself.',
        '{{singurul}} / {{singura}} — the only one. {{doar}} / {{numai}} — only: {{doar duminica}}.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's68-01', prompt: 'Another time.', answer: 'Altă dată.' },
        { id: 's68-02', prompt: 'Another coffee? (one more)', answer: 'Încă o cafea?' },
        { id: 's68-03', prompt: 'Another beer, please.', answer: 'Încă o bere, vă rog.' },
        { id: 's68-04', prompt: 'Something else?', answer: 'Altceva?' },
        { id: 's68-05', prompt: 'Someone else.', answer: 'Altcineva.' },
        { id: 's68-06', prompt: 'Let\'s go somewhere else.', answer: 'Hai să mergem altundeva.' },
        { id: 's68-07', prompt: '(the cup) The other one.', answer: 'Cealaltă.' },
        { id: 's68-08', prompt: 'The same thing.', answer: 'Același lucru.' },
        { id: 's68-09', prompt: 'Same to you!', answer: 'La fel!' },
        { id: 's68-10', prompt: 'He eats by himself.', answer: 'Mănâncă singur.' },
        { id: 's68-11', prompt: '(the key) It\'s the only one.', answer: 'E singura.' },
        { id: 's68-12', prompt: 'Only on Sundays.', answer: 'Doar duminica.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Can I have another coffee?" (one more)',
      options: [{ text: 'Îmi dați altă cafea?' }, { text: 'Îmi dați încă o cafea?', correct: true }],
      explanation: 'Altă cafea is a different coffee. One more is încă o.',
    },
    {
      kind: 'assemble',
      prompt: 'Can you ask someone else?',
      answer: 'Poți să întrebi pe altcineva?',
      distractors: ['alt', 'cine'],
    },
  ],
  shortcut: 'A different one = alt / altă. One more = încă un / o. Else = altceva, altcineva, altundeva. The same = același / aceeași, la fel. Alone = singur.',
  useItToday: 'Ask for "încă o…" at your next meal or coffee.',
}

export const firstAndLast: StructureLesson = {
  id: 's-ordinals',
  part: 'People and things',
  title: 'First, second, last, next',
  tagline: 'Primul, al doilea, ultimul, următorul.',
  shift: {
    english: 'English: first, second, third, last, next.',
    romanian: 'Romanian: {{primul}} / {{prima}}, then {{al doilea}} / {{a doua}} ("the of-two"), and {{ultimul}} / {{ultima}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'First and last',
      body: [
        '{{primul}} / {{prima}} — the first (un / o): {{primul copil}}, {{prima dată}} — the first time.',
        '{{ultimul}} / {{ultima}} — the last: {{ultima zi}}.',
      ],
      glosses: [
        { ro: 'Prima dată.', words: [['Prima', 'the-first'], ['dată', 'time']], en: 'The first time.' },
      ],
    },
    {
      kind: 'explain',
      title: 'The rest: al + number + -lea',
      body: [
        'Un-things: {{al doilea}}, {{al treilea}}, {{al patrulea}}. O-things: {{a doua}}, {{a treia}}, {{a patra}}.',
        '{{a doua oară}} — the second time. {{A doua zi}} also means "the next day".',
      ],
    },
    {
      kind: 'explain',
      title: 'Next, last time, again',
      body: [
        '{{următorul}} / {{următoarea}} — the next · {{data trecută}} — last time · {{încă o dată}} — once more · {{pentru prima dată}} — for the first time · {{Cine urmează?}} — who\'s next?',
      ],
    },
    {
      kind: 'ladder',
      title: 'In order',
      rungs: [
        { id: 's69-01', prompt: 'The first time.', answer: 'Prima dată.' },
        { id: 's69-02', prompt: 'For the first time.', answer: 'Pentru prima dată.' },
        { id: 's69-03', prompt: 'The last day.', answer: 'Ultima zi.' },
        { id: 's69-04', prompt: 'My first child.', answer: 'Primul meu copil.' },
        { id: 's69-05', prompt: 'The second time.', answer: 'A doua oară.' },
        { id: 's69-06', prompt: 'The next day.', answer: 'A doua zi.' },
        { id: 's69-07', prompt: 'On the third floor.', answer: 'La etajul trei.' },
        { id: 's69-08', prompt: 'The next stop.', answer: 'Următoarea stație.' },
        { id: 's69-09', prompt: 'Last time.', answer: 'Data trecută.' },
        { id: 's69-10', prompt: 'He arrived first.', answer: 'A ajuns primul.' },
        { id: 's69-11', prompt: '(the cake) It\'s the last one.', answer: 'E ultima.' },
        { id: 's69-12', prompt: 'Who\'s next?', answer: 'Cine urmează?' },
      ],
    },
    {
      kind: 'choose',
      question: '"The second day."',
      options: [{ text: 'A doua zi', correct: true }, { text: 'Al doilea zi' }, { text: 'Doi zi' }],
      explanation: 'Zi is an o-word, so a doua zi — which also means "the next day".',
    },
    {
      kind: 'assemble',
      prompt: 'It\'s the first time I\'ve been here.',
      answer: 'E prima dată când sunt aici.',
      distractors: ['primul', 'am'],
      note: 'Romanian says "the first time when I am here" — still true now, so the present.',
    },
  ],
  shortcut: 'First = primul / prima. Last = ultimul / ultima. Second on = al doilea / a doua (al + number + -lea). Next = următorul. Again = încă o dată.',
  useItToday: 'Count turns with your son: "Primul! Al doilea! Ultimul!"',
}

export const goodAndWell: StructureLesson = {
  id: 's-good-well',
  part: 'People and things',
  title: 'Good or well, bad or badly: bun, bine, rău',
  tagline: 'Mă simt bine — never "bun".',
  shift: {
    english: 'English has good / well and bad / badly.',
    romanian: 'Romanian has {{bun}} (good — it describes a thing, and matches it) and {{bine}} (well, fine, OK — never changes). {{rău}} does both bad and badly.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Bun or bine?',
      body: [
        '{{bun}} / {{bună}} / {{buni}} / {{bune}} describes a thing: {{o idee bună}}, {{un vin bun}}.',
        '{{bine}} describes how something goes, or how you are: {{Mă simt bine.}} — I feel good. {{E bine.}} — it\'s fine. {{Bine!}} — OK! {{Ai făcut bine.}} — you did well.',
      ],
    },
    {
      kind: 'explain',
      title: 'Bad and badly',
      body: [
        '{{rău}} — bad and badly: {{Mă simt rău.}} — I feel ill. {{E rău.}} — it\'s bad. {{Nu-i rău!}} — not bad!',
        'As a describing word it matches: {{un vis rău}}, {{o zi rea}}.',
      ],
      glosses: [
        { ro: 'Nu-i rău!', words: [['Nu-i', 'not-it\'s'], ['rău', 'bad']], en: 'Not bad!' },
      ],
    },
    {
      kind: 'explain',
      title: 'Better and best',
      body: [
        'A better thing: {{mai bun}}. Going better: {{mai bine}}: {{E mai bine așa.}} — it\'s better like this. The best: {{cel mai bun}} / {{cel mai bine}}.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Bun, bine or rău?',
      rungs: [
        { id: 's76-01', prompt: 'It\'s fine.', answer: 'E bine.' },
        { id: 's76-02', prompt: 'OK!', answer: 'Bine!' },
        { id: 's76-03', prompt: 'You did well.', answer: 'Ai făcut bine.' },
        { id: 's76-04', prompt: 'A good idea.', answer: 'O idee bună.' },
        { id: 's76-05', prompt: 'Good wine.', answer: 'Vin bun.' },
        { id: 's76-06', prompt: 'Not bad!', answer: 'Nu-i rău!' },
        { id: 's76-07', prompt: 'I feel ill.', answer: 'Mă simt rău.' },
        { id: 's76-08', prompt: 'A bad day.', answer: 'O zi rea.' },
        { id: 's76-09', prompt: 'It\'s better like this.', answer: 'E mai bine așa.' },
        { id: 's76-10', prompt: 'He sleeps well.', answer: 'Doarme bine.' },
        { id: 's76-11', prompt: 'Good luck!', answer: 'Baftă!', teachingNote: 'Colloquial and very common. Noroc! works too.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I feel good."',
      options: [{ text: 'Mă simt bun.' }, { text: 'Mă simt bine.', correct: true }],
      explanation: 'How you feel is bine — it never changes.',
    },
    {
      kind: 'assemble',
      prompt: 'She speaks Romanian very well.',
      answer: 'Vorbește română foarte bine.',
      distractors: ['bună', 'bun'],
    },
  ],
  shortcut: 'Bun / bună = good (matches the thing). Bine = well, fine, OK (never changes). Rău = bad and badly (o zi rea).',
  useItToday: 'Answer "Ce faci?" with "Bine" today — and notice you\'d never say "bun".',
}

export const asAs: StructureLesson = {
  id: 's-as-as',
  part: 'People and things',
  title: 'As… as, more than, more and more',
  tagline: 'La fel de frumos ca — "the same of lovely as".',
  shift: {
    english: 'English compares with "as big as", "not as… as", "more than", "bigger and bigger".',
    romanian: 'Romanian: {{la fel de mare ca}} (as big as), {{nu așa de… ca}} (not as… as), {{mai mult de}} with numbers, {{din ce în ce mai}} (more and more).',
  },
  steps: [
    {
      kind: 'explain',
      title: 'As… as',
      body: [
        '{{la fel de}} + describing word + {{ca}}: {{E la fel de înalt ca tine.}} — he\'s as tall as you.',
        '{{Nu e așa de scump ca…}} — it\'s not as expensive as… Before a whole sentence, {{cum}}: {{nu așa de greu cum credeam}} — not as hard as I thought.',
      ],
      glosses: [
        { ro: 'La fel de bun ca…', words: [['La fel de', 'the-same of'], ['bun', 'good'], ['ca', 'as']], en: 'As good as…' },
      ],
    },
    {
      kind: 'explain',
      title: 'More than',
      body: [
        'With a thing or person, {{decât}}: {{mai mare decât mine}}. With numbers, {{mai mult de}} / {{mai puțin de}}: {{mai mult de o oră}} — more than an hour.',
      ],
    },
    {
      kind: 'explain',
      title: 'Of all, more and more',
      body: [
        '{{cel mai bun dintre toți}} — the best of all. {{din ce în ce mai}} — more and more: {{din ce în ce mai mare}} — bigger and bigger.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Compare it',
      rungs: [
        { id: 's77-01', prompt: 'He\'s as tall as you.', answer: 'E la fel de înalt ca tine.' },
        { id: 's77-02', prompt: 'It\'s as good as last time.', answer: 'E la fel de bun ca data trecută.' },
        { id: 's77-03', prompt: 'It\'s not as expensive as in London.', answer: 'Nu e așa de scump ca în Londra.' },
        { id: 's77-04', prompt: 'Bigger than me.', answer: 'Mai mare decât mine.' },
        { id: 's77-05', prompt: 'More than an hour.', answer: 'Mai mult de o oră.' },
        { id: 's77-06', prompt: 'Less than ten lei.', answer: 'Mai puțin de zece lei.' },
        { id: 's77-07', prompt: 'The best of all.', answer: 'Cel mai bun dintre toți.' },
        { id: 's77-08', prompt: 'Bigger and bigger.', answer: 'Din ce în ce mai mare.' },
        { id: 's77-09', prompt: 'It\'s getting colder and colder.', answer: 'Se face din ce în ce mai frig.' },
        { id: 's77-10', prompt: 'He\'s looking more and more like you.', answer: 'Seamănă din ce în ce mai mult cu tine.' },
      ],
    },
    {
      kind: 'choose',
      question: '"More than twenty minutes."',
      options: [{ text: 'Mai mult decât douăzeci de minute' }, { text: 'Mai mult de douăzeci de minute', correct: true }],
      explanation: 'With numbers, mai mult de. Decât is for comparing with a thing or a person.',
    },
    {
      kind: 'assemble',
      prompt: 'Romanian isn\'t as hard as I thought.',
      answer: 'Româna nu e așa de grea cum credeam.',
      distractors: ['ca', 'decât'],
      note: 'Before a whole sentence ("I thought"), it\'s cum, not ca.',
    },
  ],
  shortcut: 'As… as = la fel de… ca. Not as… as = nu așa de… ca. Than = decât; with numbers = mai mult de. More and more = din ce în ce mai.',
  useItToday: 'Tell your son "Te faci din ce în ce mai mare!"',
}

export const youAll: StructureLesson = {
  id: 's-voi',
  part: 'People and things',
  title: 'Talking to more than one person',
  tagline: 'Veniți! Ce faceți? Vă iubesc!',
  shift: {
    english: 'English "you" is the same for one person or a whole room.',
    romanian: 'Romanian has a separate "you all" — {{voi}} — with its own endings and little words: {{Ce faceți?}}, {{V-am adus ceva}}, {{Vă iubesc!}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The -ți ending, everywhere',
      body: [
        'Present: {{faceți}}, {{vreți}}, {{mergeți}}. Past: {{ați mâncat}}, {{ați fost}}. Future: {{o să veniți}}. \'d: {{ați vrea}}.',
        'It\'s also the polite "you" — so you already half know it.',
      ],
    },
    {
      kind: 'explain',
      title: 'The little words',
      body: [
        '{{vă}} — you all / to you all: {{Vă văd.}} — I can see you all. {{Vă iubesc!}} — I love you all! {{V-am adus ceva.}} — I\'ve brought you something.',
        'Your: {{vostru}} / {{voastră}}: {{casa voastră}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'Commands to more than one',
      body: [
        '{{Veniți!}} — come! {{Stați!}} — wait! {{Nu plecați!}} — don\'t go! {{Nu vă certați!}} — don\'t argue!',
      ],
    },
    {
      kind: 'ladder',
      title: 'Talk to everyone',
      rungs: [
        { id: 's94-01', prompt: 'Where are you all going?', answer: 'Unde mergeți?' },
        { id: 's94-02', prompt: 'Have you eaten?', answer: 'Ați mâncat?' },
        { id: 's94-03', prompt: '(to his grandparents) Are you coming for Christmas?', answer: 'Veniți de Crăciun?' },
        { id: 's94-04', prompt: '(to guests) Would you like a coffee?', answer: 'Ați vrea o cafea?' },
        { id: 's94-05', prompt: 'I love you all!', answer: 'Vă iubesc!' },
        { id: 's94-06', prompt: 'I\'ve brought you something.', answer: 'V-am adus ceva.' },
        { id: 's94-07', prompt: 'We missed you!', answer: 'Ne-a fost dor de voi!' },
        { id: 's94-08', prompt: '(to them) Your house is lovely.', answer: 'Casa voastră e minunată.' },
        { id: 's94-09', prompt: '(to two children) Come here!', answer: 'Veniți aici!' },
        { id: 's94-10', prompt: '(to two children) Don\'t argue!', answer: 'Nu vă certați!' },
        { id: 's94-11', prompt: 'Thank you both!', answer: 'Mulțumesc amândurora!' },
      ],
    },
    {
      kind: 'choose',
      question: 'To both grandparents: "Are you tired?"',
      options: [{ text: 'Ești obosit?' }, { text: 'Sunteți obosiți?', correct: true }],
      explanation: 'Two people — the voi forms: sunteți obosiți.',
    },
    {
      kind: 'assemble',
      prompt: 'We\'re coming to see you in the summer.',
      answer: 'Venim să vă vedem la vară.',
      distractors: ['te', 'voi'],
    },
  ],
  shortcut: 'You all (and polite you) = -ți on every verb (faceți, ați mâncat). Vă = you all / to you all. Vostru / voastră = your. Commands: veniți! nu plecați!',
  useItToday: 'At the next family gathering, talk to everyone at once: "Ce faceți? Vă iubesc!"',
}

export const describing: StructureLesson = {
  id: 's-describing',
  part: 'People and things',
  title: 'Colours, looks and sizes',
  tagline: 'Ochi albaștri, o mașină roșie — even colours match.',
  shift: {
    english: 'English colours and descriptions never change: a red car, red shoes, blue eyes.',
    romanian: 'Romanian ones come after the thing and match it: {{o mașină roșie}}, {{pantofi roșii}}, {{ochi albaștri}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Colours match',
      body: [
        '{{roșu}} (red): {{un tricou roșu}}, {{o mașină roșie}}, {{pantofi roșii}}.',
        '{{albastru}} (blue): {{ochi albaștri}}, {{o rochie albastră}}. {{alb}} / {{albă}} (white), {{negru}} / {{neagră}} (black), {{galben}} / {{galbenă}} (yellow), {{verde}} (green, the same for both).',
      ],
    },
    {
      kind: 'explain',
      title: 'Some never change',
      body: [
        'Colours borrowed from French stay put: {{maro}} (brown), {{roz}} (pink), {{gri}} (grey), {{bej}} — {{o geacă maro}}, {{pantofi gri}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'Describing people',
      body: [
        '{{E înalt}} / {{E înaltă}} — tall · {{scund}} / {{scundă}} — short · {{Are ochi verzi.}} — green eyes · {{Are părul blond / șaten / negru.}} — blond / brown / black hair.',
        '{{Ce culoare are?}} — what colour is it?',
      ],
    },
    {
      kind: 'ladder',
      title: 'Describe it',
      rungs: [
        { id: 's97-01', prompt: 'A red car.', answer: 'O mașină roșie.' },
        { id: 's97-02', prompt: 'Red shoes.', answer: 'Pantofi roșii.' },
        { id: 's97-03', prompt: 'He\'s got blue eyes.', answer: 'Are ochi albaștri.' },
        { id: 's97-04', prompt: 'A blue dress.', answer: 'O rochie albastră.' },
        { id: 's97-05', prompt: 'A black cat.', answer: 'O pisică neagră.' },
        { id: 's97-06', prompt: 'A white T-shirt.', answer: 'Un tricou alb.' },
        { id: 's97-07', prompt: 'A brown jacket.', answer: 'O geacă maro.' },
        { id: 's97-08', prompt: 'Grey shoes.', answer: 'Pantofi gri.' },
        { id: 's97-09', prompt: 'He\'s tall.', answer: 'E înalt.' },
        { id: 's97-10', prompt: 'She\'s got brown hair.', answer: 'Are părul șaten.' },
        { id: 's97-11', prompt: 'What colour is it?', answer: 'Ce culoare are?' },
        { id: 's97-12', prompt: '(the cup) The green one.', answer: 'Cea verde.' },
      ],
    },
    {
      kind: 'choose',
      question: '"A black car."',
      options: [{ text: 'O mașină negru' }, { text: 'O mașină neagră', correct: true }],
      explanation: 'Colours match the thing: negru → neagră for an o-thing.',
    },
    {
      kind: 'assemble',
      prompt: 'He\'s wearing a yellow jacket.',
      answer: 'Poartă o geacă galbenă.',
      distractors: ['galben', 'un'],
    },
  ],
  shortcut: 'Colours come after and match: mașină roșie, ochi albaștri. Maro, roz, gri never change. Are ochi… / Are părul…',
  useItToday: 'Describe what your son is wearing today — colours included.',
}

export const guessingGender: StructureLesson = {
  id: 's-gender',
  part: 'People and things',
  title: 'Guessing un or o from the ending',
  tagline: '-ă is o, a consonant is un — and a few rules of thumb.',
  shift: {
    english: 'English nouns have no gender, so every "un" or "o" is a new thing to remember.',
    romanian: 'You can guess most of them from the ending: {{-ă}} → o-word, a consonant → un-word, {{-ție}} and {{-tate}} → o-word.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The endings that tell you',
      body: [
        'Ends in **-ă** or **-a** → almost always an o-word: {{o casă}}, {{o mașină}}, {{o cafea}}.',
        'Ends in a **consonant** or **-u** → an un-word: {{un pat}}, {{un telefon}}, {{un lucru}}.',
        'Ends in **-ie**, **-ție**, **-tate**, **-ură** → an o-word: {{o familie}}, {{o situație}}, {{o calitate}}, {{o natură}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'The tricky -e',
      body: [
        'Words ending in **-e** could be either: {{o carte}}, {{o floare}}, but {{un frate}}, {{un câine}}. People and animals follow their sex: {{un frate}} (brother), {{o soră}} (sister).',
        'Words in **-ment**, **-aj**, **-ism** are un-words (and turn o-like in the plural): {{un moment}}, {{un garaj}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'When you guess wrong',
      body: [
        'Nothing breaks. Romanians will understand {{un casă}} perfectly well — and a guess that\'s right nine times out of ten is worth far more than freezing.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Un or o?',
      intro: 'Say it with un or o — guess from the ending.',
      rungs: [
        { id: 's101-01', prompt: 'A table.', answer: 'O masă.' },
        { id: 's101-02', prompt: 'A bed.', answer: 'Un pat.' },
        { id: 's101-03', prompt: 'A family.', answer: 'O familie.' },
        { id: 's101-04', prompt: 'A situation.', answer: 'O situație.' },
        { id: 's101-05', prompt: 'A city.', answer: 'Un oraș.' },
        { id: 's101-06', prompt: 'A university.', answer: 'O universitate.' },
        { id: 's101-07', prompt: 'A moment.', answer: 'Un moment.' },
        { id: 's101-08', prompt: 'A book.', answer: 'O carte.' },
        { id: 's101-09', prompt: 'A dog.', answer: 'Un câine.' },
        { id: 's101-10', prompt: 'A picture.', answer: 'O pictură.' },
        { id: 's101-11', prompt: 'A garage.', answer: 'Un garaj.' },
        { id: 's101-12', prompt: 'A coffee.', answer: 'O cafea.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Calitate" (quality) is…',
      options: [{ text: 'un calitate' }, { text: 'o calitate', correct: true }],
      explanation: 'Words in -tate are o-words.',
    },
  ],
  shortcut: '-ă / -a / -ie / -ție / -tate / -ură → o. Consonant / -u / -ment / -aj → un. -e: could be either — people follow their sex.',
  useItToday: 'When you meet a new noun today, guess un or o before you check.',
}

export const usefulSelfVerbs: StructureLesson = {
  id: 's-myself-more',
  part: 'People and things',
  title: 'Myself-verbs worth knowing: mă descurc, m-am obișnuit',
  tagline: 'I\'ll manage, I\'ve got used to it, we made up.',
  shift: {
    english: 'English has "I\'ll manage", "I\'ve got used to it", "we argued", "we made up", "we get on".',
    romanian: 'Romanian says every one of them with a myself-verb: {{mă descurc}}, {{m-am obișnuit}}, {{ne-am certat}}, {{ne-am împăcat}}, {{ne înțelegem}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The golden two',
      body: [
        '{{a se descurca}} — to manage, cope, get by: {{Mă descurc.}} — I\'ll manage. {{Te descurci?}} — are you managing?',
        '{{a se obișnui cu}} — to get used to: {{M-am obișnuit.}} — I\'ve got used to it. {{Te obișnuiești.}} — you\'ll get used to it.',
      ],
    },
    {
      kind: 'explain',
      title: 'Feelings',
      body: [
        '{{a se teme de}} — to be afraid of · {{a se supăra}} — to get upset · {{a se bucura de}} — to enjoy · {{a se plictisi}} — to get bored.',
      ],
    },
    {
      kind: 'explain',
      title: 'Between people',
      body: [
        '{{a se certa}} — to argue · {{a se împăca}} — to make up · {{a se înțelege}} — to get on: {{Ne înțelegem bine.}} · {{a se întâlni}} — to meet up.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's102-01', prompt: 'I\'ll manage.', answer: 'Mă descurc.' },
        { id: 's102-02', prompt: 'Are you managing?', answer: 'Te descurci?' },
        { id: 's102-03', prompt: 'He\'s managing really well.', answer: 'Se descurcă foarte bine.' },
        { id: 's102-04', prompt: 'I\'ve got used to it.', answer: 'M-am obișnuit.' },
        { id: 's102-05', prompt: 'You\'ll get used to it.', answer: 'Te obișnuiești.' },
        { id: 's102-06', prompt: 'He\'s scared of dogs.', answer: 'Se teme de câini.' },
        { id: 's102-07', prompt: 'Don\'t get upset.', answer: 'Nu te supăra.' },
        { id: 's102-08', prompt: 'Enjoy the holiday!', answer: 'Bucură-te de vacanță!' },
        { id: 's102-09', prompt: 'They argued.', answer: 'S-au certat.' },
        { id: 's102-10', prompt: 'They\'ve made up.', answer: 'S-au împăcat.' },
        { id: 's102-11', prompt: 'We get on well.', answer: 'Ne înțelegem bine.' },
        { id: 's102-12', prompt: 'Let\'s meet up on Saturday.', answer: 'Hai să ne întâlnim sâmbătă.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I\'ll manage."',
      options: [{ text: 'Mă descurc.', correct: true }, { text: 'Voi manage.' }, { text: 'Pot face.' }],
      explanation: 'Managing is a myself-verb: mă descurc.',
    },
    {
      kind: 'assemble',
      prompt: 'He\'s getting used to the new nursery.',
      answer: 'Se obișnuiește cu creșa nouă.',
      distractors: ['la', 'de'],
    },
  ],
  shortcut: 'Mă descurc = I\'ll manage. M-am obișnuit = I\'ve got used to it. Mă tem de = I\'m afraid of. Ne-am certat / împăcat = we argued / made up. Ne înțelegem = we get on.',
  useItToday: 'Say "Mă descurc" next time someone offers help you don\'t need.',
}

export const moreToMeVerbs: StructureLesson = {
  id: 's-to-me-more',
  part: 'People and things',
  title: 'More "to me" verbs: convine, ajunge, lipsește',
  tagline: 'Îmi convine. Îmi ajunge. Îmi lipsești.',
  shift: {
    english: '"That suits me", "that\'s enough for me", "I\'m missing something", "I miss you".',
    romanian: 'More verbs built like {{îmi place}} — the thing does it, and it happens "to me": {{îmi convine}}, {{îmi ajunge}}, {{îmi lipsește}}, {{îmi lipsești}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Four useful ones',
      body: [
        '{{Îmi convine.}} — it suits me. {{Nu-mi convine.}} — it doesn\'t suit me / I\'m not happy with it.',
        '{{Îmi ajunge.}} — that\'s enough for me. {{Îmi lipsește ceva.}} — I\'m missing something. {{Nu-mi pasă.}} — I don\'t care.',
        '{{Îmi lipsești.}} — I miss you ("to me you are missing").',
      ],
      glosses: [
        { ro: 'Îmi lipsești.', words: [['Îmi', 'to-me'], ['lipsești', 'you-are-missing']], en: 'I miss you.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Swap the person',
      body: [
        '{{Îți convine mâine?}} — does tomorrow suit you? {{Îi ajunge?}} — is it enough for him? {{Ne lipsește un scaun.}} — we\'re a chair short.',
      ],
    },
    {
      kind: 'explain',
      title: 'Two more',
      body: [
        '{{Îmi vine să…}} — I feel like (doing): {{Îmi vine să râd.}}',
        '{{Mi-a trecut.}} — it\'s gone, I\'m over it: {{Mi-a trecut durerea de cap.}} — my headache\'s gone.',
      ],
    },
    {
      kind: 'ladder',
      title: 'To me, to you',
      rungs: [
        { id: 's103-01', prompt: 'That suits me.', answer: 'Îmi convine.' },
        { id: 's103-02', prompt: 'Does tomorrow suit you?', answer: 'Îți convine mâine?' },
        { id: 's103-03', prompt: 'I\'m not happy with it.', answer: 'Nu-mi convine.' },
        { id: 's103-04', prompt: 'That\'s enough for me.', answer: 'Îmi ajunge.' },
        { id: 's103-05', prompt: 'Is it enough for him?', answer: 'Îi ajunge?' },
        { id: 's103-06', prompt: 'I\'m missing something.', answer: 'Îmi lipsește ceva.' },
        { id: 's103-07', prompt: 'I miss you.', answer: 'Îmi lipsești.', acceptedAlternates: ['Mi-e dor de tine.'], teachingNote: 'Mi-e dor de tine means the same.' },
        { id: 's103-08', prompt: 'We\'re a chair short.', answer: 'Ne lipsește un scaun.' },
        { id: 's103-09', prompt: 'I feel like laughing.', answer: 'Îmi vine să râd.' },
        { id: 's103-10', prompt: 'My headache\'s gone.', answer: 'Mi-a trecut durerea de cap.' },
        { id: 's103-11', prompt: 'I\'m over it.', answer: 'Mi-a trecut.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Does Saturday suit you?"',
      options: [{ text: 'Convii sâmbătă?' }, { text: 'Îți convine sâmbătă?', correct: true }],
      explanation: 'Saturday does the suiting, "to you": îți convine.',
    },
    {
      kind: 'assemble',
      prompt: 'We\'re two plates short.',
      answer: 'Ne lipsesc două farfurii.',
      distractors: ['lipsește', 'noi'],
    },
  ],
  shortcut: 'Îmi convine (suits me), îmi ajunge (enough), îmi lipsește (I\'m missing), îmi lipsești (I miss you), nu-mi pasă, mi-a trecut.',
  useItToday: 'Fix a plan today with "Îți convine…?"',
}

export const jobs: StructureLesson = {
  id: 's-jobs',
  part: 'People and things',
  title: 'What do you do? Jobs without "a"',
  tagline: 'Cu ce te ocupi? Sunt profesor.',
  shift: {
    english: 'English asks "What do you do?" and answers "I\'m a teacher" — with "a".',
    romanian: 'Romanian asks "with what do you occupy yourself?" — {{Cu ce te ocupi?}} — and drops the "a": {{Sunt profesor.}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Asking',
      body: [
        '{{Cu ce te ocupi?}} — what do you do? (polite: {{Cu ce vă ocupați?}}) · {{Unde lucrezi?}} — where do you work?',
      ],
      glosses: [
        { ro: 'Cu ce te ocupi?', words: [['Cu ce', 'with what'], ['te ocupi', 'you-occupy-yourself']], en: 'What do you do?' },
      ],
    },
    {
      kind: 'explain',
      title: 'Answering — no "a"',
      body: [
        '{{Sunt profesor.}} — I\'m a teacher. {{E inginer.}} — he\'s an engineer. Many jobs take -ă for a woman: {{profesoară}}, {{asistentă}}.',
        'Or say what you do: {{Lucrez în IT.}} · {{Lucrez la o bancă.}} · {{Lucrez pe cont propriu.}} — I\'m self-employed.',
      ],
    },
    {
      kind: 'explain',
      title: 'Work life',
      body: [
        '{{Sunt în concediu.}} — I\'m on leave · {{Mi-am luat liber.}} — I\'ve taken time off · {{Îmi place ce fac.}} — I like what I do.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Talk about work',
      rungs: [
        { id: 's111-01', prompt: 'What do you do?', answer: 'Cu ce te ocupi?' },
        { id: 's111-02', prompt: '(politely) What do you do?', answer: 'Cu ce vă ocupați?' },
        { id: 's111-03', prompt: 'I\'m a teacher.', answer: 'Sunt profesor.' },
        { id: 's111-04', prompt: 'He\'s an engineer.', answer: 'E inginer.' },
        { id: 's111-05', prompt: 'She\'s a teacher.', answer: 'E profesoară.' },
        { id: 's111-06', prompt: 'I work in IT.', answer: 'Lucrez în IT.' },
        { id: 's111-07', prompt: 'I work at a bank.', answer: 'Lucrez la o bancă.' },
        { id: 's111-08', prompt: 'I\'m self-employed.', answer: 'Lucrez pe cont propriu.' },
        { id: 's111-09', prompt: 'I\'m on leave.', answer: 'Sunt în concediu.' },
        { id: 's111-10', prompt: 'I\'ve taken today off.', answer: 'Mi-am luat liber azi.' },
        { id: 's111-11', prompt: 'I like what I do.', answer: 'Îmi place ce fac.' },
        { id: 's111-12', prompt: 'What does your dad do?', answer: 'Cu ce se ocupă tatăl tău?' },
      ],
    },
    {
      kind: 'choose',
      question: '"I\'m a doctor."',
      options: [{ text: 'Sunt un doctor.' }, { text: 'Sunt doctor.', correct: true }],
      explanation: 'After "I am", a job drops the "a".',
    },
    {
      kind: 'assemble',
      prompt: 'My brother is a cook in a restaurant.',
      answer: 'Fratele meu e bucătar la un restaurant.',
      distractors: ['o', 'ca'],
    },
  ],
  shortcut: 'What do you do? = Cu ce te ocupi? Jobs drop the "a": sunt profesor. Or: lucrez în / la…, lucrez pe cont propriu.',
  useItToday: 'Be ready for the question at the next family gathering: say your job three ways.',
}

export const loveAndHate: StructureLesson = {
  id: 's-likes',
  part: 'People and things',
  title: 'Love it, hate it: ador, mor după, nu suport',
  tagline: 'Ador marea. Mor după sarmale. Nu suport frigul.',
  shift: {
    english: 'English runs from "I like" to "I love", "I\'m crazy about", "I can\'t stand", "I prefer".',
    romanian: 'Romanian has its own scale: {{îmi place}}, {{ador}}, {{mor după}} ("I die after"), {{prefer}}, {{nu suport}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Up the scale',
      body: [
        '{{Îmi place.}} → {{Îmi place mult.}} → {{Ador!}} — I love it → {{Mor după…}} — I\'m crazy about ("I die after").',
      ],
    },
    {
      kind: 'explain',
      title: 'Down the scale',
      body: [
        '{{Nu prea îmi place.}} → {{Nu-mi place deloc.}} → {{Nu suport…}} — I can\'t stand · {{Urăsc…}} — I hate (strong).',
      ],
    },
    {
      kind: 'explain',
      title: 'Preferring',
      body: [
        '{{Prefer ceaiul.}} · {{Îmi place mai mult marea decât muntele.}} · {{Oricare e bine.}} — either is fine.',
      ],
    },
    {
      kind: 'ladder',
      title: 'How much?',
      rungs: [
        { id: 's113-01', prompt: 'I love the seaside.', answer: 'Ador marea.' },
        { id: 's113-02', prompt: 'I\'m crazy about sarmale.', answer: 'Mor după sarmale.' },
        { id: 's113-03', prompt: 'I love it!', answer: 'Ador!' },
        { id: 's113-04', prompt: 'He\'s crazy about trains.', answer: 'Moare după trenuri.' },
        { id: 's113-05', prompt: 'I can\'t stand the cold.', answer: 'Nu suport frigul.' },
        { id: 's113-06', prompt: 'I hate waiting.', answer: 'Urăsc să aștept.' },
        { id: 's113-07', prompt: 'I prefer tea.', answer: 'Prefer ceaiul.' },
        { id: 's113-08', prompt: 'I like the sea more than the mountains.', answer: 'Îmi place mai mult marea decât muntele.' },
        { id: 's113-09', prompt: 'What do you prefer?', answer: 'Ce preferi?' },
        { id: 's113-10', prompt: 'Either is fine.', answer: 'Oricare e bine.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Mor după ciocolată" means…',
      options: [{ text: 'Chocolate will be the death of me' }, { text: 'I\'m crazy about chocolate', correct: true }],
      explanation: 'Mor după — "I die after" — is being crazy about something.',
    },
  ],
  shortcut: 'Îmi place < îmi place mult < ador < mor după. Nu prea < deloc < nu suport < urăsc. Prefer…; mai mult… decât…',
  useItToday: 'Tell your partner one thing you adore and one you can\'t stand — in Romanian.',
}

export const familyTree: StructureLesson = {
  id: 's-family-tree',
  part: 'People and things',
  title: 'The family tree: in-laws, godparents, and nepot',
  tagline: 'Soacra, cumnatul, nașii — and nepot means two things.',
  shift: {
    english: 'English family words are simple: "in-law" covers everything, and a nephew is never a grandson.',
    romanian: 'Romanian has a word for each in-law — {{socru}}, {{soacră}}, {{cumnat}} — {{nepot}} is both grandson and nephew, and the godparents, {{nașii}}, are family for life.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'In-laws',
      body: [
        '{{socrul}} — father-in-law · {{soacra}} — mother-in-law · {{cumnatul}} / {{cumnata}} — brother- / sister-in-law · {{ginerele}} — son-in-law · {{nora}} — daughter-in-law.',
      ],
    },
    {
      kind: 'explain',
      title: 'Nepot: grandson and nephew',
      body: [
        '{{nepot}} / {{nepoată}} means grandson / granddaughter **and** nephew / niece. Context tells you which: {{Bunica își iubește nepotul.}} — Grandma loves her grandson.',
      ],
    },
    {
      kind: 'explain',
      title: 'Aunts, uncles, cousins',
      body: [
        '{{unchi}} — uncle · {{mătușă}} — aunt · {{văr}} / {{verișoară}} — cousin.',
        '{{tanti}} — "auntie", used affectionately for any older woman a child knows: {{Salut-o pe tanti!}}',
      ],
    },
    {
      kind: 'explain',
      title: 'Godparents',
      body: [
        '{{nașul}} / {{nașa}} — godfather / godmother. They\'re often the couple who were the witnesses at the wedding too, and the bond lasts a lifetime. {{finul}} / {{fina}} — godson / goddaughter.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Who\'s who',
      rungs: [
        { id: 's114-01', prompt: 'Father-in-law and mother-in-law.', answer: 'Socrul și soacra.' },
        { id: 's114-02', prompt: 'My brother-in-law is coming too.', answer: 'Vine și cumnatul meu.' },
        { id: 's114-03', prompt: 'Grandma loves her grandson.', answer: 'Bunica își iubește nepotul.' },
        { id: 's114-04', prompt: 'My nephew is five.', answer: 'Nepotul meu are cinci ani.' },
        { id: 's114-05', prompt: 'His granddaughter.', answer: 'Nepoata lui.' },
        { id: 's114-06', prompt: 'My uncle and aunt.', answer: 'Unchiul și mătușa mea.' },
        { id: 's114-07', prompt: 'Your cousin.', answer: 'Vărul tău.' },
        { id: 's114-08', prompt: 'The godparents are coming for Easter.', answer: 'Vin nașii de Paște.' },
        { id: 's114-09', prompt: 'He\'s our godson.', answer: 'E finul nostru.' },
        { id: 's114-10', prompt: '(to him) Say hello to auntie!', answer: 'Salut-o pe tanti!' },
        { id: 's114-11', prompt: 'The whole family\'s here.', answer: 'E toată familia aici.' },
      ],
    },
    {
      kind: 'choose',
      question: 'Grandma says "Nepotul meu e cel mai frumos!" about your son. Nepot here means…',
      options: [{ text: 'nephew' }, { text: 'grandson', correct: true }],
      explanation: 'Nepot is both — from Grandma, it\'s her grandson.',
    },
  ],
  shortcut: 'Socru / soacră = in-laws. Cumnat(ă) = brother / sister-in-law. Nepot = grandson AND nephew. Unchi, mătușă, văr. Nașii = godparents (a big deal). Tanti = auntie.',
  useItToday: 'Draw the family tree with your partner and label it in Romanian.',
}

export const stressedMe: StructureLesson = {
  id: 's-mie-imi',
  part: 'People and things',
  title: 'Me too — și mie! Stressing "me"',
  tagline: 'Mie îmi place. Ție? — and why "me too" is și mie.',
  shift: {
    english: 'English stresses with the voice: "I like it — do YOU?", "she called ME". And "me too" never changes.',
    romanian: 'Romanian adds a stressed word up front and keeps the little one: {{Mie îmi place.}} {{Pe mine m-a sunat.}} And with "to me" verbs, "me too" is {{Și mie!}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The stressed forms',
      body: [
        'For "to me, to you…": {{mie}}, {{ție}}, {{lui}}, {{ei}}, {{nouă}}, {{vouă}}, {{lor}}.',
        'For "me, you…" as the one it\'s done to: {{pe mine}}, {{pe tine}}, {{pe el}}, {{pe ea}}, {{pe noi}}, {{pe voi}}, {{pe ei}}.',
        'They go first, and the little word stays: {{Mie îmi place, ție nu.}} — I like it, you don\'t. {{Pe mine nu mă întreabă nimeni.}} — nobody asks ME.',
      ],
      glosses: [
        { ro: 'Mie îmi place.', words: [['Mie', 'to-me'], ['îmi', 'to-me'], ['place', 'it-pleases']], en: 'I like it.' },
      ],
    },
    {
      kind: 'explain',
      title: 'The "me too" trap',
      body: [
        'With "to me" verbs — place, e frig, e dor, trebuie — "me too" is {{Și mie!}} and "me neither" is {{Nici mie.}}',
        'With ordinary verbs it\'s {{Și eu}} / {{Nici eu}}: "I\'m going" — {{Și eu!}}; "I like it" — {{Și mie!}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Stress it',
      rungs: [
        { id: 's153-01', prompt: 'I like it. Do you?', answer: 'Mie îmi place. Ție?' },
        { id: 's153-02', prompt: 'I like it, you don\'t.', answer: 'Mie îmi place, ție nu.' },
        { id: 's153-03', prompt: '(liking something) Me too!', answer: 'Și mie!', teachingNote: 'With "to me" verbs, "me too" is și mie — not și eu.' },
        { id: 's153-04', prompt: '(not liking something) Me neither.', answer: 'Nici mie.' },
        { id: 's153-05', prompt: '(going somewhere) Me too!', answer: 'Și eu!' },
        { id: 's153-06', prompt: 'He likes it, she doesn\'t.', answer: 'Lui îi place, ei nu.' },
        { id: 's153-07', prompt: 'She called ME, not you.', answer: 'Pe mine m-a sunat, nu pe tine.' },
        { id: 's153-08', prompt: 'Nobody asks me.', answer: 'Pe mine nu mă întreabă nimeni.' },
        { id: 's153-09', prompt: 'We\'re cold. What about you?', answer: 'Nouă ne e frig. Vouă?' },
        { id: 's153-10', prompt: '(missing someone) Me too.', answer: 'Și mie.' },
      ],
    },
    {
      kind: 'choose',
      question: 'Your partner says "Îmi place filmul ăsta." You like it too:',
      options: [{ text: 'Și eu!' }, { text: 'Și mie!', correct: true }],
      explanation: '"To me it pleases" — so "and to me": și mie.',
    },
    {
      kind: 'dialogue',
      title: 'In real life: Pizza or pasta?',
      setting: 'You and your partner, choosing dinner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Mie îmi place pizza. Ție?', en: 'I like pizza. Do you?' },
        { who: 'you', ro: 'Și mie! Dar mie mi-e poftă de paste azi.', en: 'Me too! But I fancy pasta today.' },
        { who: 'them', ro: 'Pe mine nu mă întreabă nimeni ce vreau…', en: 'Nobody ever asks me what I want…' },
        { who: 'you', ro: 'Te întreb acum! Ce vrei?', en: 'I\'m asking you now! What do you want?' },
        { who: 'them', ro: 'Pizza, normal.', en: 'Pizza, obviously.' },
      ],
    },
  ],
  shortcut: 'Stress "me" with mie / pe mine up front: mie îmi place, pe mine m-a sunat. With "to me" verbs: și mie / nici mie; otherwise și eu / nici eu.',
  useItToday: 'Next time your partner says "Îmi place…", answer "Și mie!"',
}
