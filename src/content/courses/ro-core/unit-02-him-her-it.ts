import type { Unit } from '../../types'

export const unit02: Unit = {
  id: 'u02',
  stage: 'Foundations',
  title: 'Him, her, it, them — without repeating the name',
  lessons: [
    {
      id: 'u02-l01',
      title: '"Îl, o" — him/it, her/it',
      intro:
        'Instead of naming a person or thing every time, Romanian drops in a tiny word right before the verb: "îl" for him or a masculine thing, "o" for her or a feminine thing.',
      drills: [
        {
          id: 'u02-l01-d01',
          prompt: 'I see him.',
          answer: 'Îl văd.',
          introduces: [{ lemma: 'el', pos: 'pron', freqRank: 116 }],
        },
        {
          id: 'u02-l01-d02',
          prompt: 'I see her.',
          answer: 'O văd.',
          introduces: [{ lemma: 'ea', pos: 'pron', freqRank: 66 }],
        },
        {
          id: 'u02-l01-d03',
          prompt: 'I want to see him.',
          answer: 'Vreau să-l văd.',
          teachingNote: '"Să" plus "îl" always fuses into "să-l" — that\'s just what happens at that boundary, regardless of the verb that follows.',
        },
        {
          id: 'u02-l01-d04',
          prompt: 'Can you help me?',
          answer: 'Poți să mă ajuți?',
          teachingNote: 'Same phrase as before — "mă" is "me," the same kind of word as "îl" and "o," just a different person.',
        },
        {
          id: 'u02-l01-d05',
          prompt: 'I can help you.',
          answer: 'Pot să te ajut.',
          introduces: [{ lemma: 'tu', pos: 'pron', freqRank: 46 }],
        },
      ],
    },
    {
      id: 'u02-l02',
      title: 'More of the same pattern',
      intro:
        'The same small words work for plurals and for "us" — and you already have every verb you need. This lesson is almost entirely recombination.',
      drills: [
        {
          id: 'u02-l02-d01',
          prompt: 'I want to buy it. (the ticket)',
          answer: 'Vreau să-l cumpăr.',
          introduces: [{ lemma: 'bilet', pos: 'noun', freqRank: 2071 }],
        },
        {
          id: 'u02-l02-d02',
          prompt: 'Do you want to see them? (the photos)',
          answer: 'Vrei să le vezi?',
          teachingNote: '"Le" covers "them" for feminine-plural things like "pozele" (the photos) — a different plural takes a different small word, but you\'ll pick that up the same way, by hearing it used.',
          introduces: [{ lemma: 'poză', pos: 'noun', freqRank: 1875 }],
        },
        {
          id: 'u02-l02-d03',
          prompt: "He can't help us.",
          answer: 'Nu ne poate ajuta.',
          acceptedAlternates: ['Nu poate să ne ajute.'],
          teachingNote: 'Both orders are genuinely normal here — "nu ne poate ajuta" and "nu poate să ne ajute." Pick whichever comes out first; Romanians use both.',
          introduces: [{ lemma: 'noi', pos: 'pron', freqRank: 145 }],
        },
        {
          id: 'u02-l02-d04',
          prompt: "I don't want to see her.",
          answer: 'Nu vreau s-o văd.',
          teachingNote: '"Să" plus "o" fuses to "s-o" — the same fusing you already saw with "să-l," just a different small word.',
        },
        {
          id: 'u02-l02-d05',
          prompt: 'I have to buy them. (the tickets)',
          answer: 'Trebuie să le cumpăr.',
          teachingNote: 'Nothing new here at all — just "trebuie," "să," and "le," all things you already have.',
        },
      ],
    },
  ],
}
