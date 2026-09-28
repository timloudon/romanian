import { everyDrill } from '../content'
import type { Drill } from '../content/types'
import type { VocabItem } from '../content/vocab/types'
import type { ReviewState } from '../storage/types'

export type SessionItem = { kind: 'drill'; drill: Drill } | { kind: 'vocab'; vocab: VocabItem }

export function sessionItemId(item: SessionItem): string {
  return item.kind === 'drill' ? item.drill.id : item.vocab.id
}

export function getPromptText(item: SessionItem): string {
  return item.kind === 'drill' ? item.drill.prompt : (item.vocab.translation ?? item.vocab.word)
}

export function getAnswerText(item: SessionItem): string {
  return item.kind === 'drill' ? item.drill.answer : item.vocab.word
}

export function drillQueue(drills: Drill[]): SessionItem[] {
  return drills.map((drill) => ({ kind: 'drill', drill }))
}

/** Resolves due review rows back to their drills, from anywhere in the app's content. Rows whose
 *  drill no longer exists (retired content) are skipped rather than surfacing as broken items. */
export function dueQueue(due: ReviewState[]): SessionItem[] {
  const drillsById = new Map(everyDrill().map((drill) => [drill.id, drill]))
  return drillQueue(
    due.flatMap((state) => {
      const drill = state.kind === 'drill' ? drillsById.get(state.id) : undefined
      return drill ? [drill] : []
    }),
  )
}

/** Re-inserts an item a few slots later in the queue, for the MT/SSiW-style immediate
 *  re-drilling of a "not yet" — independent of, and in addition to, cross-session SRS scheduling. */
export function requeue<T>(queue: T[], index: number, item: T, delay = 3): T[] {
  const without = [...queue.slice(0, index), ...queue.slice(index + 1)]
  const insertAt = Math.min(index + delay, without.length)
  without.splice(insertAt, 0, item)
  return without
}
