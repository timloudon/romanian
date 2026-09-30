import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { learningPrinciples, structureLessons, structureParts, structureRomanianPhrases } from '../content/structures'
import type { StructureLesson } from '../content/structures/types'
import { getSettings } from '../storage/settingsRepo'

/** In-page anchors — the app uses HashRouter, so these are scrolled to by id rather than linked. */
function partAnchor(part: string): string {
  return `part-${part.toLowerCase().replace(/[^a-z]+/g, '-')}`
}

/** Diacritic- and case-insensitive, so "mai", "sa" and "să" all find what you'd expect. */
function fold(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/** The phrase as whole words — so "mai" ranks the mai lessons, not "email". */
function hasWholePhrase(text: string, phrase: string): boolean {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`).test(text)
}

function searchText(lesson: StructureLesson): string {
  return fold(
    [lesson.title, lesson.tagline, lesson.shortcut, lesson.part, ...structureRomanianPhrases(lesson)].join(' '),
  )
}

export function StructuresRoute() {
  const [done] = useState(() => new Set(getSettings().structuresDone))
  const nextUp = structureLessons.find((lesson) => !done.has(lesson.id))
  const [query, setQuery] = useState('')
  const index = useMemo(
    () => structureLessons.map((lesson) => ({ lesson, title: fold(lesson.title), text: searchText(lesson) })),
    [],
  )
  const phrase = fold(query).trim().replace(/\s+/g, ' ')
  const words = phrase.split(' ').filter(Boolean)
  // Every word has to appear somewhere in the lesson, in any order; the exact phrase in a title
  // ranks first, then the exact phrase anywhere.
  const rank = (entry: { title: string; text: string }) =>
    (hasWholePhrase(entry.title, phrase) ? 2 : 0) + (hasWholePhrase(entry.text, phrase) ? 1 : 0)
  const matches = words.length
    ? index
        .filter((entry) => words.every((word) => entry.text.includes(word)))
        .sort((a, b) => rank(b) - rank(a))
        .map((entry) => entry.lesson)
    : null

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-flag-blue">Structures</h1>
      <p className="mt-1 text-ink-muted">
        How Romanian works — explained from English, not from a grammar book. Each lesson is one habit English gives you
        that Romanian doesn't share, and a new way to think it.
      </p>

      <details className="mt-5 rounded-2xl border border-border bg-surface-muted px-5 py-4">
        <summary className="cursor-pointer font-semibold">How to learn this way</summary>
        <ol className="mt-3 flex flex-col gap-3">
          {learningPrinciples.map((principle, index) => (
            <li key={principle.title}>
              <p className="font-semibold">
                {index + 1}. {principle.title}
              </p>
              <p className="text-sm text-ink-muted">{principle.body}</p>
            </li>
          ))}
        </ol>
      </details>

      <div className="mt-3 grid grid-cols-1 gap-3">
        {nextUp && (
          <Link
            to={`/structures/${nextUp.id}`}
            className="rounded-2xl border border-flag-blue/30 bg-flag-blue/5 px-5 py-4"
          >
            <p className="text-sm text-ink-muted">{done.size === 0 ? 'Start here' : 'Next up'}</p>
            <p className="text-lg font-semibold text-flag-blue">{nextUp.title}</p>
            <p className="text-sm">{nextUp.tagline}</p>
          </Link>
        )}
        <Link to="/structures/shortcuts" className="rounded-2xl border border-border px-5 py-4">
          <p className="font-semibold">🧠 Your shortcuts</p>
          <p className="text-sm text-ink-muted">
            Every lesson's one-line rule, on one page — for a quick look before you talk.
          </p>
        </Link>
      </div>

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search lessons — past, mai, botez…"
        className="mt-6 w-full rounded-xl border border-border bg-surface px-4 py-3"
        aria-label="Search lessons"
      />

      {matches && (
        <div className="mt-3 flex flex-col gap-2">
          <p className="text-sm text-ink-muted">
            {matches.length === 0 ? 'Nothing matches that.' : `${matches.length} matching`}
          </p>
          {matches.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/structures/${lesson.id}`}
              className="rounded-xl border border-border bg-surface-muted px-4 py-3"
            >
              <span className="block font-medium">{lesson.title}</span>
              <span className="block text-sm text-ink-muted">
                {lesson.part} · {lesson.tagline}
              </span>
            </Link>
          ))}
        </div>
      )}

      {!matches && (
        <>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Parts">
            {structureParts.map(({ part }) => (
              <button
                key={part}
                type="button"
                onClick={() => document.getElementById(partAnchor(part))?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full border border-border bg-surface-muted px-3 py-1.5 text-sm"
              >
                {part}
              </button>
            ))}
          </nav>

          {structureParts.map(({ part, blurb }) => {
            const lessons = structureLessons.filter((lesson) => lesson.part === part)
            const doneCount = lessons.filter((lesson) => done.has(lesson.id)).length
            return (
              <section key={part} id={partAnchor(part)} className="mt-8 scroll-mt-4">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-flag-blue">
                  {part}{' '}
                  <span className="font-normal normal-case text-ink-muted">
                    · {doneCount} of {lessons.length} done
                  </span>
                </h2>
                <p className="text-sm text-ink-muted">{blurb}</p>
                <Link
                  to={`/driving?part=${encodeURIComponent(part)}`}
                  className="mt-2 inline-block text-sm font-semibold text-flag-blue"
                >
                  🚗 Drive with this part, mixed
                </Link>
                <div className="mt-3 flex flex-col gap-2">
                  {lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      to={`/structures/${lesson.id}`}
                      className="flex items-start gap-3 rounded-xl border border-border bg-surface-muted px-4 py-3"
                    >
                      <span
                        className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                          done.has(lesson.id) ? 'bg-flag-blue text-white' : 'border border-border text-ink-muted'
                        }`}
                        aria-label={done.has(lesson.id) ? 'Done' : undefined}
                      >
                        {done.has(lesson.id) ? '✓' : structureLessons.indexOf(lesson) + 1}
                      </span>
                      <span>
                        <span className="block font-medium">{lesson.title}</span>
                        <span className="block text-sm text-ink-muted">{lesson.tagline}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </>
      )}
    </div>
  )
}
