import { describe, expect, it } from 'vitest'
import type { ReviewableRef } from '../storage/types'
import { applyOutcome, LEITNER_INTERVALS_DAYS, MAX_BOX, seedReviewState } from './srs'

const NOW = new Date('2026-01-01T00:00:00.000Z')
const ref: ReviewableRef = { kind: 'drill', id: 'u01-l01-d01' }

function addDays(from: Date, days: number): string {
  const d = new Date(from)
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

describe('seedReviewState', () => {
  it('starts at box 0, due immediately, never reviewed', () => {
    const seed = seedReviewState(ref, NOW)
    expect(seed.box).toBe(0)
    expect(seed.dueDate).toBe(addDays(NOW, 0))
    expect(seed.lastReviewedAt).toBeNull()
    expect(seed.reviewCount).toBe(0)
  })
})

describe('applyOutcome', () => {
  it('moves a first-time "got it" to box 1', () => {
    const next = applyOutcome(seedReviewState(ref, NOW), 'got-it', NOW)
    expect(next.box).toBe(1)
    expect(next.dueDate).toBe(addDays(NOW, LEITNER_INTERVALS_DAYS[1]))
  })

  it('moves a first-time "not yet" to box 1 as well, and counts a lapse', () => {
    const next = applyOutcome(seedReviewState(ref, NOW), 'not-yet', NOW)
    expect(next.box).toBe(1)
    expect(next.lapseCount).toBe(1)
  })

  it('advances one box per "got it"', () => {
    let state = seedReviewState(ref, NOW)
    state = applyOutcome(state, 'got-it', NOW)
    expect(state.box).toBe(1)
    state = applyOutcome(state, 'got-it', NOW)
    expect(state.box).toBe(2)
    state = applyOutcome(state, 'got-it', NOW)
    expect(state.box).toBe(3)
  })

  it('never advances past the last box', () => {
    let state = seedReviewState(ref, NOW)
    for (let i = 0; i < MAX_BOX + 5; i++) {
      state = applyOutcome(state, 'got-it', NOW)
    }
    expect(state.box).toBe(MAX_BOX)
    expect(state.dueDate).toBe(addDays(NOW, LEITNER_INTERVALS_DAYS[MAX_BOX]))
  })

  it('drops back to box 1 (not box 0) on a lapse from a high box', () => {
    let state = seedReviewState(ref, NOW)
    for (let i = 0; i < 3; i++) state = applyOutcome(state, 'got-it', NOW)
    expect(state.box).toBeGreaterThan(1)

    const lapsed = applyOutcome(state, 'not-yet', NOW)
    expect(lapsed.box).toBe(1)
  })

  it('increments reviewCount on every outcome, regardless of result', () => {
    let state = seedReviewState(ref, NOW)
    state = applyOutcome(state, 'got-it', NOW)
    state = applyOutcome(state, 'not-yet', NOW)
    expect(state.reviewCount).toBe(2)
  })

  it('stamps lastReviewedAt', () => {
    const next = applyOutcome(seedReviewState(ref, NOW), 'got-it', NOW)
    expect(next.lastReviewedAt).toBe(NOW.toISOString())
  })
})
