import { useState } from 'react'
import { useVoices } from '../hooks/useVoices'
import { getDB } from '../storage/db'
import { getSettings, updateSettings } from '../storage/settingsRepo'

const RATES = [0.75, 1, 1.25] as const

export function SettingsRoute() {
  const { status, romanianVoice, englishVoice } = useVoices()
  const [playbackRate, setPlaybackRate] = useState(() => getSettings().playbackRate)
  const [resetDone, setResetDone] = useState(false)

  function handleRateChange(rate: number) {
    setPlaybackRate(rate)
    updateSettings({ playbackRate: rate })
  }

  async function handleReset() {
    if (!window.confirm('Erase all local progress? This cannot be undone.')) return
    const db = await getDB()
    await db.clear('reviewState')
    setResetDone(true)
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Settings</h1>

      <section className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Voice</h2>
        <p className="mt-2 text-sm">
          {status === 'loading' && 'Checking for a Romanian voice…'}
          {status === 'ready' && `Using "${romanianVoice?.name}" for Romanian.`}
          {status === 'no-romanian-voice' &&
            'No Romanian voice found. On iPhone: Settings → Accessibility → Spoken Content → Voices → add Romanian.'}
        </p>
        {englishVoice && <p className="mt-1 text-sm text-ink-muted">Using "{englishVoice.name}" for English prompts.</p>}
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Playback speed</h2>
        <div className="mt-2 flex gap-2">
          {RATES.map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => handleRateChange(rate)}
              className={`rounded-lg border px-3 py-2 text-sm ${
                playbackRate === rate ? 'border-flag-blue bg-flag-blue/10 text-flag-blue' : 'border-border text-ink-muted'
              }`}
            >
              {rate}×
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Data</h2>
        <button
          type="button"
          onClick={() => void handleReset()}
          className="mt-2 rounded-lg border border-flag-red px-4 py-2 text-sm text-flag-red"
        >
          Erase local progress
        </button>
        {resetDone && <p className="mt-2 text-sm text-ink-muted">Done — your progress has been reset.</p>}
      </section>
    </div>
  )
}
