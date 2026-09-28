import type { Course, Drill, DrillId, Lesson } from '../content/types'
import type { VocabItem } from '../content/vocab/types'

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

/** Re-inserts an item a few slots later in the queue, for the MT/SSiW-style immediate
 *  re-drilling of a "not yet" — independent of, and in addition to, cross-session SRS scheduling. */
export function requeue<T>(queue: T[], index: number, item: T, delay = 3): T[] {
  const without = [...queue.slice(0, index), ...queue.slice(index + 1)]
  const insertAt = Math.min(index + delay, without.length)
  without.splice(insertAt, 0, item)
  return without
}

export function allDrills(course: Course): Drill[] {
  return course.units.flatMap((unit) => unit.lessons.flatMap((lesson) => lesson.drills))
}

export function findDrill(course: Course, id: DrillId): Drill | undefined {
  return allDrills(course).find((drill) => drill.id === id)
}

/** The first lesson containing a drill that's never been reviewed — derived from the course
 *  tree plus the set of seen ids, rather than a separate "current lesson" pointer that could
 *  desync from actual progress. */
export function findNextLesson(course: Course, seenDrillIds: ReadonlySet<string>): Lesson | undefined {
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      if (lesson.drills.some((drill) => !seenDrillIds.has(drill.id))) return lesson
    }
  }
  return undefined
}
