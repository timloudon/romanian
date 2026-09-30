import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TypedModePlayer } from '../components/lesson/TypedModePlayer'
import { findStructureLesson, structureDrills } from '../content/structures'
import { drillQueue } from '../engine/session'

/** A Structures lesson's spoken drills, again, in the typed player — for when you'd rather type. */
export function StructurePracticeRoute() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const lesson = findStructureLesson(lessonId)
  const queue = useMemo(() => (lesson ? drillQueue(structureDrills(lesson)) : []), [lesson])

  if (!lesson) {
    return (
      <div className="p-6">
        <p className="text-ink-muted">That lesson doesn't exist.</p>
        <Link to="/structures" className="mt-2 inline-block text-flag-blue">
          Back to Structures
        </Link>
      </div>
    )
  }

  return (
    <TypedModePlayer
      key={lesson.id}
      queue={queue}
      headerLabel={lesson.title}
      completeMessage={`That's the lot. The shortcut: ${lesson.shortcut}`}
      exitHref={`/structures/${lesson.id}`}
      exitLabel="Back to the lesson"
    />
  )
}
