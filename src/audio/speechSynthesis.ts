let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null

/**
 * iOS Safari can return an empty array from getVoices() until the async `voiceschanged` event
 * fires — and doesn't always fire it reliably — so this waits for either the event or a short
 * poll, instead of trusting a single synchronous call.
 */
export function getVoicesAsync(): Promise<SpeechSynthesisVoice[]> {
  if (voicesPromise) return voicesPromise

  voicesPromise = new Promise((resolve) => {
    const existing = window.speechSynthesis.getVoices()
    if (existing.length > 0) {
      resolve(existing)
      return
    }

    let settled = false
    let pollId: ReturnType<typeof setInterval>
    const finish = (voices: SpeechSynthesisVoice[]) => {
      if (settled) return
      settled = true
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged)
      clearInterval(pollId)
      resolve(voices)
    }
    const onVoicesChanged = () => finish(window.speechSynthesis.getVoices())

    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)
    let attempts = 0
    pollId = setInterval(() => {
      attempts++
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0 || attempts > 20) finish(voices)
    }, 250)
  })

  return voicesPromise
}

export function findVoice(voices: SpeechSynthesisVoice[], langPrefix: string): SpeechSynthesisVoice | undefined {
  const matching = voices.filter((voice) => voice.lang.toLowerCase().startsWith(langPrefix))
  // Prefer on-device voices: some browsers (desktop/Android Chrome) also list streamed voices
  // that fail without a connection. iPhone voices are all on-device.
  return matching.find((voice) => voice.localService) ?? matching[0]
}

export interface SpeakOptions {
  lang: string
  voice?: SpeechSynthesisVoice
  rate?: number
  signal?: AbortSignal
}

/** Utterances kept alive until they finish: some browsers garbage-collect an unreferenced
 *  utterance mid-speech, and its end event is then never delivered. */
const speaking = new Set<SpeechSynthesisUtterance>()

/** Generous upper bound on how long a phrase takes to say — the safety net for when a browser
 *  never fires end (or error) at all, which would otherwise stall anything awaiting speech,
 *  Driving Mode included. */
function maxSpeechMs(text: string, rate: number): number {
  return (2000 + text.length * 120) / Math.max(rate, 0.5)
}

export function speak(text: string, options: SpeakOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    if (options.signal?.aborted) {
      resolve()
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = options.lang
    if (options.voice) utterance.voice = options.voice
    utterance.rate = options.rate ?? 1

    const onAbort = () => window.speechSynthesis.cancel()
    let watchdog: ReturnType<typeof setTimeout> | undefined
    const settle = (error?: Error) => {
      if (!speaking.delete(utterance)) return
      clearTimeout(watchdog)
      options.signal?.removeEventListener('abort', onAbort)
      if (error) reject(error)
      else resolve()
    }

    utterance.onend = () => settle()
    utterance.onerror = (event) => {
      // These fire when we intentionally cancel() (abort, or a new utterance interrupting this
      // one) — that's a clean stop, not a real failure.
      if (event.error === 'interrupted' || event.error === 'canceled') settle()
      else settle(new Error(`speechSynthesis error: ${event.error}`))
    }

    speaking.add(utterance)
    watchdog = setTimeout(() => settle(), maxSpeechMs(text, utterance.rate))
    options.signal?.addEventListener('abort', onAbort, { once: true })
    window.speechSynthesis.speak(utterance)
  })
}

export function stopSpeaking(): void {
  window.speechSynthesis.cancel()
}

let primed = false

/** iOS won't let speech start outside a tap until it's been started from one once. An empty
 *  utterance from inside any tap handler is enough to unlock it for the rest of the session. */
export function primeSpeechSynthesis(): void {
  if (primed || !('speechSynthesis' in window)) return
  primed = true
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(''))
}
