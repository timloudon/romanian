import type { StructureLesson } from '../types'

export const mustHave: StructureLesson = {
  id: 's-must-have',
  part: 'Going further',
  title: 'Must have, might have, can\'t have',
  tagline: 'Trebuie să fi uitat — he must have forgotten.',
  shift: {
    english: 'English guesses about the past with "must have", "might have" and "can\'t have" + done.',
    romanian: 'Romanian uses {{trebuie să fi}} + done for "must have", and {{poate că}} + the normal past for "might have".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Must have',
      body: [
        '{{Trebuie să fi uitat.}} — he must have forgotten. The shape never changes: {{trebuie să fi}} + the "done" form, whoever it is. {{Trebuie să fi plecat.}} — they must have left.',
      ],
      glosses: [
        { ro: 'Trebuie să fi uitat.', words: [['Trebuie', 'it\'s-necessary'], ['să fi', 'to have'], ['uitat', 'forgotten']], en: 'He must have forgotten.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Might have, probably',
      body: [
        'Romanian usually just says "maybe" + the normal past: {{Poate că a uitat.}} — he might have forgotten ("maybe he forgot").',
        '{{Probabil că au plecat.}} — they\'ve probably left.',
      ],
    },
    {
      kind: 'explain',
      title: 'Can\'t have',
      body: [
        '{{Nu se poate să fi uitat.}} — he can\'t have forgotten ("it can\'t be that he forgot"). Or just {{Nu cred că a uitat.}}',
      ],
    },
    {
      kind: 'explain',
      title: 'Must be, right now',
      body: [
        'For a guess about now, it\'s {{să fie}}: {{Trebuie să fie obosit.}} — he must be tired. {{Trebuie să fie la serviciu.}} — she must be at work.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Guess it',
      rungs: [
        { id: 's33-01', prompt: 'He must have forgotten.', answer: 'Trebuie să fi uitat.' },
        { id: 's33-02', prompt: 'They must have left.', answer: 'Trebuie să fi plecat.' },
        { id: 's33-03', prompt: 'It must have been hard.', answer: 'Trebuie să fi fost greu.' },
        { id: 's33-04', prompt: '(the phone) I must have lost it.', answer: 'Trebuie să-l fi pierdut.', teachingNote: 'The "it" squeezes in before fi: să-l fi.' },
        { id: 's33-05', prompt: '(the film) You must have seen it.', answer: 'Trebuie să-l fi văzut.' },
        { id: 's33-06', prompt: 'He must be tired.', answer: 'Trebuie să fie obosit.' },
        { id: 's33-07', prompt: 'She must be at work.', answer: 'Trebuie să fie la serviciu.' },
        { id: 's33-08', prompt: 'He might have forgotten.', answer: 'Poate că a uitat.' },
        { id: 's33-09', prompt: 'They\'ve probably left.', answer: 'Probabil că au plecat.' },
        { id: 's33-10', prompt: 'He can\'t have forgotten.', answer: 'Nu se poate să fi uitat.' },
        { id: 's33-11', prompt: 'I don\'t think he\'s heard.', answer: 'Nu cred că a auzit.' },
      ],
    },
    {
      kind: 'dialogue',
      title: 'In real life: Where\'s Andrei?',
      setting: 'Waiting for a friend with your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Unde e Andrei? Trebuia să fie aici la opt.', en: 'Where\'s Andrei? He was supposed to be here at eight.' },
        { who: 'you', ro: 'Trebuie să fi prins trafic.', en: 'He must have hit traffic.' },
        { who: 'them', ro: 'Sau poate că a uitat.', en: 'Or maybe he forgot.' },
        { who: 'you', ro: 'Nu se poate să fi uitat. L-am sunat azi.', en: 'He can\'t have forgotten. I called him today.' },
        { who: 'them', ro: 'Atunci o fi pe drum.', en: 'Then he\'s probably on his way.' },
        { who: 'you', ro: 'Probabil că ajunge în curând.', en: 'He\'ll probably be here soon.' },
      ],
    },
    {
      kind: 'choose',
      question: '"It must have rained."',
      options: [{ text: 'Trebuie să a plouat.' }, { text: 'Trebuie să fi plouat.', correct: true }, { text: 'Trebuie că plouă.' }],
      explanation: 'Must have = trebuie să fi + done. It\'s never "să a".',
    },
    {
      kind: 'assemble',
      prompt: 'They must have arrived by now.',
      answer: 'Trebuie să fi ajuns până acum.',
      distractors: ['au', 'a'],
    },
  ],
  shortcut: 'Must have = trebuie să fi + done. Might have = poate că + the normal past. Can\'t have = nu se poate să fi.',
  useItToday: 'When someone\'s late today, guess why out loud: "Trebuie să fi…", "Poate că a…".',
}

export const presumptive: StructureLesson = {
  id: 's-presumptive',
  part: 'Going further',
  title: 'I wonder where it is: o fi',
  tagline: 'Unde o fi? — a shrug built into the grammar.',
  shift: {
    english: 'English wonders out loud: "I wonder where it is", "who could that be?", "he\'s probably left".',
    romanian: 'Romanian has two little words for it: {{o fi}}. {{Unde o fi?}} — where could it be? {{O fi plecat.}} — he\'s probably left.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'O fi: I suppose, I wonder',
      body: [
        '{{o fi}} + a describing word or a place = "I suppose it is", "could it be": {{O fi obosit.}} — he\'s probably tired, I suppose. {{Unde o fi?}} — where could it be? {{Cine o fi?}} — who could that be?',
        'With a "done" form it guesses about the past: {{O fi uitat.}} — he\'s probably forgotten.',
        'For more than one, it\'s {{or fi}}: {{Or fi ajuns.}} — they\'ve probably arrived.',
        '{{Oare}} — "I wonder" — often comes along: {{Oare doarme?}} — I wonder if he\'s asleep.',
      ],
      glosses: [
        { ro: 'Unde o fi?', words: [['Unde', 'where'], ['o fi', 'might-it-be']], en: 'Where could it be?' },
      ],
    },
    {
      kind: 'explain',
      title: 'Right now, and a lovely phrase',
      body: [
        'With the -ând form it\'s about right now: {{O fi dormind.}} — he\'s probably sleeping.',
        '{{Ce-o fi, o fi.}} — whatever will be, will be.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Wonder out loud',
      rungs: [
        { id: 's34-01', prompt: 'Where could it be?', answer: 'Unde o fi?' },
        { id: 's34-02', prompt: 'Who could that be?', answer: 'Cine o fi?' },
        { id: 's34-03', prompt: 'He\'s probably tired.', answer: 'O fi obosit.' },
        { id: 's34-04', prompt: 'He\'s probably forgotten.', answer: 'O fi uitat.' },
        { id: 's34-05', prompt: 'They\'ve probably arrived.', answer: 'Or fi ajuns.' },
        { id: 's34-06', prompt: 'It\'s probably in the car.', answer: 'O fi în mașină.' },
        { id: 's34-07', prompt: 'I wonder if he\'s asleep.', answer: 'Oare doarme?' },
        { id: 's34-08', prompt: 'I wonder what time it is.', answer: 'Oare cât o fi ceasul?' },
        { id: 's34-09', prompt: 'He\'s probably sleeping.', answer: 'O fi dormind.' },
        { id: 's34-10', prompt: 'Whatever will be, will be.', answer: 'Ce-o fi, o fi.' },
      ],
    },
    {
      kind: 'dialogue',
      title: 'In real life: A knock at the door',
      setting: 'Late evening, you and your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Cine o fi la ușă la ora asta?', en: 'Who could that be at this hour?' },
        { who: 'you', ro: 'O fi vecina. Vine mereu seara.', en: 'Probably the neighbour. She always comes in the evening.' },
        { who: 'them', ro: 'Sau o fi curierul.', en: 'Or it could be the courier.' },
        { who: 'you', ro: 'Oare am comandat ceva?', en: 'Did we order something, I wonder?' },
        { who: 'them', ro: 'Nu știu. Du-te și vezi!', en: 'I don\'t know. Go and see!' },
        { who: 'you', ro: 'E vecina. Ți-am zis!', en: 'It\'s the neighbour. Told you!' },
      ],
    },
    {
      kind: 'choose',
      question: 'Someone knocks. You wonder aloud to your partner:',
      options: [{ text: 'Cine va fi?' }, { text: 'Cine o fi?', correct: true }],
      explanation: 'O fi is the wondering "who could it be?". Va fi is the formal future — "who will be".',
    },
    {
      kind: 'assemble',
      prompt: 'I wonder where he put the keys.',
      answer: 'Oare unde o fi pus cheile?',
      distractors: ['a', 'va'],
    },
  ],
  shortcut: 'O fi = I suppose / could it be: Unde o fi? O fi obosit. O fi uitat. Oare = I wonder.',
  useItToday: 'Next time something\'s lost, say "Unde o fi?" instead of "Unde e?"',
}

export const hadDone: StructureLesson = {
  id: 's-had-done',
  part: 'Going further',
  title: 'Had done: one word',
  tagline: 'Plecase — he had left.',
  shift: {
    english: '"I had eaten", "he had already left" — English uses "had" + done.',
    romanian: 'Romanian squeezes it into one word with **-se-** in the ending: {{mâncasem}} — I had eaten, {{plecase}} — he had left.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The -se- ending',
      body: [
        'Start from the "done" form, drop its final letter, and add **-sem, -seși, -se, -serăm, -serăți, -seră**: {{mâncat}} → {{mâncasem}} (I had eaten), {{plecat}} → {{plecase}} (he had left).',
        'In speech you\'ll mostly meet two: **-sem** (I had) and **-se** (he / she / it had).',
      ],
      glosses: [
        { ro: 'Plecase deja.', words: [['Plecase', 'he-had-left'], ['deja', 'already']], en: 'He had already left.' },
      ],
    },
    {
      kind: 'explain',
      title: 'When you\'ll hear it',
      body: [
        'It\'s the "further back" past in stories: {{Când am ajuns, plecase deja.}} — when I arrived, he had already left.',
        'In everyday chat, Romanians often use the normal past instead — so recognising it matters more than producing it.',
      ],
    },
    {
      kind: 'explain',
      title: 'The irregular ones',
      body: [
        '{{fusesem}} (I had been) · {{avusesem}} (I had had) · {{făcusem}} (I had done) · {{văzusem}} (I had seen) · {{spusesem}} (I had said).',
      ],
    },
    {
      kind: 'ladder',
      title: 'Go further back',
      rungs: [
        { id: 's35-01', prompt: 'I had eaten.', answer: 'Mâncasem.' },
        { id: 's35-02', prompt: 'He had left.', answer: 'Plecase.' },
        { id: 's35-03', prompt: 'He had already left.', answer: 'Plecase deja.' },
        { id: 's35-04', prompt: 'When I arrived, he had already left.', answer: 'Când am ajuns, plecase deja.' },
        { id: 's35-05', prompt: 'I\'d forgotten.', answer: 'Uitasem.' },
        { id: 's35-06', prompt: 'I had never been there.', answer: 'Nu fusesem niciodată acolo.' },
        { id: 's35-07', prompt: 'We had seen the film.', answer: 'Văzuserăm filmul.' },
        { id: 's35-08', prompt: 'I hadn\'t slept at all.', answer: 'Nu dormisem deloc.' },
        { id: 's35-09', prompt: 'It had stopped raining.', answer: 'Se oprise ploaia.' },
        { id: 's35-10', prompt: 'She had said it before.', answer: 'O spusese înainte.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I had already eaten."',
      options: [{ text: 'Mâncasem deja.', correct: true }, { text: 'Aveam mâncat deja.' }, { text: 'Mâncam deja.' }],
      explanation: 'One word: mâncasem. "Aveam mâncat" is English copied word for word — it isn\'t Romanian. "Mâncam deja" is "I was already eating".',
    },
    {
      kind: 'assemble',
      prompt: 'By the time we arrived, he had fallen asleep.',
      answer: 'Până am ajuns noi, adormise.',
      distractors: ['a', 'adormit'],
    },
  ],
  shortcut: 'Had done = one word ending in -sem / -se: mâncasem, plecase. Recognise it; in chat the normal past often does the job.',
  useItToday: 'Listen for -sem and -se in the stories your partner\'s family tell — it means "had".',
}

export const whileDoing: StructureLesson = {
  id: 's-while-doing',
  part: 'Going further',
  title: '-ând: while doing, by doing',
  tagline: 'Mergând, vorbind, plimbându-ne.',
  shift: {
    english: 'English "-ing" does lots of jobs: "I\'m walking", "while walking", "by walking".',
    romanian: 'Romanian\'s {{-ând}} / {{-ind}} form does just one: "while / by doing" — {{mergând}}, {{vorbind}}. Never "I am walking".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Making it',
      body: [
        'Verbs in -a and -e take **-ând**: {{mergând}} (walking), {{mâncând}} (eating), {{făcând}} (doing).',
        'Verbs in -i take **-ind**: {{vorbind}} (speaking), {{dormind}} (sleeping).',
        'It means "while" or "by": {{Am învățat vorbind.}} — I learned by speaking.',
      ],
      glosses: [
        { ro: 'Am învățat vorbind.', words: [['Am învățat', 'I-have learned'], ['vorbind', 'speaking']], en: 'I learned by speaking.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Myself-verbs and little words go on the end',
      body: [
        '{{plimbându-ne}} — (while) walking (ourselves). {{uitându-se}} — (while) watching. {{Cunoscându-l…}} — knowing him…',
      ],
    },
    {
      kind: 'explain',
      title: 'The trap',
      body: [
        'It\'s never "I am doing". "I\'m walking home" is still just {{Merg acasă.}} — the no am-ing rule holds.',
      ],
    },
    {
      kind: 'ladder',
      title: 'While and by',
      rungs: [
        { id: 's36-01', prompt: 'I learned by speaking.', answer: 'Am învățat vorbind.' },
        { id: 's36-02', prompt: 'He fell asleep watching TV.', answer: 'A adormit uitându-se la televizor.' },
        { id: 's36-03', prompt: 'We met walking in the park.', answer: 'Ne-am întâlnit plimbându-ne prin parc.' },
        { id: 's36-04', prompt: 'He came in running.', answer: 'A intrat alergând.' },
        { id: 's36-05', prompt: 'She left crying.', answer: 'A plecat plângând.' },
        { id: 's36-06', prompt: 'He talks while eating.', answer: 'Vorbește mâncând.' },
        { id: 's36-07', prompt: 'Seeing that it\'s raining, let\'s stay in.', answer: 'Văzând că plouă, hai să rămânem acasă.' },
        { id: 's36-08', prompt: 'Knowing him, he\'ll be late.', answer: 'Cunoscându-l, o să întârzie.' },
        { id: 's36-09', prompt: '(the trap) I\'m walking home.', answer: 'Merg acasă.', teachingNote: 'No -ând here — just the plain present.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I\'m reading."',
      options: [{ text: 'Sunt citind.' }, { text: 'Citesc.', correct: true }, { text: 'Citind.' }],
      explanation: 'The -ând form never means "I am doing". Just citesc.',
    },
    {
      kind: 'assemble',
      prompt: 'He learned Romanian by listening.',
      answer: 'A învățat română ascultând.',
      distractors: ['să', 'ascultă'],
    },
  ],
  shortcut: '-ând / -ind = while / by doing: vorbind, mergând. Never "I am doing" — that\'s still the plain present.',
  useItToday: 'Tell your partner how you\'re learning: "Învăț vorbind, ascultând…"',
}

export const passive: StructureLesson = {
  id: 's-passive',
  part: 'Going further',
  title: 'It was built, I was told',
  tagline: 'A fost construită — or, more often, s-a construit.',
  shift: {
    english: 'English passives are everywhere: "it was built", "I was told", "it\'s made in Romania".',
    romanian: 'Romanian has a passive — {{a fost construită}} — but prefers the {{se}} shape, or turning it round: {{mi s-a spus}}, "to me it was said".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The real passive',
      body: [
        '{{a fi}} + the "done" form, which matches the thing like a describing word: {{Casa a fost construită în 1920.}} — the house was built in 1920 (construită, for an o-thing).',
        '{{Magazinul e închis.}} — the shop is closed. {{Ușa era deschisă.}} — the door was open.',
      ],
      glosses: [
        { ro: 'A fost construită.', words: [['A fost', 'it-has been'], ['construită', 'built']], en: 'It was built.' },
      ],
    },
    {
      kind: 'explain',
      title: 'The se passive',
      body: [
        'Much more common in speech: {{Se face așa.}} — it\'s done like this. {{Se vinde.}} — for sale. {{S-a vândut tot.}} — everything\'s been sold.',
      ],
    },
    {
      kind: 'explain',
      title: 'I was told, I was given',
      body: [
        'English "I was told" can\'t be copied. Say "to me it was said": {{Mi s-a spus că…}} — or turn it round: {{Mi-au zis că…}} — they told me that…',
        '"I was given a present" → {{Am primit un cadou.}} — I received a present. "He was born" → {{S-a născut}} — a myself-verb.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's37-01', prompt: '(the house) It was built in 1920.', answer: 'A fost construită în 1920.' },
        { id: 's37-02', prompt: 'The shop is closed.', answer: 'Magazinul e închis.' },
        { id: 's37-03', prompt: 'The door was open.', answer: 'Ușa era deschisă.' },
        { id: 's37-04', prompt: 'It\'s done like this.', answer: 'Se face așa.' },
        { id: 's37-05', prompt: 'For sale.', answer: 'Se vinde.' },
        { id: 's37-06', prompt: 'Everything\'s been sold.', answer: 'S-a vândut tot.' },
        { id: 's37-07', prompt: 'I was told it\'s closed.', answer: 'Mi s-a spus că e închis.' },
        { id: 's37-08', prompt: 'They told me you were coming.', answer: 'Mi-au zis că vii.' },
        { id: 's37-09', prompt: 'I was given a present.', answer: 'Am primit un cadou.' },
        { id: 's37-10', prompt: 'He was born in Romania.', answer: 'S-a născut în România.' },
        { id: 's37-11', prompt: 'It\'s made in Romania.', answer: 'E făcut în România.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I was told."',
      options: [{ text: 'Am fost spus.' }, { text: 'Mi s-a spus.', correct: true }],
      explanation: '"I was told" can\'t be copied — say "to me it was said": mi s-a spus.',
    },
    {
      kind: 'assemble',
      prompt: 'The car was repaired yesterday.',
      answer: 'Mașina a fost reparată ieri.',
      distractors: ['reparat', 'e'],
    },
  ],
  shortcut: 'Passive = fost + done matching the thing (a fost construită). In speech prefer se (se vinde) or "to me" (mi s-a spus).',
  useItToday: 'When you pass on news today, start with "Mi s-a spus că…" or "Mi-au zis că…".',
  seeAlso: { lessonId: 'u21-l02', label: 'Course: Things that happen by themselves' },
}

export const ever: StructureLesson = {
  id: 's-ever',
  part: 'Going further',
  title: 'Whoever, wherever, even if: ori- and chiar',
  tagline: '-ever is ori-: oricine, oriunde, oricând.',
  shift: {
    english: 'English adds -ever: whoever, wherever, whenever, whatever, however.',
    romanian: 'Romanian adds {{ori-}} to the front: {{oricine}}, {{oriunde}}, {{oricând}}, {{orice}}, {{oricum}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Ori- = -ever, any-',
      body: [
        '{{cine}} → {{oricine}} (anyone, whoever) · {{unde}} → {{oriunde}} (anywhere) · {{când}} → {{oricând}} (any time) · {{ce}} → {{orice}} (anything) · {{cum}} → {{oricum}} (anyway).',
        '{{Poți să vii oricând.}} — you can come any time.',
      ],
      glosses: [
        { ro: 'Orice ar fi.', words: [['Orice', 'whatever'], ['ar fi', 'it-would-be']], en: 'Whatever happens.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Even if, although, even',
      body: [
        '{{chiar dacă}} — even if: {{Vin chiar dacă plouă.}} · {{deși}} — although: {{Deși e târziu, nu mi-e somn.}} · {{chiar și}} — even: {{Chiar și el știe.}}',
      ],
    },
    {
      kind: 'explain',
      title: 'However much',
      body: [
        '{{oricât}} — however much: {{Oricât aș încerca…}} — however hard I try… After ori- words, the \'d form is common: {{Oriunde ai merge…}} — wherever you go…',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's38-01', prompt: 'Anyone can do it.', answer: 'Oricine poate să facă asta.' },
        { id: 's38-02', prompt: 'You can come any time.', answer: 'Poți să vii oricând.' },
        { id: 's38-03', prompt: 'Sit anywhere.', answer: 'Stai oriunde.' },
        { id: 's38-04', prompt: 'I\'ll eat anything.', answer: 'Mănânc orice.' },
        { id: 's38-05', prompt: 'Anyway, it doesn\'t matter.', answer: 'Oricum, nu contează.' },
        { id: 's38-06', prompt: 'Whatever happens, I\'ll call you.', answer: 'Orice ar fi, te sun.' },
        { id: 's38-07', prompt: 'I\'m coming even if it rains.', answer: 'Vin chiar dacă plouă.' },
        { id: 's38-08', prompt: 'Although it\'s late, I\'m not sleepy.', answer: 'Deși e târziu, nu mi-e somn.' },
        { id: 's38-09', prompt: 'Even he knows.', answer: 'Chiar și el știe.' },
        { id: 's38-10', prompt: 'However hard I try, I can\'t.', answer: 'Oricât aș încerca, nu pot.' },
        { id: 's38-11', prompt: 'Wherever you go, call me.', answer: 'Oriunde ai merge, sună-mă.' },
      ],
    },
    {
      kind: 'choose',
      question: '"You can call me any time."',
      options: [{ text: 'Poți să mă suni oricând.', correct: true }, { text: 'Poți să mă suni orice timp.' }],
      explanation: 'Any time = oricând — one word.',
    },
    {
      kind: 'assemble',
      prompt: 'Even if you don\'t want to, we\'re going.',
      answer: 'Chiar dacă nu vrei, mergem.',
      distractors: ['deși', 'ori'],
    },
  ],
  shortcut: '-ever / any- = ori-: oricine, oriunde, oricând, orice, oricum. Even if = chiar dacă. Although = deși.',
  useItToday: 'Offer something open today: "Oricând vrei." "Orice vrei."',
}

export const beforeAfter: StructureLesson = {
  id: 's-before-after',
  part: 'Going further',
  title: 'Before, after, until — and the strange "until not"',
  tagline: 'Nu plecăm până nu mănânci — "we\'re not leaving until you don\'t eat".',
  shift: {
    english: '"Before you go", "after we eat", "until you finish", "as soon as he arrives".',
    romanian: 'Romanian uses {{înainte să}}, {{după ce}}, {{imediat ce}} — and after a "not", "until" takes a {{nu}} English doesn\'t have: {{până nu termini}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Before takes să, after doesn\'t',
      body: [
        '{{înainte să}} + the să form: {{înainte să pleci}} — before you go.',
        '{{după ce}} + the normal verb: {{după ce mâncăm}} — after we eat.',
      ],
      glosses: [
        { ro: 'Înainte să pleci.', words: [['Înainte', 'before'], ['să', 'that'], ['pleci', 'you-leave']], en: 'Before you go.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Until… not',
      body: [
        '"We\'re not leaving until you eat" → {{Nu plecăm până nu mănânci.}} — literally "until you don\'t eat". After a "not" sentence, Romanian likes {{până nu}}. It feels backwards; it\'s completely normal.',
        'Otherwise it\'s plain {{până}}: {{Așteaptă până vin.}} — wait until I come.',
      ],
    },
    {
      kind: 'explain',
      title: 'As soon as, while, since',
      body: [
        '{{imediat ce}} — as soon as: {{Te sun imediat ce ajung.}} · {{cât timp}} — while, as long as: {{Cât timp doarme, facem ordine.}} · {{de când}} — ever since: {{De când s-a născut…}}',
      ],
    },
    {
      kind: 'explain',
      title: 'The other "extra nu": fear',
      body: [
        'After being afraid, Romanian also adds a {{nu}} that English doesn\'t have: {{Mi-e teamă să nu întârzie.}} — I\'m afraid he\'ll be late (literally "…that he not be late").',
        '{{Ai grijă să nu cazi!}} — careful you don\'t fall — works the same way, and there the nu makes sense in English too.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Put it in order',
      rungs: [
        { id: 's39-01', prompt: 'Call me before you leave.', answer: 'Sună-mă înainte să pleci.' },
        { id: 's39-02', prompt: 'Wash your hands before you eat.', answer: 'Spală-te pe mâini înainte să mănânci.' },
        { id: 's39-03', prompt: 'We\'ll go out after we eat.', answer: 'Ieșim după ce mâncăm.' },
        { id: 's39-04', prompt: 'We\'re not leaving until you eat.', answer: 'Nu plecăm până nu mănânci.' },
        { id: 's39-05', prompt: 'Don\'t go out until it stops raining.', answer: 'Nu ieși până nu se oprește ploaia.' },
        { id: 's39-06', prompt: 'Wait until I come.', answer: 'Așteaptă până vin.' },
        { id: 's39-07', prompt: 'I\'ll call you as soon as I arrive.', answer: 'Te sun imediat ce ajung.' },
        { id: 's39-08', prompt: 'While he\'s asleep, let\'s tidy up.', answer: 'Cât timp doarme, hai să facem ordine.' },
        { id: 's39-09', prompt: 'Since he was born, we haven\'t slept.', answer: 'De când s-a născut, n-am mai dormit.' },
        { id: 's39-10', prompt: 'After he fell asleep, we watched a film.', answer: 'După ce a adormit, ne-am uitat la un film.' },
        { id: 's39-11', prompt: 'I\'m afraid he\'ll be late.', answer: 'Mi-e teamă să nu întârzie.', teachingNote: 'The nu is "extra" — it doesn\'t make it negative.' },
        { id: 's39-12', prompt: 'Careful you don\'t fall!', answer: 'Ai grijă să nu cazi!' },
      ],
    },
    {
      kind: 'choose',
      question: '"Before we leave."',
      options: [{ text: 'Înainte plecăm.' }, { text: 'Înainte să plecăm.', correct: true }, { text: 'Înainte ce plecăm.' }],
      explanation: 'Before always takes să. After takes ce: după ce plecăm.',
    },
    {
      kind: 'assemble',
      prompt: 'We\'re not going until you put your shoes on.',
      answer: 'Nu mergem până nu te încalți.',
      distractors: ['să', 'când'],
    },
  ],
  shortcut: 'Before = înainte să. After = după ce. As soon as = imediat ce. After a "not", until = până nu.',
  useItToday: 'Set one condition for your son today: "Nu… până nu…".',
  seeAlso: { lessonId: 'u14-l02', label: 'Course: If, when, before, after, until' },
}

export const soThat: StructureLesson = {
  id: 's-so-that',
  part: 'Going further',
  title: 'So that, because of, that\'s why',
  tagline: 'Ca să, din cauza, de aceea, așa că.',
  shift: {
    english: 'English has "to / in order to / so that", "because / because of", "so / that\'s why".',
    romanian: 'Romanian: {{ca să}} (so that), {{pentru că}} (because), {{din cauza}} (because of), {{de aceea}} (that\'s why), {{așa că}} (so).',
  },
  steps: [
    {
      kind: 'explain',
      title: 'In order to: ca să',
      body: [
        '{{ca să}} = so that / in order to, with the să form after it: {{Am venit ca să te văd.}} — I came to see you.',
        '{{Vorbește încet ca să nu-l trezești.}} — speak quietly so you don\'t wake him.',
      ],
      glosses: [
        { ro: 'Ca să nu-l trezești.', words: [['Ca să', 'so that'], ['nu-l', 'not-him'], ['trezești', 'you-wake']], en: 'So you don\'t wake him.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Because, because of, thanks to',
      body: [
        '{{pentru că}} + a sentence: {{Stau acasă pentru că plouă.}}',
        '{{din cauza}} + a thing, with the "of" ending: {{din cauza ploii}} — because of the rain. {{datorită}} — thanks to, for good causes: {{datorită ție}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'So, that\'s why',
      body: [
        '{{așa că}} — so (the result): {{Era târziu, așa că am plecat.}} · {{de aceea}} — that\'s why · {{deci}} — so, therefore.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Give the reason',
      rungs: [
        { id: 's40-01', prompt: 'I came to see you.', answer: 'Am venit ca să te văd.' },
        { id: 's40-02', prompt: 'Speak quietly so you don\'t wake him.', answer: 'Vorbește încet ca să nu-l trezești.' },
        { id: 's40-03', prompt: 'I\'m saving to buy a car.', answer: 'Strâng bani ca să-mi cumpăr o mașină.' },
        { id: 's40-04', prompt: 'Because of the rain.', answer: 'Din cauza ploii.' },
        { id: 's40-05', prompt: 'We stayed in because of the rain.', answer: 'Am stat acasă din cauza ploii.' },
        { id: 's40-06', prompt: 'Thanks to you.', answer: 'Datorită ție.' },
        { id: 's40-07', prompt: 'It was late, so we left.', answer: 'Era târziu, așa că am plecat.' },
        { id: 's40-08', prompt: 'That\'s why I didn\'t call.', answer: 'De aceea n-am sunat.' },
        { id: 's40-09', prompt: 'So, what are we doing?', answer: 'Deci, ce facem?' },
        { id: 's40-10', prompt: 'Why? Because I said so!', answer: 'De ce? Pentru că așa am zis eu!' },
      ],
    },
    {
      kind: 'choose',
      question: '"Because of the traffic."',
      options: [{ text: 'Pentru că traficul.' }, { text: 'Din cauza traficului.', correct: true }],
      explanation: 'A thing, not a sentence — so din cauza, with the "of" ending.',
    },
    {
      kind: 'assemble',
      prompt: 'I\'m learning Romanian so I can talk to your parents.',
      answer: 'Învăț română ca să pot vorbi cu părinții tăi.',
      distractors: ['pentru', 'că'],
    },
  ],
  shortcut: 'So that / to = ca să. Because = pentru că. Because of = din cauza + ending. So = așa că. That\'s why = de aceea.',
  useItToday: 'Explain why you\'re doing something today: "… ca să …".',
  seeAlso: { lessonId: 'u14-l01', label: 'Course: Because, so that, but' },
}

export const neitherNor: StructureLesson = {
  id: 's-neither',
  part: 'Going further',
  title: 'Neither, nor, not even, not only',
  tagline: 'Nici… nici, nici măcar, nu numai… ci și.',
  shift: {
    english: '"Neither… nor", "not even", "not only… but also", "either… or".',
    romanian: 'Romanian builds most of them from {{nici}} — {{nici… nici}}, {{nici măcar}} — plus {{nu numai… ci și}} and {{ori… ori}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Neither… nor, not even',
      body: [
        '{{nici… nici}} — neither… nor, and the nu stays: {{Nu vrea nici lapte, nici apă.}} — he wants neither milk nor water.',
        '{{nici măcar}} — not even: {{Nici măcar nu știu.}} — I don\'t even know. (Careful: {{măcar}} alone means "at least".)',
      ],
      glosses: [
        { ro: 'Nici măcar nu știu.', words: [['Nici măcar', 'not even'], ['nu', 'not'], ['știu', 'I-know']], en: 'I don\'t even know.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Not only… but also, either… or',
      body: [
        '{{nu numai… ci și}}: {{E nu numai frumos, ci și ieftin.}} — it\'s not only nice but cheap too.',
        '{{ori… ori}}: {{Ori vii, ori rămâi.}} — either come or stay.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's41-01', prompt: 'Neither me nor him.', answer: 'Nici eu, nici el.' },
        { id: 's41-02', prompt: 'He wants neither milk nor water.', answer: 'Nu vrea nici lapte, nici apă.' },
        { id: 's41-03', prompt: 'I don\'t even know.', answer: 'Nici măcar nu știu.' },
        { id: 's41-04', prompt: 'He didn\'t even say thank you.', answer: 'Nici măcar n-a zis mulțumesc.' },
        { id: 's41-05', prompt: 'Not even once.', answer: 'Nici măcar o dată.' },
        { id: 's41-06', prompt: 'At least call me.', answer: 'Măcar sună-mă.' },
        { id: 's41-07', prompt: 'It\'s not only nice but cheap too.', answer: 'E nu numai frumos, ci și ieftin.' },
        { id: 's41-08', prompt: 'Either come or stay.', answer: 'Ori vii, ori rămâi.' },
        { id: 's41-09', prompt: 'Either today or tomorrow.', answer: 'Ori azi, ori mâine.' },
        { id: 's41-10', prompt: 'Neither of us knows.', answer: 'Niciunul dintre noi nu știe.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I don\'t even have time."',
      options: [{ text: 'Nici măcar n-am timp.', correct: true }, { text: 'Măcar n-am timp.' }],
      explanation: 'Not even = nici măcar. Măcar on its own is "at least".',
    },
    {
      kind: 'assemble',
      prompt: 'He eats neither meat nor fish.',
      answer: 'Nu mănâncă nici carne, nici pește.',
      distractors: ['sau', 'ori'],
    },
  ],
  shortcut: 'Neither… nor = nici… nici (keep the nu). Not even = nici măcar; măcar = at least. Either… or = ori… ori.',
  useItToday: 'Use "nici măcar" the next time something\'s frustrating: "Nici măcar n-am…".',
}

export const asIf: StructureLesson = {
  id: 's-as-if',
  part: 'Going further',
  title: 'Like, as, as if: ca, cum, parcă',
  tagline: 'Ca mine, cum vrei, parcă plouă.',
  shift: {
    english: 'English "like" and "as" do many jobs: like me, as you like, as if he didn\'t know, he looks like you.',
    romanian: 'Romanian splits them: {{ca}} before a thing, {{cum}} before a sentence, {{ca și cum}} or {{parcă}} for "as if", and {{seamănă cu}} for "looks like".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Ca before a thing, cum before a sentence',
      body: [
        '{{ca}}: {{ca mine}} — like me, {{la fel ca}} — the same as.',
        '{{cum}}: {{cum vrei}} — as you like, {{cum am zis}} — as I said, {{Fă cum vrei.}} — do as you like.',
      ],
      glosses: [
        { ro: 'Arată ca un înger.', words: [['Arată', 'he-looks'], ['ca', 'like'], ['un înger', 'an angel']], en: 'He looks like an angel.' },
      ],
    },
    {
      kind: 'explain',
      title: 'As if, it seems',
      body: [
        '{{ca și cum}} + the \'d form: {{Vorbește ca și cum n-ar ști.}} — he talks as if he didn\'t know.',
        '{{parcă}} — "it\'s as if", "it seems": {{Parcă plouă.}} — it looks like it\'s raining. {{Parcă a fost ieri.}} — it feels like yesterday. One of the most Romanian words there is.',
      ],
    },
    {
      kind: 'explain',
      title: 'Looks like: resembles',
      body: [
        '"He looks like you" (resembles) is {{Seamănă cu tine}} — "resembles with you". "What\'s it like?" is {{Cum e?}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's42-01', prompt: 'Like me.', answer: 'Ca mine.' },
        { id: 's42-02', prompt: 'The same as last year.', answer: 'La fel ca anul trecut.' },
        { id: 's42-03', prompt: 'As you like.', answer: 'Cum vrei.' },
        { id: 's42-04', prompt: 'As I said, it doesn\'t matter.', answer: 'Cum am zis, nu contează.' },
        { id: 's42-05', prompt: 'He looks like an angel.', answer: 'Arată ca un înger.' },
        { id: 's42-06', prompt: 'He looks like his dad.', answer: 'Seamănă cu tatăl lui.' },
        { id: 's42-07', prompt: 'What\'s it like?', answer: 'Cum e?' },
        { id: 's42-08', prompt: 'He talks as if he didn\'t know.', answer: 'Vorbește ca și cum n-ar ști.' },
        { id: 's42-09', prompt: 'It looks like it\'s raining.', answer: 'Parcă plouă.' },
        { id: 's42-10', prompt: 'It feels like yesterday.', answer: 'Parcă a fost ieri.' },
        { id: 's42-11', prompt: 'Do it the way I showed you.', answer: 'Fă-o cum ți-am arătat.' },
      ],
    },
    {
      kind: 'choose',
      question: '"As you wish."',
      options: [{ text: 'Ca vrei.' }, { text: 'Cum vrei.', correct: true }],
      explanation: 'Before a sentence, cum. Ca goes before a thing or a person: ca mine.',
    },
    {
      kind: 'assemble',
      prompt: 'It\'s as if nothing happened.',
      answer: 'Parcă nu s-a întâmplat nimic.',
      distractors: ['ca', 'cum'],
    },
  ],
  shortcut: 'Ca + a thing (ca mine). Cum + a sentence (cum vrei). As if = ca și cum / parcă. Resembles = seamănă cu.',
  useItToday: 'Use "parcă" once today — "Parcă…" instantly sounds Romanian.',
}

export const someAny: StructureLesson = {
  id: 's-some-any',
  part: 'Going further',
  title: 'Some, any, a few, lots',
  tagline: 'Niște, vreun, câțiva, mulți — and the "any" you don\'t need.',
  shift: {
    english: 'English "some" and "any" swap between statements and questions.',
    romanian: 'Romanian uses {{niște}} for "some", usually nothing for "any", and {{vreun}} / {{vreo}} for "any at all".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Some, and the missing any',
      body: [
        '{{niște}} — some: {{niște pâine}}, {{niște prieteni}}.',
        'In questions and negatives, "any" usually just disappears: {{Ai bani?}} — have you got any money? {{Nu avem lapte.}} — we haven\'t got any milk.',
      ],
    },
    {
      kind: 'explain',
      title: 'Any at all: vreun, vreo',
      body: [
        '{{vreun}} (un-thing) / {{vreo}} (o-thing) = "any at all", "by any chance": {{Aveți vreo întrebare?}} — any questions? {{Ai vreun pix?}} — have you got a pen, by any chance?',
      ],
    },
    {
      kind: 'explain',
      title: 'A few, many, a lot, a little',
      body: [
        '{{câțiva}} / {{câteva}} — a few (matching the thing): {{câțiva prieteni}}, {{câteva zile}}.',
        '{{mulți}} / {{multe}} — many: {{mulți oameni}}, {{multe lucruri}}. {{mult}} / {{multă}} — a lot of (stuff): {{mult timp}}, {{multă apă}}. {{puțin}} / {{puțină}} — a little.',
      ],
      glosses: [
        { ro: 'Mai avem câteva zile.', words: [['Mai avem', 'still we-have'], ['câteva', 'a-few'], ['zile', 'days']], en: 'We\'ve got a few days left.' },
      ],
    },
    {
      kind: 'ladder',
      title: 'How much, how many',
      rungs: [
        { id: 's43-01', prompt: 'Some bread.', answer: 'Niște pâine.' },
        { id: 's43-02', prompt: 'Do you want some water?', answer: 'Vrei niște apă?', acceptedAlternates: ['Vrei apă'] },
        { id: 's43-03', prompt: 'Have you got any money?', answer: 'Ai bani?' },
        { id: 's43-04', prompt: 'We haven\'t got any milk.', answer: 'Nu avem lapte.' },
        { id: 's43-05', prompt: '(politely) Any questions?', answer: 'Aveți vreo întrebare?' },
        { id: 's43-06', prompt: 'Have you got a pen, by any chance?', answer: 'Ai vreun pix?' },
        { id: 's43-07', prompt: 'A few friends.', answer: 'Câțiva prieteni.' },
        { id: 's43-08', prompt: 'A few days.', answer: 'Câteva zile.' },
        { id: 's43-09', prompt: 'Lots of people.', answer: 'Mulți oameni.' },
        { id: 's43-10', prompt: 'We\'ve got lots of time.', answer: 'Avem mult timp.' },
        { id: 's43-11', prompt: 'A little patience, please.', answer: 'Puțină răbdare, te rog.' },
        { id: 's43-12', prompt: 'Too many toys!', answer: 'Prea multe jucării!' },
      ],
    },
    {
      kind: 'choose',
      question: '"Have you got any children?"',
      options: [{ text: 'Ai vreun copii?' }, { text: 'Ai copii?', correct: true }],
      explanation: 'Ordinary "any" just disappears.',
    },
    {
      kind: 'assemble',
      prompt: 'We need a few things from the shop.',
      answer: 'Avem nevoie de câteva lucruri de la magazin.',
      distractors: ['câțiva', 'niște'],
    },
  ],
  shortcut: 'Some = niște. Plain "any" disappears. Any at all = vreun / vreo. A few = câțiva / câteva. Many = mulți / multe.',
  useItToday: 'At a meal, offer "niște" things: "Mai vrei niște…?"',
}

export const wordBuilding: StructureLesson = {
  id: 's-word-building',
  part: 'Going further',
  title: 'Building words: ne-, re-, -tor, -are',
  tagline: 'Un- is ne-: fericit → nefericit.',
  shift: {
    english: 'English builds words with un-, re-, -er and -ing.',
    romanian: 'Romanian has its own kit — {{ne-}}, {{re-}}, {{-tor}}, {{-are}} — so one word you know becomes four.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'ne- = un-',
      body: [
        '{{fericit}} → {{nefericit}} (unhappy) · {{cunoscut}} → {{necunoscut}} (unknown) · {{plăcut}} → {{neplăcut}} (unpleasant).',
        'Latin words often take **in- / im-**, like English: {{posibil}} → {{imposibil}}, {{credibil}} → {{incredibil}}.',
      ],
    },
    {
      kind: 'explain',
      title: 're- = re-',
      body: [
        '{{a face}} → {{a reface}} (redo) · {{a citi}} → {{a reciti}} (reread) · {{a deschide}} → {{a redeschide}} (reopen).',
      ],
    },
    {
      kind: 'explain',
      title: '-tor, -ar = the person who does it',
      body: [
        '{{a vinde}} → {{vânzător}} (seller, shop assistant) · {{a juca}} → {{jucător}} (player) · {{a învăța}} → {{învățător}} (primary teacher) · {{brutar}} (baker) · {{grădinar}} (gardener).',
      ],
    },
    {
      kind: 'explain',
      title: 'Nouns from verbs',
      body: [
        '**-are / -ere / -ire** turns a verb into a thing: {{a pleca}} → {{plecarea}} (the departure), {{a sosi}} → {{sosirea}} (the arrival).',
        '**-eală** gives everyday nouns: {{oboseală}} (tiredness), {{greșeală}} (mistake), {{îndoială}} (doubt).',
      ],
    },
    {
      kind: 'ladder',
      title: 'Build it',
      rungs: [
        { id: 's44-01', prompt: 'Unhappy.', answer: 'Nefericit.' },
        { id: 's44-02', prompt: 'It\'s unpleasant.', answer: 'E neplăcut.' },
        { id: 's44-03', prompt: 'An unknown number.', answer: 'Un număr necunoscut.' },
        { id: 's44-04', prompt: 'Unbelievable!', answer: 'Incredibil!' },
        { id: 's44-05', prompt: '(the message) Read it again.', answer: 'Recitește-l.' },
        { id: 's44-06', prompt: 'The shop assistant.', answer: 'Vânzătorul.' },
        { id: 's44-07', prompt: 'He\'s a good player.', answer: 'E un jucător bun.' },
        { id: 's44-08', prompt: 'The departure is at six.', answer: 'Plecarea e la șase.' },
        { id: 's44-09', prompt: 'It was a mistake.', answer: 'A fost o greșeală.' },
        { id: 's44-10', prompt: 'Without a doubt.', answer: 'Fără îndoială.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Unknown."',
      options: [{ text: 'necunoscut', correct: true }, { text: 'uncunoscut' }, { text: 'cunoscut-ne' }],
      explanation: 'Un- = ne-: necunoscut.',
    },
    {
      kind: 'assemble',
      prompt: 'It was an unpleasant surprise.',
      answer: 'A fost o surpriză neplăcută.',
      distractors: ['plăcută', 'un'],
    },
  ],
  shortcut: 'un- = ne-, re- = re-, -er = -tor / -ar, the -ing thing = -are / -ere / -ire. One word becomes four.',
  useItToday: 'When you learn a describing word, try it with ne- in front.',
}

export const ownThings: StructureLesson = {
  id: 's-own',
  part: 'Going further',
  title: 'His own: îmi, își, și-a',
  tagline: 'Și-a luat haina — "to himself he took the coat".',
  shift: {
    english: 'English says "my / his / her" for your own things and body: "he took his coat", "she lost her keys".',
    romanian: 'Romanian prefers a "to myself" word and plain "the": {{mi-am luat haina}}, {{și-a luat haina}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'To-myself words',
      body: [
        '{{îmi}} (to myself) · {{îți}} (to yourself) · {{își}} (to himself / herself / themselves) · {{ne}} (ourselves) · {{vă}} (yourselves).',
        'With your own things and body: {{Îmi spăl mâinile.}} — I wash my hands. {{Își caută telefonul.}} — he\'s looking for his phone.',
      ],
    },
    {
      kind: 'explain',
      title: 'In the past',
      body: [
        '{{mi-am}}, {{ți-ai}}, {{și-a}}, {{ne-am}}, {{v-ați}}, {{și-au}}: {{Și-a pierdut cheile.}} — she\'s lost her keys. {{Ți-ai luat umbrela?}} — have you got your umbrella?',
      ],
      glosses: [
        { ro: 'Și-a luat haina.', words: [['Și-a', 'to-himself he-has'], ['luat', 'taken'], ['haina', 'the-coat']], en: 'He took his coat.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Verbs that always carry it',
      body: [
        '{{a-și aminti}} — to remember. {{a-și dori}} — to wish for. {{a-și da seama}} — to realise: {{Mi-am dat seama.}} — I realised.',
        'That last one fixes a classic English-speaker slip: {{realizez}} mostly means "I achieve". "I realise" is {{îmi dau seama}}.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Your own things',
      rungs: [
        { id: 's58-01', prompt: 'I\'m washing my hands.', answer: 'Îmi spăl mâinile.' },
        { id: 's58-02', prompt: 'He\'s looking for his phone.', answer: 'Își caută telefonul.' },
        { id: 's58-03', prompt: 'She\'s lost her keys.', answer: 'Și-a pierdut cheile.' },
        { id: 's58-04', prompt: 'Have you got your umbrella?', answer: 'Ți-ai luat umbrela?' },
        { id: 's58-05', prompt: 'He took his coat.', answer: 'Și-a luat haina.' },
        { id: 's58-06', prompt: 'Put your coat on.', answer: 'Pune-ți haina.' },
        { id: 's58-07', prompt: 'He brushed his teeth.', answer: 'Și-a spălat dinții.' },
        { id: 's58-08', prompt: 'We bought ourselves a house.', answer: 'Ne-am cumpărat o casă.' },
        { id: 's58-09', prompt: 'I realised.', answer: 'Mi-am dat seama.' },
        { id: 's58-10', prompt: 'I didn\'t realise.', answer: 'Nu mi-am dat seama.' },
        { id: 's58-11', prompt: 'What do you wish for?', answer: 'Ce-ți dorești?' },
      ],
    },
    {
      kind: 'choose',
      question: '"I realised."',
      options: [{ text: 'Am realizat.' }, { text: 'Mi-am dat seama.', correct: true }],
      explanation: 'Realizez mostly means "I achieve". Realising is a-și da seama.',
    },
    {
      kind: 'assemble',
      prompt: 'She called her mum.',
      answer: 'Și-a sunat mama.',
      distractors: ['a', 'ei'],
    },
  ],
  shortcut: 'Your own things and body: îmi / îți / își + "the" (îmi spăl mâinile, și-a luat haina). Realise = îmi dau seama.',
  useItToday: 'Narrate getting ready to go out: "Îmi iau haina, îmi caut cheile…".',
}

export const thingsToDo: StructureLesson = {
  id: 's-supine',
  part: 'Going further',
  title: 'Things to do: de + done',
  tagline: 'Ușor de făcut, am de lucru, mașina de spălat.',
  shift: {
    english: 'English uses "to" + a verb: "easy to do", "I have work to do", "I\'ve finished eating".',
    romanian: 'Romanian uses {{de}} + the "done" form: {{ușor de făcut}} — "easy of done". {{mașina de spălat}} — "the machine of washed".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'After describing words',
      body: [
        '{{ușor de făcut}} — easy to do · {{greu de spus}} — hard to say · {{greu de găsit}} — hard to find.',
      ],
      glosses: [
        { ro: 'E ușor de făcut.', words: [['E', 'it\'s'], ['ușor', 'easy'], ['de făcut', 'of done']], en: 'It\'s easy to do.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Things you have to do, have finished doing',
      body: [
        '{{Am de lucru.}} — I\'ve got work to do. {{Am multe de făcut.}} — I\'ve got lots to do. {{Ce e de făcut?}} — what\'s to be done?',
        'After finish and fed up: {{Am terminat de mâncat.}} — I\'ve finished eating. {{M-am săturat de așteptat.}} — I\'m fed up of waiting.',
      ],
    },
    {
      kind: 'explain',
      title: 'Machines and things for a purpose',
      body: [
        '{{mașina de spălat}} — the washing machine · {{mașina de spălat vase}} — the dishwasher · {{apă de băut}} — drinking water.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's59-01', prompt: 'It\'s easy to do.', answer: 'E ușor de făcut.' },
        { id: 's59-02', prompt: 'It\'s hard to say.', answer: 'E greu de spus.' },
        { id: 's59-03', prompt: 'It\'s not easy to find.', answer: 'Nu e ușor de găsit.' },
        { id: 's59-04', prompt: 'I\'ve got work to do.', answer: 'Am de lucru.' },
        { id: 's59-05', prompt: 'I\'ve got lots to do.', answer: 'Am multe de făcut.' },
        { id: 's59-06', prompt: 'What\'s to be done?', answer: 'Ce e de făcut?' },
        { id: 's59-07', prompt: 'I\'ve finished eating.', answer: 'Am terminat de mâncat.' },
        { id: 's59-08', prompt: 'I\'m fed up of waiting.', answer: 'M-am săturat de așteptat.' },
        { id: 's59-09', prompt: 'Is it still far to go?', answer: 'Mai e mult de mers?' },
        { id: 's59-10', prompt: 'The washing machine.', answer: 'Mașina de spălat.' },
        { id: 's59-11', prompt: 'The dishwasher.', answer: 'Mașina de spălat vase.' },
        { id: 's59-12', prompt: 'Drinking water.', answer: 'Apă de băut.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I\'ve finished cooking."',
      options: [{ text: 'Am terminat să gătesc.' }, { text: 'Am terminat de gătit.', correct: true }],
      explanation: 'After finish and fed up, it\'s de + done: de gătit.',
    },
    {
      kind: 'assemble',
      prompt: 'There\'s nothing to be done.',
      answer: 'Nu e nimic de făcut.',
      distractors: ['să', 'fac'],
    },
  ],
  shortcut: '"To do" after easy / hard / have / finish / fed up = de + done: ușor de făcut, am de lucru, am terminat de mâncat.',
  useItToday: 'Tell your partner what you\'ve got on today: "Am de…".',
}

export const wishes: StructureLesson = {
  id: 's-wishes',
  part: 'Going further',
  title: 'I wish, if only',
  tagline: 'Aș vrea să fii aici. Măcar de-aș ști.',
  shift: {
    english: 'English wishes shift the tense back: "I wish you were here", "if only I knew", "I wish I\'d known".',
    romanian: 'Romanian uses what you already have: {{aș vrea să}} + the să form (no shifting back), {{măcar de}} for "if only", {{păcat că}} for regrets.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'I wish: aș vrea să',
      body: [
        '{{Aș vrea să fii aici.}} — I wish you were here ("I\'d like that you be here"). No backshift — just the să form.',
        '{{Aș vrea să pot.}} — I wish I could.',
      ],
      glosses: [
        { ro: 'Aș vrea să fii aici.', words: [['Aș vrea', 'I\'d-like'], ['să fii', 'that you-be'], ['aici', 'here']], en: 'I wish you were here.' },
      ],
    },
    {
      kind: 'explain',
      title: 'If only',
      body: [
        '{{Măcar de-aș ști!}} — if only I knew! {{Măcar să nu plouă.}} — let\'s just hope it doesn\'t rain.',
        '{{Ce bine ar fi dacă…}} — how good it would be if…',
      ],
    },
    {
      kind: 'explain',
      title: 'Regrets',
      body: [
        '"I wish I\'d known" → {{Păcat că n-am știut.}} — a shame I didn\'t know. Or {{Ar fi trebuit să știu.}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Wish it',
      rungs: [
        { id: 's72-01', prompt: 'I wish you were here.', answer: 'Aș vrea să fii aici.' },
        { id: 's72-02', prompt: 'I wish I could.', answer: 'Aș vrea să pot.' },
        { id: 's72-03', prompt: 'I wish it were summer.', answer: 'Aș vrea să fie vară.' },
        { id: 's72-04', prompt: 'I wish he\'d sleep more.', answer: 'Aș vrea să doarmă mai mult.' },
        { id: 's72-05', prompt: 'If only I knew!', answer: 'Măcar de-aș ști!' },
        { id: 's72-06', prompt: 'Let\'s just hope it doesn\'t rain.', answer: 'Măcar să nu plouă.' },
        { id: 's72-07', prompt: 'How good it would be if we had a garden.', answer: 'Ce bine ar fi dacă am avea o grădină.' },
        { id: 's72-08', prompt: 'I wish I\'d known.', answer: 'Păcat că n-am știut.' },
        { id: 's72-09', prompt: 'I hope so.', answer: 'Sper că da.' },
        { id: 's72-10', prompt: 'Let\'s hope everything will be fine.', answer: 'Să sperăm că totul va fi bine.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I wish you were here."',
      options: [{ text: 'Aș vrea că ești aici.' }, { text: 'Aș vrea să fii aici.', correct: true }],
      explanation: 'A wish takes să — and no past tense.',
    },
    {
      kind: 'assemble',
      prompt: 'I wish we had more time.',
      answer: 'Aș vrea să avem mai mult timp.',
      distractors: ['aveam', 'că'],
    },
  ],
  shortcut: 'I wish = aș vrea să + the să form (no backshift). If only = măcar de / măcar să. I wish I\'d… = păcat că n-am…',
  useItToday: 'Tell your partner one wish today: "Aș vrea să…".',
}

export const ifLevels: StructureLesson = {
  id: 's-if',
  part: 'Going further',
  title: 'If: real, imaginary, too late',
  tagline: 'Dacă plouă · dacă aș avea · dacă aș fi știut.',
  shift: {
    english: 'English "if" has three levels: "if it rains" (real), "if I had" (imaginary), "if I\'d known" (too late) — each with its own tense juggling.',
    romanian: 'Romanian has the same three, more regularly: {{dacă}} + present, {{dacă aș}} + verb, {{dacă aș fi}} + done.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Real: dacă + present',
      body: [
        '{{Dacă plouă, rămânem acasă.}} — if it rains, we\'ll stay in. The result can stay in the present too.',
      ],
    },
    {
      kind: 'explain',
      title: 'Imaginary: \'d on both sides',
      body: [
        '{{Dacă aș avea timp, aș învăța mai mult.}} — if I had time, I\'d learn more.',
        '"If I were you" is "if I were in your place": {{Dacă aș fi în locul tău…}}',
      ],
      glosses: [
        { ro: 'Dacă aș avea timp…', words: [['Dacă', 'if'], ['aș avea', 'I\'d have'], ['timp', 'time']], en: 'If I had time…' },
      ],
    },
    {
      kind: 'explain',
      title: 'Too late: aș fi + done',
      body: [
        '{{Dacă aș fi știut, aș fi venit.}} — if I\'d known, I\'d have come.',
        'Mixing is fine: {{Dacă am fi plecat mai devreme, acum am fi acasă.}} — if we\'d left earlier, we\'d be home now.',
      ],
    },
    {
      kind: 'explain',
      title: 'In case, unless, only if',
      body: [
        '{{în caz că}} — in case · {{dacă nu}} — unless ("if not") · {{doar dacă}} — only if · {{cu condiția să}} — as long as, provided.',
      ],
    },
    {
      kind: 'ladder',
      title: 'If…',
      rungs: [
        { id: 's78-01', prompt: 'If it rains, we\'ll stay in.', answer: 'Dacă plouă, rămânem acasă.' },
        { id: 's78-02', prompt: 'If you want, I\'ll come too.', answer: 'Dacă vrei, vin și eu.' },
        { id: 's78-03', prompt: 'If I had time, I\'d learn more.', answer: 'Dacă aș avea timp, aș învăța mai mult.' },
        { id: 's78-04', prompt: 'If I were you, I\'d go.', answer: 'Dacă aș fi în locul tău, aș merge.' },
        { id: 's78-05', prompt: 'If we\'d left earlier, we\'d be home now.', answer: 'Dacă am fi plecat mai devreme, acum am fi acasă.' },
        { id: 's78-06', prompt: 'Take an umbrella in case it rains.', answer: 'Ia o umbrelă în caz că plouă.' },
        { id: 's78-07', prompt: 'We\'ll go, unless it rains.', answer: 'Mergem, dacă nu plouă.' },
        { id: 's78-08', prompt: 'Only if you want to.', answer: 'Doar dacă vrei.' },
        { id: 's78-09', prompt: 'As long as you\'re back by six.', answer: 'Cu condiția să te întorci până la șase.' },
        { id: 's78-10', prompt: 'What would you do if you won the lottery?', answer: 'Ce ai face dacă ai câștiga la loto?' },
      ],
    },
    {
      kind: 'dialogue',
      title: 'In real life: Plans for tomorrow',
      setting: 'You and your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Ce facem dacă plouă mâine?', en: 'What do we do if it rains tomorrow?' },
        { who: 'you', ro: 'Dacă plouă, mergem la muzeu.', en: 'If it rains, we go to the museum.' },
        { who: 'them', ro: 'Și dacă e soare?', en: 'And if it\'s sunny?' },
        { who: 'you', ro: 'Dacă e soare, mergem la lac.', en: 'If it\'s sunny, we go to the lake.' },
        { who: 'them', ro: 'Dacă am avea mai mult timp, am merge la munte.', en: 'If we had more time, we\'d go to the mountains.' },
        { who: 'you', ro: 'Data viitoare. Rămâne așa.', en: 'Next time. Deal.' },
      ],
    },
    {
      kind: 'choose',
      question: '"If I were you, I\'d stay."',
      options: [{ text: 'Dacă eram tu, stăteam.' }, { text: 'Dacă aș fi în locul tău, aș rămâne.', correct: true }],
      explanation: 'Romanian says "if I were in your place" — în locul tău.',
    },
    {
      kind: 'assemble',
      prompt: 'If I had more time, I\'d read more.',
      answer: 'Dacă aș avea mai mult timp, aș citi mai mult.',
      distractors: ['aveam', 'voi'],
    },
  ],
  shortcut: 'Real: dacă + present. Imaginary: dacă aș…, aș… Too late: dacă aș fi + done, aș fi + done. If I were you = dacă aș fi în locul tău.',
  useItToday: 'Ask your partner a "Ce ai face dacă…?" question tonight.',
  seeAlso: { lessonId: 'u17-l01', label: 'Course: "Dacă aș…" — if I had, I would' },
}

export const newsRegister: StructureLesson = {
  id: 's-news',
  part: 'Going further',
  title: 'Reading the news: the formal register',
  tagline: 'Potrivit, urmează să, însă, precum și, va / vor.',
  shift: {
    english: 'News English has its own words: according to, is due to, however, as well as, regarding.',
    romanian: 'So does news Romanian: {{potrivit}}, {{urmează să}}, {{însă}}, {{precum și}}, {{în ceea ce privește}} — plus the formal future {{va}} / {{vor}} and the passive.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The news words',
      body: [
        '{{potrivit}} / {{conform}} — according to: {{potrivit prognozei}} — according to the forecast',
        '{{urmează să}} — is due to, is going to: {{Ministrul urmează să vorbească.}}',
        '{{precum și}} — as well as · {{în ceea ce privește}} — as regards · {{a declarat că}} — stated that',
      ],
    },
    {
      kind: 'explain',
      title: 'The formal future and the passive',
      body: [
        'News uses {{va}} / {{vor}} rather than o să: {{Va ploua.}} — it will rain. {{Drumurile vor fi închise.}} — the roads will be closed.',
        'And the real passive: {{Rezultatele au fost anunțate ieri.}} — the results were announced yesterday.',
      ],
      glosses: [
        { ro: 'Potrivit prognozei, va ploua.', words: [['Potrivit', 'according-to'], ['prognozei', 'of-the-forecast'], ['va ploua', 'will rain']], en: 'According to the forecast, it will rain.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Why bother',
      body: [
        'You won\'t talk like this. But reading a headline or catching the radio news in the car becomes possible once these few words stop being noise.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Read it out like a newsreader',
      rungs: [
        { id: 's84-01', prompt: 'According to the forecast, it will rain.', answer: 'Potrivit prognozei, va ploua.' },
        { id: 's84-02', prompt: 'The minister is due to speak tomorrow.', answer: 'Ministrul urmează să vorbească mâine.' },
        { id: 's84-03', prompt: 'However, prices are rising.', answer: 'Totuși, prețurile cresc.' },
        { id: 's84-04', prompt: 'The weather, however, is changing.', answer: 'Vremea, însă, se schimbă.' },
        { id: 's84-05', prompt: 'The roads will be closed.', answer: 'Drumurile vor fi închise.' },
        { id: 's84-06', prompt: 'The results were announced yesterday.', answer: 'Rezultatele au fost anunțate ieri.' },
        { id: 's84-07', prompt: 'He stated that he will resign.', answer: 'A declarat că va demisiona.' },
        { id: 's84-08', prompt: 'As regards the schools…', answer: 'În ceea ce privește școlile…' },
        { id: 's84-09', prompt: 'Bucharest, as well as Cluj.', answer: 'Bucureștiul, precum și Clujul.' },
        { id: 's84-10', prompt: 'According to the police…', answer: 'Conform poliției…' },
      ],
    },
    {
      kind: 'choose',
      question: '"Urmează să" in a headline means…',
      options: [{ text: 'has just' }, { text: 'is due to', correct: true }, { text: 'refuses to' }],
      explanation: 'Urmează să — "follows that" — is what\'s scheduled to happen next.',
    },
  ],
  shortcut: 'Potrivit / conform = according to. Urmează să = is due to. Însă = however. Precum și = as well as. News uses va / vor and au fost + done.',
  useItToday: 'Put Romanian radio news on in the car for five minutes and listen just for these words.',
}

export const writingEmails: StructureLesson = {
  id: 's-email',
  part: 'Going further',
  title: 'Writing a message or an email',
  tagline: 'Bună ziua, vă scriu în legătură cu… Cu stimă.',
  shift: {
    english: 'English emails run on "Dear…", "I\'m writing regarding…", "Thanks in advance", "Kind regards".',
    romanian: 'Romanian ones do too: {{Bună ziua}}, {{Vă scriu în legătură cu…}}, {{Vă mulțumesc anticipat}}, {{Cu stimă}} — or {{Cu drag}} for family.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Opening',
      body: [
        'Formal: {{Stimată doamnă}} / {{Stimate domnule}} — dear Madam / Sir. Everyday formal: {{Bună ziua,}} — the safe choice.',
        'Family and friends: {{Dragă Ana,}} / {{Bună,}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'The middle',
      body: [
        '{{Vă scriu în legătură cu…}} — I\'m writing about… · {{Aș dori să…}} — I would like to… · {{Vă rog să-mi confirmați…}} — please confirm… · {{Atașat găsiți…}} — attached you\'ll find…',
      ],
    },
    {
      kind: 'explain',
      title: 'Closing',
      body: [
        '{{Vă mulțumesc anticipat.}} — thanks in advance · {{Aștept răspunsul dumneavoastră.}} — I look forward to your reply.',
        '{{Cu stimă,}} — yours sincerely · {{Toate cele bune,}} — all the best · {{Cu drag,}} — love (family) · {{Pupici!}} — kisses (close family).',
      ],
    },
    {
      kind: 'ladder',
      title: 'Write it',
      rungs: [
        { id: 's85-01', prompt: 'Dear Madam,', answer: 'Stimată doamnă,' },
        { id: 's85-02', prompt: 'I\'m writing about the booking.', answer: 'Vă scriu în legătură cu rezervarea.' },
        { id: 's85-03', prompt: 'I would like to change the date.', answer: 'Aș dori să schimb data.' },
        { id: 's85-04', prompt: 'Please confirm the time.', answer: 'Vă rog să-mi confirmați ora.' },
        { id: 's85-05', prompt: 'Attached you\'ll find the documents.', answer: 'Atașat găsiți documentele.' },
        { id: 's85-06', prompt: 'Thank you in advance.', answer: 'Vă mulțumesc anticipat.' },
        { id: 's85-07', prompt: 'I look forward to your reply.', answer: 'Aștept răspunsul dumneavoastră.' },
        { id: 's85-08', prompt: 'Yours sincerely,', answer: 'Cu stimă,' },
        { id: 's85-09', prompt: 'All the best,', answer: 'Toate cele bune,' },
        { id: 's85-10', prompt: '(to family) Love,', answer: 'Cu drag,' },
      ],
    },
    {
      kind: 'choose',
      question: 'Signing off a message to your partner\'s aunt:',
      options: [{ text: 'Cu stimă,' }, { text: 'Cu drag,', correct: true }],
      explanation: 'Cu stimă is for officials and strangers. Family gets cu drag.',
    },
    {
      kind: 'assemble',
      prompt: 'I\'m writing about my son\'s registration.',
      answer: 'Vă scriu în legătură cu înscrierea fiului meu.',
      distractors: ['despre', 'pentru'],
    },
  ],
  shortcut: 'Bună ziua / Stimată doamnă → Vă scriu în legătură cu… → Aș dori să… → Vă mulțumesc anticipat → Cu stimă (or Cu drag for family).',
  useItToday: 'Write your next message to your partner\'s family in Romanian, signed "Cu drag".',
}

export const withoutDoing: StructureLesson = {
  id: 's-without',
  part: 'Going further',
  title: 'Without doing, instead of doing, before doing',
  tagline: 'A plecat fără să zică nimic.',
  shift: {
    english: 'English uses "-ing" after without, instead of, before, after: "without saying", "instead of sleeping".',
    romanian: 'Romanian uses the să form, with the person\'s ending: {{fără să zică}} — "without that he says". {{în loc să dormi}} — "instead that you sleep".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Fără să, în loc să',
      body: [
        '{{fără să}} — without doing: {{A plecat fără să zică nimic.}} — he left without saying anything.',
        '{{în loc să}} — instead of doing: {{În loc să dormi, te joci!}} — instead of sleeping, you\'re playing!',
      ],
      glosses: [
        { ro: 'Fără să zică nimic.', words: [['Fără', 'without'], ['să zică', 'that he-says'], ['nimic', 'nothing']], en: 'Without saying anything.' },
      ],
    },
    {
      kind: 'explain',
      title: 'It\'s good to, it\'s important to',
      body: [
        '{{E bine să}} — it\'s good to · {{E important să}} — it\'s important to · {{E posibil să}} — it\'s possible that, maybe · {{E timpul să}} — it\'s time to: {{E timpul să mergem.}}',
      ],
    },
    {
      kind: 'explain',
      title: 'The formal version: a + verb',
      body: [
        'In writing and formal speech, the "to" form {{a}} + verb appears after {{pentru}}, {{înainte de}}, {{fără}}: {{pentru a înțelege}} — in order to understand, {{înainte de a pleca}} — before leaving. In conversation, the să form does the job.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's99-01', prompt: 'He left without saying anything.', answer: 'A plecat fără să zică nimic.' },
        { id: 's99-02', prompt: 'Don\'t go without eating.', answer: 'Nu pleca fără să mănânci.' },
        { id: 's99-03', prompt: 'Without thinking.', answer: 'Fără să mă gândesc.' },
        { id: 's99-04', prompt: 'Instead of sleeping, you\'re playing!', answer: 'În loc să dormi, te joci!' },
        { id: 's99-05', prompt: 'Instead of complaining, let\'s do something.', answer: 'În loc să ne plângem, hai să facem ceva.' },
        { id: 's99-06', prompt: 'It\'s good to rest.', answer: 'E bine să te odihnești.' },
        { id: 's99-07', prompt: 'It\'s important to eat well.', answer: 'E important să mănânci bine.' },
        { id: 's99-08', prompt: 'Maybe it\'ll rain.', answer: 'E posibil să plouă.' },
        { id: 's99-09', prompt: 'It\'s time to go.', answer: 'E timpul să mergem.' },
        { id: 's99-10', prompt: 'Before leaving, check the gas.', answer: 'Înainte să pleci, verifică gazul.' },
      ],
    },
    {
      kind: 'choose',
      question: '"He came in without knocking."',
      options: [{ text: 'A intrat fără bătând.' }, { text: 'A intrat fără să bată.', correct: true }],
      explanation: 'After fără, the să form — never -ând.',
    },
    {
      kind: 'assemble',
      prompt: 'Instead of watching TV, let\'s go out.',
      answer: 'În loc să ne uităm la televizor, hai să ieșim.',
      distractors: ['fără', 'uitând'],
    },
  ],
  shortcut: 'Without doing = fără să. Instead of doing = în loc să. It\'s good / important / time to = e bine / important / timpul să. Never -ând after these.',
  useItToday: 'Catch yourself doing something "instead of" something else today, and say it: "În loc să…".',
}

export const whatToDo: StructureLesson = {
  id: 's-what-to-do',
  part: 'Going further',
  title: 'I don\'t know what to do: ce să, unde să, cum să',
  tagline: 'Nu știu ce să zic.',
  shift: {
    english: 'English says "what to do", "where to go", "how to say it" — a question word + "to".',
    romanian: 'Romanian uses the question word + {{să}} + the person\'s ending: {{Nu știu ce să fac.}} — "I don\'t know what that I do".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Question word + să',
      body: [
        '{{Nu știu ce să fac.}} — I don\'t know what to do. {{Nu știu unde să mergem.}} — I don\'t know where to go. {{Nu știu cum să-ți spun.}} — I don\'t know how to tell you.',
        'The verb takes whoever\'s doing it: {{Nu știe ce să facă.}} — he doesn\'t know what to do.',
      ],
      glosses: [
        { ro: 'Nu știu ce să fac.', words: [['Nu știu', 'I-don\'t-know'], ['ce', 'what'], ['să fac', 'that I-do']], en: 'I don\'t know what to do.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Asking for advice',
      body: [
        '{{Ce să fac?}} — what should I do? {{Unde să-l pun?}} — where should I put it? {{Cui să-i spun?}} — who should I tell?',
      ],
    },
    {
      kind: 'explain',
      title: 'Knowing, not knowing, wondering',
      body: [
        '{{Nu știu dacă să vin.}} — I don\'t know whether to come. {{Mă întreb ce să-i cumpăr.}} — I\'m wondering what to buy him.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Work it out',
      rungs: [
        { id: 's100-01', prompt: 'I don\'t know what to do.', answer: 'Nu știu ce să fac.' },
        { id: 's100-02', prompt: 'I don\'t know what to say.', answer: 'Nu știu ce să zic.' },
        { id: 's100-03', prompt: 'I don\'t know where to go.', answer: 'Nu știu unde să mergem.' },
        { id: 's100-04', prompt: 'I don\'t know how to tell you.', answer: 'Nu știu cum să-ți spun.' },
        { id: 's100-05', prompt: 'He doesn\'t know what to do.', answer: 'Nu știe ce să facă.' },
        { id: 's100-06', prompt: 'What should I do?', answer: 'Ce să fac?' },
        { id: 's100-07', prompt: '(the box) Where should I put it?', answer: 'Unde s-o pun?' },
        { id: 's100-08', prompt: 'Who should I ask?', answer: 'Pe cine să întreb?' },
        { id: 's100-09', prompt: 'I don\'t know whether to come.', answer: 'Nu știu dacă să vin.' },
        { id: 's100-10', prompt: 'I\'m wondering what to buy him.', answer: 'Mă întreb ce să-i cumpăr.' },
        { id: 's100-11', prompt: 'Tell me what to bring.', answer: 'Spune-mi ce să aduc.' },
      ],
    },
    {
      kind: 'dialogue',
      title: 'In real life: A present for Mum',
      setting: 'You and your partner. Say your lines out loud before revealing them.',
      lines: [
        { who: 'them', ro: 'Nu știu ce să-i cumpăr mamei de ziua ei.', en: 'I don\'t know what to get Mum for her birthday.' },
        { who: 'you', ro: 'Ce zici de o carte?', en: 'What about a book?' },
        { who: 'them', ro: 'Nu știu dacă să-i iau o carte. Are prea multe.', en: 'I don\'t know whether to get her a book. She\'s got too many.' },
        { who: 'you', ro: 'Atunci, în loc să cumpărăm ceva, hai s-o ducem la restaurant.', en: 'Then instead of buying something, let\'s take her out for a meal.' },
        { who: 'them', ro: 'Bună idee! Fără să-i spunem — surpriză.', en: 'Good idea! Without telling her — a surprise.' },
        { who: 'you', ro: 'Perfect.', en: 'Perfect.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I don\'t know what to cook."',
      options: [{ text: 'Nu știu ce a găti.' }, { text: 'Nu știu ce să gătesc.', correct: true }],
      explanation: 'Question word + să + the "I" ending: ce să gătesc.',
    },
    {
      kind: 'assemble',
      prompt: 'We don\'t know where to park.',
      answer: 'Nu știm unde să parcăm.',
      distractors: ['a', 'parca'],
    },
  ],
  shortcut: 'What / where / how to… = ce / unde / cum + să + the person\'s ending: nu știu ce să fac, nu știe unde să meargă.',
  useItToday: 'Next time you\'re stuck on a decision, say it in Romanian: "Nu știu ce să…".',
}

export const eachAtATime: StructureLesson = {
  id: 's-cate',
  part: 'Going further',
  title: 'One each, two at a time: câte',
  tagline: 'Luați câte unul. Unul câte unul. Pas cu pas.',
  shift: {
    english: 'English uses "each", "at a time", "one by one", "in twos".',
    romanian: 'Romanian puts {{câte}} before the number: {{câte unul}} — one each, or one at a time — and builds {{unul câte unul}}, {{pas cu pas}}, {{din când în când}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Câte + number',
      body: [
        '{{Luați câte unul.}} — take one each. {{Intrați câte doi.}} — come in two at a time. {{Mâncăm câte puțin.}} — we eat a little at a time.',
      ],
      glosses: [
        { ro: 'Luați câte unul.', words: [['Luați', 'take (all)'], ['câte', 'each'], ['unul', 'one']], en: 'Take one each.' },
      ],
    },
    {
      kind: 'explain',
      title: 'All of them, both',
      body: [
        '{{amândoi}} — both · {{toți trei}} — all three · {{toate patru}} — all four (o).',
      ],
    },
    {
      kind: 'explain',
      title: 'Rhythm words',
      body: [
        '{{unul câte unul}} — one by one · {{din când în când}} — from time to time · {{zi de zi}} — day after day · {{pas cu pas}} — step by step.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Share it out',
      rungs: [
        { id: 's151-01', prompt: 'Take one each.', answer: 'Luați câte unul.' },
        { id: 's151-02', prompt: '(the sweets) One each!', answer: 'Câte una!' },
        { id: 's151-03', prompt: 'Two at a time.', answer: 'Câte doi.' },
        { id: 's151-04', prompt: 'One by one.', answer: 'Unul câte unul.' },
        { id: 's151-05', prompt: 'A little at a time.', answer: 'Câte puțin.' },
        { id: 's151-06', prompt: 'All three of us.', answer: 'Toți trei.' },
        { id: 's151-07', prompt: 'From time to time.', answer: 'Din când în când.' },
        { id: 's151-08', prompt: 'Step by step.', answer: 'Pas cu pas.' },
        { id: 's151-09', prompt: 'Day after day.', answer: 'Zi de zi.' },
      ],
    },
    {
      kind: 'choose',
      question: 'Handing out biscuits to the kids: "One each!"',
      options: [{ text: 'Una fiecare!' }, { text: 'Câte unul!', correct: true }],
      explanation: 'Each / at a time = câte + the number (biscuitul is an un-word, so câte unul).',
    },
  ],
  shortcut: 'Câte + number = each / at a time (câte unul, câte doi). Unul câte unul · toți trei · din când în când · pas cu pas.',
  useItToday: 'Share something out today with "Câte unul!"',
}

export const whoseFormal: StructureLesson = {
  id: 's-whose',
  part: 'Going further',
  title: 'Whose, the formal way: al cărui, a cărei',
  tagline: 'Femeia a cărei mașină e afară.',
  shift: {
    english: 'English "whose" is easy: the woman whose car is outside.',
    romanian: 'Romanian\'s — {{al cărui}}, {{a cărei}} — matches both the owner and the thing owned. It\'s mostly written; in speech people rephrase.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Two things to match',
      body: [
        'The owner: {{cărui}} (un-owner), {{cărei}} (o-owner), {{căror}} (plural). The thing owned: {{al}} / {{a}} / {{ai}} / {{ale}}.',
        '{{Omul al cărui câine latră.}} — the man whose dog is barking. {{Femeia a cărei mașină e afară.}} — the woman whose car is outside.',
      ],
    },
    {
      kind: 'explain',
      title: 'The spoken shortcut',
      body: [
        'In conversation, rephrase with {{care are}}: {{Vecina care are un câine mare}} — the neighbour with the big dog.',
        'Asking "whose?" is simpler: {{Al cui e?}} · {{A cui e?}} · {{Ale cui sunt?}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Whose',
      rungs: [
        { id: 's150-01', prompt: 'The man whose dog is barking.', answer: 'Omul al cărui câine latră.' },
        { id: 's150-02', prompt: 'The woman whose car is outside.', answer: 'Femeia a cărei mașină e afară.' },
        { id: 's150-03', prompt: 'The neighbours whose children play with him.', answer: 'Vecinii ai căror copii se joacă cu el.' },
        { id: 's150-04', prompt: 'A writer whose books I love.', answer: 'Un scriitor ale cărui cărți îmi plac.' },
        { id: 's150-05', prompt: 'The family whose house is by the sea.', answer: 'Familia a cărei casă e lângă mare.' },
        { id: 's150-06', prompt: '(spoken) The neighbour with the big dog.', answer: 'Vecina care are un câine mare.' },
        { id: 's150-07', prompt: '(the keys) Whose are they?', answer: 'Ale cui sunt?' },
      ],
    },
    {
      kind: 'choose',
      question: '"The woman whose son…"',
      options: [{ text: 'Femeia al cărei fiu…', correct: true }, { text: 'Femeia a cărui fiu…' }, { text: 'Femeia care fiu…' }],
      explanation: 'The owner, femeia, gives cărei; the thing owned, fiu (an un-word), gives al.',
    },
  ],
  shortcut: 'Whose = al / a / ai / ale (the thing owned) + cărui / cărei / căror (the owner). In speech, rephrase: care are…',
  useItToday: 'Spot "al cărui / a cărei" the next time you read something in Romanian.',
}
