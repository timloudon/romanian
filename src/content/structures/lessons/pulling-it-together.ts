import type { StructureLesson } from '../types'

export const allOfMai: StructureLesson = {
  id: 's-mai',
  part: 'Pulling it together',
  title: 'All the jobs of mai',
  tagline: 'More, another, any more, before, still, else — one little word.',
  shift: {
    english: 'You\'ve met mai in half a dozen lessons, doing a different English job each time.',
    romanian: 'Here they all are side by side — {{mai mare}}, {{mai vrei?}}, {{nu mai}}, {{am mai fost}}, {{mai e?}} — so you can read it from its neighbours.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Six jobs',
      body: [
        '1. **-er / more**: {{mai mare}} — bigger.',
        '2. **more, another**: {{Mai vrei?}} — want some more?',
        '3. **not any more** (with nu): {{Nu mai plânge.}}',
        '4. **before, again** (between "have" and "done"): {{Am mai fost aici.}}',
        '5. **still, left, longer**: {{Mai e lapte?}} {{Mai stai puțin!}}',
        '6. **else, lately**: {{Mai e cineva?}} — anyone else? {{Ce mai faci?}} — how are you doing (these days)?',
      ],
    },
    {
      kind: 'explain',
      title: 'How to tell which',
      body: [
        'Look at its neighbours. Before a describing word: comparing. After nu: any more. Between "have" and "done": before / again. At the start of a question: more, still, else.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Mai, six ways',
      rungs: [
        { id: 's79-01', prompt: 'It\'s cheaper.', answer: 'E mai ieftin.' },
        { id: 's79-02', prompt: 'Want some more soup?', answer: 'Mai vrei supă?' },
        { id: 's79-03', prompt: 'It doesn\'t hurt any more.', answer: 'Nu mai doare.' },
        { id: 's79-04', prompt: 'I\'m not going there any more.', answer: 'Nu mai merg acolo.' },
        { id: 's79-05', prompt: 'We\'ve seen this film before.', answer: 'Am mai văzut filmul ăsta.' },
        { id: 's79-06', prompt: 'Is there any bread left?', answer: 'Mai e pâine?' },
        { id: 's79-07', prompt: 'Anyone else?', answer: 'Mai e cineva?' },
        { id: 's79-08', prompt: 'How are you doing these days?', answer: 'Ce mai faci?' },
        { id: 's79-09', prompt: 'Say it again!', answer: 'Mai zi o dată!' },
        { id: 's79-10', prompt: 'Do you want anything else?', answer: 'Mai vrei ceva?' },
      ],
    },
    {
      kind: 'choose',
      question: '"Nu mai vreau" means…',
      options: [{ text: 'I want more.' }, { text: 'I don\'t want any more.', correct: true }, { text: 'I wanted before.' }],
      explanation: 'Mai after nu = any more.',
    },
    {
      kind: 'assemble',
      prompt: 'We haven\'t got any more time.',
      answer: 'Nu mai avem timp.',
      distractors: ['încă', 'deja'],
    },
  ],
  shortcut: 'Mai = -er / more · another · (nu mai) any more · (ai mai fost) before, again · still, left · else. Read it from its neighbours.',
  useItToday: 'Count how many times you hear "mai" in one Romanian conversation today.',
}

export const allOfDe: StructureLesson = {
  id: 's-de',
  part: 'Pulling it together',
  title: 'All the jobs of de',
  tagline: 'Of, from, since, to, after — and a dozen set phrases.',
  shift: {
    english: 'English needs of, from, since, for, to, after — Romanian often uses one word for all of them.',
    romanian: '{{o cană de ceai}}, {{de acasă}}, {{de o oră}}, {{ceva de citit}}, {{întreabă de tine}} — and set phrases like {{de obicei}}, {{de fapt}}, {{de acord}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The jobs',
      body: [
        '1. **of** (material, amount): {{o cană de ceai}}, {{un kilogram de mere}}.',
        '2. **from**: {{de acasă}}, {{de la creșă}}.',
        '3. **since / for** (time): {{de ieri}}, {{de o oră}}.',
        '4. **to** (a purpose): {{ceva de citit}}, {{ușor de făcut}}.',
        '5. **after, about** (a person): {{Întreabă de tine.}} — asks after you.',
        '6. **numbers from 20**: {{douăzeci și cinci de ani}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'Set phrases',
      body: [
        '{{de ce}} — why · {{de când}} — since when · {{de aceea}} — that\'s why · {{de obicei}} — usually · {{de fapt}} — actually · {{de acord}} — agreed · {{atât de}} — so (atât de frumos).',
      ],
    },
    {
      kind: 'ladder',
      title: 'De, every way',
      rungs: [
        { id: 's80-01', prompt: 'A cup of tea.', answer: 'O cană de ceai.' },
        { id: 's80-02', prompt: 'A kilo of apples.', answer: 'Un kilogram de mere.' },
        { id: 's80-03', prompt: 'He\'s back from nursery.', answer: 'S-a întors de la creșă.' },
        { id: 's80-04', prompt: 'Since yesterday.', answer: 'De ieri.' },
        { id: 's80-05', prompt: 'Something to read.', answer: 'Ceva de citit.' },
        { id: 's80-06', prompt: 'Grandma was asking after you.', answer: 'Bunica a întrebat de tine.' },
        { id: 's80-07', prompt: 'Usually.', answer: 'De obicei.' },
        { id: 's80-08', prompt: 'Actually.', answer: 'De fapt.' },
        { id: 's80-09', prompt: 'Agreed!', answer: 'De acord!' },
        { id: 's80-10', prompt: 'It\'s so lovely!', answer: 'E atât de frumos!' },
        { id: 's80-11', prompt: 'Twenty-five years.', answer: 'Douăzeci și cinci de ani.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Usually I get up at seven."',
      options: [{ text: 'Usual mă trezesc la șapte.' }, { text: 'De obicei mă trezesc la șapte.', correct: true }],
      explanation: 'Usually = de obicei.',
    },
    {
      kind: 'assemble',
      prompt: 'We usually go to the seaside in August.',
      answer: 'De obicei mergem la mare în august.',
      distractors: ['obișnuit', 'pe'],
    },
  ],
  shortcut: 'De = of · from · since / for · to (ceva de citit) · after (întreabă de tine) · 20+ · de ce, de când, de obicei, de fapt, de acord.',
  useItToday: 'Use "de obicei" and "de fapt" in conversation today.',
}

export const allOfPe: StructureLesson = {
  id: 's-pe',
  part: 'Pulling it together',
  title: 'All the jobs of pe',
  tagline: 'On, per, the person tag — and pe mâine.',
  shift: {
    english: 'English "on" mostly just means on.',
    romanian: 'Romanian {{pe}} means on, per, and "whom", tags people — and turns up in set phrases you\'ll hear daily: {{pe mâine}}, {{pe jos}}, {{pe bune}}.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The jobs',
      body: [
        '1. **on**: {{pe masă}}, {{pe stradă}}.',
        '2. **the person tag**: {{Îl văd pe Andrei.}} {{Pe cine?}} — whom?',
        '3. **per**: {{de două ori pe zi}}, {{o mie de lei pe lună}}.',
        '4. **on a date**: {{pe cinci mai}}.',
        '5. **counting on, angry with**: {{Contez pe tine.}} — I\'m counting on you. {{supărat pe}}.',
      ],
    },
    {
      kind: 'explain',
      title: 'Set phrases',
      body: [
        '{{Pe mâine!}} — see you tomorrow · {{pe jos}} — on foot · {{pe bune}} — for real · {{pe dos}} — inside out · {{pe loc}} — on the spot, right away · {{pe de rost}} — by heart.',
      ],
    },
    {
      kind: 'ladder',
      title: 'Pe, every way',
      rungs: [
        { id: 's81-01', prompt: 'On the table.', answer: 'Pe masă.' },
        { id: 's81-02', prompt: 'Who did you see?', answer: 'Pe cine ai văzut?' },
        { id: 's81-03', prompt: 'Who are you waiting for?', answer: 'Pe cine aștepți?' },
        { id: 's81-04', prompt: 'Twice a day.', answer: 'De două ori pe zi.' },
        { id: 's81-05', prompt: 'A thousand lei a month.', answer: 'O mie de lei pe lună.' },
        { id: 's81-06', prompt: 'I\'m counting on you.', answer: 'Contez pe tine.' },
        { id: 's81-07', prompt: 'See you tomorrow!', answer: 'Pe mâine!', acceptedAlternates: ['Ne vedem mâine'] },
        { id: 's81-08', prompt: 'We\'re walking. (on foot)', answer: 'Mergem pe jos.' },
        { id: 's81-09', prompt: 'Right away.', answer: 'Pe loc.', acceptedAlternates: ['Imediat'] },
        { id: 's81-10', prompt: '(the song) He knows it by heart.', answer: 'Îl știe pe de rost.' },
      ],
    },
    {
      kind: 'choose',
      question: '"See you tomorrow!"',
      options: [{ text: 'Te văd mâine!' }, { text: 'Pe mâine!', correct: true }],
      explanation: 'Te văd mâine is word-for-word English. Romanians say pe mâine (or ne vedem mâine).',
    },
    {
      kind: 'assemble',
      prompt: 'We go swimming three times a week.',
      answer: 'Mergem la înot de trei ori pe săptămână.',
      distractors: ['în', 'fiecare'],
    },
  ],
  shortcut: 'Pe = on · the person tag (pe cine?) · per (pe zi) · on a date · counting / angry on · pe mâine, pe jos, pe bune, pe loc, pe de rost.',
  useItToday: 'Say goodbye with "Pe mâine!" tonight.',
}

export const saCaCa: StructureLesson = {
  id: 's-sa-ca',
  part: 'Pulling it together',
  title: 'Să, că, ca, ca să: four look-alikes',
  tagline: 'Four tiny words English speakers mix up.',
  shift: {
    english: 'They look almost the same, and English uses "that", "to", "like" and "so that" for them.',
    romanian: '{{să}} — wishes and the "to" bridge · {{că}} — "that", for facts · {{ca}} — like, as · {{ca să}} — so that, in order to.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'The four',
      body: [
        '{{să}} — after want / can / must, and in wishes: {{Vreau să vin.}}',
        '{{că}} — "that", after think / know / say: {{Știu că vine.}}',
        '{{ca}} — like, as, before a thing: {{ca mine}}.',
        '{{ca să}} — in order to, so that: {{Am venit ca să te văd.}}',
      ],
    },
    {
      kind: 'explain',
      title: 'The quick test',
      body: [
        'Could you say "in order to"? → {{ca să}}. A fact after know / think / say? → {{că}}. A wish, a need, a "to"? → {{să}}. Comparing? → {{ca}}.',
        'Watch the accent: {{ca}} (no mark) is "like"; {{că}} is "that".',
      ],
    },
    {
      kind: 'ladder',
      title: 'Which one?',
      rungs: [
        { id: 's82-01', prompt: 'I want to know.', answer: 'Vreau să știu.' },
        { id: 's82-02', prompt: 'I know you\'re right.', answer: 'Știu că ai dreptate.' },
        { id: 's82-03', prompt: 'He\'s like me.', answer: 'E ca mine.' },
        { id: 's82-04', prompt: 'I came to help.', answer: 'Am venit ca să ajut.' },
        { id: 's82-05', prompt: 'I think it\'s late.', answer: 'Cred că e târziu.' },
        { id: 's82-06', prompt: 'We need to talk.', answer: 'Trebuie să vorbim.' },
        { id: 's82-07', prompt: 'She\'s working to save money.', answer: 'Lucrează ca să strângă bani.' },
        { id: 's82-08', prompt: 'It\'s white, like snow.', answer: 'E alb ca zăpada.' },
        { id: 's82-09', prompt: 'He said he\'s coming, so wait.', answer: 'A zis că vine, așa că așteaptă.' },
        { id: 's82-10', prompt: 'I\'m learning Romanian to talk to your family.', answer: 'Învăț română ca să vorbesc cu familia ta.' },
      ],
    },
    {
      kind: 'choose',
      question: '"I hope you\'re well."',
      options: [{ text: 'Sper ca ești bine.' }, { text: 'Sper că ești bine.', correct: true }],
      explanation: 'Hope + what you believe is true: că. Ca, with no accent, means "like".',
    },
    {
      kind: 'assemble',
      prompt: 'I\'m saving so we can go to Romania.',
      answer: 'Strâng bani ca să putem merge în România.',
      distractors: ['că', 'pentru'],
    },
  ],
  shortcut: 'Să = wish / "to" bridge (vreau să). Că = that + fact (știu că). Ca = like (ca mine). Ca să = in order to.',
  useItToday: 'Make one sentence with each of them today: să, că, ca, ca să.',
}

export const verbMap: StructureLesson = {
  id: 's-verb-map',
  part: 'Pulling it together',
  title: 'The verb map: one verb, every form',
  tagline: 'Mănânc, am mâncat, mâncam, mâncasem, o să mănânc, aș fi mâncat…',
  shift: {
    english: 'Across these lessons you\'ve met every shape a Romanian verb takes — one at a time.',
    romanian: 'Here they all are, on one verb — {{a mânca}}, to eat — so you can see the whole system at once.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Now, before, after',
      body: [
        '{{mănânc}} — I eat / I\'m eating · {{am mâncat}} — I ate / I\'ve eaten · {{mâncam}} — I was eating / I used to eat · {{mâncasem}} — I had eaten',
        '{{o să mănânc}} / {{voi mânca}} — I\'ll eat · {{Mâine mănânc…}} — the present with a time word',
      ],
    },
    {
      kind: 'explain',
      title: 'Would, should, must',
      body: [
        '{{aș mânca}} — I\'d eat · {{aș fi mâncat}} — I\'d have eaten · {{ar trebui să mănânc}} — I should eat · {{trebuie să fi mâncat}} — he must have eaten · {{o fi mâncat}} — he\'s probably eaten',
      ],
    },
    {
      kind: 'explain',
      title: 'The shapes without a person',
      body: [
        '{{să mănânc}} — (that) I eat: after want, can, must · {{mâncând}} — while eating · {{de mâncat}} — to eat (something to eat, easy to eat) · {{Mănâncă!}} — eat! · {{Nu mânca!}} — don\'t eat!',
      ],
    },
    {
      kind: 'ladder',
      title: 'Run it through every form',
      intro: 'The same verb each time — just the shape changes.',
      rungs: [
        { id: 's106-01', prompt: 'I\'m eating.', answer: 'Mănânc.' },
        { id: 's106-02', prompt: 'I\'ve eaten.', answer: 'Am mâncat.' },
        { id: 's106-03', prompt: 'I was eating.', answer: 'Mâncam.' },
        { id: 's106-04', prompt: 'I had already eaten.', answer: 'Mâncasem deja.' },
        { id: 's106-05', prompt: 'I\'ll eat later.', answer: 'O să mănânc mai târziu.' },
        { id: 's106-06', prompt: 'I\'d eat something.', answer: 'Aș mânca ceva.' },
        { id: 's106-07', prompt: 'I\'d have eaten if I\'d been hungry.', answer: 'Aș fi mâncat dacă mi-ar fi fost foame.' },
        { id: 's106-08', prompt: 'I want to eat.', answer: 'Vreau să mănânc.' },
        { id: 's106-09', prompt: 'He must have eaten.', answer: 'Trebuie să fi mâncat.' },
        { id: 's106-10', prompt: 'He\'s probably eaten.', answer: 'O fi mâncat.' },
        { id: 's106-11', prompt: 'Don\'t talk while eating.', answer: 'Nu vorbi mâncând.' },
        { id: 's106-12', prompt: 'Is there anything to eat?', answer: 'E ceva de mâncat?' },
        { id: 's106-13', prompt: 'Eat!', answer: 'Mănâncă!' },
        { id: 's106-14', prompt: 'Don\'t eat that!', answer: 'Nu mânca asta!' },
      ],
    },
    {
      kind: 'choose',
      question: '"I had eaten."',
      options: [{ text: 'Am mâncat.' }, { text: 'Mâncam.' }, { text: 'Mâncasem.', correct: true }],
      explanation: 'Had done is the one-word -sem form. Am mâncat is "I ate", mâncam is "I was eating".',
    },
  ],
  shortcut: 'mănânc · am mâncat · mâncam · mâncasem · o să mănânc · aș mânca · aș fi mâncat · să mănânc · trebuie să fi mâncat · o fi mâncat · mâncând · de mâncat · mănâncă! · nu mânca!',
  useItToday: 'Pick any verb and run it through the whole map out loud, like the ladder.',
}

export const pronounMap: StructureLesson = {
  id: 's-pronoun-map',
  part: 'Pulling it together',
  title: 'The little-words map: me, to me, my',
  tagline: 'Eu, mă, îmi, meu — for every person.',
  shift: {
    english: 'English has I / me / my, and that\'s nearly it.',
    romanian: 'Romanian has a set per person — the doer, the one it\'s done to, the one it\'s "to", and whose. Here they all are side by side.',
  },
  steps: [
    {
      kind: 'explain',
      title: 'Me, you',
      body: [
        '**I**: {{eu}} · done to me: {{mă}} ({{mă vede}}) · to me: {{îmi}} ({{îmi place}}) · after a little word: {{mine}} ({{cu mine}}) · my: {{meu}} / {{mea}}',
        '**you**: {{tu}} · {{te}} ({{te văd}}) · {{îți}} ({{îți place}}) · {{tine}} ({{pentru tine}}) · {{tău}} / {{ta}}',
      ],
    },
    {
      kind: 'explain',
      title: 'Him, her',
      body: [
        '**he**: {{el}} · {{îl}} ({{îl văd}}) · {{îi}} ({{îi dau}}) · {{el}} ({{cu el}}) · his: {{lui}}',
        '**she**: {{ea}} · {{o}} ({{o văd}}) · {{îi}} ({{îi dau}}) · {{ea}} ({{cu ea}}) · her: {{ei}}',
      ],
    },
    {
      kind: 'explain',
      title: 'Us, you all, them',
      body: [
        '**we**: {{noi}} · {{ne}} · {{ne}} · {{noi}} · our: {{nostru}} / {{noastră}}',
        '**you all**: {{voi}} · {{vă}} · {{vă}} · {{voi}} · your: {{vostru}} / {{voastră}}',
        '**they**: {{ei}} / {{ele}} · {{îi}} / {{le}} · {{le}} · {{ei}} / {{ele}} · their: {{lor}}',
      ],
    },
    {
      kind: 'ladder',
      title: 'Me, to me, my',
      rungs: [
        { id: 's107-01', prompt: 'He sees me.', answer: 'Mă vede.' },
        { id: 's107-02', prompt: 'I like it.', answer: 'Îmi place.' },
        { id: 's107-03', prompt: 'Come with me.', answer: 'Vino cu mine.' },
        { id: 's107-04', prompt: 'My car.', answer: 'Mașina mea.' },
        { id: 's107-05', prompt: 'I see you.', answer: 'Te văd.' },
        { id: 's107-06', prompt: 'It\'s for you.', answer: 'E pentru tine.' },
        { id: 's107-07', prompt: 'I see him.', answer: 'Îl văd.' },
        { id: 's107-08', prompt: 'I give her the book.', answer: 'Îi dau cartea.' },
        { id: 's107-09', prompt: 'I went with her.', answer: 'Am mers cu ea.' },
        { id: 's107-10', prompt: 'He calls us.', answer: 'Ne sună.' },
        { id: 's107-11', prompt: 'I see you all.', answer: 'Vă văd.' },
        { id: 's107-12', prompt: 'I give them water.', answer: 'Le dau apă.' },
        { id: 's107-13', prompt: 'Their house.', answer: 'Casa lor.' },
      ],
    },
    {
      kind: 'choose',
      question: '"Come with me."',
      options: [{ text: 'Vino cu mă.' }, { text: 'Vino cu mine.', correct: true }, { text: 'Vino cu îmi.' }],
      explanation: 'After a little word like cu or pentru, "me" is mine.',
    },
  ],
  shortcut: 'Per person: doer (eu), done to (mă), to (îmi), after cu / pentru (mine), whose (meu). Him: el · îl · îi · el · lui. Her: ea · o · îi · ea · ei.',
  useItToday: 'Pick one person — "him" — and make a sentence with each of his little words.',
}

export const nounMap: StructureLesson = {
  id: 's-noun-map',
  part: 'Pulling it together',
  title: 'The noun map: a house, the house, of the house',
  tagline: 'O casă, casa, casei, casele, caselor.',
  shift: {
    english: 'An English noun has two forms: house, houses.',
    romanian: 'A Romanian noun wears several: {{o casă}} (a house), {{casa}} (the house), {{casei}} (of / to the house), {{case}} / {{casele}} (houses / the houses), {{caselor}} (of / to the houses).',
  },
  steps: [
    {
      kind: 'explain',
      title: 'An o-word: casă',
      body: [
        '{{o casă}} — a house · {{casa}} — the house · {{casei}} — of the house, to the house',
        '{{case}} — houses · {{casele}} — the houses · {{caselor}} — of / to the houses',
      ],
    },
    {
      kind: 'explain',
      title: 'An un-word: băiat',
      body: [
        '{{un băiat}} — a boy · {{băiatul}} — the boy · {{băiatului}} — of / to the boy',
        '{{băieți}} — boys · {{băieții}} — the boys · {{băieților}} — of / to the boys',
      ],
    },
    {
      kind: 'explain',
      title: 'Calling someone, and when you need which',
      body: [
        'Calling: {{băiatule!}}, {{bunico!}}',
        'The plain form after un / o and after little words like pe, în, la, cu. The "the" form as a subject or object. The -ei / -ului / -lor form for "of" and "to".',
      ],
    },
    {
      kind: 'ladder',
      title: 'Every face of the noun',
      rungs: [
        { id: 's108-01', prompt: 'A house.', answer: 'O casă.' },
        { id: 's108-02', prompt: 'The house is big.', answer: 'Casa e mare.' },
        { id: 's108-03', prompt: 'The roof of the house.', answer: 'Acoperișul casei.' },
        { id: 's108-04', prompt: 'Two houses.', answer: 'Două case.' },
        { id: 's108-05', prompt: 'The houses are old.', answer: 'Casele sunt vechi.' },
        { id: 's108-06', prompt: 'The doors of the houses.', answer: 'Ușile caselor.' },
        { id: 's108-07', prompt: 'A boy.', answer: 'Un băiat.' },
        { id: 's108-08', prompt: 'The boy is playing.', answer: 'Băiatul se joacă.' },
        { id: 's108-09', prompt: 'The boy\'s ball.', answer: 'Mingea băiatului.' },
        { id: 's108-10', prompt: 'The boys.', answer: 'Băieții.' },
        { id: 's108-11', prompt: 'The boys\' parents.', answer: 'Părinții băieților.' },
        { id: 's108-12', prompt: '(calling) Hey, boy!', answer: 'Băiatule!' },
      ],
    },
    {
      kind: 'choose',
      question: '"The colour of the house."',
      options: [{ text: 'Culoarea casa' }, { text: 'Culoarea casei', correct: true }, { text: 'Culoarea de casă' }],
      explanation: 'Of the house = casei.',
    },
  ],
  shortcut: 'o casă · casa · casei · case · casele · caselor. un băiat · băiatul · băiatului · băieți · băieții · băieților. Calling: băiatule!',
  useItToday: 'Take one word from around the house and say all its faces out loud.',
}
