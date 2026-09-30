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
