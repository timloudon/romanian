import { speak, stopSpeaking, type SpeakOptions } from './speechSynthesis'
import { staticAudioManifest } from './staticAudioManifest'

export type PhraseRole = 'prompt' | 'answer'

export function phraseId(drillId: string, role: PhraseRole): string {
  return `${drillId}:${role}`
}

let activeAudioEl: HTMLAudioElement | null = null

function playStaticFile(url: string, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url)
    activeAudioEl = audio
    let settled = false

    const finish = () => {
      if (settled) return
      settled = true
      signal?.removeEventListener('abort', onAbort)
      resolve()
    }
    const onAbort = () => {
      audio.pause()
      finish()
    }

    audio.onended = finish
    audio.onerror = () => {
      if (settled) return
      settled = true
      signal?.removeEventListener('abort', onAbort)
      reject(new Error(`Failed to play audio: ${url}`))
    }

    signal?.addEventListener('abort', onAbort, { once: true })
    audio.play().catch((err: unknown) => {
      if (settled) return
      settled = true
      reject(err instanceof Error ? err : new Error(String(err)))
    })
  })
}

/**
 * The single method every player component calls to speak a phrase. Checks for a pre-generated
 * static audio file first and only falls back to live speechSynthesis — callers never know or
 * care which one actually played.
 */
export const audioResolver = {
  async speak(id: string, text: string, options: SpeakOptions): Promise<void> {
    const filePath = staticAudioManifest[id]
    if (filePath) return playStaticFile(`${import.meta.env.BASE_URL}${filePath}`, options.signal)
    return speak(text, options)
  },
  stop(): void {
    stopSpeaking()
    activeAudioEl?.pause()
    activeAudioEl = null
  },
  hasStaticAudio(id: string): boolean {
    return id in staticAudioManifest
  },
}
