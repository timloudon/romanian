import { describe, expect, it } from 'vitest'
import { isCorrectOrder, tilesFor } from './tiles'

describe('tiles', () => {
  it('splits the answer into words without punctuation, lowering the first letter', () => {
    expect(tilesFor('Nu merg nicăieri.', ['ceva'])).toEqual(['nu', 'merg', 'nicăieri', 'ceva'])
  })

  it('keeps hyphenated words as one tile', () => {
    expect(tilesFor('N-am dormit deloc azi-noapte.')).toEqual(['n-am', 'dormit', 'deloc', 'azi-noapte'])
  })

  it('checks order, ignoring case and punctuation', () => {
    expect(isCorrectOrder(['nu', 'merg', 'nicăieri'], 'Nu merg nicăieri.')).toBe(true)
    expect(isCorrectOrder(['merg', 'nu', 'nicăieri'], 'Nu merg nicăieri.')).toBe(false)
    expect(isCorrectOrder(['nu', 'merg'], 'Nu merg nicăieri.')).toBe(false)
  })
})
