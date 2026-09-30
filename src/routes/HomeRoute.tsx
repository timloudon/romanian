import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { roCore } from '../content/courses/ro-core'
import { findLifeTopic, lifeTopics } from '../content/life'
import { structureLessons } from '../content/structures'
import type { CourseStage, Unit } from '../content/types'
import { getDueItems } from '../storage/progressRepo'
import { getSettings } from '../storage/settingsRepo'

/** Consecutive units that share a stage, in course order. */
function groupByStage(units: Unit[]): { stage: CourseStage; units: Unit[] }[] {
  const groups: { stage: CourseStage; units: Unit[] }[] = []
  for (const unit of units) {
    const last = groups.at(-1)
    if (last?.stage === unit.stage) last.units.push(unit)
    else groups.push({ stage: unit.stage, units: [unit] })
  }
  return groups
}

export function HomeRoute() {
  const [dueCount, setDueCount] = useState<number | null>(null)
  const [settings] = useState(getSettings)
  const weekTopic = findLifeTopic(settings.lifeFocus?.topicId) ?? lifeTopics[0]
  const nextStructure = structureLessons.find((lesson) => !settings.structuresDone.includes(lesson.id))

  useEffect(() => {
    let cancelled = false
    void getDueItems().then((due) => {
      if (!cancelled) setDueCount(due.length)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-flag-blue">Română</h1>
      <p className="mt-1 text-ink-muted">{roCore.title}</p>

      <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-muted">Carry on</h2>
      <div className="mt-2 flex flex-col gap-2">
        <Link to="/week" className="rounded-xl border border-flag-blue/30 bg-flag-blue/5 px-4 py-3">
          <p className="text-sm text-ink-muted">{settings.lifeFocus ? 'This week' : 'Start a week'}</p>
          <p className="font-semibold text-flag-blue">
            <span aria-hidden="true">{weekTopic.emoji}</span> {weekTopic.title}
          </p>
        </Link>
        {nextStructure && (
          <Link
            to={`/structures/${nextStructure.id}`}
            className="rounded-xl border border-flag-blue/30 bg-flag-blue/5 px-4 py-3"
          >
            <p className="text-sm text-ink-muted">
              {settings.structuresDone.length ? 'Next structure' : 'Start with structures'}
            </p>
            <p className="font-semibold text-flag-blue">🧩 {nextStructure.title}</p>
          </Link>
        )}
        <Link to="/words" className="rounded-xl border border-flag-blue/30 bg-flag-blue/5 px-4 py-3">
          <p className="text-sm text-ink-muted">Recognition practice</p>
          <p className="font-semibold text-flag-blue">📖 Common words</p>
        </Link>
        {Boolean(dueCount) && (
          <Link to="/review" className="rounded-xl border border-flag-blue/30 bg-flag-blue/5 px-4 py-3">
            <p className="text-sm text-ink-muted">Spaced repetition</p>
            <p className="font-semibold text-flag-blue">🔁 {dueCount} due for review</p>
          </Link>
        )}
      </div>

      <h2 className="mt-8 text-lg font-semibold">The course</h2>
      <p className="text-sm text-ink-muted">Step-by-step drills, from wanting and needing to complex conversation.</p>

      {groupByStage(roCore.units).map((group) => (
        <div key={group.stage} className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-flag-blue">{group.stage}</h2>
          <div className="mt-3 flex flex-col gap-6">
            {group.units.map((unit) => (
              <section key={unit.id}>
                <h3 className="text-lg font-semibold">{unit.title}</h3>
                <div className="mt-2 flex flex-col gap-2">
                  {unit.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      to={`/lesson/${lesson.id}`}
                      className="rounded-xl border border-border bg-surface-muted px-4 py-3"
                    >
                      <p className="font-medium">{lesson.title}</p>
                      <p className="text-sm text-ink-muted">{lesson.drills.length} drills</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
