/**
 * One shared <audio> element for every recorded clip, the Driving Mode keep-alive loop, and the
 * lock-screen "now playing" session.
 *
 * It's a single element on purpose: iOS only lets a media element play without a fresh tap once
 * that same element has been played from a tap. Unlock it once (unlockAudio, from any tap) and
 * every later clip can start on its own — which Driving Mode, advancing on timers, depends on.
 */
const SILENCE_URL = `${import.meta.env.BASE_URL}audio/silence-loop.wav`

let element: HTMLAudioElement | null = null
let unlocked = false
let keepAlive = false
let cancelCurrent: (() => void) | null = null

function audio(): HTMLAudioElement {
  element ??= new Audio()
  return element
}

function playSilenceLoop() {
  const el = audio()
  el.loop = true
  if (!el.src.endsWith('silence-loop.wav')) el.src = SILENCE_URL
  void el.play().catch(() => {
    /* not unlocked yet — the next tap will get it going */
  })
}

/** Call from inside a tap/click handler. Safe to call on every tap; it only works once. */
export function unlockAudio(): void {
  if (unlocked) return
  const el = audio()
  el.loop = false
  el.src = SILENCE_URL
  el.play()
    .then(() => {
      unlocked = true
      if (!cancelCurrent && !keepAlive) el.pause()
    })
    .catch(() => {
      /* not a qualifying gesture — the next tap tries again */
    })
}

/** Loops silence between clips so iOS keeps the audio session (and lock-screen controls) alive. */
export function setKeepAlive(on: boolean): void {
  keepAlive = on
  if (cancelCurrent) return
  if (on) playSilenceLoop()
  else audio().pause()
}

export function playClip(url: string, options: { rate?: number; signal?: AbortSignal } = {}): Promise<void> {
  cancelCurrent?.()
  const el = audio()

  return new Promise((resolve, reject) => {
    if (options.signal?.aborted) {
      resolve()
      return
    }

    let settled = false
    const settle = (error?: Error) => {
      if (settled) return
      settled = true
      el.removeEventListener('ended', onEnded)
      el.removeEventListener('error', onError)
      options.signal?.removeEventListener('abort', cancel)
      if (cancelCurrent === cancel) cancelCurrent = null
      if (keepAlive) playSilenceLoop()
      if (error) reject(error)
      else resolve()
    }
    const onEnded = () => settle()
    const onError = () => settle(new Error(`Couldn't play ${url}`))
    const cancel = () => {
      el.pause()
      settle()
    }

    cancelCurrent = cancel
    el.loop = false
    el.src = url
    el.playbackRate = options.rate ?? 1
    el.addEventListener('ended', onEnded)
    el.addEventListener('error', onError)
    options.signal?.addEventListener('abort', cancel, { once: true })
    el.play().catch((error: unknown) => settle(error instanceof Error ? error : new Error(String(error))))
  })
}

export function stopClip(): void {
  cancelCurrent?.()
}
