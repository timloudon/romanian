import { describe, expect, it } from 'vitest'
import type { Drill } from '../content/types'
import { gradeTypedAnswer, normalize } from './grading'

const drill: Drill = {
  id: 'test-d01',
  prompt: 'I want to go.',
  answer: 'Vreau să merg.',
  acceptedAlternates: ['Eu vreau să merg.'],
}

describe('normalize', () => {
  it('folds diacritics to plain ascii', () => {
    expect(normalize('Vreau să merg.')).toBe('vreau sa merg')
  })

  it('folds legacy cedilla forms the same as comma-below', () => {
    expect(normalize('Ştiu')).toBe(normalize('Știu'))
  })

  it('strips punctuation and collapses whitespace', () => {
    expect(normalize('  Vreau,   să merg!!  ')).toBe('vreau sa merg')
  })
})

describe('gradeTypedAnswer', () => {
  it('accepts an exact match', () => {
    expect(gradeTypedAnswer('Vreau să merg.', drill).correct).toBe(true)
  })

  it('accepts the answer typed without diacritics', () => {
    expect(gradeTypedAnswer('vreau sa merg', drill).correct).toBe(true)
  })

  it('accepts a listed alternate', () => {
    expect(gradeTypedAnswer('Eu vreau să merg.', drill).correct).toBe(true)
  })

  it('tolerates a small typo', () => {
    expect(gradeTypedAnswer('Vreau sa merq', drill).correct).toBe(true)
  })

  it('rejects a genuinely different sentence', () => {
    expect(gradeTypedAnswer('Nu pot să mănânc asta', drill).correct).toBe(false)
  })

  it('rejects a blank answer', () => {
    expect(gradeTypedAnswer('', drill).correct).toBe(false)
  })
})
