export interface MediaSessionHandlers {
  onPlay: () => void
  onPause: () => void
  onNext: () => void
  onPrev: () => void
}

export function setMediaSessionMetadata(title: string): void {
  if (!('mediaSession' in navigator)) return
  navigator.mediaSession.metadata = new MediaMetadata({
    title,
    artist: 'Romanian Practice',
    album: 'Driving Mode',
  })
}

export function setMediaSessionPlaybackState(state: 'playing' | 'paused'): void {
  if (!('mediaSession' in navigator)) return
  navigator.mediaSession.playbackState = state
}

export function setMediaSessionHandlers(handlers: MediaSessionHandlers): () => void {
  if (!('mediaSession' in navigator)) return () => undefined

  navigator.mediaSession.setActionHandler('play', handlers.onPlay)
  navigator.mediaSession.setActionHandler('pause', handlers.onPause)
  navigator.mediaSession.setActionHandler('nexttrack', handlers.onNext)
  navigator.mediaSession.setActionHandler('previoustrack', handlers.onPrev)

  return () => {
    navigator.mediaSession.setActionHandler('play', null)
    navigator.mediaSession.setActionHandler('pause', null)
    navigator.mediaSession.setActionHandler('nexttrack', null)
    navigator.mediaSession.setActionHandler('previoustrack', null)
  }
}
