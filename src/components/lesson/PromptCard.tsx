interface PromptCardProps {
  prompt: string
}

export function PromptCard({ prompt }: PromptCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface-muted p-6 text-center">
      <p className="text-sm uppercase tracking-wide text-ink-muted">Say it in Romanian</p>
      <p className="mt-2 text-2xl font-semibold">{prompt}</p>
    </div>
  )
}
