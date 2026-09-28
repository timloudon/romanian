import { describe, expect, it } from 'vitest'
import { focusDay } from './weeklyFocus'

describe('focusDay', () => {
  it('is day 1 on the day the topic was picked', () => {
    const started = new Date(2026, 0, 5, 9, 0)
    expect(focusDay(started.toISOString(), new Date(2026, 0, 5, 22, 0))).toBe(1)
  })

  it('counts calendar days, not elapsed hours', () => {
    const started = new Date(2026, 0, 5, 23, 30)
    expect(focusDay(started.toISOString(), new Date(2026, 0, 6, 7, 0))).toBe(2)
  })

  it('keeps counting past a week', () => {
    const started = new Date(2026, 0, 5, 12, 0)
    expect(focusDay(started.toISOString(), new Date(2026, 0, 14, 12, 0))).toBe(10)
  })

  it('never goes below day 1 if the clock moves backwards', () => {
    const started = new Date(2026, 0, 5, 12, 0)
    expect(focusDay(started.toISOString(), new Date(2026, 0, 3, 12, 0))).toBe(1)
  })
})
