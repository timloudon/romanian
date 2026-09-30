import type { StructureLesson } from '../types'

export const cognates: StructureLesson = {
  id: 's-words',
  part: 'Starting from English',
  title: 'You already know thousands of words',
  tagline: 'A handful of swaps turn English words into Romanian ones.',
  shift: {
    english: "It feels like you're starting from nothing.",
    romanian:
      "Romanian comes from Latin, and so do thousands of English words — mostly the longer ones. You share them; you just need the swaps.",
  },
  steps: [
    {
      kind: 'explain',
      title: 'The swaps',
      body: [
        'The long, slightly formal English words — the ones that came from Latin and French — mostly exist in Romanian too, with a different ending.',
        '**-tion** becomes **-ție** (say it "tsee-eh"): {{situație}}, {{informație}}, {{soluție}}, {{emoție}}.',
        '**-ity** becomes **-itate**: {{calitate}}, {{realitate}}, {{posibilitate}}, {{universitate}}.',
        '**-ible** and **-able** become **-ibil** and **-abil**: {{posibil}}, {{imposibil}}, {{acceptabil}}, {{responsabil}}.',
        'Plenty stay exactly as they are: {{normal}}, {{special}}, {{fantastic}}, {{important}}, {{excelent}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'Verbs too',
      body: [
        'Lots of verbs have a Romanian twin: to accept → {{accept}} (I accept), to prefer → {{prefer}}, to confirm → {{confirm}}, to recommend → {{recomand}}, to decide → {{decid}}, to organise → {{organizez}}.',
        'A few twins are false friends, the same as in French or Spanish: {{actual}} means "current", not "actual", and {{a realiza}} mostly means "to achieve".',
        'When you get stuck for a word, try the English one with a Romanian ending. It works surprisingly often — and when it doesn\'t, people still understand you.',
      ],
      glosses: [
        { ro: 'E posibil.', words: [['E', "it's"], ['posibil', 'possible']], en: "It's possible." },
        {
          ro: 'E o situație complicată.',
          words: [['E', "it's"], ['o', 'a'], ['situație', 'situation'], ['complicată', 'complicated']],
          en: "It's a complicated situation.",
        },
      ],
    },
    {
      kind: 'explain',
      title: 'One more thing you can see there',
      body: [
        'The describing word comes **after** the thing: "a situation complicated", {{o idee bună}} — "an idea good".',
        'And "it\'s" is just {{e}}. No "it" needed: the {{e}} already means "it is".',
      ],
    },
    {
      kind: 'explain',
      title: 'More swaps, and no -ly',
      body: [
        '**-ence / -ance** become **-ență / -anță**: {{diferență}}, {{experiență}}, {{distanță}}.',
        '**-ure** becomes **-ură**: {{natură}}, {{cultură}}, {{temperatură}}, {{aventură}}.',
        '**-ous** (and **-cious**) become **-os**: {{curios}}, {{generos}}, {{delicios}}.',
        'And English **-ly** simply disappears: the describing word does both jobs. Perfectly → {{perfect}}, normally → {{normal}}, quickly → {{rapid}}.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      intro: "Think it out, then say it out loud before you reveal. There's no rush.",
      rungs: [
        { id: 's01-01', prompt: "It's possible.", answer: 'E posibil.' },
        { id: 's01-02', prompt: "It's not possible.", answer: 'Nu e posibil.', hint: 'nu goes at the front' },
        { id: 's01-03', prompt: "It's very important.", answer: 'E foarte important.', hint: 'foarte = very' },
        { id: 's01-04', prompt: "It's normal.", answer: 'E normal.' },
        {
          id: 's01-05',
          prompt: "It's a good idea.",
          answer: 'E o idee bună.',
          hint: 'o idee = an idea; bună = good, after it',
        },
        {
          id: 's01-06',
          prompt: "It's a fantastic idea!",
          answer: 'E o idee fantastică!',
          teachingNote: 'After an "o" word, the describing word takes an -ă: fantastic → fantastică.',
        },
        { id: 's01-07', prompt: 'I have a solution.', answer: 'Am o soluție.', hint: 'am = I have' },
        { id: 's01-08', prompt: "It's a special situation.", answer: 'E o situație specială.' },
        { id: 's01-09', prompt: 'I prefer coffee.', answer: 'Prefer cafea.' },
        { id: 's01-10', prompt: 'I accept.', answer: 'Accept.' },
      ],
    },
    {
      kind: 'choose',
      question: 'Which is Romanian for "responsibility"?',
      options: [{ text: 'responsabilitate', correct: true }, { text: 'responsibilitie' }, { text: 'responsabilție' }],
      explanation: '-ity becomes -itate. And responsible is responsabil — so responsabilitate.',
    },
    {
      kind: 'assemble',
      prompt: "It's a complicated situation.",
      answer: 'E o situație complicată.',
      distractors: ['un', 'complicat'],
      note: 'The situation comes first, then what it\'s like.',
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's01-11', prompt: 'It\'s a big difference.', answer: 'E o diferență mare.' },
        { id: 's01-12', prompt: 'It\'s too complicated.', answer: 'E prea complicat.', hint: 'prea = too' },
        { id: 's01-13', prompt: 'He\'s very curious.', answer: 'E foarte curios.' },
        { id: 's01-14', prompt: 'It\'s delicious!', answer: 'E delicios!' },
        { id: 's01-15', prompt: 'It\'s an adventure!', answer: 'E o aventură!' },
        { id: 's01-16', prompt: 'It\'s perfectly normal.', answer: 'E perfect normal.', teachingNote: 'No -ly: perfect does the job of "perfectly".' },
        { id: 's01-17', prompt: 'It\'s an interesting situation.', answer: 'E o situație interesantă.' },
      ],
    },
    {
      kind: 'choose',
      question: 'Which is Romanian for "generous"?',
      options: [{ text: 'generos', correct: true }, { text: 'generuș' }, { text: 'generositate' }],
      explanation: '-ous → -os. (Generositate is "generosity" — -ity → -itate again.)',
    },
  ],
  shortcut: '-tion → -ție, -ity → -itate, -ible → -ibil. Stuck for a word? Try the English one with a Romanian ending.',
  useItToday:
    'Every time you use a long English word today, say its Romanian twin in your head: situation → situație, possible → posibil.',
}

export const noIng: StructureLesson = {
  id: 's-no-ing',
  part: 'Starting from English',
  title: 'No am-ing, is-ing or are-ing',
  tagline: '"I eat", "I\'m eating" and "I do eat" are all one word.',
  shift: {
    english: 'English has two presents — "I eat" and "I\'m eating" — and needs "do" for questions and "don\'t" for negatives.',
    romanian: 'Romanian has one present, and no "do": {{mănânc}}. That\'s all three.',
  },
  steps: [
    {
      kind: 'funnel',
      title: 'Three English sentences, one Romanian word',
      english: ['I eat', "I'm eating", 'I do eat'],
      ro: 'Mănânc.',
      caption: 'Whenever you catch yourself reaching for "am" or "-ing", drop it.',
    },
    {
      kind: 'explain',
      title: "Don't translate the \"am\"",
      body: [
        'The most common English-speaker mistake is translating the "am" in "I am working". {{sunt}} does mean "I am", so it\'s tempting — but Romanian just says {{lucrez}}: "I work", which covers "I\'m working" too.',
        'So strip the English down before you start: "I\'m going home" → "I go home" → {{Merg acasă.}}',
      ],
      glosses: [
        { ro: 'Merg acasă.', words: [['Merg', 'I-go'], ['acasă', 'home']], en: "I'm going home." },
        { ro: 'Ce faci?', words: [['Ce', 'what'], ['faci', 'you-do']], en: 'What are you doing? / How are you?' },
      ],
    },
    {
      kind: 'funnel',
      title: 'No "do" in questions',
      english: ['Do you eat meat?', 'Are you eating meat?'],
      ro: 'Mănânci carne?',
      caption: 'A question is the same words as a statement. Your voice goes up at the end — that\'s the whole difference.',
    },
    {
      kind: 'explain',
      title: '"Don\'t" is just nu',
      body: [
        '"I don\'t eat meat", "I\'m not eating meat" — both are {{Nu mănânc carne.}} Put {{nu}} in front and you\'re done. No "do", no "does".',
      ],
      glosses: [
        {
          ro: 'Nu lucrez azi.',
          words: [['Nu', 'not'], ['lucrez', 'I-work'], ['azi', 'today']],
          en: "I'm not working today.",
        },
      ],
    },
    {
      kind: 'ladder',
      title: 'Build it up',
      intro: 'Each one adds a little to the last. Say it out loud, then check.',
      rungs: [
        { id: 's02-01', prompt: "I'm working.", answer: 'Lucrez.' },
        { id: 's02-02', prompt: "I'm working today.", answer: 'Lucrez azi.', hint: 'azi = today' },
        {
          id: 's02-03',
          prompt: 'Are you working today?',
          answer: 'Lucrezi azi?',
          hint: 'lucrezi = you work',
          teachingNote: 'The -i on the end makes it "you". More on that in the next lesson.',
        },
        { id: 's02-04', prompt: "I'm not working today.", answer: 'Nu lucrez azi.' },
        { id: 's02-05', prompt: "I'm going home.", answer: 'Merg acasă.' },
        { id: 's02-06', prompt: 'Are you going home?', answer: 'Mergi acasă?' },
        {
          id: 's02-07',
          prompt: 'What are you doing?',
          answer: 'Ce faci?',
          teachingNote: 'Literally "what do-you?" — and it\'s also the everyday "how are you?"',
        },
        { id: 's02-08', prompt: 'What are you eating?', answer: 'Ce mănânci?' },
        { id: 's02-09', prompt: "I don't understand.", answer: 'Nu înțeleg.' },
        { id: 's02-10', prompt: 'Do you understand?', answer: 'Înțelegi?' },
        { id: 's02-11', prompt: "He's sleeping.", answer: 'Doarme.', teachingNote: 'No "he", no "is", no "-ing" — one word.' },
      ],
    },
    {
      kind: 'choose',
      question: 'How do you say "I\'m eating"?',
      options: [{ text: 'Sunt mănânc.' }, { text: 'Mănânc.', correct: true }, { text: 'Sunt mâncând.' }],
      explanation:
        'Just mănânc. "Sunt" is "I am" — adding it is the English habit to unlearn. "Mâncând" does exist, but it means "while eating"; you\'ll barely need it.',
    },
    {
      kind: 'choose',
      question: '"Do you speak English?"',
      options: [{ text: 'Faci vorbești engleză?' }, { text: 'Vorbești engleză?', correct: true }],
      explanation: 'There\'s no "do" to translate. The question is the statement, with your voice going up.',
    },
    {
      kind: 'assemble',
      prompt: "I'm not going to work today.",
      answer: 'Nu merg la serviciu azi.',
      distractors: ['sunt', 'fac'],
      note: '"Going to work" — the place — is la serviciu.',
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's02-12', prompt: 'I\'m cooking.', answer: 'Gătesc.' },
        { id: 's02-13', prompt: 'What are you cooking?', answer: 'Ce gătești?' },
        { id: 's02-14', prompt: 'I\'m not cooking tonight.', answer: 'Nu gătesc diseară.' },
        { id: 's02-15', prompt: 'Are you listening?', answer: 'Asculți?' },
        { id: 's02-16', prompt: 'He\'s playing outside.', answer: 'Se joacă afară.', teachingNote: '"He plays himself" — se joacă. There\'s a lesson on these "myself" verbs later.' },
        { id: 's02-17', prompt: 'Where do you work?', answer: 'Unde lucrezi?' },
        { id: 's02-18', prompt: 'I\'m coming!', answer: 'Vin!', teachingNote: 'The classic reply when someone calls you from the other room.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Are you coming?"',
      options: [{ text: 'Ești venind?' }, { text: 'Vii?', correct: true }, { text: 'Faci vii?' }],
      explanation: 'No "are", no "-ing", no "do" — just vii, with your voice going up.',
    },
  ],
  shortcut: 'Strip the English down: "I\'m going" → "I go" → merg. No am, no -ing, no do.',
  useItToday:
    'Narrate what you\'re doing in your head, with no "am": "Fac cafea. Deschid ușa. Merg la serviciu." This inner commentary is how a language starts running on its own.',
  seeAlso: { lessonId: 'u01-l01', label: 'Course: "Vreau să..." — I want to...' },
}

export const endings: StructureLesson = {
  id: 's-endings',
  part: 'Starting from English',
  title: 'The end of the word says who',
  tagline: 'Drop the "I" and "you" — the ending already says it.',
  shift: {
    english: 'English needs "I", "you", "we" in front of every verb, because its verbs barely change.',
    romanian: 'Romanian verbs change their ending instead, so "I" and "you" are usually left out.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Listen to the end',
      body: [
        '{{merg}} is "I go". {{mergi}} is "you go". {{mergem}} is "we go". The ending carries the person, so {{eu}} (I) and {{tu}} (you) are left out unless you\'re stressing them.',
        'Three endings do most of the work in conversation:',
        '**-i** is usually **you**: {{vrei}}, {{poți}}, {{faci}}, {{mergi}}, {{știi}}.',
        '**-m** is **we**: {{vrem}}, {{putem}}, {{facem}}, {{mergem}}, {{știm}}.',
        '**-ți** is **you, all of you** — and the polite "you" for your partner\'s parents: {{vreți}}, {{puteți}}, {{faceți}}, {{mergeți}}, {{știți}}.',
      ],
      glosses: [
        { ro: 'Mergem?', words: [['Mergem', 'go-we']], en: 'Shall we go?' },
        { ro: 'Știți?', words: [['Știți', 'know-you-all']], en: 'Do you know? (polite, or to several people)' },
      ],
    },
    {
      kind: 'explain',
      title: 'Eu and tu are for emphasis',
      body: [
        'Add {{eu}} or {{tu}} only where you\'d lean on the word in English — and Romanian likes to put it at the end:',
        '"**I**\'ll do it" (not you) → {{Fac eu.}} "**You** decide" → {{Decizi tu.}}',
      ],
      glosses: [{ ro: 'Fac eu.', words: [['Fac', 'I-do'], ['eu', 'I']], en: "I'll do it." }],
    },
    {
      kind: 'ladder',
      title: 'Swap the ending',
      intro: 'Same word, different person. Listen for the end.',
      rungs: [
        { id: 's03-01', prompt: 'I want coffee.', answer: 'Vreau cafea.' },
        { id: 's03-02', prompt: 'Do you want coffee?', answer: 'Vrei cafea?', acceptedAlternates: ['Vrei o cafea'], hint: '-i = you' },
        { id: 's03-03', prompt: 'We want coffee.', answer: 'Vrem cafea.', hint: '-m = we' },
        {
          id: 's03-04',
          prompt: 'Do you all want coffee?',
          answer: 'Vreți cafea?',
          teachingNote: 'Also the polite "you" — for your partner\'s parents.',
        },
        { id: 's03-05', prompt: 'We know.', answer: 'Știm.' },
        { id: 's03-06', prompt: 'Do you know?', answer: 'Știi?' },
        { id: 's03-07', prompt: 'What are we doing?', answer: 'Ce facem?' },
        { id: 's03-08', prompt: 'What are you all doing?', answer: 'Ce faceți?' },
        { id: 's03-09', prompt: "I'll do it.", answer: 'Fac eu.' },
        {
          id: 's03-10',
          prompt: 'Are you coming too?',
          answer: 'Vii și tu?',
          hint: 'vii = you come; și tu = you too',
          teachingNote: '"Și tu" — "and you" — is "you too". "Me too" is "și eu".',
        },
      ],
    },
    {
      kind: 'choose',
      question: 'Your partner says "Mergem?" Who\'s going?',
      options: [{ text: 'Just you' }, { text: 'Just them' }, { text: 'Both of you — "we"', correct: true }],
      explanation: '-m on the end is "we": "Shall we go?"',
    },
    {
      kind: 'choose',
      question: 'Which is "you" — talking to one person?',
      options: [{ text: 'facem' }, { text: 'faci', correct: true }, { text: 'faceți' }],
      explanation: '-i is "you" (one person). -m is "we". -ți is "you all", or the polite "you".',
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's03-11', prompt: 'Can we?', answer: 'Putem?' },
        { id: 's03-12', prompt: 'Are you all coming?', answer: 'Veniți?', teachingNote: 'Also how you\'d ask your partner\'s parents.' },
        { id: 's03-13', prompt: 'We\'re coming too.', answer: 'Venim și noi.' },
        { id: 's03-14', prompt: 'What do you want?', answer: 'Ce vrei?' },
        { id: 's03-15', prompt: 'We\'re working today.', answer: 'Lucrăm azi.' },
        { id: 's03-16', prompt: '(politely) Do you understand?', answer: 'Înțelegeți?' },
        { id: 's03-17', prompt: 'I know, I know.', answer: 'Știu, știu.' },
      ],
    },
  ],
  shortcut: '-i = you, -m = we, -ți = you all (or polite you). Leave out "I" and "you" unless you\'d stress them.',
  useItToday: 'Ask your partner things with the -i form and no "tu": "Vrei…? Poți…? Știi…?"',
}

export const saBridge: StructureLesson = {
  id: 's-sa',
  part: 'Starting from English',
  title: 'Want to, can, have to: the să bridge',
  tagline: 'Where English says "to", Romanian says "that I".',
  shift: {
    english: '"I want to go" — after "want", English uses "to" and a verb that never changes.',
    romanian: 'Romanian says "I want that I go" — {{vreau să merg}} — and the second verb changes for who\'s doing it.',
  },
  steps: [
    {
      kind: 'explain',
      title: '"I want that I go"',
      body: [
        'English: "I want to go". Romanian: {{Vreau să merg.}} — literally "I want that I go". {{să}} is the bridge, and the verb after it keeps its normal ending.',
        'It looks like extra work, but it\'s a gift: it makes "I want **you** to go" easy. English twists the sentence round; Romanian just changes the ending: {{Vreau să mergi.}} — "I want that you go".',
      ],
      glosses: [
        { ro: 'Vreau să merg.', words: [['Vreau', 'I-want'], ['să', 'that'], ['merg', 'I-go']], en: 'I want to go.' },
        { ro: 'Vreau să mergi.', words: [['Vreau', 'I-want'], ['să', 'that'], ['mergi', 'you-go']], en: 'I want you to go.' },
      ],
    },
    {
      kind: 'explain',
      title: 'The same bridge everywhere',
      body: [
        '{{Pot să}} — I can. {{Trebuie să}} — I have to. {{Hai să}} — let\'s. {{Încerc să}} — I\'m trying to.',
        '{{trebuie}} never changes, because it really means "it\'s necessary". Only the verb after the bridge changes.',
      ],
      glosses: [
        {
          ro: 'Trebuie să plec.',
          words: [['Trebuie', "it's-necessary"], ['să', 'that'], ['plec', 'I-leave']],
          en: 'I have to go.',
        },
      ],
    },
    {
      kind: 'explain',
      title: 'One small wrinkle',
      body: [
        'For "he", "she" and "they", the verb after {{să}} shifts its last letter: {{doarme}} (he sleeps) becomes {{să doarmă}}; {{mănâncă}} becomes {{să mănânce}}.',
        'That\'s the only change. "I", "you" and "we" stay exactly as normal — and people will understand you either way.',
      ],
    },
    {
      kind: 'explain',
      title: 'A shortcut after pot',
      body: [
        'After {{pot}} you can skip the bridge and use the dictionary form: {{Nu pot veni.}} means the same as {{Nu pot să vin.}} Both are everyday.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Build it up',
      rungs: [
        { id: 's04-01', prompt: 'I want to sleep.', answer: 'Vreau să dorm.' },
        { id: 's04-02', prompt: 'I want to sleep a bit.', answer: 'Vreau să dorm puțin.', hint: 'puțin = a bit' },
        { id: 's04-03', prompt: "I can't sleep.", answer: 'Nu pot să dorm.' },
        { id: 's04-04', prompt: 'I have to go.', answer: 'Trebuie să plec.', acceptedAlternates: ['Trebuie să merg'] },
        {
          id: 's04-05',
          prompt: 'You have to go?',
          answer: 'Trebuie să pleci?',
          teachingNote: 'Trebuie stays the same — only the second verb changes.',
        },
        { id: 's04-06', prompt: 'We have to go.', answer: 'Trebuie să plecăm.' },
        { id: 's04-07', prompt: 'I want you to stay.', answer: 'Vreau să rămâi.', hint: 'rămâi = you stay' },
        {
          id: 's04-08',
          prompt: 'Do you want me to come?',
          answer: 'Vrei să vin?',
          teachingNote: '"Do you want that I come?" — no "me to" to juggle.',
        },
        {
          id: 's04-09',
          prompt: 'Do you want me to help you?',
          answer: 'Vrei să te ajut?',
          hint: 'te = you, just before ajut',
          teachingNote: 'Te (you) sits just before the verb — a pattern you\'ll see everywhere.',
        },
        { id: 's04-10', prompt: "Let's eat.", answer: 'Hai să mâncăm.' },
        { id: 's04-11', prompt: "I'm trying to understand.", answer: 'Încerc să înțeleg.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I want him to sleep."',
      options: [{ text: 'Vreau el să doarmă.' }, { text: 'Vreau să doarmă.', correct: true }, { text: 'Vreau să dorm.' }],
      explanation: 'The ending says who: dorm is "I sleep", doarmă is "he sleeps". No "him" needed.',
    },
    {
      kind: 'assemble',
      prompt: 'I want you to come with me.',
      answer: 'Vreau să vii cu mine.',
      distractors: ['tu', 'la'],
      note: 'Cu mine — with me.',
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's04-12', prompt: 'Can you help me?', answer: 'Poți să mă ajuți?' },
        { id: 's04-13', prompt: 'I have to work tomorrow.', answer: 'Trebuie să lucrez mâine.' },
        { id: 's04-14', prompt: 'Let\'s go home.', answer: 'Hai să mergem acasă.' },
        { id: 's04-15', prompt: 'Do you want to go out tonight?', answer: 'Vrei să ieșim diseară?', teachingNote: '"Do you want that we go out?" — Romanian naturally makes it "we".' },
        { id: 's04-16', prompt: 'I don\'t want to go.', answer: 'Nu vreau să merg.' },
        { id: 's04-17', prompt: 'I want him to eat.', answer: 'Vreau să mănânce.' },
        { id: 's04-18', prompt: 'He has to sleep.', answer: 'Trebuie să doarmă.' },
        { id: 's04-19', prompt: 'We can\'t come.', answer: 'Nu putem să venim.', acceptedAlternates: ['Nu putem veni.'] },
      ],
    },
  ],
  shortcut: '"To" after want / can / must = să + the verb with its normal ending. "I want you to…" = vreau să + the "you" ending.',
  useItToday: 'Ask your partner what they want to do with "Vrei să…?" — and answer with "Vreau să…".',
  seeAlso: { lessonId: 'u01-l01', label: 'Course: "Vreau să..." — I want to...' },
}

export const doubleNegatives: StructureLesson = {
  id: 's-negatives',
  part: 'Starting from English',
  title: 'Double negatives are compulsory',
  tagline: '"I don\'t see nothing" is correct Romanian.',
  shift: {
    english: 'English allows one "not" per sentence: "I don\'t see anything."',
    romanian: 'Romanian wants everything negative: "I don\'t see nothing" — {{nu văd nimic}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Talk like you were told not to',
      body: [
        'Your English teacher corrected "I don\'t know nothing". Romanian insists on it. Keep the {{nu}}, and turn the "any" word into a "no" word: {{Nu văd nimic.}} — "I don\'t see nothing".',
        'The "no" words: {{nimic}} — nothing · {{nimeni}} — nobody · {{niciodată}} — never · {{nicăieri}} — nowhere · {{nici}} — not even, neither.',
      ],
      glosses: [
        { ro: 'Nu știe nimeni.', words: [['Nu', 'not'], ['știe', 'knows'], ['nimeni', 'nobody']], en: 'Nobody knows.' },
        {
          ro: 'Nu merg nicăieri.',
          words: [['Nu', 'not'], ['merg', 'I-go'], ['nicăieri', 'nowhere']],
          en: "I'm not going anywhere.",
        },
      ],
    },
    {
      kind: 'funnel',
      title: 'Both roads lead here',
      english: ["I don't want anything.", 'I want nothing.'],
      ro: 'Nu vreau nimic.',
      caption: 'Whichever English version is in your head, the Romanian is the same.',
    },
    {
      kind: 'explain',
      title: 'Me too, me neither',
      body: ['"Me too" is {{Și eu.}} — "and me". "Me neither" is {{Nici eu.}} — "not even me".'],
    },
    {
      kind: 'ladder',
      title: 'Say it',
      rungs: [
        { id: 's05-01', prompt: "I don't want anything.", answer: 'Nu vreau nimic.' },
        { id: 's05-02', prompt: "I don't understand anything.", answer: 'Nu înțeleg nimic.' },
        { id: 's05-03', prompt: 'Nobody knows.', answer: 'Nu știe nimeni.', acceptedAlternates: ['Nimeni nu știe'] },
        { id: 's05-04', prompt: "I'm not going anywhere.", answer: 'Nu merg nicăieri.' },
        { id: 's05-05', prompt: 'He never sleeps!', answer: 'Nu doarme niciodată!' },
        { id: 's05-06', prompt: 'Me neither.', answer: 'Nici eu.' },
        { id: 's05-07', prompt: 'Me too.', answer: 'Și eu.' },
        { id: 's05-08', prompt: "There's nobody here.", answer: 'Nu e nimeni aici.' },
        {
          id: 's05-09',
          prompt: "It doesn't matter.",
          answer: 'Nu contează.',
          teachingNote: 'Contează is from "count" — "it doesn\'t count". You\'ll hear it constantly.',
        },
      ],
    },
    {
      kind: 'choose',
      question: '"I don\'t know anybody here."',
      options: [
        { text: 'Nu cunosc pe nimeni aici.', correct: true },
        { text: 'Nu cunosc pe cineva aici.' },
        { text: 'Cunosc nimeni aici.' },
      ],
      explanation:
        'Keep the nu, and "anybody" becomes nimeni. (The pe is a little tag Romanian puts in front of people — it comes up again in "Him, her, it go in front".)',
    },
    {
      kind: 'assemble',
      prompt: 'I never eat anything in the morning.',
      answer: 'Nu mănânc niciodată nimic dimineața.',
      distractors: ['ceva'],
      note: 'Three negatives in one sentence — and all of them required.',
    },
    {
      kind: 'ladder',
      title: 'Mix it up',
      intro: 'Mixing this lesson with the ones before it. Take your time building each one.',
      rungs: [
        { id: 's05-10', prompt: 'I haven\'t got anything.', answer: 'N-am nimic.' },
        { id: 's05-11', prompt: 'There\'s nothing to eat.', answer: 'Nu e nimic de mâncare.' },
        { id: 's05-12', prompt: 'He never wants to sleep.', answer: 'Nu vrea niciodată să doarmă.' },
        { id: 's05-13', prompt: 'Nobody wants to go.', answer: 'Nu vrea nimeni să meargă.' },
        { id: 's05-14', prompt: 'Not now.', answer: 'Nu acum.' },
        { id: 's05-15', prompt: 'I don\'t like it at all.', answer: 'Nu-mi place deloc.', teachingNote: 'Deloc — at all. It goes with nu, like the other "no" words.' },
        { id: 's05-16', prompt: 'No way!', answer: 'Nici vorbă!', teachingNote: 'Literally "not even talk (of it)".' },
      ],
    },
  ],
  shortcut: 'Keep the nu, and make the "any" word a "no" word: nimic, nimeni, niciodată, nicăieri.',
  useItToday: 'Say "Nu contează", "Nici eu" and "Nimic" at least once today — they come up all the time.',
}

export const questions: StructureLesson = {
  id: 's-questions',
  part: 'Starting from English',
  title: 'Question words, and one tag for all',
  tagline: '"Isn\'t it?", "don\'t you?", "haven\'t we?" — all just nu?',
  shift: {
    english:
      'English questions reshuffle the words and add do / does / did — and tags like "isn\'t it?", "don\'t you?", "haven\'t we?" change every time.',
    romanian: 'Romanian keeps the normal order, and has one tag for everything: {{nu?}} or {{nu-i așa?}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The question words',
      body: [
        '{{Ce?}} what · {{Cine?}} who · {{Unde?}} where · {{Când?}} when · {{Cum?}} how · {{De ce?}} why · {{Cât?}} how much · {{Care?}} which.',
        'Put the question word first, then say the rest exactly as normal: {{Unde mergi?}} — "where you-go?" No "are", no "do".',
      ],
      glosses: [
        { ro: 'Când pleci?', words: [['Când', 'when'], ['pleci', 'you-leave']], en: 'When are you leaving?' },
        { ro: 'De ce plângi?', words: [['De ce', 'of what'], ['plângi', 'you-cry']], en: 'Why are you crying?' },
      ],
    },
    {
      kind: 'funnel',
      title: 'One tag for every English tag',
      english: ["…isn't it?", "…don't you?", "…haven't we?", "…wasn't he?"],
      ro: 'Nu-i așa?',
      caption: 'In quick speech it\'s just a rising "nu?" on the end: "E frumos, nu?"',
    },
    {
      kind: 'explain',
      title: 'Cât: how much, how many, how long',
      body: [
        '{{Cât costă?}} — how much is it? · {{Câți ani are?}} — how old is he? ("how many years has he?") · {{Cât durează?}} — how long does it take? · {{Cât e ceasul?}} — what time is it? ("how much is the clock?")',
      ],
    },
    {
      kind: 'explain',
      title: 'Short answers',
      body: [
        'English answers "Yes, I do", "No, I haven\'t". Romanian just says {{Da}} or {{Nu}} — or repeats the verb: "Do you want some?" — {{Vreau.}} ("I want.")',
      ],
    },
    {
      kind: 'ladder',
      title: 'Ask it',
      rungs: [
        { id: 's18-01', prompt: 'Where are you going?', answer: 'Unde mergi?' },
        { id: 's18-02', prompt: 'When are you leaving?', answer: 'Când pleci?' },
        { id: 's18-03', prompt: 'Why are you crying?', answer: 'De ce plângi?' },
        { id: 's18-04', prompt: 'Who is it?', answer: 'Cine e?' },
        { id: 's18-05', prompt: 'How much is it?', answer: 'Cât costă?' },
        { id: 's18-06', prompt: 'How old is he?', answer: 'Câți ani are?', teachingNote: '"How many years has he?"' },
        { id: 's18-07', prompt: 'What time is it?', answer: 'Cât e ceasul?' },
        { id: 's18-08', prompt: 'How long does it take?', answer: 'Cât durează?' },
        { id: 's18-09', prompt: 'Which one?', answer: 'Care?' },
        { id: 's18-10', prompt: "It's lovely, isn't it?", answer: 'E frumos, nu?' },
        { id: 's18-11', prompt: "You're coming too, aren't you?", answer: 'Vii și tu, nu-i așa?' },
        {
          id: 's18-12',
          prompt: 'How do you say it in Romanian?',
          answer: 'Cum se spune în română?',
          acceptedAlternates: ['Cum se zice în română'],
          teachingNote: '"How does one say" — the handy se, which has its own lesson later.',
        },
        { id: 's18-13', prompt: "(answering \"Do you want some?\") Yes, I do.", answer: 'Da, vreau.' },
      ],
    },
    {
      kind: 'choose',
      question: '"He\'s asleep, isn\'t he?"',
      options: [
        { text: 'Doarme, nu-i așa?', correct: true },
        { text: 'Doarme, nu e el?' },
        { text: 'Doarme, nu doarme?' },
      ],
      explanation: 'No need to build the tag from the verb — it\'s always nu-i așa?, or just nu?',
    },
    {
      kind: 'assemble',
      prompt: "Why aren't you eating?",
      answer: 'De ce nu mănânci?',
      distractors: ['faci', 'tu'],
    },
  ],
  shortcut: 'Question word first, then say it normally: Unde mergi? Every English tag is just "nu?" or "nu-i așa?"',
  useItToday: 'End a few sentences today with "nu?" — "E frumos, nu?" — it\'s how Romanians invite you to agree.',
}

export const canAndKnow: StructureLesson = {
  id: 's-can-know',
  part: 'Starting from English',
  title: 'Two kinds of "can", two kinds of "know"',
  tagline: 'Able (pot) or know-how (știu să). A fact (știu) or a person (cunosc).',
  shift: {
    english: 'English "can" covers being able and knowing how; "know" covers facts, people and places.',
    romanian:
      'Romanian splits them: {{pot}} (I\'m able) or {{știu să}} (I know how) — and {{știu}} (a fact) or {{cunosc}} (a person or a place).',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Can: able, or know how?',
      body: [
        '{{Pot să vin}} — I can come: nothing\'s stopping me.',
        '{{Știu să înot}} — I can swim: I know how. If it\'s a skill, it\'s {{știu să}}: {{Știi să conduci?}} — can you drive?',
        'Asking permission is {{Pot să…?}}: {{Pot să intru?}} — can I come in?',
      ],
      glosses: [
        {
          ro: 'Știu să gătesc.',
          words: [['Știu', 'I-know'], ['să', 'that'], ['gătesc', 'I-cook']],
          en: 'I can cook.',
        },
      ],
    },
    {
      kind: 'explain',
      title: 'Know: a fact, or a person?',
      body: [
        '{{știu}} is knowing a fact: {{Știu unde e.}} — I know where it is.',
        '{{cunosc}} is knowing a person or a place: {{O cunosc.}} — I know her. {{Cunosc Bucureștiul.}} — I know Bucharest.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Which one?',
      intro: 'Before you say each one, ask yourself: skill or possible? Fact or person?',
      rungs: [
        { id: 's19-01', prompt: 'I can swim.', answer: 'Știu să înot.' },
        { id: 's19-02', prompt: 'Can you drive?', answer: 'Știi să conduci?' },
        {
          id: 's19-03',
          prompt: "I can't cook.",
          answer: 'Nu știu să gătesc.',
          teachingNote: '"I don\'t know how to cook" — a skill.',
        },
        {
          id: 's19-04',
          prompt: "I can't come tomorrow.",
          answer: 'Nu pot să vin mâine.',
          acceptedAlternates: ['Nu pot veni mâine.'],
          teachingNote: 'Not a skill — just not possible, so pot.',
        },
        { id: 's19-05', prompt: 'Can I come in?', answer: 'Pot să intru?' },
        { id: 's19-06', prompt: 'I know.', answer: 'Știu.' },
        { id: 's19-07', prompt: 'I know where it is.', answer: 'Știu unde e.' },
        { id: 's19-08', prompt: 'Do you know him?', answer: 'Îl cunoști?' },
        { id: 's19-09', prompt: "I don't know anyone here.", answer: 'Nu cunosc pe nimeni aici.' },
        {
          id: 's19-10',
          prompt: 'He can already count to ten.',
          answer: 'Știe deja să numere până la zece.',
          hint: 'deja = already',
        },
        { id: 's19-11', prompt: 'Do you know Bucharest?', answer: 'Cunoști Bucureștiul?' },
        { id: 's19-12', prompt: "I didn't know that.", answer: 'Nu știam asta.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I know your mum."',
      options: [{ text: 'Știu mama ta.' }, { text: 'O cunosc pe mama ta.', correct: true }],
      explanation: 'A person, so cunosc. (The "o… pe" is the heads-up-plus-tag pattern from "Him, her and it go in front".)',
    },
    {
      kind: 'choose',
      question: '"Do you speak Romanian?"',
      options: [{ text: 'Poți vorbi română?' }, { text: 'Vorbești română?', correct: true }],
      explanation: 'For languages, Romanians just ask "do you speak…?". "Poți vorbi" would mean "are you able to speak right now?"',
    },
    {
      kind: 'assemble',
      prompt: 'Do you know how to make sarmale?',
      answer: 'Știi să faci sarmale?',
      distractors: ['poți', 'cunoști'],
    },
  ],
  shortcut: 'Skill → știu să. Possible → pot să. A fact → știu. A person or place → cunosc.',
  useItToday: 'Tell your partner one thing you can do and one you can\'t: "Știu să…", "Nu știu să…".',
}

export const verbFamilies: StructureLesson = {
  id: 's-verb-families',
  part: 'Starting from English',
  title: 'The one table worth knowing: -ez and -esc verbs',
  tagline: 'Learn the "I" form, and the rest follows.',
  shift: {
    english: 'English verbs barely change: I work, you work, he works.',
    romanian: 'Romanian verbs change for everyone — but most belong to two big families. Know the family and you can say any verb for anyone.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The -ez family',
      body: [
        'Lots of -a verbs, especially modern ones: {{lucrez}} (I work), {{lucrezi}}, {{lucrează}}, {{lucrăm}}, {{lucrați}}, {{lucrează}}.',
        'The same pattern: {{organizez}}, {{visez}} (I dream), {{lucrez}}, {{parchez}} (I park).',
      ],
    },
    {
      kind: 'explain',
      title: 'The -esc family',
      body: [
        'Most -i verbs: {{vorbesc}} (I speak), {{vorbești}}, {{vorbește}}, {{vorbim}}, {{vorbiți}}, {{vorbesc}}.',
        'The same pattern: {{citesc}}, {{iubesc}}, {{mulțumesc}}, {{gândesc}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'Which family?',
      body: [
        'You can\'t always guess, so learn every new verb in its "I" form — {{lucrez}}, {{vorbesc}} — and the family is obvious.',
        '**I** -ez / -esc · **you** -ezi / -ești · **he / she** -ează / -ește · **we** -ăm / -im · **you all** -ați / -iți · **they** -ează / -esc.',
      ],
    },
    {
      kind: 'explain',
      title: 'The irregular dozen',
      body: [
        'The most common verbs are their own thing, and worth learning whole: {{sunt}}, {{am}}, {{vreau}}, {{pot}}, {{fac}}, {{știu}}, {{merg}}, {{vin}}, {{dau}}, {{iau}}, {{stau}}, {{zic}}.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Everyone, every verb',
      rungs: [
        { id: 's45-01', prompt: 'He\'s working.', answer: 'Lucrează.' },
        { id: 's45-02', prompt: 'We\'re working.', answer: 'Lucrăm.' },
        { id: 's45-03', prompt: 'Do you all work here?', answer: 'Lucrați aici?' },
        { id: 's45-04', prompt: 'She speaks Romanian.', answer: 'Vorbește română.' },
        { id: 's45-05', prompt: 'We speak English at home.', answer: 'Vorbim engleză acasă.' },
        { id: 's45-06', prompt: '(politely) Do you speak English?', answer: 'Vorbiți engleză?' },
        { id: 's45-07', prompt: 'He\'s reading.', answer: 'Citește.' },
        { id: 's45-08', prompt: 'They love each other.', answer: 'Se iubesc.' },
        { id: 's45-09', prompt: '(from both of you) Thank you.', answer: 'Vă mulțumim.' },
        { id: 's45-10', prompt: 'He dreams a lot.', answer: 'Visează mult.' },
        { id: 's45-11', prompt: 'We\'re thinking about it.', answer: 'Ne gândim.' },
      ],
    },
    {
      kind: 'choose',
      question: '"She works a lot."',
      options: [{ text: 'Lucrez mult.' }, { text: 'Lucrează mult.', correct: true }, { text: 'Lucrezi mult.' }],
      explanation: '-ează is he / she. -ez is I, -ezi is you.',
    },
    {
      kind: 'assemble',
      prompt: 'We speak Romanian with his grandparents.',
      answer: 'Vorbim română cu bunicii lui.',
      distractors: ['vorbesc', 'vorbiți'],
    },
  ],
  shortcut: 'Learn verbs in the "I" form. -ez: -ez, -ezi, -ează, -ăm, -ați. -esc: -esc, -ești, -ește, -im, -iți.',
  useItToday: 'Pick one new verb today and say it for everyone at home: "lucrez, lucrezi, lucrează…".',
}

export const sounds: StructureLesson = {
  id: 's-sounds',
  part: 'Starting from English',
  title: 'Reading it aloud: the spelling rules',
  tagline: 'Romanian is spelled the way it sounds — once you know a dozen rules.',
  shift: {
    english: 'English spelling is chaos: though, through, tough.',
    romanian: 'Romanian spelling is almost perfectly regular. Learn about a dozen rules and you can read anything aloud — {{ce}} is "che", {{che}} is "ke".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The letters English doesn\'t have',
      body: [
        '{{ă}} — the "uh" in "about" or "sofa": {{casă}}, {{mână}}.',
        '{{â}} and {{î}} — the same sound, a tight "ih" from the back of the throat: {{pâine}}, {{în}}. (â in the middle of a word, î at the start or end.)',
        '{{ș}} — "sh": {{școală}}. {{ț}} — "ts": {{țară}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'C and G: the h works backwards',
      body: [
        '{{ce}} / {{ci}} — "che" / "chee", like church: {{cinci}}, {{ceai}}. {{che}} / {{chi}} — "ke" / "kee": {{cheie}}, {{chiar}}.',
        'The same with g: {{ge}} / {{gi}} — "je" / "jee": {{ger}}. {{ghe}} / {{ghi}} — hard "ge" / "gee": {{ghid}}.',
        'So the h does the opposite of English: it makes c and g hard.',
      ],
    },
    {
      kind: 'explain',
      title: 'The sneaky ones',
      body: [
        'An **e** at the start of {{el}}, {{e}}, {{este}}, {{eu}}, {{ea}} is said with a "y": "yel", "ye", "yeste", "yeu", "ya".',
        'A final unstressed **-i** is barely there: {{ochi}} sounds like "ok\'", {{pomi}} like "pom\'".',
        '**ea** and **oa** glide: {{seară}} is "sya-ruh", {{soare}} is "swa-re".',
      ],
    },
    {
      kind: 'explain',
      title: 'Stress',
      body: [
        'There\'s no written accent, and the stress moves: {{acasă}} (a-CA-să), {{mâine}} (MÂI-ne), {{frumos}} (fru-MOS).',
        'A rough guide: words ending in a consonant often stress the last syllable; words ending in -ă or -e the one before. Then listen and copy — that\'s what the 🔊 buttons are for.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Read these aloud',
      intro: 'Say each one from the spelling, then check against the recording.',
      rungs: [
        { id: 's52-01', prompt: '(read aloud) cinci — five', answer: 'Cinci.' },
        { id: 's52-02', prompt: '(read aloud) cheie — key', answer: 'Cheie.' },
        { id: 's52-03', prompt: '(read aloud) ceai — tea', answer: 'Ceai.' },
        { id: 's52-04', prompt: '(read aloud) chiar — really, even', answer: 'Chiar.' },
        { id: 's52-05', prompt: '(read aloud) ghid — guide', answer: 'Ghid.' },
        { id: 's52-06', prompt: '(read aloud) pâine — bread', answer: 'Pâine.' },
        { id: 's52-07', prompt: '(read aloud) este — is', answer: 'Este.' },
        { id: 's52-08', prompt: '(read aloud) țară — country', answer: 'Țară.' },
        { id: 's52-09', prompt: '(read aloud) școală — school', answer: 'Școală.' },
        { id: 's52-10', prompt: '(read aloud) ochi — eyes', answer: 'Ochi.' },
        { id: 's52-11', prompt: '(read aloud) seară — evening', answer: 'Seară.' },
        { id: 's52-12', prompt: '(read aloud) mulțumesc frumos — thank you very much', answer: 'Mulțumesc frumos.' },
      ],
    },
    {
      kind: 'choose',
      question: 'How is "chiar" said?',
      options: [{ text: '"chee-ar", like church' }, { text: '"kee-ar", like key', correct: true }],
      explanation: 'ch before i or e is a hard k — the h makes it hard, the opposite of English.',
    },
  ],
  shortcut: 'ce / ci = ch; che / chi = k. ge / gi = j; ghe / ghi = hard g. ă = "uh"; â / î = tight "ih"; ș = sh; ț = ts. el, este, eu start with "y".',
  useItToday: 'Read one Romanian sign, label or message aloud today, using the rules.',
}

export const verbPairs: StructureLesson = {
  id: 's-verb-pairs',
  part: 'Starting from English',
  title: 'Say, tell, speak; see, look, watch',
  tagline: 'English splits some verbs Romanian doesn\'t — and the other way round.',
  shift: {
    english: 'English has say / tell / speak, see / look / watch, hear / listen, bring / take, learn / teach.',
    romanian: 'Romanian divides them differently: {{spune}} is both say and tell, {{mă uit}} is look and watch, and {{învăț}} is both learn and teach.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Say, tell, speak',
      body: [
        '{{a vorbi}} — speak, talk. {{a spune}} — say **and** tell: {{Spune-mi!}} — tell me. {{Mi-a spus}} — he told me / he said to me.',
        '{{a zice}} — say, the everyday version: {{Ce zici?}} — what do you say? what do you think?',
      ],
    },
    {
      kind: 'explain',
      title: 'See, look, watch; hear, listen',
      body: [
        '{{a vedea}} — see. {{a se uita}} — look **and** watch, with {{la}}: {{Uită-te!}} — look! {{Mă uit la televizor.}} — I\'m watching TV.',
        '{{a auzi}} — hear: {{Nu te aud.}} {{a asculta}} — listen, with no "to": {{Ascult muzică.}}',
      ],
    },
    {
      kind: 'explain',
      title: 'Bring, take',
      body: [
        '{{a aduce}} — bring (towards here): {{Adu-mi cheile!}} {{a duce}} — take (away, to somewhere): {{Du-l în pat.}} — take him to bed. {{a lua}} — take, pick up, grab.',
      ],
    },
    {
      kind: 'explain',
      title: 'Learn and teach are one verb',
      body: [
        '{{a învăța}} — learn **and** teach: {{Învăț română.}} — I\'m learning Romanian. {{Mama mă învață.}} — Mum\'s teaching me.',
        '{{a cunoaște}} — know a person, and meet someone for the first time: {{Ne-am cunoscut la Cluj.}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Pick the right verb',
      rungs: [
        { id: 's54-01', prompt: 'Tell me what happened.', answer: 'Spune-mi ce s-a întâmplat.' },
        { id: 's54-02', prompt: 'What do you think?', answer: 'Ce zici?', acceptedAlternates: ['Ce crezi'] },
        { id: 's54-03', prompt: 'He didn\'t say anything.', answer: 'N-a zis nimic.' },
        { id: 's54-04', prompt: 'Look at this!', answer: 'Uită-te la asta!' },
        { id: 's54-05', prompt: 'I\'m watching a film.', answer: 'Mă uit la un film.' },
        { id: 's54-06', prompt: 'I can\'t hear you.', answer: 'Nu te aud.' },
        { id: 's54-07', prompt: 'Listen to me.', answer: 'Ascultă-mă.' },
        { id: 's54-08', prompt: 'Bring me the keys!', answer: 'Adu-mi cheile!' },
        { id: 's54-09', prompt: 'Take him to bed.', answer: 'Du-l în pat.' },
        { id: 's54-10', prompt: 'I\'m teaching him to count.', answer: 'Îl învăț să numere.' },
        { id: 's54-11', prompt: 'Who taught you Romanian?', answer: 'Cine te-a învățat română?' },
        { id: 's54-12', prompt: 'We met in Cluj.', answer: 'Ne-am cunoscut la Cluj.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Bring me some water."',
      options: [{ text: 'Du-mi apă.' }, { text: 'Adu-mi apă.', correct: true }],
      explanation: 'Towards you = a aduce. A duce is taking it away somewhere.',
    },
    {
      kind: 'assemble',
      prompt: 'Mum\'s teaching me to cook.',
      answer: 'Mama mă învață să gătesc.',
      distractors: ['îmi', 'învăț'],
    },
  ],
  shortcut: 'Say / tell = spune (or zice). Speak = vorbi. See = vedea; look / watch = mă uit (la). Hear = aud; listen = ascult. Bring = aduc; take = duc / iau. Learn / teach = învăț.',
  useItToday: 'Ask your partner\'s opinion today with "Ce zici?"',
}

export const verbPrepositions: StructureLesson = {
  id: 's-prepositions',
  part: 'Starting from English',
  title: 'The little word after the verb',
  tagline: 'Angry "on" someone, think "at", wait for — nothing.',
  shift: {
    english: 'English verbs come with fixed little words: think about, angry with, wait for, look for.',
    romanian: 'Romanian\'s are different — {{mă gândesc la}} ("think at"), {{supărat pe}} ("angry on"), {{aștept}} (no "for") — so learn each verb with its little word, as one chunk.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Different little words',
      body: [
        'think about → {{a se gândi la}} ("at") · dream of → {{a visa la}} · angry with → {{supărat pe}} ("on") · afraid of → {{frică de}}',
        'married to → {{căsătorit cu}} ("with") · in love with → {{îndrăgostit de}} ("of") · depend on → {{a depinde de}} · proud of → {{mândru de}}',
      ],
    },
    {
      kind: 'explain',
      title: 'No little word at all',
      body: [
        'wait for → {{a aștepta}}: {{Te aștept.}} · look for → {{a căuta}}: {{Caut cheile.}} · listen to → {{a asculta}} · pay for → {{a plăti}}: {{Plătesc cafeaua.}} · ask for → {{a cere}}',
      ],
    },
    {
      kind: 'explain',
      title: 'A little word where English has none',
      body: [
        'enter → {{a intra în}} · play with → {{a se juca cu}} · remember → {{a-și aminti de}}: {{Îți amintești de el?}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Verb + its little word',
      rungs: [
        { id: 's55-01', prompt: 'Don\'t think about it.', answer: 'Nu te gândi la asta.' },
        { id: 's55-02', prompt: 'Is he angry with me?', answer: 'E supărat pe mine?' },
        { id: 's55-03', prompt: 'He\'s afraid of the dark.', answer: 'Îi e frică de întuneric.' },
        { id: 's55-04', prompt: 'It depends on you.', answer: 'Depinde de tine.' },
        { id: 's55-05', prompt: 'I\'m waiting for the bus.', answer: 'Aștept autobuzul.' },
        { id: 's55-06', prompt: 'I\'m looking for my keys.', answer: 'Îmi caut cheile.' },
        { id: 's55-07', prompt: 'I\'ll pay for the coffee.', answer: 'Plătesc eu cafeaua.' },
        { id: 's55-08', prompt: 'Ask for the bill.', answer: 'Cere nota.', teachingNote: 'Nota — the bill at a restaurant.' },
        { id: 's55-09', prompt: 'Do you remember him?', answer: 'Îți amintești de el?' },
        { id: 's55-10', prompt: 'He\'s playing with the dog.', answer: 'Se joacă cu câinele.' },
        { id: 's55-11', prompt: 'I dream of a house by the sea.', answer: 'Visez la o casă la mare.' },
        { id: 's55-12', prompt: 'Grandma is proud of him.', answer: 'Bunica e mândră de el.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I\'m waiting for you."',
      options: [{ text: 'Aștept pentru tine.' }, { text: 'Te aștept.', correct: true }],
      explanation: 'No "for" — you just "await" someone: te aștept.',
    },
    {
      kind: 'assemble',
      prompt: 'She\'s angry with her brother.',
      answer: 'E supărată pe fratele ei.',
      distractors: ['cu', 'de'],
    },
  ],
  shortcut: 'Learn verbs with their little word: mă gândesc la, supărat pe, frică de, depinde de. Nothing at all for wait, look for, listen, pay, ask for.',
  useItToday: 'Next time you\'re waiting for something, say it without a "for": "Aștept…".',
}

export const learnerTools: StructureLesson = {
  id: 's-learner-tools',
  part: 'Starting from English',
  title: 'When you\'re stuck: staying in Romanian',
  tagline: 'Poți să repeți? Cum se zice…? Am zis bine?',
  shift: {
    english: 'As a learner, half of any real conversation is handling what you didn\'t catch or don\'t know — and the easy escape is switching to English.',
    romanian: 'A dozen phrases keep you in Romanian instead: {{Poți să repeți?}}, {{Ce înseamnă asta?}}, {{Cum se zice?}}, {{Am zis bine?}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'When you didn\'t catch it',
      body: [
        '{{Poftim?}} — pardon? · {{Poți să repeți?}} — can you say that again? · {{Mai rar, te rog.}} — more slowly, please · {{N-am înțeles.}} — I didn\'t understand · {{Adică?}} — meaning? what do you mean?',
      ],
    },
    {
      kind: 'explain',
      title: 'When you don\'t know a word',
      body: [
        '{{Ce înseamnă asta?}} — what does that mean? · {{Cum se zice în română?}} — how do you say it in Romanian? · {{Cum se numește asta?}} — what\'s this called?',
        'Describe around the gap: {{E un fel de…}} — it\'s a kind of… · {{chestia aia cu care…}} — that thing you… (plus a gesture).',
      ],
    },
    {
      kind: 'explain',
      title: 'Checking, and asking to be corrected',
      body: [
        '{{Am înțeles bine?}} — did I get that right? · {{Vrei să zici că…?}} — you mean that…?',
        '{{Corectează-mă, te rog.}} — please correct me · {{Am zis bine?}} — did I say it right? · {{Se zice așa?}} — is that how you say it? Asking this is the fastest way to improve with a Romanian partner.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Stay in Romanian',
      rungs: [
        { id: 's74-01', prompt: 'Can you say that again?', answer: 'Poți să repeți?' },
        { id: 's74-02', prompt: 'More slowly, please.', answer: 'Mai rar, te rog.' },
        { id: 's74-03', prompt: 'I didn\'t understand.', answer: 'N-am înțeles.' },
        { id: 's74-04', prompt: 'What do you mean?', answer: 'Adică?' },
        { id: 's74-05', prompt: 'What does that mean?', answer: 'Ce înseamnă asta?' },
        { id: 's74-06', prompt: 'How do you say it in Romanian?', answer: 'Cum se zice în română?', acceptedAlternates: ['Cum se spune în română'] },
        { id: 's74-07', prompt: 'What\'s this called?', answer: 'Cum se numește asta?' },
        { id: 's74-08', prompt: 'Did I get that right?', answer: 'Am înțeles bine?' },
        { id: 's74-09', prompt: 'You mean he\'s not coming?', answer: 'Vrei să zici că nu vine?' },
        { id: 's74-10', prompt: 'It\'s a kind of cake.', answer: 'E un fel de prăjitură.' },
        { id: 's74-11', prompt: 'Please correct me.', answer: 'Corectează-mă, te rog.' },
        { id: 's74-12', prompt: 'Did I say it right?', answer: 'Am zis bine?' },
        { id: 's74-13', prompt: 'Is that how you say it?', answer: 'Se zice așa?' },
      ],
    },
    {
      kind: 'choose',
      question: 'You didn\'t catch what your partner\'s dad said. Politely:',
      options: [{ text: 'Ce?' }, { text: 'Poftim?', correct: true }],
      explanation: 'Ce? on its own is blunt. Poftim? is the polite "pardon?".',
    },
    {
      kind: 'assemble',
      prompt: 'What\'s the word for this in Romanian?',
      answer: 'Cum se zice la asta în română?',
      distractors: ['ce', 'spune'],
    },
  ],
  shortcut: 'Poftim? · Poți să repeți? · Mai rar · Ce înseamnă…? · Cum se zice…? · Am zis bine? — stay in Romanian even when you\'re stuck.',
  useItToday: 'Next time you don\'t understand your partner, ask in Romanian instead of switching to English.',
}

export const mustAndNeed: StructureLesson = {
  id: 's-obligation',
  part: 'Starting from English',
  title: 'Must, need, allowed — and the "mustn\'t" trap',
  tagline: 'Nu e nevoie să vii — you don\'t have to come.',
  shift: {
    english: 'English keeps "mustn\'t" (forbidden) and "don\'t have to" (optional) clearly apart.',
    romanian: 'Romanian {{nu trebuie să}} can mean either, and often sounds like "mustn\'t". For "no need", say {{nu e nevoie să}}. And for toddlers: {{n-ai voie!}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Must, need',
      body: [
        '{{trebuie să}} — must, have to · {{ar trebui să}} — should · {{am nevoie de}} + a thing — I need · {{îmi trebuie}} — I need (colloquial): {{Îmi trebuie un pix.}}',
      ],
    },
    {
      kind: 'explain',
      title: 'The trap',
      body: [
        '{{Nu trebuie să spui.}} — context decides, but it often means "you mustn\'t tell".',
        'To make it clearly optional, say {{Nu e nevoie să…}} — there\'s no need to: {{Nu e nevoie să vii.}} — you don\'t have to come. Or {{Nu e obligatoriu.}} — it\'s not compulsory.',
      ],
      glosses: [
        { ro: 'Nu e nevoie să vii.', words: [['Nu e', 'there-isn\'t'], ['nevoie', 'need'], ['să vii', 'that you-come']], en: 'You don\'t have to come.' },
      ],
    },
    {
      kind: 'explain',
      title: 'Allowed',
      body: [
        '{{Ai voie să…}} — you\'re allowed to ("you have permission"): {{Ai voie să mănânci o bomboană.}}',
        '{{N-ai voie!}} — you\'re not allowed! Very useful with a toddler.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Must, need, may',
      rungs: [
        { id: 's75-01', prompt: 'We have to leave at eight.', answer: 'Trebuie să plecăm la opt.' },
        { id: 's75-02', prompt: 'You don\'t have to come.', answer: 'Nu e nevoie să vii.' },
        { id: 's75-03', prompt: 'There\'s no need.', answer: 'Nu e nevoie.' },
        { id: 's75-04', prompt: 'Thanks, but there\'s no need.', answer: 'Mersi, dar nu e nevoie.' },
        { id: 's75-05', prompt: 'You mustn\'t tell him.', answer: 'Nu trebuie să-i spui.' },
        { id: 's75-06', prompt: 'It\'s not compulsory.', answer: 'Nu e obligatoriu.' },
        { id: 's75-07', prompt: 'I need a break.', answer: 'Am nevoie de o pauză.' },
        { id: 's75-08', prompt: 'I need a pen.', answer: 'Îmi trebuie un pix.' },
        { id: 's75-09', prompt: 'Do I need to bring anything?', answer: 'Trebuie să aduc ceva?' },
        { id: 's75-10', prompt: 'You\'re allowed to have one sweet.', answer: 'Ai voie să mănânci o bomboană.' },
        { id: 's75-11', prompt: 'You\'re not allowed!', answer: 'N-ai voie!' },
        { id: 's75-12', prompt: 'Are we allowed to park here?', answer: 'Avem voie să parcăm aici?' },
      ],
    },
    {
      kind: 'choose',
      question: 'Telling a guest it\'s optional: "You don\'t have to take your shoes off."',
      options: [{ text: 'Nu trebuie să te descalți.' }, { text: 'Nu e nevoie să te descalți.', correct: true }],
      explanation: 'Nu trebuie can sound like "you mustn\'t". Nu e nevoie makes it clearly optional.',
    },
    {
      kind: 'assemble',
      prompt: 'You\'re not allowed to touch that.',
      answer: 'N-ai voie să atingi asta.',
      distractors: ['trebuie', 'nu'],
    },
  ],
  shortcut: 'Must = trebuie să. No need = nu e nevoie să (clearer than nu trebuie). Need a thing = am nevoie de / îmi trebuie. Allowed = ai voie să; n-ai voie!',
  useItToday: 'Use "N-ai voie!" and "Ai voie să…" with your son today.',
}
