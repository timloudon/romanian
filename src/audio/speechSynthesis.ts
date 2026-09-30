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

    utterance.onend = () => {
      options.signal?.removeEventListener('abort', onAbort)
      resolve()
    }
    utterance.onerror = (event) => {
      options.signal?.removeEventListener('abort', onAbort)
      // These fire when we intentionally cancel() (abort, or a new utterance interrupting this
      // one) — that's a clean stop, not a real failure.
      if (event.error === 'interrupted' || event.error === 'canceled') {
        resolve()
      } else {
        reject(new Error(`speechSynthesis error: ${event.error}`))
      }
    }

    options.signal?.addEventListener('abort', onAbort, { once: true })
    window.speechSynthesis.speak(utterance)
  })
}

export function stopSpeaking(): void {
  window.speechSynthesis.cancel()
}
