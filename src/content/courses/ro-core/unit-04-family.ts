import type { Unit } from '../../types'

export const unit04: Unit = {
  id: 'u04',
  stage: 'Foundations',
  title: 'Family & relationships',
  lessons: [
    {
      id: 'u04-l01',
      title: 'Asking after people',
      intro:
        'The conversations that actually happen around a table: how someone\'s doing, who called or visited whom. One new piece worth knowing here — Romanian marks a specific person as the object with a little "pe" in front of them.',
      drills: [
        {
          id: 'u04-l01-d01',
          prompt: "How's your mother doing?",
          answer: 'Ce mai face mama ta?',
          teachingNote: '"Ce mai faci?" (how are you) is a fixed, extremely common phrase — this is just that same shape, aimed at someone else.',
          introduces: [{ lemma: 'mamă', pos: 'noun', freqRank: 153 }],
        },
        {
          id: 'u04-l01-d02',
          prompt: "She's well, thanks.",
          answer: 'E bine, mulțumesc.',
          introduces: [{ lemma: 'mulțumesc', pos: 'phrase', freqRank: 328 }],
        },
        {
          id: 'u04-l01-d03',
          prompt: 'I called my sister.',
          answer: 'Am sunat-o pe sora mea.',
          teachingNote: 'When the "her/it/him" you mean is a specific, named person, Romanian adds "pe" right before them and keeps the small word too — here both "o" and "pe sora mea" point at the same person.',
          introduces: [
            { lemma: 'suna', pos: 'verb', freqRank: 884 },
            { lemma: 'soră', pos: 'noun', freqRank: 591 },
          ],
        },
        {
          id: 'u04-l01-d04',
          prompt: 'My brother visited us.',
          answer: 'Fratele meu ne-a vizitat.',
          introduces: [
            { lemma: 'frate', pos: 'noun', freqRank: 541 },
            { lemma: 'vizita', pos: 'verb', freqRank: 2688 },
          ],
        },
        {
          id: 'u04-l01-d05',
          prompt: 'I want to see grandma.',
          answer: 'Vreau s-o văd pe bunica.',
          introduces: [{ lemma: 'bunică', pos: 'noun', freqRank: 1449 }],
        },
      ],
    },
    {
      id: 'u04-l02',
      title: 'Family, plainly',
      intro: 'Simple, sturdy sentences about who\'s who — the kind that come up in the first five minutes of catching up with relatives.',
      drills: [
        {
          id: 'u04-l02-d01',
          prompt: 'Do you have brothers or sisters?',
          answer: 'Ai frați sau surori?',
          teachingNote: '"Frați" alone often covers "siblings" in general, not just "brothers."',
        },
        {
          id: 'u04-l02-d02',
          prompt: 'I have a younger sister.',
          answer: 'Am o soră mai mică.',
          teachingNote: '"Mai mică" is just "more small" — Romanian builds "younger/smaller" comparisons with "mai" plus the plain word, no separate word for "younger."',
        },
        {
          id: 'u04-l02-d03',
          prompt: 'My parents are well.',
          answer: 'Părinții mei sunt bine.',
          introduces: [{ lemma: 'părinte', pos: 'noun', freqRank: 6132 }],
        },
        {
          id: 'u04-l02-d04',
          prompt: 'He asked about you.',
          answer: 'El a întrebat de tine.',
          introduces: [{ lemma: 'întreba', pos: 'verb', freqRank: 4704 }],
        },
        {
          id: 'u04-l02-d05',
          prompt: 'I said hello to your mother.',
          answer: 'Am salutat-o pe mama ta.',
          teachingNote: 'Same pattern as "am sunat-o pe sora mea" — nothing new here, just the same shape with a different verb and person.',
        },
      ],
    },
  ],
}
