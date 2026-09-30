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
        { id: 's47-09', prompt: 'Of course!', answer: 'Normal!' },
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
        { id: 's48-08', prompt: 'Don\'t worry.', answer: 'Fii fără grijă.' },
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
