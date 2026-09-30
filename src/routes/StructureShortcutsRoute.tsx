import { Link } from 'react-router-dom'
import { structureLessons, structureParts } from '../content/structures'

/** Every lesson's mental rule on one page — the pocket card to glance at before a conversation. */
export function StructureShortcutsRoute() {
  return (
    <div className="p-6">
      <Link to="/structures" className="text-sm text-ink-muted">
        ← Structures
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-flag-blue">Your shortcuts</h1>
      <p className="mt-1 text-ink-muted">
        How to think it, in one line per lesson. Tap one to go back to the full lesson.
      </p>

      {structureParts.map(({ part }) => (
        <section key={part} className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-flag-blue">{part}</h2>
          <div className="mt-2 flex flex-col gap-2">
            {structureLessons
              .filter((lesson) => lesson.part === part)
              .map((lesson) => (
                <Link key={lesson.id} to={`/structures/${lesson.id}`} className="rounded-xl bg-surface-muted px-4 py-3">
                  <p className="text-sm text-ink-muted">{lesson.title}</p>
                  <p className="mt-1 font-semibold leading-snug">{lesson.shortcut}</p>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}
