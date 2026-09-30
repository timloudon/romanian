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
        { id: 's43-02', prompt: 'Do you want some water?', answer: 'Vrei niște apă?' },
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
