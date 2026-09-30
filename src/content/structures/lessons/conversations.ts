import type { StructureLesson } from '../types'

export const convDinner: StructureLesson = {
  id: 's-conv-dinner',
  part: 'Conversations',
  title: 'Dinner at the grandparents\'',
  tagline: 'Poftă bună! Mai vrei? Nu mai pot!',
  shift: {
    english: 'An English guest says "no thanks" once, and that\'s that.',
    romanian: 'A Romanian host will offer again, and again. {{Nu mai pot}} ("I can\'t any more") and praise for the cook get you through it gracefully.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Before you start',
      body: [
        'Expect food to be offered several times — saying no once is just part of the dance. {{Nu mai pot, mulțumesc!}} and {{Doar puțin}} are your friends.',
        'Praise the food, and the cook: {{Miroase minunat!}}, {{Aveți mâini de aur!}}',
        'Say each of your lines out loud before revealing it. Their lines play in Romanian first — listen, then tap for the English only if you need it.',
      ],
    },
    {
      kind: 'dialogue',
      title: 'Sitting down',
      setting: 'Your partner\'s mum brings the soup to the table.',
      lines: [
        { who: 'them', ro: 'Poftiți la masă! Ce vrei, ciorbă sau supă?', en: 'Come to the table! What would you like, ciorbă or soup?' },
        { who: 'you', ro: 'Ciorbă, vă rog. Miroase minunat!', en: 'Ciorbă, please. It smells wonderful!' },
        { who: 'them', ro: 'Vrei și smântână? Și ardei iute?', en: 'Do you want sour cream too? And a hot pepper?' },
        { who: 'you', ro: 'Da, cu smântână, dar fără ardei. Mersi!', en: 'Yes, with sour cream, but no pepper. Thanks!' },
        { who: 'them', ro: 'Poftă bună!', en: 'Enjoy your meal!' },
        { who: 'you', ro: 'Mulțumesc, la fel!', en: 'Thank you — and you!' },
      ],
    },
    {
      kind: 'dialogue',
      title: 'Seconds, and thirds',
      setting: 'The plates are nearly empty.',
      lines: [
        { who: 'them', ro: 'Mai vrei o sarma? Mai sunt multe!', en: 'Want another sarma? There are plenty left!' },
        { who: 'you', ro: 'Sunt foarte bune, dar nu mai pot.', en: 'They\'re really good, but I can\'t manage any more.' },
        { who: 'them', ro: 'Hai, încă una, că e mică!', en: 'Come on, one more — it\'s a small one!' },
        { who: 'you', ro: 'Bine, dar doar una. Aveți mâini de aur!', en: 'OK, but just one. You\'ve got golden hands!' },
        { who: 'them', ro: 'Mersi, dragă. Și desertul? Am făcut cozonac.', en: 'Thanks, dear. And dessert? I made cozonac.' },
        { who: 'you', ro: 'Poate mai târziu, cu o cafea.', en: 'Maybe later, with a coffee.' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Your lines, on their own',
      intro: 'Now just your side — so they come out without the prompt of the conversation.',
      rungs: [
        { id: 's117-01', prompt: 'Ciorbă, please. It smells wonderful!', answer: 'Ciorbă, vă rog. Miroase minunat!' },
        { id: 's117-02', prompt: 'Yes, with sour cream, but no pepper. Thanks!', answer: 'Da, cu smântână, dar fără ardei. Mersi!' },
        { id: 's117-03', prompt: 'Thank you — and you!', answer: 'Mulțumesc, la fel!' },
        { id: 's117-04', prompt: 'They\'re really good, but I can\'t manage any more.', answer: 'Sunt foarte bune, dar nu mai pot.' },
        { id: 's117-05', prompt: 'OK, but just one. You\'ve got golden hands!', answer: 'Bine, dar doar una. Aveți mâini de aur!' },
        { id: 's117-06', prompt: 'Maybe later, with a coffee.', answer: 'Poate mai târziu, cu o cafea.' },
      ],
    },
  ],
  shortcut: 'Nu mai pot, mulțumesc · Doar puțin · Miroase minunat! · Aveți mâini de aur! · Poftă bună — mulțumesc, la fel!',
  useItToday: 'At the next family meal, get through the whole "more?" routine in Romanian.',
}

export const convPhone: StructureLesson = {
  id: 's-conv-phone',
  part: 'Conversations',
  title: 'A call from your partner\'s mum',
  tagline: 'Alo? Ce face cel mic? Îi spun să vă sune.',
  shift: {
    english: 'On the phone there\'s no face to read and no pointing — it\'s the hardest place to speak a language.',
    romanian: 'So rehearse the script: the greeting, the news about him, passing a message on, and the goodbye — {{Pupici!}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Before you start',
      body: [
        'Use the polite -ți form with your partner\'s parents until they offer tu: {{Dumneavoastră?}}, {{Vă sunăm.}}',
        'Have one piece of news about him ready — it\'s always the first question.',
        'Say each of your lines out loud before revealing it. Their lines play in Romanian first — listen, then tap for the English only if you need it.',
      ],
    },
    {
      kind: 'dialogue',
      title: 'She rings',
      setting: 'Your partner\'s in the shower when their mum calls you.',
      lines: [
        { who: 'them', ro: 'Alo? Bună, dragă! Ce faceți?', en: 'Hello? Hi, dear! How are you all?' },
        { who: 'you', ro: 'Bună ziua! Bine, mulțumesc. Dumneavoastră?', en: 'Hello! Fine, thanks. And you?' },
        { who: 'them', ro: 'Bine, bine. Ce face cel mic?', en: 'Fine, fine. How\'s the little one?' },
        { who: 'you', ro: 'E bine, doarme acum. Azi a fost la parc.', en: 'He\'s fine, he\'s asleep now. He went to the park today.' },
        { who: 'them', ro: 'Vai, ce drăguț! Mi-e dor de el.', en: 'Oh, how sweet! I miss him.' },
        { who: 'you', ro: 'Și lui îi e dor de dumneavoastră.', en: 'He misses you too.' },
      ],
    },
    {
      kind: 'dialogue',
      title: 'Passing a message on',
      setting: 'The call carries on.',
      lines: [
        { who: 'them', ro: 'Poți să-i spui să mă sune mai târziu?', en: 'Can you tell them to ring me later?' },
        { who: 'you', ro: 'Sigur, îi spun. Acum e la duș.', en: 'Of course, I\'ll tell them. They\'re in the shower.' },
        { who: 'them', ro: 'Și când veniți la noi?', en: 'And when are you coming to see us?' },
        { who: 'you', ro: 'Sperăm în august. O să vă sunăm să stabilim.', en: 'Hopefully in August. We\'ll call you to arrange it.' },
        { who: 'them', ro: 'Bine, dragă. Pupici!', en: 'OK, dear. Kisses!' },
        { who: 'you', ro: 'Pupici! O zi bună!', en: 'Kisses! Have a good day!' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Your lines, on their own',
      intro: 'Now just your side — so they come out without the prompt of the conversation.',
      rungs: [
        { id: 's118-01', prompt: 'Hello! Fine, thanks. And you?', answer: 'Bună ziua! Bine, mulțumesc. Dumneavoastră?' },
        { id: 's118-02', prompt: 'He\'s fine, he\'s asleep now. He went to the park today.', answer: 'E bine, doarme acum. Azi a fost la parc.' },
        { id: 's118-03', prompt: 'He misses you too.', answer: 'Și lui îi e dor de dumneavoastră.' },
        { id: 's118-04', prompt: 'Of course, I\'ll tell them. They\'re in the shower.', answer: 'Sigur, îi spun. Acum e la duș.' },
        { id: 's118-05', prompt: 'Hopefully in August. We\'ll call you to arrange it.', answer: 'Sperăm în august. O să vă sunăm să stabilim.' },
        { id: 's118-06', prompt: 'Kisses! Have a good day!', answer: 'Pupici! O zi bună!' },
      ],
    },
  ],
  shortcut: 'Alo? · Dumneavoastră? · Ce face cel mic? — E bine… · Îi spun să vă sune · Pupici!',
  useItToday: 'Next time your partner\'s parents call, answer and do the first minute in Romanian.',
}

export const convPharmacy: StructureLesson = {
  id: 's-conv-pharmacy',
  part: 'Conversations',
  title: 'At the pharmacy',
  tagline: 'Aveți ceva pentru febră? De câte ori pe zi?',
  shift: {
    english: 'In a pharmacy you need to be understood exactly — and it\'s usually when you\'re tired and worried.',
    romanian: 'The exchange is always the same shape: what for, for whom, how much, how often, before or after meals. Rehearse it once and it\'s yours.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Before you start',
      body: [
        'Say who it\'s for up front: {{pentru un copil de doi ani}} — for a two-year-old.',
        'Numbers matter here: {{doisprezece kilograme}}, {{de trei ori pe zi}}.',
        'Say each of your lines out loud before revealing it. Their lines play in Romanian first — listen, then tap for the English only if you need it.',
      ],
    },
    {
      kind: 'dialogue',
      title: 'At the counter',
      setting: 'Your son has a temperature. You go to the pharmacy.',
      lines: [
        { who: 'them', ro: 'Bună ziua, cu ce vă pot ajuta?', en: 'Hello, how can I help you?' },
        { who: 'you', ro: 'Bună ziua. Aveți ceva pentru febră, pentru un copil de doi ani?', en: 'Hello. Have you got something for a temperature, for a two-year-old?' },
        { who: 'them', ro: 'Da, avem sirop. Cât cântărește?', en: 'Yes, we have a syrup. How much does he weigh?' },
        { who: 'you', ro: 'Cam doisprezece kilograme.', en: 'About twelve kilos.' },
        { who: 'them', ro: 'Atunci cinci mililitri, de trei ori pe zi.', en: 'Then five millilitres, three times a day.' },
        { who: 'you', ro: 'Înainte sau după masă?', en: 'Before or after meals?' },
        { who: 'them', ro: 'După masă. Altceva?', en: 'After meals. Anything else?' },
        { who: 'you', ro: 'Nu, asta e tot. Pot să plătesc cu cardul?', en: 'No, that\'s all. Can I pay by card?' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Your lines, on their own',
      intro: 'Now just your side — so they come out without the prompt of the conversation.',
      rungs: [
        { id: 's119-01', prompt: 'Hello. Have you got something for a temperature, for a two-year-old?', answer: 'Bună ziua. Aveți ceva pentru febră, pentru un copil de doi ani?' },
        { id: 's119-02', prompt: 'About twelve kilos.', answer: 'Cam doisprezece kilograme.' },
        { id: 's119-03', prompt: 'Before or after meals?', answer: 'Înainte sau după masă?' },
        { id: 's119-04', prompt: 'No, that\'s all. Can I pay by card?', answer: 'Nu, asta e tot. Pot să plătesc cu cardul?' },
      ],
    },
  ],
  shortcut: 'Aveți ceva pentru…? · pentru un copil de doi ani · Cât cântărește? · de trei ori pe zi · înainte sau după masă?',
  useItToday: 'Save the first line of this conversation in your phone notes, just in case.',
}

export const convMarket: StructureLesson = {
  id: 's-conv-market',
  part: 'Conversations',
  title: 'At the market',
  tagline: 'Cât costă? Îmi dați un kilogram? Păstrați restul.',
  shift: {
    english: 'A market stall moves fast — prices, weights and small talk all at once.',
    romanian: 'The stallholder will do most of the talking; you need the question, the amount, and the thank-you. Notice {{face}} — "it comes to".',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Before you start',
      body: [
        '{{Face doisprezece lei.}} — that comes to twelve lei ("it makes").',
        '{{Sunt de la noi}} — "they\'re from us" — home-grown, a point of pride.',
        'Say each of your lines out loud before revealing it. Their lines play in Romanian first — listen, then tap for the English only if you need it.',
      ],
    },
    {
      kind: 'dialogue',
      title: 'At the stall',
      setting: 'It\'s Saturday morning at the piață.',
      lines: [
        { who: 'them', ro: 'Poftiți, ce doriți?', en: 'Go ahead — what would you like?' },
        { who: 'you', ro: 'Cât costă roșiile?', en: 'How much are the tomatoes?' },
        { who: 'them', ro: 'Opt lei kilogramul. Sunt de la noi, din grădină.', en: 'Eight lei a kilo. They\'re ours, from the garden.' },
        { who: 'you', ro: 'Arată foarte bine. Îmi dați un kilogram?', en: 'They look really good. Can I have a kilo?' },
        { who: 'them', ro: 'Imediat. Mai doriți ceva?', en: 'Right away. Anything else?' },
        { who: 'you', ro: 'Și jumătate de kilogram de ardei, vă rog.', en: 'And half a kilo of peppers, please.' },
        { who: 'them', ro: 'Asta e tot? Face doisprezece lei.', en: 'Is that all? That comes to twelve lei.' },
        { who: 'you', ro: 'Poftim. Păstrați restul.', en: 'Here you are. Keep the change.' },
        { who: 'them', ro: 'Mulțumesc frumos! O zi bună!', en: 'Thank you very much! Have a good day!' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Your lines, on their own',
      intro: 'Now just your side — so they come out without the prompt of the conversation.',
      rungs: [
        { id: 's120-01', prompt: 'How much are the tomatoes?', answer: 'Cât costă roșiile?' },
        { id: 's120-02', prompt: 'They look really good. Can I have a kilo?', answer: 'Arată foarte bine. Îmi dați un kilogram?' },
        { id: 's120-03', prompt: 'And half a kilo of peppers, please.', answer: 'Și jumătate de kilogram de ardei, vă rog.' },
        { id: 's120-04', prompt: 'Here you are. Keep the change.', answer: 'Poftim. Păstrați restul.' },
      ],
    },
  ],
  shortcut: 'Cât costă…? · Îmi dați un kilogram? · Mai doriți ceva? · Face… lei · Păstrați restul.',
  useItToday: 'Do your next market trip — or even the supermarket till — in Romanian.',
}

export const convWeekend: StructureLesson = {
  id: 's-conv-weekend',
  part: 'Conversations',
  title: 'Planning the weekend together',
  tagline: 'Ce facem sâmbătă? Am putea… Rămâne așa.',
  shift: {
    english: 'Planning together means suggesting, objecting, agreeing — the full back-and-forth.',
    romanian: 'This one\'s between you and your partner: {{am putea}} to suggest, {{ai dreptate}} to concede, {{pe la zece}} for "around ten", and {{Rămâne așa}} to close it.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Before you start',
      body: [
        '{{Am putea să…}} — we could… — is the softest way to suggest something.',
        '{{pe la zece}} — around ten ("by at ten").',
        'Say each of your lines out loud before revealing it. Their lines play in Romanian first — listen, then tap for the English only if you need it.',
      ],
    },
    {
      kind: 'dialogue',
      title: 'What shall we do?',
      setting: 'Friday evening, the little one\'s asleep.',
      lines: [
        { who: 'them', ro: 'Ce facem sâmbătă?', en: 'What are we doing on Saturday?' },
        { who: 'you', ro: 'Nu știu. Dacă e frumos, am putea să mergem la munte.', en: 'I don\'t know. If it\'s nice, we could go to the mountains.' },
        { who: 'them', ro: 'E cam departe cu cel mic. Două ore cu mașina.', en: 'It\'s a bit far with the little one. Two hours in the car.' },
        { who: 'you', ro: 'Ai dreptate. Atunci hai să mergem la lac.', en: 'You\'re right. Let\'s go to the lake, then.' },
        { who: 'them', ro: 'Bună idee! Luăm și ceva de mâncare?', en: 'Good idea! Shall we take something to eat?' },
        { who: 'you', ro: 'Da, facem niște sandvișuri. Plecăm pe la zece?', en: 'Yes, let\'s make some sandwiches. Shall we leave around ten?' },
        { who: 'them', ro: 'Rămâne așa.', en: 'That\'s settled.' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Your lines, on their own',
      intro: 'Now just your side — so they come out without the prompt of the conversation.',
      rungs: [
        { id: 's121-01', prompt: 'I don\'t know. If it\'s nice, we could go to the mountains.', answer: 'Nu știu. Dacă e frumos, am putea să mergem la munte.' },
        { id: 's121-02', prompt: 'You\'re right. Let\'s go to the lake, then.', answer: 'Ai dreptate. Atunci hai să mergem la lac.' },
        { id: 's121-03', prompt: 'Yes, let\'s make some sandwiches. Shall we leave around ten?', answer: 'Da, facem niște sandvișuri. Plecăm pe la zece?' },
      ],
    },
  ],
  shortcut: 'Ce facem…? · Am putea să… · E cam departe · Ai dreptate · Plecăm pe la zece? · Rămâne așa.',
  useItToday: 'Plan this weekend with your partner in Romanian, from "Ce facem?" to "Rămâne așa".',
}

export const convHisDay: StructureLesson = {
  id: 's-conv-his-day',
  part: 'Conversations',
  title: 'Telling your partner about his day',
  tagline: 'A fost o zi bună. Și știi ce?',
  shift: {
    english: 'At the end of the day you\'ve got a whole story to tell — and it\'s the easiest Romanian conversation you\'ll have every day.',
    romanian: 'It uses everything: the past (events), the scenery form, time words ({{dimineața}}, {{la prânz}}), and storytelling glue ({{Și știi ce?}}).',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Before you start',
      body: [
        'Order it with time words: {{dimineața}}, {{la prânz}}, {{după-amiaza}}, {{seara}}.',
        'Save the best bit for the end: {{Și știi ce?}}',
        'Say each of your lines out loud before revealing it. Their lines play in Romanian first — listen, then tap for the English only if you need it.',
      ],
    },
    {
      kind: 'dialogue',
      title: 'How was his day?',
      setting: 'Your partner gets home from work.',
      lines: [
        { who: 'them', ro: 'Cum a fost azi? Ce a făcut cel mic?', en: 'How was today? What did the little one do?' },
        { who: 'you', ro: 'A fost o zi bună. Dimineața ne-am jucat în parc.', en: 'It was a good day. In the morning we played in the park.' },
        { who: 'them', ro: 'A mâncat bine?', en: 'Did he eat well?' },
        { who: 'you', ro: 'La prânz a mâncat tot, dar seara n-a vrut supă.', en: 'At lunch he ate everything, but this evening he didn\'t want soup.' },
        { who: 'them', ro: 'Și a dormit?', en: 'And did he nap?' },
        { who: 'you', ro: 'Da, două ore. Și știi ce? A zis un cuvânt nou!', en: 'Yes, two hours. And you know what? He said a new word!' },
        { who: 'them', ro: 'Serios? Ce a zis?', en: 'Really? What did he say?' },
        { who: 'you', ro: 'A zis minge! Ce repede crește!', en: 'He said \'ball\'! He\'s growing up so fast!' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Your lines, on their own',
      intro: 'Now just your side — so they come out without the prompt of the conversation.',
      rungs: [
        { id: 's122-01', prompt: 'It was a good day. In the morning we played in the park.', answer: 'A fost o zi bună. Dimineața ne-am jucat în parc.' },
        { id: 's122-02', prompt: 'At lunch he ate everything, but this evening he didn\'t want soup.', answer: 'La prânz a mâncat tot, dar seara n-a vrut supă.' },
        { id: 's122-03', prompt: 'Yes, two hours. And you know what? He said a new word!', answer: 'Da, două ore. Și știi ce? A zis un cuvânt nou!' },
        { id: 's122-04', prompt: 'He said \'ball\'! He\'s growing up so fast!', answer: 'A zis minge! Ce repede crește!' },
      ],
    },
  ],
  shortcut: 'A fost o zi bună · Dimineața… · La prânz a mâncat… · A dormit două ore · Și știi ce? · Ce repede crește!',
  useItToday: 'Tell your partner about his day in Romanian every evening this week.',
}

export const convMakeUp: StructureLesson = {
  id: 's-conv-make-up',
  part: 'Conversations',
  title: 'A small disagreement — and making up',
  tagline: 'Iar ai uitat? Îmi pare rău. Facem pace?',
  shift: {
    english: 'Small squabbles happen fast, in whatever language is quickest — usually English.',
    romanian: 'Rehearse one in Romanian, including the best part: the apology and {{Facem pace?}}',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Before you start',
      body: [
        '{{Iar?}} at the start means "again?" — the telltale sign of an irritation.',
        'Own it quickly: {{Ai dreptate}}, {{Îmi pare rău}}.',
        'Say each of your lines out loud before revealing it. Their lines play in Romanian first — listen, then tap for the English only if you need it.',
      ],
    },
    {
      kind: 'dialogue',
      title: 'The bread',
      setting: 'You were supposed to pick up bread on the way home.',
      lines: [
        { who: 'them', ro: 'Iar ai uitat să cumperi pâine?', en: 'You forgot to buy bread again?' },
        { who: 'you', ro: 'Of, da. Îmi pare rău, am avut o zi grea.', en: 'Oh, yes. I\'m sorry, I had a hard day.' },
        { who: 'them', ro: 'Mereu uiți ceva.', en: 'You always forget something.' },
        { who: 'you', ro: 'Ai dreptate, nu e corect. Mă duc acum.', en: 'You\'re right, it\'s not fair. I\'ll go now.' },
        { who: 'them', ro: 'Lasă, merg eu mai târziu. Scuze că m-am enervat.', en: 'Leave it, I\'ll go later. Sorry I snapped.' },
        { who: 'you', ro: 'Nu-i nimic. Facem pace?', en: 'It\'s nothing. Friends again?' },
        { who: 'them', ro: 'Facem pace.', en: 'Friends again.' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Your lines, on their own',
      intro: 'Now just your side — so they come out without the prompt of the conversation.',
      rungs: [
        { id: 's123-01', prompt: 'Oh, yes. I\'m sorry, I had a hard day.', answer: 'Of, da. Îmi pare rău, am avut o zi grea.' },
        { id: 's123-02', prompt: 'You\'re right, it\'s not fair. I\'ll go now.', answer: 'Ai dreptate, nu e corect. Mă duc acum.' },
        { id: 's123-03', prompt: 'It\'s nothing. Friends again?', answer: 'Nu-i nimic. Facem pace?' },
      ],
    },
  ],
  shortcut: 'Îmi pare rău, am avut o zi grea · Ai dreptate · Mă duc acum · Nu-i nimic · Facem pace?',
  useItToday: 'Next time something small goes wrong, apologise in Romanian.',
}

export const convCarHire: StructureLesson = {
  id: 's-conv-car-hire',
  part: 'Conversations',
  title: 'At the car-hire desk',
  tagline: 'Aveți o rezervare? Asigurarea e inclusă?',
  shift: {
    english: 'You land tired, with a toddler, and the first conversation is paperwork.',
    romanian: 'It\'s the same every time: booking, licence, deposit, insurance, child seat, where to return it. Rehearse it on the plane.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Before you start',
      body: [
        '{{permisul de conducere}} — driving licence · {{garanție}} — deposit · {{asigurare completă}} — full insurance.',
        '{{Tot aici}} — "right here, the same place".',
        'Say each of your lines out loud before revealing it. Their lines play in Romanian first — listen, then tap for the English only if you need it.',
      ],
    },
    {
      kind: 'dialogue',
      title: 'At the desk',
      setting: 'Arrivals hall, Otopeni airport.',
      lines: [
        { who: 'them', ro: 'Bună ziua. Aveți o rezervare?', en: 'Hello. Do you have a booking?' },
        { who: 'you', ro: 'Da, am rezervat online.', en: 'Yes, I booked online.' },
        { who: 'them', ro: 'Permisul de conducere, vă rog. Și un card pentru garanție.', en: 'Your driving licence, please. And a card for the deposit.' },
        { who: 'you', ro: 'Poftim. Asigurarea e inclusă?', en: 'Here you are. Is insurance included?' },
        { who: 'them', ro: 'Cea de bază, da. Vreți și asigurare completă?', en: 'The basic one, yes. Would you like full cover too?' },
        { who: 'you', ro: 'Nu, mulțumesc. Avem nevoie și de un scaun pentru copil.', en: 'No, thanks. We also need a child seat.' },
        { who: 'them', ro: 'Nicio problemă. Mașina are rovinietă.', en: 'No problem. The car has a vignette.' },
        { who: 'you', ro: 'Perfect. Unde returnăm mașina?', en: 'Perfect. Where do we return the car?' },
        { who: 'them', ro: 'Tot aici, la aeroport. Drum bun!', en: 'Right here, at the airport. Have a good trip!' },
      ],
    },
    {
      kind: 'ladder',
      title: 'Your lines, on their own',
      intro: 'Now just your side — so they come out without the prompt of the conversation.',
      rungs: [
        { id: 's124-01', prompt: 'Yes, I booked online.', answer: 'Da, am rezervat online.' },
        { id: 's124-02', prompt: 'Here you are. Is insurance included?', answer: 'Poftim. Asigurarea e inclusă?' },
        { id: 's124-03', prompt: 'No, thanks. We also need a child seat.', answer: 'Nu, mulțumesc. Avem nevoie și de un scaun pentru copil.' },
        { id: 's124-04', prompt: 'Perfect. Where do we return the car?', answer: 'Perfect. Unde returnăm mașina?' },
      ],
    },
  ],
  shortcut: 'Am rezervat online · Asigurarea e inclusă? · Avem nevoie de un scaun pentru copil · Unde returnăm mașina?',
  useItToday: 'Rehearse this one on the plane before your next trip.',
}
