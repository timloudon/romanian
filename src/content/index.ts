import { roCore } from './courses/ro-core'
import { lifeTopics } from './life'
import { structureDrills, structureLessons } from './structures'
import type { Drill } from './types'

/** Every drill in the app, from the course, the weekly real-life topics and Structures alike — the single
 *  place anything keyed by drill id (Review, Driving Mode's due queue) should resolve from, so
 *  practice in one area never silently drops out of spaced repetition. */
export function everyDrill(): Drill[] {
  return [
    ...roCore.units.flatMap((unit) => unit.lessons.flatMap((lesson) => lesson.drills)),
    ...lifeTopics.flatMap((topic) => topic.drills),
    ...structureLessons.flatMap(structureDrills),
  ]
}
