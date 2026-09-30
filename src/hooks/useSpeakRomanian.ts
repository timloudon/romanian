import { useCallback, useEffect, useRef } from 'react'
import { audioResolver } from '../audio/AudioResolver'
import { getSettings } from '../storage/settingsRepo'
import { useVoices } from './useVoices'

/** Tap-to-hear for any Romanian text: the recorded clip if there is one, the device voice if not. */
export function useSpeakRomanian(): (text: string) => void {
  const { romanianVoice } = useVoices()
  // Read at speak time, so the voice list arriving late never re-creates every caller's handler.
  const voiceRef = useRef(romanianVoice)
  useEffect(() => {
    voiceRef.current = romanianVoice
  }, [romanianVoice])

  return useCallback((text: string) => {
    // Without this, tapping several phrases quickly queues them all up behind each other.
    if (window.speechSynthesis?.speaking) audioResolver.stop()
    void audioResolver.speak(text, { lang: 'ro-RO', voice: voiceRef.current, rate: getSettings().playbackRate })
  }, [])
}
