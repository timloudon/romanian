import type { StructureLesson } from '../types'

export const getTakeMake: StructureLesson = {
  id: 's-get-take',
  part: 'Sounding natural',
  title: 'Get, take, make: the English verbs that don\'t translate',
  tagline: '"Get" has ten Romanian answers. "Make" and "do" have one.',
  shift: {
    english: 'English "get" covers arrive, receive, fetch, understand, become… — and "make" and "do" are different verbs.',
    romanian: 'Romanian has no "get": you pick what it really means. And "make" and "do" are one verb: {{a face}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Make and do: a face',
      body: [
        '{{Fac cafea.}} — I\'m making coffee. {{Fac ordine.}} — I\'m tidying. {{Ce faci?}} — what are you doing? One verb, no choosing.',
      ],
    },
    {
      kind: 'explain',
      title: 'Get: ask what it really means',
      body: [
        'arrive → {{a ajunge}}: {{Am ajuns acasă.}} — I got home.',
        'receive → {{a primi}}: {{Am primit mesajul.}} — I got the message.',
        'fetch → {{a aduce}}: {{Adu-mi apă.}} — get me some water.',
        'understand → {{a înțelege}}: {{Nu înțeleg.}} — I don\'t get it.',
        'become → {{a se face}}: {{Se face frig.}} — it\'s getting cold.',
      ],
    },
    {
      kind: 'explain',
      title: 'Get up, get dressed, get angry',
      body: [
        'get up → {{a se trezi}} · get dressed → {{a se îmbrăca}} · get angry → {{a se enerva}} · get lost → {{a se rătăci}} · get married → {{a se căsători}} — lots of myself-verbs.',
        'get on (a bus, a car) → {{a urca}} ("go up") · get off → {{a coborî}} ("go down").',
      ],
    },
    {
      kind: 'explain',
      title: 'Take',
      body: [
        'take, grab, bring along → {{a lua}}: {{Ia-ți haina.}} · take someone somewhere → {{a duce}}: {{Îl duc la creșă.}} · it takes (time) → {{a dura}}: {{Durează o oră.}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Find the real verb',
      intro: 'Before each one, ask: what does "get" or "take" actually mean here?',
      rungs: [
        { id: 's46-01', prompt: 'I got home late.', answer: 'Am ajuns acasă târziu.' },
        { id: 's46-02', prompt: 'Did you get my message?', answer: 'Ai primit mesajul meu?' },
        { id: 's46-03', prompt: 'Get me some water, please.', answer: 'Adu-mi niște apă, te rog.' },
        { id: 's46-04', prompt: 'I don\'t get it.', answer: 'Nu înțeleg.' },
        { id: 's46-05', prompt: 'It\'s getting dark.', answer: 'Se întunecă.' },
        { id: 's46-06', prompt: 'Get dressed!', answer: 'Îmbracă-te!' },
        { id: 's46-07', prompt: 'Don\'t get angry.', answer: 'Nu te enerva.' },
        { id: 's46-08', prompt: 'Get in the car!', answer: 'Urcă în mașină!' },
        { id: 's46-09', prompt: 'We get off at the next stop.', answer: 'Coborâm la următoarea stație.' },
        { id: 's46-10', prompt: 'Take your coat.', answer: 'Ia-ți haina.' },
        { id: 's46-11', prompt: 'I\'ll take him to nursery.', answer: 'Îl duc eu la creșă.' },
        { id: 's46-12', prompt: 'It takes an hour.', answer: 'Durează o oră.' },
        { id: 's46-13', prompt: 'I\'m making dinner.', answer: 'Fac de mâncare.', acceptedAlternates: ['Fac mâncare.'] },
      ],
    },
    {
      kind: 'choose',
      question: '"Get in the car!"',
      options: [{ text: 'Ia în mașină!' }, { text: 'Urcă în mașină!', correct: true }],
      explanation: 'Getting in or on is "going up": a urca. There\'s no all-purpose "get".',
    },
    {
      kind: 'assemble',
      prompt: 'What time do you get up?',
      answer: 'La ce oră te trezești?',
      distractors: ['iei', 'faci'],
    },
  ],
  shortcut: 'No "get": say what it means — ajung, primesc, aduc, înțeleg, se face. Make and do = a face. Take = iau / duc / durează.',
  useItToday: 'Every time you think "get" today, stop and find the real verb.',
}

export const fillers: StructureLesson = {
  id: 's-fillers',
  part: 'Sounding natural',
  title: 'Well, so, I mean: the little words that make you sound Romanian',
  tagline: 'Păi, deci, adică, gata, na, mă rog.',
  shift: {
    english: 'English conversation is full of little words: well, so, I mean, anyway, oh well, there you go.',
    romanian: 'So is Romanian: {{păi}}, {{deci}}, {{adică}}, {{gata}}, {{na}}, {{mă rog}}. They\'re what make you sound like a person, not a textbook.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The top six',
      body: [
        '{{păi}} — well… (starting an answer, buying time) · {{deci}} — so · {{adică}} — I mean, that is · {{gata}} — done, that\'s it, enough · {{na}} — there you go, oh well · {{mă rog}} — whatever, anyway.',
      ],
    },
    {
      kind: 'explain',
      title: 'Reacting',
      body: [
        '{{Serios?}} — really? · {{Pe bune?}} — for real? · {{Normal!}} — of course! · {{Nu zău!}} — you don\'t say! · {{Exact!}} — exactly!',
      ],
    },
    {
      kind: 'explain',
      title: 'Buying time',
      body: [
        '{{Stai puțin…}} — hang on… · {{Cum să-ți zic…}} — how can I put it… · {{Știi ce?}} — you know what?',
      ],
    },
    {
      kind: 'ladder',
      title: 'Talk like a person',
      rungs: [
        { id: 's47-01', prompt: 'Well… I don\'t know.', answer: 'Păi… nu știu.' },
        { id: 's47-02', prompt: 'So, are we going?', answer: 'Deci, mergem?' },
        { id: 's47-03', prompt: 'I mean, it\'s not that simple.', answer: 'Adică, nu e chiar așa de simplu.' },
        { id: 's47-04', prompt: 'That\'s it, we\'re leaving!', answer: 'Gata, plecăm!' },
        { id: 's47-05', prompt: 'Oh well, it doesn\'t matter.', answer: 'Na, nu contează.' },
        { id: 's47-06', prompt: 'Anyway, it\'s late.', answer: 'Mă rog, e târziu.' },
        { id: 's47-07', prompt: 'Really?', answer: 'Serios?' },
        { id: 's47-08', prompt: 'For real?', answer: 'Pe bune?' },
        { id: 's47-09', prompt: 'Of course!', answer: 'Normal!', acceptedAlternates: ['Sigur'] },
        { id: 's47-10', prompt: 'Hang on a sec…', answer: 'Stai puțin…' },
        { id: 's47-11', prompt: 'How can I put it…', answer: 'Cum să-ți zic…' },
        { id: 's47-12', prompt: 'You know what?', answer: 'Știi ce?' },
      ],
    },
    {
      kind: 'choose',
      question: 'Your partner asks something tricky and you need a second. You start with:',
      options: [{ text: 'Păi…', correct: true }, { text: 'Gata…' }, { text: 'Na…' }],
      explanation: 'Păi is the "well…" that buys you time. Gata is "that\'s it"; na is "oh well".',
    },
    {
      kind: 'assemble',
      prompt: 'Well, I mean, it depends.',
      answer: 'Păi, adică, depinde.',
      distractors: ['deci', 'gata'],
    },
  ],
  shortcut: 'Păi = well… Deci = so. Adică = I mean. Gata = that\'s it. Na = oh well. Mă rog = anyway. Serios? Pe bune? = really?',
  useItToday: 'Start three answers today with "Păi…" — it instantly sounds more Romanian.',
  seeAlso: { lessonId: 'u22-l01', label: 'Course: But, so, I mean, really' },
}

export const idioms: StructureLesson = {
  id: 's-idioms',
  part: 'Sounding natural',
  title: 'Things Romanian says differently',
  tagline: 'Mi-e lene, nu-mi vine să cred, las-o baltă.',
  shift: {
    english: 'English idioms: "I can\'t be bothered", "I can\'t believe it", "forget it", "nice to meet you".',
    romanian: 'Romanian\'s are built from pieces you already know — {{mi-e lene}} is "to me it\'s laziness" — so they\'re easier to keep than they look.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Feelings as things, again',
      body: [
        '{{Mi-e lene.}} — I can\'t be bothered ("to me it\'s laziness"). {{Mi-e greu.}} — it\'s hard for me. {{Mi-e indiferent.}} — I don\'t mind.',
        '{{Îmi vine să plâng.}} — I feel like crying ("to me it comes to cry"). {{Nu-mi vine să cred!}} — I can\'t believe it!',
      ],
    },
    {
      kind: 'explain',
      title: 'Everyday idioms',
      body: [
        '{{Las-o baltă.}} — forget it ("leave it in the puddle"). {{Fii fără grijă.}} — don\'t worry ("be without worry"). {{Îmi pare bine!}} — nice to meet you ("it seems good to me").',
        '{{Nu e treaba ta.}} — none of your business. {{E pe dos.}} — it\'s inside out / upside down.',
      ],
    },
    {
      kind: 'explain',
      title: 'Family phrases',
      body: [
        '{{Să-ți fie de bine!}} — said after someone\'s eaten or got something: enjoy it. {{Doamne ajută!}} — God willing / good luck. {{Noroc!}} — cheers, good luck, and a casual hi.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it like a Romanian',
      rungs: [
        { id: 's48-01', prompt: 'I can\'t be bothered.', answer: 'Mi-e lene.' },
        { id: 's48-02', prompt: 'I can\'t be bothered to cook.', answer: 'Mi-e lene să gătesc.' },
        { id: 's48-03', prompt: 'It\'s hard for me.', answer: 'Mi-e greu.' },
        { id: 's48-04', prompt: 'I don\'t mind.', answer: 'Mi-e indiferent.' },
        { id: 's48-05', prompt: 'I can\'t believe it!', answer: 'Nu-mi vine să cred!' },
        { id: 's48-06', prompt: 'I feel like crying.', answer: 'Îmi vine să plâng.' },
        { id: 's48-07', prompt: 'Forget it.', answer: 'Las-o baltă.' },
        { id: 's48-08', prompt: 'Don\'t worry.', answer: 'Fii fără grijă.', acceptedAlternates: ['Nu-ți face griji'] },
        { id: 's48-09', prompt: 'Nice to meet you!', answer: 'Îmi pare bine!' },
        { id: 's48-10', prompt: 'It\'s none of your business.', answer: 'Nu e treaba ta.' },
        { id: 's48-11', prompt: '(after a meal) Enjoy!', answer: 'Să-ți fie de bine!' },
        { id: 's48-12', prompt: 'God willing.', answer: 'Doamne ajută.' },
        { id: 's48-13', prompt: 'It\'s inside out.', answer: 'E pe dos.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Nice to meet you."',
      options: [{ text: 'Frumos să te întâlnesc.' }, { text: 'Îmi pare bine.', correct: true }],
      explanation: 'Greetings don\'t translate word for word — îmi pare bine, "it seems good to me".',
    },
    {
      kind: 'assemble',
      prompt: 'I can\'t believe he\'s already two.',
      answer: 'Nu-mi vine să cred că are deja doi ani.',
      distractors: ['e', 'am'],
    },
  ],
  shortcut: 'Idioms are built from pieces you know: mi-e lene, nu-mi vine să cred, las-o baltă, îmi pare bine.',
  useItToday: 'Say "Mi-e lene" honestly at least once today.',
}

export const wordOrder: StructureLesson = {
  id: 's-word-order',
  part: 'Sounding natural',
  title: 'Put what matters first',
  tagline: 'Pe Andrei nu-l cunosc — "Andrei, I don\'t know him".',
  shift: {
    english: 'English word order is fixed — subject, verb, object — and you stress words with your voice.',
    romanian: 'Romanian moves words around: what matters goes first, and the little words keep track. {{Cafeaua o beau fără zahăr}} — "the coffee, I drink it without sugar".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Topic first',
      body: [
        'Put the thing you\'re talking about first, then comment on it — with a heads-up "it" or "him": {{Cafeaua o beau fără zahăr.}} {{Pe Andrei nu-l cunosc.}}',
      ],
      glosses: [
        { ro: 'Pe mama ta o iubesc.', words: [['Pe mama ta', 'your mum'], ['o', 'her'], ['iubesc', 'I-love']], en: 'Your mum, I love.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Stressing "I" goes last',
      body: [
        'To stress who did it, that person goes at the end: {{Am zis eu.}} — I said it. {{Plătesc eu.}} — I\'m paying. {{A venit și el.}} — he came too.',
      ],
    },
    {
      kind: 'explain',
      title: 'Short answers',
      body: [
        'Answers repeat the key word, not "yes": "Is he asleep?" — {{Doarme.}} "Did you buy bread?" — {{Am cumpărat.}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Move it around',
      rungs: [
        { id: 's49-01', prompt: 'I\'m paying.', answer: 'Plătesc eu.' },
        { id: 's49-02', prompt: 'I said it, not you.', answer: 'Am zis eu, nu tu.' },
        { id: 's49-03', prompt: 'He came too.', answer: 'A venit și el.' },
        { id: 's49-04', prompt: 'Coffee, I drink without sugar.', answer: 'Cafeaua o beau fără zahăr.' },
        { id: 's49-05', prompt: 'Andrei, I don\'t know.', answer: 'Pe Andrei nu-l cunosc.' },
        { id: 's49-06', prompt: 'The keys, I left them in the car.', answer: 'Cheile le-am lăsat în mașină.' },
        { id: 's49-07', prompt: 'Your parents, we\'ll see them in the summer.', answer: 'Pe părinții tăi o să-i vedem la vară.' },
        { id: 's49-08', prompt: 'That, I didn\'t know.', answer: 'Asta nu știam.' },
        { id: 's49-09', prompt: '("Is he asleep?") Yes, he is.', answer: 'Doarme.' },
        { id: 's49-10', prompt: '("Did you buy bread?") Yes, I did.', answer: 'Am cumpărat.' },
      ],
    },
    {
      kind: 'choose',
      question: '"The car, I sold it."',
      options: [{ text: 'Mașina am vândut.' }, { text: 'Mașina am vândut-o.', correct: true }],
      explanation: 'When the thing comes first, add the heads-up "it": vândut-o.',
    },
    {
      kind: 'assemble',
      prompt: 'The toys, we put them in the box.',
      answer: 'Jucăriile le-am pus în cutie.',
      distractors: ['am', 'o'],
    },
  ],
  shortcut: 'What matters goes first; the little words keep track (Cafeaua o beau…). Stressed "I" goes last: plătesc eu.',
  useItToday: 'Say "Plătesc eu" or "Fac eu" at the right moment today.',
}

export const polite: StructureLesson = {
  id: 's-polite',
  part: 'Sounding natural',
  title: 'Talking to your partner\'s parents: the polite register',
  tagline: 'Dumneavoastră, aș dori, vă rog frumos — and when to drop them.',
  shift: {
    english: 'English has one "you", and makes politeness with "could you possibly…".',
    romanian: 'Romanian has a polite "you" — the -ți form and {{dumneavoastră}} — plus softer verbs like {{aș dori}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The polite you',
      body: [
        'Use the -ți form with anyone older you\'re not close to, officials and shop staff: {{Ce doriți?}} — what would you like? {{Unde locuiți?}} — where do you live?',
        'As a word: {{dumneavoastră}} (fully polite) and {{dumneata}} (polite but familiar — older people use it).',
      ],
      glosses: [
        { ro: 'Ce doriți?', words: [['Ce', 'what'], ['doriți', 'you-wish (polite)']], en: 'What would you like?' },
      ],
    },
    {
      kind: 'explain',
      title: 'Softer verbs',
      body: [
        '{{aș dori}} — I\'d like (more formal than aș vrea). {{Ați putea…?}} — could you…? {{Vă rog frumos.}} — please. {{Vă mulțumesc frumos.}} — thank you very much ("beautifully").',
      ],
    },
    {
      kind: 'explain',
      title: 'When to switch to tu',
      body: [
        'The older person usually offers the switch: {{Hai să ne tutuim!}} — let\'s use "tu". Until then, the -ți form with your partner\'s parents is a kind gesture — even if they say tu to you.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Be polite',
      rungs: [
        { id: 's50-01', prompt: '(politely) What would you like?', answer: 'Ce doriți?' },
        { id: 's50-02', prompt: 'I\'d like a coffee, please.', answer: 'Aș dori o cafea, vă rog.' },
        { id: 's50-03', prompt: '(politely) Could you help me?', answer: 'Ați putea să mă ajutați?' },
        { id: 's50-04', prompt: 'Thank you very much.', answer: 'Vă mulțumesc frumos.' },
        { id: 's50-05', prompt: '(politely) How are you?', answer: 'Ce mai faceți?' },
        { id: 's50-06', prompt: '(politely) Would you like some more?', answer: 'Mai doriți?' },
        { id: 's50-07', prompt: '(politely) Excuse me, where is the station?', answer: 'Scuzați-mă, unde e gara?' },
        { id: 's50-08', prompt: '(politely) Where do you live?', answer: 'Unde locuiți?' },
        { id: 's50-09', prompt: '(politely) You\'re right.', answer: 'Aveți dreptate.' },
        { id: 's50-10', prompt: 'Let\'s use tu.', answer: 'Hai să ne tutuim.' },
        { id: 's50-11', prompt: '(to your partner\'s parents) Thank you for everything you do for us.', answer: 'Vă mulțumim pentru tot ce faceți pentru noi.' },
      ],
    },
    {
      kind: 'choose',
      question: 'In a shop, to the assistant:',
      options: [{ text: 'Poți să mă ajuți?' }, { text: 'Ați putea să mă ajutați?', correct: true }],
      explanation: 'Strangers and shop staff get the polite -ți form.',
    },
    {
      kind: 'assemble',
      prompt: '(politely) Could you speak more slowly?',
      answer: 'Ați putea să vorbiți mai rar?',
      distractors: ['poți', 'vorbești'],
    },
  ],
  shortcut: 'Polite you = the -ți form (+ dumneavoastră). Aș dori, ați putea, vă rog frumos. Let them offer tu.',
  useItToday: 'Use the -ți form with the next shop assistant or older neighbour you speak to.',
}

export const numbersAndTime: StructureLesson = {
  id: 's-numbers',
  part: 'Sounding natural',
  title: 'Numbers, times and dates',
  tagline: 'Quarter to four is "four without a quarter".',
  shift: {
    english: 'English says "quarter to four", "half past two", "on the fifth of May" and "25 cars".',
    romanian: 'Romanian says "four without a quarter" — {{patru fără un sfert}} — "two and a half" — {{două și jumătate}} — and adds {{de}} from 20 up: {{douăzeci și cinci de mașini}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Numbers with things',
      body: [
        'One and two match the thing: {{un copil}} / {{o fată}}, {{doi copii}} / {{două fete}}.',
        'From 20 upwards, add {{de}}: {{douăzeci de ani}}, {{o sută de lei}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'Telling the time',
      body: [
        '{{Cât e ceasul?}} — what time is it? {{E ora trei.}} — it\'s three o\'clock.',
        '{{trei și un sfert}} — quarter past three · {{trei și jumătate}} — half past three · {{patru fără un sfert}} — quarter to four · {{patru fără zece}} — ten to four.',
        '"At" a time is {{la}}: {{la ora opt}}.',
      ],
      glosses: [
        { ro: 'Patru fără un sfert.', words: [['Patru', 'four'], ['fără', 'without'], ['un sfert', 'a quarter']], en: 'Quarter to four.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Days and dates',
      body: [
        '{{luni}}, {{marți}}, {{miercuri}}, {{joi}}, {{vineri}}, {{sâmbătă}}, {{duminică}}. "On Monday" is just {{luni}}; "on Mondays" is {{lunea}}.',
        'Dates take {{pe}}: {{pe cinci mai}} — on the fifth of May. Months take {{în}}: {{în august}}.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say the time',
      rungs: [
        { id: 's51-01', prompt: 'It\'s three o\'clock.', answer: 'E ora trei.' },
        { id: 's51-02', prompt: 'At eight.', answer: 'La ora opt.' },
        { id: 's51-03', prompt: 'Half past two.', answer: 'Două și jumătate.' },
        { id: 's51-04', prompt: 'Quarter to four.', answer: 'Patru fără un sfert.' },
        { id: 's51-05', prompt: 'Quarter past six.', answer: 'Șase și un sfert.' },
        { id: 's51-06', prompt: 'Ten to nine.', answer: 'Nouă fără zece.' },
        { id: 's51-07', prompt: 'On Monday.', answer: 'Luni.' },
        { id: 's51-08', prompt: 'On Sundays we go to the park.', answer: 'Duminica mergem în parc.' },
        { id: 's51-09', prompt: 'On the fifth of May.', answer: 'Pe cinci mai.' },
        { id: 's51-10', prompt: 'In August.', answer: 'În august.' },
        { id: 's51-11', prompt: 'Twenty-five lei.', answer: 'Douăzeci și cinci de lei.' },
        { id: 's51-12', prompt: 'Two coffees, please.', answer: 'Două cafele, vă rog.' },
        { id: 's51-13', prompt: 'A hundred people.', answer: 'O sută de oameni.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Twenty minutes."',
      options: [{ text: 'Douăzeci minute' }, { text: 'Douăzeci de minute', correct: true }],
      explanation: 'From 20 up, add de.',
    },
    {
      kind: 'assemble',
      prompt: 'The flight is at quarter to seven.',
      answer: 'Zborul e la șapte fără un sfert.',
      distractors: ['și', 'de'],
    },
  ],
  shortcut: 'From 20 up, add de. Quarter to = fără un sfert; half past = și jumătate. On Monday = luni; on Mondays = lunea. On the 5th = pe cinci.',
  useItToday: 'Every time you check the clock today, say it in Romanian: "E patru fără zece."',
}

export const greetings: StructureLesson = {
  id: 's-greetings',
  part: 'Sounding natural',
  title: 'Hello, goodbye and sărut-mâna',
  tagline: 'Which greeting for whom — from ceau to sărut-mâna.',
  shift: {
    english: 'English gets by with "hi", "hello" and "bye" for almost everyone.',
    romanian: 'Romanian greetings change with who you\'re talking to and the time of day: {{ceau}} for friends, {{bună ziua}} for strangers, {{sărut-mâna}} for older women.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'By time of day',
      body: [
        '{{Bună dimineața}} — good morning (until about eleven) · {{Bună ziua}} — the polite all-day hello · {{Bună seara}} — good evening · {{Noapte bună}} — good night, only when someone\'s off to bed.',
      ],
    },
    {
      kind: 'explain',
      title: 'By who you\'re talking to',
      body: [
        'Friends and family: {{Bună!}}, {{Salut!}}, {{Ceau!}} (hi and bye). Strangers and shops: {{Bună ziua}}.',
        'Older women — your partner\'s mum, a grandma — traditionally get {{Sărut-mâna}}, "I kiss your hand": said, not done. It\'s fading in cities, but many older Romanians love hearing it. Ask your partner what their family does.',
      ],
    },
    {
      kind: 'explain',
      title: 'Goodbye',
      body: [
        '{{Pa!}} — bye · {{La revedere}} — goodbye (polite) · {{Pe curând!}} — see you soon · {{Ne vedem!}} — see you · {{Numai bine!}} — all the best · {{O zi bună!}} — have a good day.',
      ],
    },
    {
      kind: 'explain',
      title: 'How are you?',
      body: [
        '{{Ce faci?}} (friends) / {{Ce mai faceți?}} (polite). Answers: {{Bine, mersi.}} · {{Merge.}} — not bad ("it goes") · {{Ca de obicei.}} — same as ever.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say hello',
      rungs: [
        { id: 's60-01', prompt: '(in a shop) Hello!', answer: 'Bună ziua!' },
        { id: 's60-02', prompt: 'Good evening!', answer: 'Bună seara!' },
        { id: 's60-03', prompt: '(to a friend) Hi!', answer: 'Salut!' },
        { id: 's60-04', prompt: '(to your partner\'s mum) Hello!', answer: 'Sărut-mâna!' },
        { id: 's60-05', prompt: 'Bye!', answer: 'Pa!' },
        { id: 's60-06', prompt: '(politely) Goodbye.', answer: 'La revedere.' },
        { id: 's60-07', prompt: 'See you soon!', answer: 'Pe curând!' },
        { id: 's60-08', prompt: 'All the best!', answer: 'Numai bine!' },
        { id: 's60-09', prompt: 'Have a good day!', answer: 'O zi bună!' },
        { id: 's60-10', prompt: '(answering "how are you?") Not bad.', answer: 'Merge.' },
        { id: 's60-11', prompt: 'Same as ever.', answer: 'Ca de obicei.' },
        { id: 's60-12', prompt: 'Fine, thanks — and you?', answer: 'Bine, mersi. Tu?' },
      ],
    },
    {
      kind: 'choose',
      question: 'Arriving at your partner\'s grandma\'s house:',
      options: [{ text: 'Ceau!' }, { text: 'Sărut-mâna!', correct: true }],
      explanation: 'Ceau is for friends. An older woman in the family traditionally gets sărut-mâna.',
    },
    {
      kind: 'assemble',
      prompt: '(politely) Good evening, how are you?',
      answer: 'Bună seara, ce mai faceți?',
      distractors: ['faci', 'noapte'],
    },
  ],
  shortcut: 'Friends: bună / salut / ceau. Strangers: bună ziua. Older women: sărut-mâna. Bye: pa, la revedere, pe curând. Noapte bună only at bedtime.',
  useItToday: 'Greet the next shop assistant with "Bună ziua" and leave with "O zi bună!".',
}

export const requests: StructureLesson = {
  id: 's-requests',
  part: 'Sounding natural',
  title: 'Asking, offering, thanking: poftim and friends',
  tagline: '"Can I have…?" is "Will you give me…?" — îmi dați…?',
  shift: {
    english: 'English asks "Can I have…?" and says "please" constantly.',
    romanian: 'Romanian asks "will you give me?" — {{Îmi dați…?}} — and has a set of little words for handing over and thanking: {{poftim}}, {{cu plăcere}}, {{n-ai pentru ce}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Asking for things',
      body: [
        '{{Îmi dați…?}} (polite) / {{Îmi dai…?}} — "will you give me…?": {{Îmi dați o cafea, vă rog?}} — can I have a coffee, please?',
        '{{Aș vrea…}} and {{Pot să…?}} work too.',
      ],
    },
    {
      kind: 'explain',
      title: 'Poftim: one word, many jobs',
      body: [
        '{{Poftim!}} — here you are (handing something over) · {{Poftim?}} — pardon? · {{Poftiți!}} — come in / go ahead · {{Serviți!}} — help yourselves.',
      ],
    },
    {
      kind: 'explain',
      title: 'Thanks, and the replies',
      body: [
        '{{Mersi}} / {{Mulțumesc}} — thanks. Replies: {{Cu plăcere}} — you\'re welcome · {{N-ai pentru ce}} — don\'t mention it ("you have nothing for what") · {{Nu-i nimic}} — no problem.',
      ],
    },
    {
      kind: 'explain',
      title: 'Sorry and excuse me',
      body: [
        '{{Pardon!}} / {{Scuze!}} — sorry (bumping into someone) · {{Scuzați-mă}} — excuse me (to get attention) · {{Îmi pare rău}} — I\'m sorry (real regret).',
      ],
    },
    {
      kind: 'ladder',
      title: 'Ask and thank',
      rungs: [
        { id: 's63-01', prompt: '(in a café) Can I have a coffee, please?', answer: 'Îmi dați o cafea, vă rog?' },
        { id: 's63-02', prompt: 'Will you pass me the bread?', answer: 'Îmi dai pâinea?' },
        { id: 's63-03', prompt: 'Here you are!', answer: 'Poftim!' },
        { id: 's63-04', prompt: 'Pardon?', answer: 'Poftim?' },
        { id: 's63-05', prompt: 'You\'re welcome.', answer: 'Cu plăcere.' },
        { id: 's63-06', prompt: 'Don\'t mention it.', answer: 'N-ai pentru ce.' },
        { id: 's63-07', prompt: '(bumping into someone) Sorry!', answer: 'Pardon!' },
        { id: 's63-08', prompt: '(politely) Excuse me…', answer: 'Scuzați-mă…' },
        { id: 's63-09', prompt: 'No, thanks.', answer: 'Nu, mulțumesc.' },
        { id: 's63-10', prompt: '(politely) The bill, please.', answer: 'Nota, vă rog.' },
        { id: 's63-11', prompt: '(to guests) Help yourselves!', answer: 'Serviți, vă rog!' },
        { id: 's63-12', prompt: 'Thanks a lot!', answer: 'Mersi mult!' },
      ],
    },
    {
      kind: 'choose',
      question: 'Someone thanks you for a small favour. You say:',
      options: [{ text: 'Poftim?' }, { text: 'N-ai pentru ce.', correct: true }, { text: 'Pardon.' }],
      explanation: 'N-ai pentru ce — "don\'t mention it". Poftim? would be "pardon?", and pardon is "sorry".',
    },
    {
      kind: 'assemble',
      prompt: '(politely) Can I have the menu, please?',
      answer: 'Îmi dați meniul, vă rog?',
      distractors: ['poftim', 'îți'],
    },
  ],
  shortcut: 'Can I have…? = Îmi dați / dai…? Poftim = here you are / pardon? Cu plăcere, n-ai pentru ce = you\'re welcome. Pardon / scuze = sorry.',
  useItToday: 'Order something today with "Îmi dați…, vă rog?" and hand things over with "Poftim!".',
}

export const exclaiming: StructureLesson = {
  id: 's-exclaim',
  part: 'Sounding natural',
  title: 'What a…!: ce frumos, vai, of',
  tagline: 'Ce frumos! Vai de mine! Aoleu!',
  shift: {
    english: 'English exclaims with "how lovely!", "what a mess!", "oh no!", "wow!".',
    romanian: 'Romanian uses {{ce}} for all of them — {{Ce frumos!}}, {{Ce mizerie!}} — plus a set of little sounds: {{vai}}, {{of}}, {{aoleu}}, {{ura}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Ce…!',
      body: [
        '{{ce}} + anything = "how…!" or "what a…!": {{Ce frumos!}} — how lovely! {{Ce drăguț!}} — how sweet! {{Ce mizerie!}} — what a mess! {{Ce păcat!}} — what a shame!',
        'No "a" after it: {{Ce zi!}} — what a day!',
      ],
    },
    {
      kind: 'explain',
      title: 'Little sounds',
      body: [
        '{{Vai!}} — oh! (surprise or sympathy) · {{Vai de mine!}} — oh my! · {{Of!}} — sigh, ugh · {{Aoleu!}} — ouch, oh no! · {{Ura!}} — hooray! · {{Uau!}} — wow!',
      ],
    },
    {
      kind: 'explain',
      title: 'Praise',
      body: [
        '{{Bravo!}} — well done · {{Super!}} — great · {{Minunat!}} — wonderful · {{Ce bine!}} — how good, great!',
      ],
    },
    {
      kind: 'ladder',
      title: 'React',
      rungs: [
        { id: 's61-01', prompt: 'How lovely!', answer: 'Ce frumos!' },
        { id: 's61-02', prompt: 'How sweet!', answer: 'Ce drăguț!' },
        { id: 's61-03', prompt: '(to him) How big you\'ve got!', answer: 'Ce mare te-ai făcut!' },
        { id: 's61-04', prompt: 'What a mess!', answer: 'Ce mizerie!' },
        { id: 's61-05', prompt: 'What a shame!', answer: 'Ce păcat!' },
        { id: 's61-06', prompt: 'Great, how good!', answer: 'Ce bine!' },
        { id: 's61-07', prompt: 'Oh my!', answer: 'Vai de mine!' },
        { id: 's61-08', prompt: 'Ouch!', answer: 'Aoleu!' },
        { id: 's61-09', prompt: 'Hooray!', answer: 'Ura!' },
        { id: 's61-10', prompt: 'Wonderful!', answer: 'Minunat!' },
        { id: 's61-11', prompt: 'How cold it is!', answer: 'Ce frig e!' },
        { id: 's61-12', prompt: 'What a day!', answer: 'Ce zi!' },
      ],
    },
    {
      kind: 'choose',
      question: '"What a shame!"',
      options: [{ text: 'Ce o păcat!' }, { text: 'Ce păcat!', correct: true }],
      explanation: 'No "a" after ce: ce păcat, ce zi, ce frumos.',
    },
    {
      kind: 'assemble',
      prompt: 'How quickly time goes!',
      answer: 'Ce repede trece timpul!',
      distractors: ['cât', 'o'],
    },
  ],
  shortcut: 'How…! / What a…! = Ce…!: ce frumos, ce păcat, ce mizerie. Vai = oh!, of = ugh, aoleu = ouch / oh no, ura = hooray.',
  useItToday: 'React in Romanian today — "Ce frumos!", "Vai!", "Ce păcat!".',
}

export const opinions: StructureLesson = {
  id: 's-opinions',
  part: 'Sounding natural',
  title: 'Having an opinion like an adult',
  tagline: 'Sunt de acord, nu prea cred, pe de altă parte.',
  shift: {
    english: 'Adult conversation needs "in my view", "I agree", "not really", "on the other hand".',
    romanian: 'Romanian has ready-made chunks for all of it: {{sunt de acord}}, {{nu prea}}, {{pe de altă parte}}, {{din punctul meu de vedere}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Giving your view',
      body: [
        '{{Cred că…}} · {{Mi se pare că…}} — it seems to me · {{După mine…}} — if you ask me · {{Din punctul meu de vedere…}} — from my point of view · {{Sincer…}} — honestly…',
      ],
    },
    {
      kind: 'explain',
      title: 'Agreeing and disagreeing',
      body: [
        '{{Sunt de acord.}} — I agree · {{Așa e.}} — that\'s right · {{Ai dreptate.}}',
        '{{Nu prea cred.}} — I don\'t really think so · {{Da, dar…}} — yes, but… · {{Nu știu dacă…}} — I\'m not sure whether…',
      ],
    },
    {
      kind: 'explain',
      title: 'Nu prea: the soft no',
      body: [
        '{{nu prea}} — "not really, not much" — is everywhere: {{Nu prea îmi place.}} — I don\'t really like it. {{Nu prea am timp.}} — I haven\'t really got time. A gentle, very Romanian "no".',
      ],
    },
    {
      kind: 'explain',
      title: 'Weighing it up',
      body: [
        '{{Pe de o parte…, pe de altă parte…}} — on the one hand…, on the other… · {{Depinde.}} · {{De fapt…}} — actually · {{În orice caz…}} — in any case · {{Cu alte cuvinte…}} — in other words.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say what you think',
      rungs: [
        { id: 's64-01', prompt: 'I agree.', answer: 'Sunt de acord.' },
        { id: 's64-02', prompt: 'That\'s right.', answer: 'Așa e.' },
        { id: 's64-03', prompt: 'It seems to me he\'s right.', answer: 'Mi se pare că are dreptate.' },
        { id: 's64-04', prompt: 'If you ask me, it\'s a good idea.', answer: 'După mine, e o idee bună.' },
        { id: 's64-05', prompt: 'Honestly, I don\'t know.', answer: 'Sincer, nu știu.' },
        { id: 's64-06', prompt: 'I don\'t really think so.', answer: 'Nu prea cred.' },
        { id: 's64-07', prompt: 'I don\'t really like it.', answer: 'Nu prea îmi place.' },
        { id: 's64-08', prompt: 'Yes, but it\'s far.', answer: 'Da, dar e departe.' },
        { id: 's64-09', prompt: 'On the one hand it\'s cheap, on the other it\'s far.', answer: 'Pe de o parte e ieftin, pe de altă parte e departe.' },
        { id: 's64-10', prompt: 'Actually, I\'ve changed my mind.', answer: 'De fapt, m-am răzgândit.' },
        { id: 's64-11', prompt: 'In other words, no.', answer: 'Cu alte cuvinte, nu.' },
        { id: 's64-12', prompt: 'In any case, we\'ll see.', answer: 'În orice caz, vom vedea.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I haven\'t really got time."',
      options: [{ text: 'Nu prea am timp.', correct: true }, { text: 'Nu am timp prea.' }],
      explanation: 'Nu prea goes before the verb: nu prea am, nu prea cred, nu prea îmi place.',
    },
    {
      kind: 'assemble',
      prompt: 'From my point of view, it\'s worth it.',
      answer: 'Din punctul meu de vedere, merită.',
      distractors: ['la', 'e'],
    },
  ],
  shortcut: 'Cred că / mi se pare că / după mine. Sunt de acord / așa e. Nu prea = not really. Pe de o parte… pe de altă parte. De fapt = actually.',
  useItToday: 'Next time you discuss plans, weigh it up in Romanian: "Pe de o parte…, pe de altă parte…".',
}

export const streetRomanian: StructureLesson = {
  id: 's-heard',
  part: 'Sounding natural',
  title: 'What you\'ll hear but won\'t see written',
  tagline: 'Io, îs, mă, las\' că, mișto.',
  shift: {
    english: 'Spoken English squashes words — gonna, wanna, dunno — and adds "mate", "like".',
    romanian: 'Spoken Romanian does too: {{io}} for eu, {{îs}} for sunt, {{mă}} tacked onto sentences like "mate", {{las\' că}} for "never mind".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Squashed words',
      body: [
        '{{io}} — eu (I) · {{îs}} — sunt (am / are), especially in Moldova and Transylvania · {{las\'}} — lasă · {{dom\'le}} — domnule (mister, used like "mate").',
      ],
    },
    {
      kind: 'explain',
      title: 'Mă and bă',
      body: [
        'Friends — especially men — sprinkle {{mă}} into sentences like "mate": {{Hai, mă!}} — come on! {{Ce faci, mă?}}',
        '{{bă}} is blunter — fine between close friends, not with in-laws.',
      ],
    },
    {
      kind: 'explain',
      title: 'Handy spoken phrases',
      body: [
        '{{Las\' că…}} — never mind, don\'t worry · {{Hai că…}} — OK then, come on then · {{Nu-i bai}} — no worries (Transylvania) · {{mișto}} — cool · {{nașpa}} — rubbish, lame.',
      ],
    },
    {
      kind: 'explain',
      title: 'Why it matters',
      body: [
        'You don\'t need to say these. But you\'ll hear them constantly from your partner\'s friends and family — and recognising them is half of understanding fast speech.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Casual Romanian',
      rungs: [
        { id: 's62-01', prompt: '(casual) I don\'t know, mate.', answer: 'Nu știu, mă.' },
        { id: 's62-02', prompt: '(casual) Come on!', answer: 'Hai, mă!' },
        { id: 's62-03', prompt: '(casual) Never mind, it\'s fine.', answer: 'Las\' că e bine.' },
        { id: 's62-04', prompt: '(casual) OK then, see you!', answer: 'Hai că ne vedem!' },
        { id: 's62-05', prompt: '(casual) Cool!', answer: 'Mișto!' },
        { id: 's62-06', prompt: '(casual) That\'s rubbish.', answer: 'E nașpa.' },
        { id: 's62-07', prompt: '(Transylvania) No worries.', answer: 'Nu-i bai.' },
        { id: 's62-08', prompt: '(casual, Moldova) They\'re at home.', answer: 'Îs acasă.' },
        { id: 's62-09', prompt: '(casual) Me? I don\'t know.', answer: 'Io? Nu știu.' },
        { id: 's62-10', prompt: '(casual) Leave it!', answer: 'Las-o!' },
      ],
    },
    {
      kind: 'choose',
      question: 'A friend of your partner says "Îs obosit, mă." He means:',
      options: [{ text: 'I\'m tired, mate.', correct: true }, { text: 'He\'s tired of me.' }, { text: 'Are you tired?' }],
      explanation: 'Îs = sunt (I am), and mă is just "mate".',
    },
  ],
  shortcut: 'Io = eu, îs = sunt, las\' = lasă, mă = "mate", mișto = cool, nașpa = rubbish, las\' că = never mind. Recognise them; use them sparingly.',
  useItToday: 'Listen for "mă", "las\' că" and "hai că" in the next Romanian conversation you hear.',
}

export const roughly: StructureLesson = {
  id: 's-roughly',
  part: 'Sounding natural',
  title: 'About, a bit, sort of: cam, vreo, un pic',
  tagline: 'Cam scump, vreo zece minute, cam așa.',
  shift: {
    english: 'English hedges constantly: about ten, a bit pricey, sort of, around eight.',
    romanian: 'Romanian hedges with {{cam}} (a bit, rather, around), {{vreo}} (about, with numbers), {{un pic}} (a little) and {{cam așa}} (sort of).',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Cam: a bit, rather, around',
      body: [
        '{{cam scump}} — a bit pricey · {{cam târziu}} — rather late · {{cam la opt}} — around eight · {{cam așa}} — roughly like that · {{Cam da.}} — kind of, yes.',
      ],
      glosses: [
        { ro: 'E cam scump.', words: [['E', 'it\'s'], ['cam', 'rather'], ['scump', 'expensive']], en: 'It\'s a bit pricey.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Vreo with numbers',
      body: [
        '{{vreo}} before a number = about: {{vreo zece minute}} — about ten minutes, {{vreo două ore}} — a couple of hours. More formal: {{aproximativ}}, {{în jur de}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'A little',
      body: [
        '{{un pic}} / {{puțin}} — a little: {{Un pic mai încet.}} — a bit more quietly. {{Stai un pic!}} — wait a sec.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Hedge it',
      rungs: [
        { id: 's71-01', prompt: 'It\'s a bit pricey.', answer: 'E cam scump.' },
        { id: 's71-02', prompt: 'It\'s rather late.', answer: 'E cam târziu.' },
        { id: 's71-03', prompt: 'He\'s a bit tired.', answer: 'E cam obosit.' },
        { id: 's71-04', prompt: 'Around eight.', answer: 'Cam la opt.' },
        { id: 's71-05', prompt: 'Roughly like that.', answer: 'Cam așa.' },
        { id: 's71-06', prompt: 'Kind of, yes.', answer: 'Cam da.' },
        { id: 's71-07', prompt: 'About ten minutes.', answer: 'Vreo zece minute.' },
        { id: 's71-08', prompt: 'A couple of hours.', answer: 'Vreo două ore.' },
        { id: 's71-09', prompt: 'Wait a sec!', answer: 'Stai un pic!' },
        { id: 's71-10', prompt: 'A bit quieter, please.', answer: 'Un pic mai încet, te rog.' },
        { id: 's71-11', prompt: 'It\'s around a hundred lei.', answer: 'E în jur de o sută de lei.' },
      ],
    },
    {
      kind: 'choose',
      question: '"About twenty people."',
      options: [{ text: 'Cam douăzeci oameni' }, { text: 'Vreo douăzeci de oameni', correct: true }],
      explanation: 'Vreo before a number — and from twenty up, de.',
    },
    {
      kind: 'assemble',
      prompt: 'We\'ll be there in about ten minutes.',
      answer: 'Ajungem peste vreo zece minute.',
      distractors: ['în', 'de'],
    },
  ],
  shortcut: 'Cam = a bit / rather / around (cam scump, cam la opt). Vreo + number = about. Un pic = a little. Cam așa = sort of.',
  useItToday: 'Hedge like a Romanian today: "E cam…", "Cam așa."',
}

export const onThePhone: StructureLesson = {
  id: 's-phone',
  part: 'Sounding natural',
  title: 'On the phone and video calls',
  tagline: 'Alo? Te aud greu. Te sun înapoi.',
  shift: {
    english: 'Phone calls have their own script: "hello?", "you\'re breaking up", "I\'ll call you back".',
    romanian: 'So do Romanian ones: {{Alo?}}, {{Te aud greu}}, {{Te sun înapoi}}, {{Închid}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The script',
      body: [
        '{{Alo?}} — hello? (only on the phone) · {{Cu cine vorbesc?}} — who\'s this? · {{Te aud greu.}} — I can hardly hear you',
        '{{Mi se termină bateria.}} — my battery\'s dying · {{Te sun înapoi.}} — I\'ll call you back · {{Închid.}} — I\'m hanging up · {{Te pup!}} — love you, bye (family)',
      ],
    },
    {
      kind: 'explain',
      title: 'Messages',
      body: [
        '{{Scrie-mi.}} — text me ("write me") · {{Ai văzut mesajul?}} · {{Am un apel pierdut de la tine.}} — I\'ve got a missed call from you.',
      ],
    },
    {
      kind: 'explain',
      title: 'Video calls with the grandparents',
      body: [
        '{{Mă vezi?}} — can you see me? · {{S-a blocat.}} — it\'s frozen · {{Întoarce telefonul!}} — turn the phone round! · {{Fă-i cu mâna bunicii!}} — wave to Grandma!',
      ],
    },
    {
      kind: 'ladder',
      title: 'Make the call',
      rungs: [
        { id: 's73-01', prompt: '(answering the phone) Hello?', answer: 'Alo?' },
        { id: 's73-02', prompt: 'Who\'s this?', answer: 'Cu cine vorbesc?' },
        { id: 's73-03', prompt: 'I can hardly hear you.', answer: 'Te aud greu.' },
        { id: 's73-04', prompt: 'My battery\'s dying.', answer: 'Mi se termină bateria.' },
        { id: 's73-05', prompt: 'I\'ll call you back.', answer: 'Te sun înapoi.' },
        { id: 's73-06', prompt: 'Text me.', answer: 'Scrie-mi.' },
        { id: 's73-07', prompt: 'Did you see my message?', answer: 'Ai văzut mesajul meu?' },
        { id: 's73-08', prompt: 'I\'ve got a missed call from you.', answer: 'Am un apel pierdut de la tine.' },
        { id: 's73-09', prompt: 'Can you see me?', answer: 'Mă vezi?' },
        { id: 's73-10', prompt: 'It\'s frozen.', answer: 'S-a blocat.' },
        { id: 's73-11', prompt: 'Wave to Grandma!', answer: 'Fă-i cu mâna bunicii!' },
        { id: 's73-12', prompt: 'I\'ll hang up now.', answer: 'Închid acum.' },
      ],
    },
    {
      kind: 'choose',
      question: '"You\'re breaking up."',
      options: [{ text: 'Te aud greu.', correct: true }, { text: 'Te rupi.' }],
      explanation: 'Say what\'s actually happening: "I hear you with difficulty". Te rupi would be "you\'re tearing".',
    },
    {
      kind: 'assemble',
      prompt: 'I\'ll call you back in ten minutes.',
      answer: 'Te sun înapoi peste zece minute.',
      distractors: ['în', 'sună'],
    },
  ],
  shortcut: 'Alo? · Te aud greu · Te sun înapoi · Scrie-mi · Mă vezi? · S-a blocat · Te pup!',
  useItToday: 'On the next video call with the grandparents, run the whole call in Romanian.',
}

export const pictureIdioms: StructureLesson = {
  id: 's-picture-idioms',
  part: 'Sounding natural',
  title: 'Pictures in words: idioms Romanians love',
  tagline: 'Floare la ureche, a călca pe bec, cât ai zice pește.',
  shift: {
    english: 'English idioms paint pictures: a piece of cake, put your foot in it, when pigs fly.',
    romanian: 'Romanian ones paint different pictures — {{floare la ureche}} ("a flower at the ear") is a piece of cake. Knowing the picture is what makes them stick.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Easy, fast, blunders',
      body: [
        '{{E floare la ureche.}} — it\'s a piece of cake ("a flower at the ear").',
        '{{cât ai zice pește}} — in a flash ("as fast as you\'d say fish").',
        '{{a călca pe bec}} — to put your foot in it ("step on the light bulb"). {{a da cu bâta în baltă}} — to make a blunder ("hit the puddle with the stick").',
      ],
      glosses: [
        { ro: 'E floare la ureche.', words: [['E', 'it\'s'], ['floare', 'flower'], ['la ureche', 'at-the ear']], en: 'It\'s a piece of cake.' },
      ],
    },
    {
      kind: 'explain',
      title: 'People',
      body: [
        '{{Are cei șapte ani de acasă.}} — he\'s got good manners ("the seven years from home"). {{Are capul în nori.}} — head in the clouds.',
        '{{E cu musca pe căciulă.}} — he\'s got a guilty conscience ("the fly on his hat"). {{a cincea roată la căruță}} — a fifth wheel ("the fifth wheel on the cart").',
      ],
    },
    {
      kind: 'explain',
      title: 'Everyday life',
      body: [
        '{{Mi-e o foame de lup.}} — I\'m starving ("a wolf\'s hunger"). {{Batem palma.}} — let\'s shake on it. {{Bag mâna în foc pentru el.}} — I\'d vouch for him ("I\'d put my hand in the fire").',
        '{{a face rost de}} — to get hold of. {{Batem apa-n piuă.}} — we\'re going round in circles ("beating water in a mortar"). {{Când o zbura porcul.}} — when pigs fly.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say the picture',
      rungs: [
        { id: 's86-01', prompt: 'It\'s a piece of cake.', answer: 'E floare la ureche.' },
        { id: 's86-02', prompt: 'In a flash.', answer: 'Cât ai zice pește.' },
        { id: 's86-03', prompt: 'I put my foot in it.', answer: 'Am călcat pe bec.' },
        { id: 's86-04', prompt: 'He made a blunder.', answer: 'A dat cu bâta în baltă.' },
        { id: 's86-05', prompt: 'He\'s got good manners.', answer: 'Are cei șapte ani de acasă.' },
        { id: 's86-06', prompt: 'He\'s got his head in the clouds.', answer: 'Are capul în nori.' },
        { id: 's86-07', prompt: 'He\'s got a guilty conscience.', answer: 'E cu musca pe căciulă.' },
        { id: 's86-08', prompt: 'I\'m starving.', answer: 'Mi-e o foame de lup.' },
        { id: 's86-09', prompt: 'Let\'s shake on it.', answer: 'Batem palma.' },
        { id: 's86-10', prompt: 'I\'d vouch for him.', answer: 'Bag mâna în foc pentru el.' },
        { id: 's86-11', prompt: 'Can you get hold of some tickets?', answer: 'Poți să faci rost de niște bilete?' },
        { id: 's86-12', prompt: 'We\'re going round in circles.', answer: 'Batem apa-n piuă.' },
        { id: 's86-13', prompt: 'When pigs fly.', answer: 'Când o zbura porcul.' },
      ],
    },
    {
      kind: 'choose',
      question: 'Your partner says the flat-pack wardrobe was "floare la ureche". It was…',
      options: [{ text: 'a nightmare' }, { text: 'really easy', correct: true }, { text: 'very pretty' }],
      explanation: 'Floare la ureche — "a flower at the ear" — is a piece of cake.',
    },
  ],
  shortcut: 'Floare la ureche = easy. Cât ai zice pește = in a flash. A călca pe bec = put your foot in it. Cei șapte ani de acasă = good manners. O foame de lup = starving.',
  useItToday: 'Use "Mi-e o foame de lup" before dinner tonight.',
}

export const proverbs: StructureLesson = {
  id: 's-proverbs',
  part: 'Sounding natural',
  title: 'Proverbs you\'ll hear from the grandparents',
  tagline: 'Graba strică treaba. Ai carte, ai parte.',
  shift: {
    english: 'English has "more haste, less speed", "the early bird catches the worm", "out of sight, out of mind".',
    romanian: 'Romanian has its own — and grandparents use them constantly: {{Graba strică treaba}} ("haste spoils the job"), {{Ochii care nu se văd se uită}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The everyday ones',
      body: [
        '{{Graba strică treaba.}} — more haste, less speed ("haste spoils the job").',
        '{{Cine se scoală de dimineață departe ajunge.}} — the early bird catches the worm ("who gets up early gets far").',
        '{{Ochii care nu se văd se uită.}} — out of sight, out of mind ("eyes that don\'t see each other forget").',
      ],
    },
    {
      kind: 'explain',
      title: 'Wisdom and warnings',
      body: [
        '{{Nu da vrabia din mână pe cioara de pe gard.}} — a bird in the hand ("don\'t swap the sparrow in your hand for the crow on the fence").',
        '{{Ce ție nu-ți place, altuia nu-i face.}} — do as you would be done by.',
        '{{Ai carte, ai parte.}} — education pays ("have books, have your share").',
        '{{Socoteala de acasă nu se potrivește cu cea din târg.}} — plans rarely survive reality ("the sums at home don\'t match the ones at the market").',
      ],
    },
    {
      kind: 'explain',
      title: 'About people',
      body: [
        '{{Lupul își schimbă părul, dar năravul ba.}} — a leopard doesn\'t change its spots ("the wolf changes its fur, not its habits").',
        '{{Omul sfințește locul.}} — it\'s the people who make a place.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say the proverb',
      rungs: [
        { id: 's87-01', prompt: 'More haste, less speed.', answer: 'Graba strică treaba.' },
        { id: 's87-02', prompt: 'The early bird catches the worm.', answer: 'Cine se scoală de dimineață departe ajunge.' },
        { id: 's87-03', prompt: 'Out of sight, out of mind.', answer: 'Ochii care nu se văd se uită.' },
        { id: 's87-04', prompt: 'A bird in the hand…', answer: 'Nu da vrabia din mână pe cioara de pe gard.' },
        { id: 's87-05', prompt: 'Do as you would be done by.', answer: 'Ce ție nu-ți place, altuia nu-i face.' },
        { id: 's87-06', prompt: 'Education pays.', answer: 'Ai carte, ai parte.' },
        { id: 's87-07', prompt: 'Plans rarely survive reality.', answer: 'Socoteala de acasă nu se potrivește cu cea din târg.' },
        { id: 's87-08', prompt: 'A leopard doesn\'t change its spots.', answer: 'Lupul își schimbă părul, dar năravul ba.' },
        { id: 's87-09', prompt: 'People make the place.', answer: 'Omul sfințește locul.' },
      ],
    },
    {
      kind: 'choose',
      question: 'Grandma sees you rushing and says "Graba strică treaba." She means…',
      options: [{ text: 'Hurry up!' }, { text: 'Slow down, you\'ll mess it up.', correct: true }, { text: 'You\'re late.' }],
      explanation: 'Graba strică treaba — haste spoils the job.',
    },
  ],
  shortcut: 'Graba strică treaba · Cine se scoală de dimineață departe ajunge · Ochii care nu se văd se uită · Ai carte, ai parte.',
  useItToday: 'Learn one proverb this week and drop it into a conversation with the grandparents — watch their faces.',
}

export const texting: StructureLesson = {
  id: 's-texting',
  part: 'Sounding natural',
  title: 'Texting like a Romanian',
  tagline: 'cf? nmk. pt. ms. pp.',
  shift: {
    english: 'English texting has lol, btw, thx, xx.',
    romanian: 'Romanian texting has its own shorthand — {{ce faci}} becomes "cf", {{mersi}} becomes "ms" — and people often drop the diacritics altogether.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The shorthand',
      body: [
        '"cf?" — {{ce faci?}} · "nmk" — {{nimic}} · "pt" — {{pentru}} · "dc" — {{de ce}} · "tb" — {{trebuie}} · "cv" — {{ceva}} · "ms" — {{mersi}} · "sal" — {{salut}} · "nb" — {{noapte bună}} · "pp" — {{pupici}} (kisses).',
      ],
    },
    {
      kind: 'explain',
      title: 'Diacritics disappear',
      body: [
        'Many people type without ă, â, î, ș, ț: "sunt in drum, ajung in 10 min". Reading it, you put them back in your head: {{Sunt în drum, ajung în zece minute.}}',
        'When you write, keeping them is polite and clear — but nobody minds if you don\'t.',
      ],
    },
    {
      kind: 'explain',
      title: 'Warm sign-offs',
      body: [
        '{{Te pup!}} — kiss (love you, bye) · {{Pupici!}} — kisses · {{Noapte bună, pupici!}} — family texts end like this all the time.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Text it',
      intro: 'Say the full versions — then you\'ll recognise the short ones.',
      rungs: [
        { id: 's88-01', prompt: 'I\'m here. (I\'ve arrived)', answer: 'Am ajuns.' },
        { id: 's88-02', prompt: 'Where are you?', answer: 'Unde ești?' },
        { id: 's88-03', prompt: 'I\'m on my way, ten minutes.', answer: 'Sunt pe drum, ajung în zece minute.' },
        { id: 's88-04', prompt: 'Call me when you can.', answer: 'Sună-mă când poți.' },
        { id: 's88-05', prompt: 'Do you need anything from the shop?', answer: 'Ai nevoie de ceva de la magazin?' },
        { id: 's88-06', prompt: 'What are you up to? — Nothing.', answer: 'Ce faci? Nimic.' },
        { id: 's88-07', prompt: 'Thanks!', answer: 'Mersi!' },
        { id: 's88-08', prompt: 'Why?', answer: 'De ce?' },
        { id: 's88-09', prompt: 'Good night, kisses!', answer: 'Noapte bună, pupici!' },
        { id: 's88-10', prompt: 'Love you, bye!', answer: 'Te pup!' },
      ],
    },
    {
      kind: 'choose',
      question: 'A text says "cf? tb sa vb". It means…',
      options: [{ text: 'What\'s up? We need to talk.', correct: true }, { text: 'Coffee? I have to go.' }, { text: 'Call me back tomorrow.' }],
      explanation: 'cf = ce faci, tb = trebuie, sa = să, vb = vorbim.',
    },
  ],
  shortcut: 'cf = ce faci · nmk = nimic · pt = pentru · dc = de ce · tb = trebuie · cv = ceva · ms = mersi · pp = pupici. Diacritics often vanish.',
  useItToday: 'Send your partner one text today in Romanian — shorthand allowed.',
}

export const sympathy: StructureLesson = {
  id: 's-sympathy',
  part: 'Sounding natural',
  title: 'Sympathy, complaints and bad luck',
  tagline: 'Ce ghinion! Asta e. Sănătate să fie!',
  shift: {
    english: 'English sympathises with "I\'m sorry to hear that", "what bad luck", "it is what it is".',
    romanian: 'Romanian has its own comforting set — {{Ce ghinion!}}, {{Asta e.}}, {{Las\' că trece.}} — and a very Romanian shrug: {{Sănătate să fie!}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Sympathising',
      body: [
        '{{Îmi pare rău să aud asta.}} — I\'m sorry to hear that · {{Ce ghinion!}} — what bad luck! · {{Of, săracul!}} — oh, poor thing! (about him)',
        '{{Te înțeleg perfect.}} — I completely understand · {{Cum pot să te ajut?}} — how can I help?',
      ],
    },
    {
      kind: 'explain',
      title: 'Comforting',
      body: [
        '{{Las\' că trece.}} — it\'ll pass · {{Totul o să fie bine.}} — everything will be fine · {{Nu-ți face probleme.}} — don\'t worry about it.',
      ],
    },
    {
      kind: 'explain',
      title: 'The Romanian shrug',
      body: [
        '{{Asta e.}} — that\'s life, it is what it is ("that\'s it"). {{Ce să-i faci?}} — what can you do?',
        '{{Sănătate să fie!}} — "as long as there\'s health" — said after any setback, big or small. Grandparents love it.',
      ],
    },
    {
      kind: 'explain',
      title: 'Complaining',
      body: [
        '{{Nu-i corect!}} — it\'s not fair! · {{Iar?!}} — again?! · {{Ce nasol!}} — how rubbish! (casual) · {{M-am săturat!}} — I\'ve had enough!',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say the right thing',
      rungs: [
        { id: 's89-01', prompt: 'I\'m sorry to hear that.', answer: 'Îmi pare rău să aud asta.' },
        { id: 's89-02', prompt: 'What bad luck!', answer: 'Ce ghinion!' },
        { id: 's89-03', prompt: 'Oh, poor thing! (about him)', answer: 'Of, săracul!' },
        { id: 's89-04', prompt: 'I completely understand.', answer: 'Te înțeleg perfect.' },
        { id: 's89-05', prompt: 'How can I help?', answer: 'Cum pot să te ajut?' },
        { id: 's89-06', prompt: 'It\'ll pass.', answer: 'Las\' că trece.' },
        { id: 's89-07', prompt: 'Everything will be fine.', answer: 'Totul o să fie bine.' },
        { id: 's89-08', prompt: 'It is what it is.', answer: 'Asta e.' },
        { id: 's89-09', prompt: 'What can you do?', answer: 'Ce să-i faci?' },
        { id: 's89-10', prompt: 'As long as we\'ve got our health!', answer: 'Sănătate să fie!' },
        { id: 's89-11', prompt: 'It\'s not fair!', answer: 'Nu-i corect!' },
        { id: 's89-12', prompt: '(casual) That\'s rubbish!', answer: 'Ce nasol!' },
      ],
    },
    {
      kind: 'choose',
      question: 'The car\'s broken down again, and Grandpa says "Sănătate să fie!" He means…',
      options: [{ text: 'Bless you!' }, { text: 'Never mind — what matters is we\'re well.', correct: true }, { text: 'Call the mechanic.' }],
      explanation: 'Sănătate să fie — "may there be health" — is the Romanian way of putting a setback in perspective.',
    },
  ],
  shortcut: 'Îmi pare rău să aud asta · Ce ghinion! · Las\' că trece · Asta e · Ce să-i faci? · Sănătate să fie!',
  useItToday: 'Next time something goes wrong, shrug it off in Romanian: "Asta e. Sănătate să fie!"',
}

export const emphasisWords: StructureLesson = {
  id: 's-emphasis',
  part: 'Sounding natural',
  title: 'Chiar, tocmai, și — and the spoken că',
  tagline: 'Mănâncă, că se răcește!',
  shift: {
    english: 'English colours sentences with "really", "actually", "even", "just", "exactly" — and "because" in the middle.',
    romanian: 'Romanian does it with {{chiar}}, {{tocmai}}, {{și}} — and a spoken {{că}} meaning "because": {{Mănâncă, că se răcește!}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Chiar: really, actually, even, right',
      body: [
        '{{Chiar?}} — really? · {{Chiar e bun.}} — it\'s really good · {{chiar acum}} — right now · {{chiar și el}} — even him · {{Chiar nu știu.}} — I honestly don\'t know.',
      ],
    },
    {
      kind: 'explain',
      title: 'Tocmai: just, precisely',
      body: [
        '{{Tocmai am ajuns.}} — I\'ve just arrived · {{Tocmai asta e problema.}} — that\'s exactly the problem · {{Tocmai de aceea!}} — that\'s precisely why!',
      ],
    },
    {
      kind: 'explain',
      title: 'Și: too, even',
      body: [
        '{{Vin și eu.}} — I\'m coming too · {{Și ce?}} — so what? · {{Și mai bine!}} — even better!',
      ],
    },
    {
      kind: 'explain',
      title: 'The spoken că',
      body: [
        'In speech, {{că}} at the start of the second half means "because" or "since": {{Mănâncă, că se răcește!}} — eat up, it\'s getting cold! {{Hai, că întârziem!}} — come on, we\'ll be late!',
      ],
      glosses: [
        { ro: 'Hai, că întârziem!', words: [['Hai', 'come-on'], ['că', 'because'], ['întârziem', 'we-are-late']], en: 'Come on, we\'ll be late!' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Add the colour',
      rungs: [
        { id: 's93-01', prompt: 'Really?', answer: 'Chiar?' },
        { id: 's93-02', prompt: 'It\'s really good.', answer: 'Chiar e bun.' },
        { id: 's93-03', prompt: 'Right now.', answer: 'Chiar acum.' },
        { id: 's93-04', prompt: 'I honestly don\'t know.', answer: 'Chiar nu știu.' },
        { id: 's93-05', prompt: 'That\'s exactly the problem.', answer: 'Tocmai asta e problema.' },
        { id: 's93-06', prompt: 'That\'s precisely why!', answer: 'Tocmai de aceea!' },
        { id: 's93-07', prompt: 'So what?', answer: 'Și ce?' },
        { id: 's93-08', prompt: 'Even better!', answer: 'Și mai bine!' },
        { id: 's93-09', prompt: 'Eat up, it\'s getting cold!', answer: 'Mănâncă, că se răcește!' },
        { id: 's93-10', prompt: 'Come on, we\'ll be late!', answer: 'Hai, că întârziem!' },
        { id: 's93-11', prompt: 'Put your jacket on, it\'s cold!', answer: 'Pune-ți geaca, că e frig!' },
      ],
    },
    {
      kind: 'choose',
      question: 'In "Mănâncă, că se răcește!", că means…',
      options: [{ text: 'that' }, { text: 'because', correct: true }, { text: 'like' }],
      explanation: 'In speech, că starting the second half of a sentence means "because".',
    },
    {
      kind: 'assemble',
      prompt: 'Hurry up, the bus is coming!',
      answer: 'Grăbește-te, că vine autobuzul!',
      distractors: ['ca', 'să'],
    },
  ],
  shortcut: 'Chiar = really / actually / even / right (now). Tocmai = just / precisely. Și = too, even. Spoken că = because: Hai, că întârziem!',
  useItToday: 'Hurry the family along today with "…, că întârziem!"',
}

export const signs: StructureLesson = {
  id: 's-signs',
  part: 'Sounding natural',
  title: 'Reading signs and labels',
  tagline: 'Împingeți / Trageți — the polite "you all" on every door.',
  shift: {
    english: 'English signs are short commands and nouns: Push, Pull, Exit, No entry.',
    romanian: 'Romanian signs use the polite -ți command — {{Împingeți}}, {{Trageți}} — or a single noun: {{Intrare}}, {{Ieșire}}, {{Interzis}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Doors and shops',
      body: [
        '{{Împingeți}} — push · {{Trageți}} — pull · {{Intrare}} — entrance · {{Ieșire}} — exit · {{Deschis}} — open · {{Închis}} — closed',
        '{{Program}} — opening hours · {{Casa}} — checkout · {{Toaletă}} · {{Bărbați}} / {{Femei}} — men / women',
      ],
    },
    {
      kind: 'explain',
      title: 'Warnings',
      body: [
        '{{Atenție!}} — caution · {{Interzis}} — forbidden · {{Fumatul interzis}} — no smoking · {{Accesul interzis}} — no entry',
        '{{Câine rău}} — beware of the dog ("bad dog", on half the gates in Romania) · {{Proaspăt vopsit}} — wet paint ("freshly painted")',
      ],
    },
    {
      kind: 'explain',
      title: 'Shops and roads',
      body: [
        '{{Reduceri}} — sale · {{Ofertă}} — offer · {{Farmacie non-stop}} — 24-hour pharmacy · {{Parcare}} — parking · {{Ocolire}} — diversion · {{Drum închis}} — road closed',
      ],
    },
    {
      kind: 'ladder',
      title: 'Read the sign',
      intro: 'Say the sign aloud from its English meaning.',
      rungs: [
        { id: 's98-01', prompt: '(door sign) Push.', answer: 'Împingeți.' },
        { id: 's98-02', prompt: '(door sign) Pull.', answer: 'Trageți.' },
        { id: 's98-03', prompt: 'Entrance.', answer: 'Intrare.' },
        { id: 's98-04', prompt: 'Exit.', answer: 'Ieșire.' },
        { id: 's98-05', prompt: 'Closed.', answer: 'Închis.' },
        { id: 's98-06', prompt: 'Opening hours.', answer: 'Program.' },
        { id: 's98-07', prompt: 'No smoking.', answer: 'Fumatul interzis.' },
        { id: 's98-08', prompt: 'No entry.', answer: 'Accesul interzis.' },
        { id: 's98-09', prompt: 'Beware of the dog.', answer: 'Câine rău.' },
        { id: 's98-10', prompt: 'Wet paint.', answer: 'Proaspăt vopsit.' },
        { id: 's98-11', prompt: 'Sale.', answer: 'Reduceri.' },
        { id: 's98-12', prompt: 'Diversion.', answer: 'Ocolire.' },
      ],
    },
    {
      kind: 'choose',
      question: 'A sign on a gate says "Câine rău". It means…',
      options: [{ text: 'Naughty dog' }, { text: 'Beware of the dog', correct: true }, { text: 'Dog for sale' }],
      explanation: 'Literally "bad dog" — the standard warning on gates.',
    },
  ],
  shortcut: 'Împingeți = push, trageți = pull. Intrare / ieșire. Deschis / închis. Interzis = forbidden. Câine rău = beware of the dog.',
  useItToday: 'Next time you\'re in Romania, read every sign you pass out loud.',
}

export const gettingAWordIn: StructureLesson = {
  id: 's-word-in',
  part: 'Sounding natural',
  title: 'Getting a word in at the family table',
  tagline: 'Stai să termin! Apropo… Unde rămăsesem?',
  shift: {
    english: 'Big family conversations move fast. English has "hang on", "can I just say", "by the way", "anyway, as I was saying".',
    romanian: 'Romanian has the same toolkit: {{Pot să zic ceva?}}, {{Stai să termin!}}, {{Apropo…}}, {{Revenind la ce ziceam…}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Getting in',
      body: [
        '{{Pot să zic ceva?}} — can I say something? · {{Scuză-mă că te întrerup.}} — sorry to interrupt · {{Apropo…}} — by the way…',
      ],
    },
    {
      kind: 'explain',
      title: 'Holding the floor',
      body: [
        '{{Stai să termin!}} — let me finish! · {{Lasă-mă să-ți spun.}} — let me tell you · {{Zi mai departe!}} — go on!',
      ],
    },
    {
      kind: 'explain',
      title: 'Changing and coming back',
      body: [
        '{{Schimbând subiectul…}} — changing the subject… · {{Revenind la ce ziceam…}} — getting back to what I was saying… · {{Unde rămăsesem?}} — where was I? (the one-word "had" past).',
      ],
    },
    {
      kind: 'ladder',
      title: 'Get your word in',
      rungs: [
        { id: 's104-01', prompt: 'Can I say something?', answer: 'Pot să zic ceva?' },
        { id: 's104-02', prompt: 'Sorry to interrupt.', answer: 'Scuză-mă că te întrerup.' },
        { id: 's104-03', prompt: 'By the way…', answer: 'Apropo…' },
        { id: 's104-04', prompt: 'Let me finish!', answer: 'Stai să termin!' },
        { id: 's104-05', prompt: 'Let me tell you.', answer: 'Lasă-mă să-ți spun.' },
        { id: 's104-06', prompt: 'Changing the subject…', answer: 'Schimbând subiectul…' },
        { id: 's104-07', prompt: 'Getting back to what I was saying…', answer: 'Revenind la ce ziceam…' },
        { id: 's104-08', prompt: 'Where was I?', answer: 'Unde rămăsesem?' },
        { id: 's104-09', prompt: 'What were you saying?', answer: 'Ce ziceai?' },
        { id: 's104-10', prompt: 'Go on!', answer: 'Zi mai departe!' },
      ],
    },
    {
      kind: 'choose',
      question: 'Everyone\'s talking over you and you want to finish your story:',
      options: [{ text: 'Stai să termin!', correct: true }, { text: 'Gata, plec!' }, { text: 'Poftim?' }],
      explanation: 'Stai să termin — "wait so I finish".',
    },
  ],
  shortcut: 'Pot să zic ceva? · Stai să termin! · Apropo… · Revenind la ce ziceam… · Unde rămăsesem? · Zi mai departe!',
  useItToday: 'At the next family meal, get one whole story in, with "Stai să termin!" if you need it.',
}

export const compliments: StructureLesson = {
  id: 's-compliments',
  part: 'Sounding natural',
  title: 'Compliments — giving and taking them',
  tagline: 'Îți stă bine! Aveți mâini de aur!',
  shift: {
    english: 'English: "that suits you", "you look great", "this is delicious", "thanks, glad you like it".',
    romanian: 'Romanian: {{Îți stă bine!}} ("it stays well on you"), {{Arăți foarte bine!}}, {{Aveți mâini de aur!}} — and to take one: {{Mă bucur că-ți place.}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Looks and style',
      body: [
        '{{Îți stă bine!}} — it suits you ("it stays well on you") · {{Arăți foarte bine.}} — you look great · {{Ce casă frumoasă aveți!}} — what a lovely house!',
      ],
    },
    {
      kind: 'explain',
      title: 'Food — the big one',
      body: [
        'Praising the cook matters at a Romanian table: {{Ce bună e mâncarea!}} · {{Mai iau puțin, e prea bun!}} — I\'ll have a bit more, it\'s too good!',
        '{{Aveți mâini de aur.}} — you\'ve got golden hands: the highest compliment for a cook.',
      ],
    },
    {
      kind: 'explain',
      title: 'Taking one',
      body: [
        '{{Mulțumesc frumos!}} · {{Mă bucur că-ți place.}} — I\'m glad you like it · {{Serios? Mersi!}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Pay the compliment',
      rungs: [
        { id: 's105-01', prompt: 'That suits you!', answer: 'Îți stă bine!' },
        { id: 's105-02', prompt: 'You look great.', answer: 'Arăți foarte bine.' },
        { id: 's105-03', prompt: 'What a lovely house you have!', answer: 'Ce casă frumoasă aveți!' },
        { id: 's105-04', prompt: 'It\'s delicious, honestly!', answer: 'E delicios, pe bune!' },
        { id: 's105-05', prompt: 'The food is so good!', answer: 'Ce bună e mâncarea!' },
        { id: 's105-06', prompt: 'I\'ll have a bit more, it\'s too good!', answer: 'Mai iau puțin, e prea bun!' },
        { id: 's105-07', prompt: 'You\'ve got golden hands.', answer: 'Aveți mâini de aur.' },
        { id: 's105-08', prompt: 'I\'m glad you like it.', answer: 'Mă bucur că-ți place.' },
        { id: 's105-09', prompt: '(to him) You\'re so clever!', answer: 'Ce deștept ești!' },
        { id: 's105-10', prompt: '(to him) What a lovely drawing!', answer: 'Ce desen frumos!' },
      ],
    },
    {
      kind: 'choose',
      question: 'Your partner\'s mum made sarmale. The best compliment is…',
      options: [{ text: 'E ok.' }, { text: 'Aveți mâini de aur!', correct: true }],
      explanation: '"Golden hands" — the highest praise for a cook.',
    },
  ],
  shortcut: 'Îți stă bine = it suits you. Arăți foarte bine. Ce bună e mâncarea! Aveți mâini de aur. Taking one: mulțumesc frumos, mă bucur că-ți place.',
  useItToday: 'Compliment the cook at the next family meal — in Romanian, and specifically.',
}

export const banter: StructureLesson = {
  id: 's-humour',
  part: 'Sounding natural',
  title: 'Jokes and banter',
  tagline: 'Glumesc! Mă iei peste picior?',
  shift: {
    english: 'English banter: "I\'m joking", "are you pulling my leg?", "fooled you!", "very funny".',
    romanian: 'Romanian: {{Glumesc!}}, {{Mă iei peste picior?}} ("are you taking me over the leg?"), {{Te-am păcălit!}}, {{Am murit de râs!}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Joking',
      body: [
        '{{Glumesc!}} — I\'m joking · {{Am glumit.}} — I was joking · {{Pe bune sau glumești?}} — seriously, or are you joking? · {{Nu te cred!}} — I don\'t believe you!',
      ],
    },
    {
      kind: 'explain',
      title: 'Teasing',
      body: [
        '{{Mă iei peste picior?}} — are you pulling my leg? ("taking me over the leg") · {{Râzi de mine?}} — are you laughing at me? · {{Te-am păcălit!}} — fooled you! · {{Ha, foarte amuzant.}} — ha, very funny.',
      ],
    },
    {
      kind: 'explain',
      title: 'Laughing',
      body: [
        '{{Am murit de râs!}} — I died laughing · {{Ce haios!}} — how funny! · {{M-a umflat râsul.}} — I burst out laughing.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Banter',
      rungs: [
        { id: 's109-01', prompt: 'I\'m joking!', answer: 'Glumesc!' },
        { id: 's109-02', prompt: 'I was joking.', answer: 'Am glumit.' },
        { id: 's109-03', prompt: 'Seriously, or are you joking?', answer: 'Pe bune sau glumești?' },
        { id: 's109-04', prompt: 'I don\'t believe you!', answer: 'Nu te cred!' },
        { id: 's109-05', prompt: 'Are you pulling my leg?', answer: 'Mă iei peste picior?' },
        { id: 's109-06', prompt: 'Are you laughing at me?', answer: 'Râzi de mine?' },
        { id: 's109-07', prompt: 'Fooled you!', answer: 'Te-am păcălit!' },
        { id: 's109-08', prompt: 'Ha, very funny.', answer: 'Ha, foarte amuzant.' },
        { id: 's109-09', prompt: 'I died laughing!', answer: 'Am murit de râs!' },
        { id: 's109-10', prompt: 'How funny!', answer: 'Ce haios!' },
        { id: 's109-11', prompt: 'Don\'t be cross, I was joking.', answer: 'Nu te supăra, am glumit.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Mă iei peste picior?" means…',
      options: [{ text: 'Are you pulling my leg?', correct: true }, { text: 'Are you stepping on my foot?' }, { text: 'Can you carry me?' }],
      explanation: 'Taking someone "over the leg" is teasing them.',
    },
  ],
  shortcut: 'Glumesc / am glumit · Pe bune? · Mă iei peste picior? · Te-am păcălit! · Am murit de râs · Ce haios!',
  useItToday: 'Tease your partner gently in Romanian today — then "Glumesc!"',
}

export const apologising: StructureLesson = {
  id: 's-sorry',
  part: 'Sounding natural',
  title: 'Sorry — and meaning it',
  tagline: 'Scuze · Îmi pare rău · Te rog să mă ierți.',
  shift: {
    english: 'English "sorry" does everything: bumping into someone, regret, a real apology.',
    romanian: 'Romanian splits it: {{Scuze}} / {{Pardon}} for small things, {{Îmi pare rău}} for regret, {{Te rog să mă ierți}} for a real apology.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Three levels',
      body: [
        'Small: {{Scuze!}} / {{Pardon!}} — sorry (bumping, interrupting) · {{Scuze că am întârziat.}} — sorry I\'m late.',
        'Regret: {{Îmi pare rău.}} — I\'m sorry · {{Îmi pare foarte rău.}}',
        'A real apology: {{Te rog să mă ierți.}} — please forgive me.',
      ],
    },
    {
      kind: 'explain',
      title: 'Owning it',
      body: [
        '{{A fost vina mea.}} — it was my fault · {{N-am vrut să te supăr.}} — I didn\'t mean to upset you · {{Înțeleg de ce te-ai supărat.}} — I understand why you\'re upset · {{Nu se mai întâmplă.}} — it won\'t happen again.',
      ],
    },
    {
      kind: 'explain',
      title: 'Accepting one',
      body: [
        '{{Nu-i nimic.}} — it\'s nothing · {{Se întâmplă.}} — it happens · {{Te iert.}} — I forgive you · {{Hai să uităm.}} — let\'s forget it.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Apologise',
      rungs: [
        { id: 's110-01', prompt: 'Sorry I\'m late.', answer: 'Scuze că am întârziat.' },
        { id: 's110-02', prompt: 'I\'m sorry.', answer: 'Îmi pare rău.' },
        { id: 's110-03', prompt: 'I\'m really sorry.', answer: 'Îmi pare foarte rău.' },
        { id: 's110-04', prompt: 'Please forgive me.', answer: 'Te rog să mă ierți.' },
        { id: 's110-05', prompt: 'It was my fault.', answer: 'A fost vina mea.' },
        { id: 's110-06', prompt: 'I didn\'t mean to upset you.', answer: 'N-am vrut să te supăr.' },
        { id: 's110-07', prompt: 'I understand why you\'re upset.', answer: 'Înțeleg de ce te-ai supărat.' },
        { id: 's110-08', prompt: 'It won\'t happen again.', answer: 'Nu se mai întâmplă.' },
        { id: 's110-09', prompt: 'I forgive you.', answer: 'Te iert.' },
        { id: 's110-10', prompt: 'It\'s nothing, it happens.', answer: 'Nu-i nimic, se întâmplă.' },
      ],
    },
    {
      kind: 'choose',
      question: 'You forgot something important to your partner. You say:',
      options: [{ text: 'Pardon!' }, { text: 'Îmi pare foarte rău, am uitat.', correct: true }],
      explanation: 'Pardon is for bumping into someone. Real regret is îmi pare rău.',
    },
  ],
  shortcut: 'Small: scuze / pardon. Regret: îmi pare rău. Real apology: te rog să mă ierți. A fost vina mea · nu se mai întâmplă · te iert.',
  useItToday: 'Next time you say sorry, pick the right level in Romanian.',
}
