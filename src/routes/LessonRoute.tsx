import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TypedModePlayer } from '../components/lesson/TypedModePlayer'
import { roCore } from '../content/courses/ro-core'
import type { Lesson } from '../content/types'
import { drillQueue } from '../engine/session'

function findLesson(lessonId: string | undefined): Lesson | undefined {
  if (!lessonId) return undefined
  for (const unit of roCore.units) {
    const lesson = unit.lessons.find((candidate) => candidate.id === lessonId)
    if (lesson) return lesson
  }
  return undefined
}

export function LessonRoute() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const lesson = useMemo(() => findLesson(lessonId), [lessonId])
  const queue = useMemo(() => (lesson ? drillQueue(lesson.drills) : []), [lesson])

  if (!lesson) {
    return (
      <div className="p-6">
        <p className="text-ink-muted">Lesson not found.</p>
        <Link to="/" className="mt-2 inline-block text-flag-blue">
          Back home
        </Link>
      </div>
    )
  }

  return (
    // Keyed by lesson id so navigating straight from one lesson to another (bypassing Home)
    // remounts the player instead of reusing stale queue/index state from the previous lesson.
    <TypedModePlayer
      key={lesson.id}
      queue={queue}
      headerLabel={lesson.title}
      completeMessage={`That's everything in ${lesson.title}.`}
    />
  )
}
