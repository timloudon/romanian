import type { StructureLesson } from '../types'

export const saAlone: StructureLesson = {
  id: 's-sa-alone',
  part: 'Going further',
  title: 'Să on its own: shall I, should I, make sure you',
  tagline: 'Drop the "vreau" and să becomes an offer, a question or a wish.',
  shift: {
    english: 'English needs "shall I…?", "should I…?", "make sure you…", "let him…".',
    romanian: 'Romanian just starts with {{să}}: {{Să merg?}} — shall I go? {{Să-mi spui!}} — make sure you tell me.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Să at the start',
      body: [
        'Take {{vreau să merg}} and drop the {{vreau}}. What\'s left is an offer or a question: {{Să merg?}} — shall I go? {{Să mergem?}} — shall we go?',
        '{{Ce să fac?}} — what should I do? (or, with a sigh, "what am I supposed to do?")',
      ],
      glosses: [{ ro: 'Să plecăm?', words: [['Să', 'that'], ['plecăm', 'we-leave']], en: 'Shall we go?' }],
    },
    {
      kind: 'explain',
      title: 'Wishes and gentle instructions',
      body: [
        '{{Să-mi spui!}} — make sure you tell me. {{Să fii cuminte!}} — be good (to a child heading off). {{Să nu uiți!}} — don\'t forget! {{Să ai grijă de tine!}} — take care of yourself.',
        'They\'re softer and warmer than a plain command — more "I\'d like you to" than "do it".',
      ],
    },
    {
      kind: 'explain',
      title: 'Blessings and set phrases',
      body: [
        '{{Să trăiești!}} — "may you live" — a warm thank-you or greeting between friends. After a sneeze, it\'s {{Sănătate!}} ("health!").',
        '{{Să fie într-un ceas bun!}} — "may it be at a good hour" — for someone\'s good news or new start.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Offer, ask, wish',
      rungs: [
        { id: 's24-01', prompt: 'Shall I go?', answer: 'Să merg?' },
        { id: 's24-02', prompt: 'Shall we go?', answer: 'Să mergem?' },
        { id: 's24-03', prompt: 'What should I do?', answer: 'Ce să fac?' },
        { id: 's24-04', prompt: 'What shall I tell him?', answer: 'Ce să-i spun?' },
        { id: 's24-05', prompt: 'Shall I help you?', answer: 'Să te ajut?' },
        {
          id: 's24-06',
          prompt: 'Shall I call your mum?',
          answer: 'S-o sun pe mama ta?',
          teachingNote: 'Să + o squashes to s-o.',
        },
        { id: 's24-07', prompt: 'Why should I go?', answer: 'De ce să merg?' },
        { id: 's24-08', prompt: 'Make sure you tell me!', answer: 'Să-mi spui!' },
        { id: 's24-09', prompt: '(to him) Be good!', answer: 'Să fii cuminte!' },
        { id: 's24-10', prompt: "Don't forget!", answer: 'Să nu uiți!' },
        { id: 's24-11', prompt: 'Take care of yourself!', answer: 'Să ai grijă de tine!' },
        { id: 's24-12', prompt: '(after a sneeze) Bless you!', answer: 'Sănătate!' },
      ],
    },
    {
      kind: 'choose',
      question: '"Shall I open the window?"',
      options: [
        { text: 'Voi deschide fereastra?' },
        { text: 'Să deschid fereastra?', correct: true },
        { text: 'Pot deschid fereastra?' },
      ],
      explanation: 'Offering to do something: să + the "I" form. Voi deschide is "I will open" — a statement about the future.',
    },
    {
      kind: 'assemble',
      prompt: 'What should we cook tonight?',
      answer: 'Ce să gătim diseară?',
      distractors: ['o', 'vom'],
    },
  ],
  shortcut: 'Să at the start = shall I / should I / make sure you: Să merg? Ce să fac? Să-mi spui!',
  useItToday: 'Offer things with să today: "Să fac eu cafea?" "Să-l iau eu?"',
}

export const wouldHave: StructureLesson = {
  id: 's-would-have',
  part: 'Going further',
  title: 'Would have, could have, should have',
  tagline: 'Aș fi mers — "I\'d be gone" — is "I\'d have gone".',
  shift: {
    english: '"I would have gone", "I could have", "you should have told me" — English stacks three words.',
    romanian: 'Romanian stacks them too, in one fixed pattern: {{aș fi}} + the "done" form — {{aș fi mers}}, "I\'d have gone".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Aș fi + done',
      body: [
        'Take "I\'d" ({{aș}}), add {{fi}} ("be"), then the "done" form you know from the past: {{aș fi mers}} — I\'d have gone. {{ai fi văzut}} — you\'d have seen. {{ar fi fost}} — it would have been.',
        'Only the first word changes for who. {{fi}} and the "done" form never do.',
      ],
      glosses: [{ ro: 'Aș fi venit.', words: [['Aș', "I'd"], ['fi', 'be'], ['venit', 'come']], en: "I'd have come." }],
    },
    {
      kind: 'explain',
      title: 'Could have, should have',
      body: [
        'Could have = "would have been able": {{aș fi putut}}.',
        'Should have = "it would have been necessary": {{ar fi trebuit să}}. {{Ar fi trebuit să-mi spui.}} — you should have told me.',
      ],
    },
    {
      kind: 'explain',
      title: 'If I\'d known…',
      body: [
        '{{Dacă aș fi știut, aș fi venit.}} — if I\'d known, I\'d have come. Both halves take the same shape.',
        'The everyday shortcut: in quick speech, Romanians often use the "was doing" form for both halves instead — {{Dacă știam, veneam.}} Informal, very common, and much easier.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Build it up',
      rungs: [
        { id: 's25-01', prompt: "I'd have come.", answer: 'Aș fi venit.' },
        { id: 's25-02', prompt: 'It would have been lovely.', answer: 'Ar fi fost frumos.' },
        { id: 's25-03', prompt: 'It would have been better.', answer: 'Ar fi fost mai bine.' },
        { id: 's25-04', prompt: 'I could have helped you.', answer: 'Aș fi putut să te ajut.' },
        { id: 's25-05', prompt: 'You should have told me.', answer: 'Ar fi trebuit să-mi spui.' },
        { id: 's25-06', prompt: 'We should have left earlier.', answer: 'Ar fi trebuit să plecăm mai devreme.' },
        {
          id: 's25-07',
          prompt: "If I'd known, I'd have come.",
          answer: 'Dacă aș fi știut, aș fi venit.',
          acceptedAlternates: ['Dacă știam, veneam.'],
        },
        { id: 's25-08', prompt: 'What would you have done?', answer: 'Ce ai fi făcut?' },
        { id: 's25-09', prompt: "I wouldn't have said that.", answer: 'N-aș fi zis asta.' },
        { id: 's25-10', prompt: 'He could have fallen!', answer: 'Ar fi putut să cadă!' },
        {
          id: 's25-11',
          prompt: "(the cake) If you'd told me, I'd have bought it.",
          answer: 'Dacă mi-ai fi spus, aș fi cumpărat-o.',
          teachingNote: 'Prăjitura is an o-thing, and o goes to the end: cumpărat-o.',
        },
      ],
    },
    {
      kind: 'choose',
      question: '"You should have called."',
      options: [
        { text: 'Trebuie să suni.' },
        { text: 'Ar trebui să suni.' },
        { text: 'Ar fi trebuit să suni.', correct: true },
      ],
      explanation: 'Trebuie = must. Ar trebui = should. Ar fi trebuit = should have.',
    },
    {
      kind: 'assemble',
      prompt: 'It would have been easier.',
      answer: 'Ar fi fost mai ușor.',
      distractors: ['aș', 'e'],
    },
  ],
  shortcut: 'Would have = aș / ai / ar + fi + done: aș fi mers. Should have = ar fi trebuit să. Could have = aș fi putut.',
  useItToday: 'Think of one thing you\'d have done differently today, and say it: "Ar fi trebuit să…"',
  seeAlso: { lessonId: 'u17-l02', label: 'Course: Would have, should have, could have' },
}

export const genitive: StructureLesson = {
  id: 's-genitive',
  part: 'Going further',
  title: "The 's: an ending on the owner",
  tagline: '"The end of the film" — sfârșitul filmului.',
  shift: {
    english: 'English adds \'s (Andrei\'s car) or uses "of the" (the end of the film).',
    romanian: 'Romanian puts an ending on the owner instead: {{sfârșitul filmului}} — "the end film-of-the".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The owner gets an ending',
      body: [
        '"The film" is {{filmul}}. "Of the film" is {{filmului}}: {{sfârșitul filmului}} — the end of the film. One ending does the job of "of" and "the".',
        'un-words: **-ul → -ului**. {{băiatul}} → {{jucăriile băiatului}} — the boy\'s toys.',
        'o-words: **-a → -ei** (or **-ii**). {{mama}} → {{casa mamei}} — mum\'s house. {{mașina}} → {{culoarea mașinii}} — the colour of the car.',
        'Plurals: **-lor**. {{copiii}} → {{camera copiilor}} — the children\'s room.',
      ],
      glosses: [
        {
          ro: 'Casa părinților mei.',
          words: [['Casa', 'the-house'], ['părinților', 'of-the-parents'], ['mei', 'my']],
          en: "My parents' house.",
        },
      ],
    },
    {
      kind: 'explain',
      title: 'Names',
      body: [
        'Men\'s names — and family words like {{tata}} — take {{lui}} in front: {{mașina lui Andrei}} — Andrei\'s car. {{ziua lui tata}} — Dad\'s birthday.',
        'Women\'s names ending in -a take the ending: {{Maria}} → {{mașina Mariei}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'When something comes in between',
      body: [
        'If the owned thing isn\'t right before the owner, a small linking word appears — {{al}}, {{a}}, {{ai}} or {{ale}}, matching the thing: {{un prieten al lui Andrei}} — a friend of Andrei\'s.',
        'Recognise it when you hear it; you\'ll get by fine without producing it at first.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Whose is it?',
      rungs: [
        { id: 's26-01', prompt: "The boy's toys.", answer: 'Jucăriile băiatului.' },
        { id: 's26-02', prompt: "Mum's house.", answer: 'Casa mamei.' },
        { id: 's26-03', prompt: "My parents' house.", answer: 'Casa părinților mei.' },
        { id: 's26-04', prompt: "The children's room.", answer: 'Camera copiilor.' },
        { id: 's26-05', prompt: "Andrei's car.", answer: 'Mașina lui Andrei.' },
        { id: 's26-06', prompt: "Dad's birthday.", answer: 'Ziua lui tata.' },
        { id: 's26-07', prompt: 'The end of the film.', answer: 'Sfârșitul filmului.' },
        { id: 's26-08', prompt: 'The middle of the night.', answer: 'Mijlocul nopții.' },
        { id: 's26-09', prompt: 'The start of the holiday.', answer: 'Începutul vacanței.' },
        { id: 's26-10', prompt: 'The city centre.', answer: 'Centrul orașului.' },
        {
          id: 's26-11',
          prompt: 'The colour of the car.',
          answer: 'Culoarea mașinii.',
          teachingNote: 'Mașină → mașinii: many o-words ending in -nă or -ră take -ii.',
        },
        { id: 's26-12', prompt: "A friend of Andrei's.", answer: 'Un prieten al lui Andrei.' },
      ],
    },
    {
      kind: 'choose',
      question: '"The family\'s house."',
      options: [{ text: 'Casa familia' }, { text: 'Casa familiei', correct: true }, { text: 'Casa de familia' }],
      explanation: 'Familia → familiei: the owner takes the ending.',
    },
    {
      kind: 'assemble',
      prompt: 'The end of the week.',
      answer: 'Sfârșitul săptămânii.',
      distractors: ['săptămâna', 'de'],
    },
  ],
  shortcut: '\'s and "of the" = an ending on the owner: -ului, -ei / -ii, -lor. Men\'s names: lui Andrei.',
  useItToday: 'Name things by their owner today: "Jucăriile băiatului. Telefonul lui tata. Cana mamei."',
  seeAlso: { lessonId: 'u20-l02', label: "Course: Someone's something" },
}

export const stillAlready: StructureLesson = {
  id: 's-still-already',
  part: 'Going further',
  title: 'Still, already, yet, any more',
  tagline: 'Încă, deja, mai — and what nu does to them.',
  shift: {
    english: 'English juggles still, yet, already, any more, again and just.',
    romanian: 'Romanian gets by with a few small words — {{încă}}, {{deja}}, {{mai}}, {{tocmai}} — and {{nu}} flips them.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Încă and deja',
      body: [
        '{{încă}} — still: {{Încă doarme.}} — he\'s still asleep.',
        '{{încă nu}} — not yet: {{Încă n-a venit.}} — he hasn\'t come yet.',
        '{{deja}} — already: {{A mâncat deja.}} — he\'s already eaten.',
      ],
    },
    {
      kind: 'explain',
      title: 'Mai: again, more, any more',
      body: [
        '{{Mai încearcă!}} — try again! {{Mai stai puțin!}} — stay a bit longer! {{Mai e cineva?}} — is anyone else there?',
        'With nu it means "not any more": {{Nu mai am.}} — I haven\'t got any more.',
      ],
      glosses: [
        {
          ro: 'Nu mai plouă.',
          words: [['Nu', 'not'], ['mai', 'any-more'], ['plouă', 'it-rains']],
          en: "It's stopped raining.",
        },
      ],
    },
    {
      kind: 'explain',
      title: 'Two kinds of "just"',
      body: ['"Just" in time is {{tocmai}}: {{Tocmai am ajuns.}} — I\'ve just arrived. "Just" as in "only" is {{doar}}: {{Doar puțin.}}'],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's27-01', prompt: "He's still asleep.", answer: 'Încă doarme.' },
        { id: 's27-02', prompt: 'Are you still working?', answer: 'Încă lucrezi?' },
        { id: 's27-03', prompt: 'Not yet.', answer: 'Încă nu.' },
        { id: 's27-04', prompt: "He hasn't eaten yet.", answer: 'Încă n-a mâncat.' },
        { id: 's27-05', prompt: "I've already eaten.", answer: 'Am mâncat deja.' },
        { id: 's27-06', prompt: 'Already?', answer: 'Deja?' },
        { id: 's27-07', prompt: 'Try again!', answer: 'Mai încearcă!' },
        { id: 's27-08', prompt: "It's stopped raining.", answer: 'Nu mai plouă.' },
        { id: 's27-09', prompt: "We haven't got any more bread.", answer: 'Nu mai avem pâine.' },
        { id: 's27-10', prompt: 'Stay a bit longer!', answer: 'Mai stai puțin!' },
        { id: 's27-11', prompt: "I've just arrived.", answer: 'Tocmai am ajuns.' },
        { id: 's27-12', prompt: "I don't want any more, thanks.", answer: 'Nu mai vreau, mulțumesc.' },
        { id: 's27-13', prompt: '(a shop assistant) Anything else?', answer: 'Mai doriți ceva?' },
      ],
    },
    {
      kind: 'choose',
      question: '"He hasn\'t woken up yet."',
      options: [{ text: 'Deja nu s-a trezit.' }, { text: 'Încă nu s-a trezit.', correct: true }],
      explanation: 'Not yet = încă nu. Deja is only "already".',
    },
    {
      kind: 'assemble',
      prompt: "We don't live there any more.",
      answer: 'Nu mai locuim acolo.',
      distractors: ['încă', 'deja'],
    },
  ],
  shortcut: 'Încă = still (încă nu = not yet). Deja = already. Mai = again / more; nu mai = not any more. Tocmai = just.',
  useItToday: 'Use them about your son today: "Încă doarme." "A mâncat deja." "Nu mai plânge."',
  seeAlso: { lessonId: 'u22-l02', label: 'Course: Yet, just, already, never' },
}

export const handySe: StructureLesson = {
  id: 's-se',
  part: 'Going further',
  title: 'One says, it gets, it broke: the handy se',
  tagline: 'Nu se poate. Se face târziu. S-a stricat.',
  shift: {
    english: 'English uses "you", "one", "they" or the passive for people in general — "you can\'t park here", "it\'s done like this".',
    romanian: 'Romanian puts {{se}} in front of the verb: {{Nu se poate}} — "it can\'t be done". {{Cum se spune?}} — how do you say it?',
  },
  steps: [
    {
      kind: 'explain',
      title: 'People in general',
      body: [
        '{{se}} + the "he / she" form means "people do it", "it\'s done": {{Cum se spune?}} — how do you say it? {{Aici se vorbește engleză.}} — English is spoken here. {{Nu se fumează.}} — no smoking.',
      ],
      glosses: [
        { ro: 'Nu se poate.', words: [['Nu', 'not'], ['se', 'itself'], ['poate', 'can']], en: "It can't be done. / No way." },
      ],
    },
    {
      kind: 'explain',
      title: 'It\'s getting…, you can tell',
      body: [
        '{{Se face târziu.}} — it\'s getting late. {{Se face frig.}} — it\'s getting cold.',
        '{{Se vede.}} — you can tell / it shows. {{Se aude.}} — you can hear it.',
      ],
    },
    {
      kind: 'explain',
      title: 'Things happen by themselves',
      body: [
        'When something breaks, runs out or gets lost, Romanian often says it did it to itself: {{S-a stricat.}} — it\'s broken. {{S-a terminat.}} — it\'s run out.',
        'Add "to me" and it becomes yours: {{Mi s-a stricat telefonul.}} — "to me the phone broke itself" — my phone\'s broken. Nobody\'s to blame.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's28-01', prompt: 'How do you spell it?', answer: 'Cum se scrie?', teachingNote: '"How does one write it?"' },
        { id: 's28-02', prompt: "It can't be done.", answer: 'Nu se poate.' },
        { id: 's28-03', prompt: "You can't park here.", answer: 'Aici nu se poate parca.' },
        { id: 's28-04', prompt: "It's getting late.", answer: 'Se face târziu.' },
        { id: 's28-05', prompt: "It's getting cold.", answer: 'Se face frig.' },
        { id: 's28-06', prompt: "You can tell he's tired.", answer: 'Se vede că e obosit.' },
        { id: 's28-07', prompt: "It's broken.", answer: 'S-a stricat.' },
        { id: 's28-08', prompt: "My phone's broken.", answer: 'Mi s-a stricat telefonul.' },
        { id: 's28-09', prompt: "The milk's run out.", answer: 'S-a terminat laptele.' },
        { id: 's28-10', prompt: "What's going on?", answer: 'Ce se întâmplă?' },
        {
          id: 's28-11',
          prompt: "(to him) We don't do that.",
          answer: 'Asta nu se face.',
          teachingNote: '"That isn\'t done" — the classic way Romanian parents correct behaviour.',
        },
        { id: 's28-12', prompt: 'How is it made?', answer: 'Cum se face?' },
      ],
    },
    {
      kind: 'choose',
      question: '"No smoking here."',
      options: [
        { text: 'Aici nu se fumează.', correct: true },
        { text: 'Aici nu fumează.' },
        { text: 'Aici nu fumezi se.' },
      ],
      explanation: 'Se + the "he / she" form for people in general. Without se, "nu fumează" is "he doesn\'t smoke".',
    },
    {
      kind: 'assemble',
      prompt: 'My car has broken down.',
      answer: 'Mi s-a stricat mașina.',
      distractors: ['am', 'se'],
    },
  ],
  shortcut: 'Se + the he / she form = people in general, "it\'s getting", or it happened by itself: nu se poate, se face târziu, s-a stricat.',
  useItToday: 'When something goes wrong today, say it the Romanian way — nobody\'s fault: "S-a stricat." "S-a terminat."',
  seeAlso: { lessonId: 'u21-l01', label: 'Course: What people say, what can be done' },
}

export const twoLittleWords: StructureLesson = {
  id: 's-two-words',
  part: 'Going further',
  title: 'Give it to me: two little words together',
  tagline: '"To-me it you-give": mi-l dai.',
  shift: {
    english: '"Give it to me", "I gave it to him" — English spreads "it" and "to me" out after the verb.',
    romanian: 'Romanian bundles them in front — "to whom" first, then "it": {{mi-l dai}}, "to-me it you-give".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'To whom first, then it',
      body: [
        '{{mi-l}} (to me, it) · {{ți-l}} (to you, it) · {{i-l}} (to him / her, it). For an o-thing the "it" is {{o}}: {{mi-o}}, {{ți-o}}, {{i-o}}.',
        '{{Mi-l dai?}} — will you give it to me? (the phone). {{Ți-o dau mâine.}} — I\'ll give it to you tomorrow (the book).',
      ],
      glosses: [{ ro: 'Mi-l dai?', words: [['Mi-l', 'to-me it'], ['dai', 'you-give']], en: 'Will you give it to me?' }],
    },
    {
      kind: 'explain',
      title: 'In the past',
      body: [
        'Both go before "have": {{mi l-a dat}} — he gave it to me. {{i l-am dat}} — I gave it to him.',
        'As always, an o-thing\'s {{o}} jumps to the end: {{mi-a dat-o}} — he gave it to me.',
      ],
    },
    {
      kind: 'explain',
      title: 'In commands',
      body: ['Everything goes on the end: {{Dă-mi-l!}} — give it to me! {{Dă-mi-o!}} — give it to me (an o-thing).'],
    },
    {
      kind: 'ladder',
      title: 'Hand it over',
      intro: 'The bracket tells you what "it" is — decide un-thing (l) or o-thing (o) before you speak.',
      rungs: [
        { id: 's29-01', prompt: '(the phone) Will you give it to me?', answer: 'Mi-l dai?' },
        { id: 's29-02', prompt: "(the book) I'll give it to you tomorrow.", answer: 'Ți-o dau mâine.' },
        { id: 's29-03', prompt: '(the phone) Give it to me!', answer: 'Dă-mi-l!' },
        { id: 's29-04', prompt: '(the ball) Give it to me!', answer: 'Dă-mi-o!' },
        { id: 's29-05', prompt: '(the phone) He gave it to me.', answer: 'Mi l-a dat.' },
        { id: 's29-06', prompt: '(the toy) I gave it to him.', answer: 'I-am dat-o.' },
        { id: 's29-07', prompt: '(the car) They lent it to us.', answer: 'Ne-au împrumutat-o.' },
        { id: 's29-08', prompt: '(the photo) Send it to me!', answer: 'Trimite-mi-o!' },
        { id: 's29-09', prompt: '(the news) Who told you?', answer: 'Cine ți-a spus?' },
        {
          id: 's29-10',
          prompt: "(the money) I'll give it back to you.",
          answer: 'Ți-i dau înapoi.',
          teachingNote: 'Banii (money) is plural, so "it" is îi — them: ți-i.',
        },
        { id: 's29-11', prompt: '(the keys) Did you give them to her?', answer: 'I le-ai dat?' },
      ],
    },
    {
      kind: 'choose',
      question: '(the bag) "Give it to me."',
      options: [{ text: 'Dă-mi-o!', correct: true }, { text: 'Dă-o-mi!' }, { text: 'Dă-mi ea!' }],
      explanation: '"To me" first, then "it": mi-o — and geantă is an o-thing.',
    },
    {
      kind: 'assemble',
      prompt: "(the ball) I'll give it to him later.",
      answer: 'I-o dau mai târziu.',
      distractors: ['îl', 'lui'],
    },
  ],
  shortcut: 'To whom first, then it: mi-l, ți-o, i-l. Past: mi l-a dat / mi-a dat-o. Commands: dă-mi-l!',
  useItToday: 'Ask for things with "Mi-l dai?" / "Mi-o dai?" — your son will soon hand it back with "Dă-mi-o!"',
  seeAlso: { lessonId: 'u19-l01', label: 'Course: "Mi-l," "ți-o" — two small words together' },
}

export const whoWhich: StructureLesson = {
  id: 's-who-which',
  part: 'Going further',
  title: 'Who, which, the one that: care',
  tagline: '"The man I saw" — omul pe care l-am văzut.',
  shift: {
    english: 'English uses who, which, that — or nothing at all: "the man I saw".',
    romanian: 'Romanian uses {{care}} for all of them and never drops it: {{omul pe care l-am văzut}} — "the man whom him I-saw".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Care for who, which and that',
      body: [
        '{{omul care vorbește}} — the man who\'s talking. {{mașina care e afară}} — the car that\'s outside. People or things, it\'s {{care}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'The one you can\'t drop',
      body: [
        'English says "the man I saw", with no "whom". Romanian needs {{pe care}} — and then repeats "him" as a heads-up: {{omul pe care l-am văzut}} — "the man whom him I-have seen".',
        '{{cartea pe care o citesc}} — the book I\'m reading.',
      ],
      glosses: [
        {
          ro: 'Filmul pe care l-am văzut.',
          words: [['Filmul', 'the-film'], ['pe care', 'which'], ['l-am văzut', 'it-we-have seen']],
          en: 'The film we saw.',
        },
      ],
    },
    {
      kind: 'explain',
      title: 'Whoever, whatever, where, when',
      body: [
        '{{cine}} — whoever: {{Cine vrea, poate să vină.}} {{ce}} — whatever: {{Fă ce vrei.}} {{tot ce}} — everything that: {{Tot ce vrei.}}',
        '{{unde}} and {{când}} join sentences just like English: {{locul unde ne-am cunoscut}} — the place where we met.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Join it up',
      rungs: [
        { id: 's30-01', prompt: "The man who's talking.", answer: 'Omul care vorbește.' },
        { id: 's30-02', prompt: "The car that's outside.", answer: 'Mașina care e afară.' },
        { id: 's30-03', prompt: 'The man I saw.', answer: 'Omul pe care l-am văzut.' },
        { id: 's30-04', prompt: "The book I'm reading.", answer: 'Cartea pe care o citesc.' },
        { id: 's30-05', prompt: 'The film we saw.', answer: 'Filmul pe care l-am văzut.' },
        { id: 's30-06', prompt: '(the cake) Which one do you want?', answer: 'Pe care o vrei?' },
        { id: 's30-07', prompt: 'Do what you like.', answer: 'Fă ce vrei.' },
        { id: 's30-08', prompt: 'Everything you want.', answer: 'Tot ce vrei.' },
        { id: 's30-09', prompt: 'Whoever wants to can come.', answer: 'Cine vrea poate să vină.' },
        { id: 's30-10', prompt: 'The place where we met.', answer: 'Locul unde ne-am cunoscut.' },
        {
          id: 's30-11',
          prompt: 'The day he was born.',
          answer: 'Ziua când s-a născut.',
          acceptedAlternates: ['Ziua în care s-a născut.'],
        },
        { id: 's30-12', prompt: "The friends we're visiting.", answer: 'Prietenii pe care îi vizităm.' },
      ],
    },
    {
      kind: 'choose',
      question: '"The house we bought."',
      options: [
        { text: 'Casa noi am cumpărat.' },
        { text: 'Casa pe care am cumpărat-o.', correct: true },
        { text: 'Casa care am cumpărat.' },
      ],
      explanation: 'Pe care can\'t be dropped — plus the heads-up "it" (-o, for an o-thing).',
    },
    {
      kind: 'assemble',
      prompt: 'The girl who lives next door.',
      answer: 'Fata care locuiește alături.',
      distractors: ['pe', 'cine'],
    },
  ],
  shortcut: 'Who / which / that = care, never dropped. "The man I saw" = omul pe care l-am văzut. Whoever = cine, whatever = ce.',
  useItToday: 'Describe someone by what they do: "Vecina care…", "Prietenul pe care…".',
  seeAlso: { lessonId: 'u18-l01', label: 'Course: "Care" — the one who, the one which' },
}

export const smallAndSweet: StructureLesson = {
  id: 's-small-sweet',
  part: 'Going further',
  title: 'Small and sweet: how Romanians talk to children',
  tagline: 'Mânuța, puiule, hai la nani.',
  shift: {
    english: 'English has "little", "sweetie" and a few -ie words — doggie, blankie.',
    romanian:
      'Romanian can make almost any word small and loving with an ending — {{mână}} → {{mânuța}} — and changes a word when you call someone: {{pui}} → {{puiule!}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Making things small',
      body: [
        'Endings like **-uț / -uța**, **-el / -ică**, **-ior / -ioară** and **-ișor** make things small and loving: {{mânuța}} (little hand), {{piciorușele}} (little feet), {{căsuța}} (little house), {{cățelul}} (the doggie), {{puișor}} (little chick — a favourite pet name).',
        'You\'ll hear them constantly around small children — from your partner, and above all from grandparents.',
      ],
    },
    {
      kind: 'explain',
      title: 'Calling someone',
      body: [
        'When you call or talk directly to someone, the word changes: {{pui}} → {{puiule!}}, {{bunica}} → {{bunico!}}, {{mama}} → {{mamă!}}.',
        'Roughly: men\'s words take **-ule** or **-e**, women\'s take **-o** or **-ă**. {{iubire}} ("love") works for anyone, unchanged.',
      ],
    },
    {
      kind: 'explain',
      title: 'Baby words',
      body: [
        '{{papa}} — food / eat · {{nani}} — sleep · {{buba}} — a boo-boo · {{pupic}} — a kiss · {{hopa!}} — whoops / up you go!',
      ],
    },
    {
      kind: 'ladder',
      title: 'Talk to him',
      rungs: [
        { id: 's31-01', prompt: '(to him) Give me your little hand.', answer: 'Dă-mi mânuța.' },
        { id: 's31-02', prompt: 'Come here, sweetheart!', answer: 'Vino aici, puiule!' },
        { id: 's31-03', prompt: '(baby talk) Time for sleep!', answer: 'Hai la nani!' },
        { id: 's31-04', prompt: '(baby talk) Do you want some food?', answer: 'Vrei papa?' },
        { id: 's31-05', prompt: "Where's the doggie?", answer: 'Unde e cățelul?' },
        { id: 's31-06', prompt: 'Show me the boo-boo.', answer: 'Arată-mi buba.' },
        { id: 's31-07', prompt: 'Whoops!', answer: 'Hopa!' },
        { id: 's31-08', prompt: 'Give Grandma a kiss!', answer: 'Dă-i un pupic bunicii!' },
        { id: 's31-09', prompt: 'Little feet!', answer: 'Piciorușele!' },
        { id: 's31-10', prompt: '(calling) Grandma!', answer: 'Bunico!' },
        { id: 's31-11', prompt: 'My little chick!', answer: 'Puișorul meu!' },
      ],
    },
    {
      kind: 'choose',
      question: 'Calling to him across the park:',
      options: [{ text: 'Pui!' }, { text: 'Puiule!', correct: true }],
      explanation: 'Calling someone changes the word: pui → puiule.',
    },
    {
      kind: 'assemble',
      prompt: "Let's put your little shoes on.",
      answer: 'Hai să-ți punem pantofiorii.',
      distractors: ['pantofii', 'îți'],
      note: 'Pantofi → pantofiori: little shoes.',
    },
  ],
  shortcut: 'Make it small and loving with -uț, -el, -ică, -ior, -ișor. Call someone with -ule / -o / -ă: puiule!, bunico!',
  useItToday: 'Use three small words with your son today — mânuța, piciorușele, cățelul — and call him "puiule".',
}

export const reported: StructureLesson = {
  id: 's-reported',
  part: 'Going further',
  title: 'He told me to…, she asked if…',
  tagline: 'Passing messages on with the bridges you already know.',
  shift: {
    english: 'English reports with "told me to", "asked me if", "said that" — and shifts the tenses back.',
    romanian:
      'Romanian uses the bridges you know: {{Mi-a zis să vin}} — "to me he said that I come". {{M-a întrebat dacă vin}} — "he asked me if I come".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Told me to: să',
      body: [
        'An instruction takes {{să}}: {{Mi-a zis să vin.}} — he told me to come. {{I-am zis să aștepte.}} — I told him to wait.',
      ],
      glosses: [
        {
          ro: 'Mi-a zis să vin.',
          words: [['Mi-a zis', 'to-me he-said'], ['să', 'that'], ['vin', 'I-come']],
          en: 'He told me to come.',
        },
      ],
    },
    {
      kind: 'explain',
      title: 'Said that: că',
      body: [
        'A fact takes {{că}}, and keeps the tense it had when it was said: {{Mi-a zis că vine.}} — he told me he was coming ("…that he comes").',
      ],
    },
    {
      kind: 'explain',
      title: 'Asked if, asked what, asked to',
      body: [
        '{{M-a întrebat dacă…}} — he asked me if… {{M-a întrebat ce…}} — he asked me what…',
        'Asking someone to do something is a different verb, {{a ruga}}: {{Ne-au rugat să rămânem.}} — they asked us to stay.',
        'Passing it on: {{Spune-i să vină!}} — tell him to come. {{Întreab-o dacă vrea.}} — ask her if she wants to.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Pass it on',
      rungs: [
        { id: 's32-01', prompt: 'She told me to wait.', answer: 'Mi-a zis să aștept.' },
        { id: 's32-02', prompt: 'I told him to come.', answer: 'I-am zis să vină.' },
        { id: 's32-03', prompt: "He said he's coming.", answer: 'A zis că vine.' },
        { id: 's32-04', prompt: 'She told me she was tired.', answer: 'Mi-a zis că e obosită.' },
        { id: 's32-05', prompt: "He asked me if I'm coming.", answer: 'M-a întrebat dacă vin.' },
        { id: 's32-06', prompt: 'Ask her if she wants coffee.', answer: 'Întreab-o dacă vrea cafea.' },
        { id: 's32-07', prompt: 'Tell him to come here.', answer: 'Spune-i să vină aici.' },
        { id: 's32-08', prompt: 'What did she say?', answer: 'Ce a zis?' },
        { id: 's32-09', prompt: 'She said no.', answer: 'A zis că nu.' },
        { id: 's32-10', prompt: "Your mum asked when we're coming.", answer: 'Mama ta a întrebat când venim.' },
        { id: 's32-11', prompt: 'I told you to be careful!', answer: 'Ți-am zis să ai grijă!' },
        {
          id: 's32-12',
          prompt: 'They asked us to stay for dinner.',
          answer: 'Ne-au rugat să rămânem la masă.',
          teachingNote: 'A ruga — ask someone to do something. A întreba — ask a question.',
        },
      ],
    },
    {
      kind: 'choose',
      question: '"He told me to call."',
      options: [{ text: 'Mi-a zis că sun.' }, { text: 'Mi-a zis să sun.', correct: true }],
      explanation: 'It\'s an instruction, so să. "Mi-a zis că sun" would be "he told me that I\'m calling".',
    },
    {
      kind: 'assemble',
      prompt: "She asked me what we're eating tonight.",
      answer: 'M-a întrebat ce mâncăm diseară.',
      distractors: ['mi-a', 'dacă'],
    },
  ],
  shortcut: 'Told to = zis să. Said that = zis că (same tense). Asked if = întrebat dacă. Asked to (a favour) = rugat să.',
  useItToday: 'Pass on at least one message in Romanian today: "A zis că…", "Mi-a zis să…".',
}
