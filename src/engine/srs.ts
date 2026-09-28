import type { ReviewableRef, ReviewState } from '../storage/types'

/** Box index = array index. A brand-new item starts at (synthetic, unpersisted) box 0; every
 *  persisted row is box >= 1, since a row only exists once something's been reviewed once. */
export const LEITNER_INTERVALS_DAYS = [0, 1, 3, 7, 14, 30] as const
export const MAX_BOX = LEITNER_INTERVALS_DAYS.length - 1

export type ReviewOutcome = 'got-it' | 'not-yet'

function addDaysISO(days: number, from: Date): string {
  const d = new Date(from)
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

/** A synthetic starting point for an item that has no IndexedDB row yet — never itself
 *  persisted; `applyOutcome` is what actually gets written, on the first real assessment. */
export function seedReviewState(ref: ReviewableRef, now: Date = new Date()): ReviewState {
  return {
    ...ref,
    box: 0,
    dueDate: addDaysISO(0, now),
    lastReviewedAt: null,
    lapseCount: 0,
    reviewCount: 0,
    createdAt: now.toISOString(),
  }
}

/** A binary self-assessment (Leitner, not SM-2 — there's no finer-grained "quality" signal to
 *  feed a floating ease factor). A lapse drops to box 1, not 0: 0 means "never attempted." */
export function applyOutcome(state: ReviewState, outcome: ReviewOutcome, now: Date = new Date()): ReviewState {
  const box = outcome === 'got-it' ? Math.min(state.box + 1, MAX_BOX) : 1
  return {
    ...state,
    box,
    dueDate: addDaysISO(LEITNER_INTERVALS_DAYS[box], now),
    lastReviewedAt: now.toISOString(),
    lapseCount: outcome === 'not-yet' ? state.lapseCount + 1 : state.lapseCount,
    reviewCount: state.reviewCount + 1,
  }
}
