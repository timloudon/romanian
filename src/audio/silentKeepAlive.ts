let keepAliveAudio: HTMLAudioElement | null = null

/** The single persistent <audio> element behind both the keepalive loop and MediaSession's
 *  lock-screen controls — that's the element the OS actually treats as "now playing," not the
 *  short-lived speechSynthesis utterances used for the prompts/answers themselves. */
export function getKeepAliveElement(): HTMLAudioElement {
  keepAliveAudio ??= new Audio('/audio/silence-loop.wav')
  keepAliveAudio.loop = true
  return keepAliveAudio
}

/**
 * Must be called from inside the "Start Driving Mode" tap's own event handler — iOS's autoplay
 * policy blocks unprompted audio. This is also what keeps the audio session (and so the
 * lock-screen controls) alive when the screen locks or the tab backgrounds; if it fails for any
 * reason, Driving Mode still works fine with the screen on, just without that extra resilience.
 */
export function startKeepAlive(): void {
  void getKeepAliveElement()
    .play()
    .catch(() => {
      /* swallowed — see doc comment above */
    })
}

export function stopKeepAlive(): void {
  keepAliveAudio?.pause()
}
