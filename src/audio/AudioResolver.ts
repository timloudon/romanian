import { playClip, stopClip } from './player'
import { recordedClipUrl } from './recordedAudio'
import { speak as speakWithSynthesis, stopSpeaking, type SpeakOptions } from './speechSynthesis'

/**
 * The single method every player component calls to speak a phrase. Plays the pre-recorded clip
 * when there is one, otherwise the device's built-in voice — callers never know or care which.
 */
export const audioResolver = {
  async speak(text: string, options: SpeakOptions): Promise<void> {
    const clip = recordedClipUrl(text, options.lang)
    if (clip) {
      try {
        return await playClip(clip, { rate: options.rate, signal: options.signal })
      } catch {
        // A clip that won't play shouldn't leave silence — fall through to the built-in voice.
      }
    }
    return speakWithSynthesis(text, options)
  },
  stop(): void {
    stopSpeaking()
    stopClip()
  },
}
