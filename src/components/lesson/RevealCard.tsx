interface RevealCardProps {
  answer: string
  teachingNote?: string
}

export function RevealCard({ answer, teachingNote }: RevealCardProps) {
  return (
    <div className="mt-4 rounded-2xl border border-flag-blue/30 bg-flag-blue/5 p-6 text-center">
      <p className="text-sm uppercase tracking-wide text-ink-muted">In Romanian</p>
      <p className="mt-2 text-2xl font-semibold text-flag-blue">{answer}</p>
      {teachingNote && <p className="mt-3 text-sm text-ink-muted">{teachingNote}</p>}
    </div>
  )
}
