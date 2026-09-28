import { useEffect, useState } from 'react'
import { findVoice, getVoicesAsync } from '../audio/speechSynthesis'

export type VoiceStatus = 'loading' | 'ready' | 'no-romanian-voice'

export function useVoices() {
  const [status, setStatus] = useState<VoiceStatus>('loading')
  const [romanianVoice, setRomanianVoice] = useState<SpeechSynthesisVoice | undefined>(undefined)
  const [englishVoice, setEnglishVoice] = useState<SpeechSynthesisVoice | undefined>(undefined)

  useEffect(() => {
    let cancelled = false
    void getVoicesAsync().then((voices) => {
      if (cancelled) return
      const ro = findVoice(voices, 'ro')
      setRomanianVoice(ro)
      setEnglishVoice(findVoice(voices, 'en'))
      setStatus(ro ? 'ready' : 'no-romanian-voice')
    })
    return () => {
      cancelled = true
    }
  }, [])

  return { status, romanianVoice, englishVoice }
}
