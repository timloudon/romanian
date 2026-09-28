import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { roCore } from '../content/courses/ro-core'
import { getDueItems } from '../storage/progressRepo'

export function HomeRoute() {
  const [dueCount, setDueCount] = useState<number | null>(null)

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

      {Boolean(dueCount) && (
        <Link
          to="/review"
          className="mt-4 block rounded-xl border border-flag-blue/30 bg-flag-blue/5 px-4 py-3 text-flag-blue"
        >
          {dueCount} due for review
        </Link>
      )}

      <div className="mt-6 flex flex-col gap-6">
        {roCore.units.map((unit) => (
          <section key={unit.id}>
            <h2 className="text-lg font-semibold">{unit.title}</h2>
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
  )
}
