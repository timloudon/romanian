import { getReviewState, putReviewState } from '../storage/progressRepo'
import type { ReviewableRef } from '../storage/types'
import { applyOutcome, seedReviewState, type ReviewOutcome } from './srs'

/** Persists one self-assessment into spaced repetition — the same write wherever practice happens. */
export async function recordOutcome(ref: ReviewableRef, outcome: ReviewOutcome): Promise<void> {
  const existing = await getReviewState(ref)
  await putReviewState(applyOutcome(existing ?? seedReviewState(ref), outcome))
}
