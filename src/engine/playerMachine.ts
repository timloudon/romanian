import { requeue, type SessionItem } from './session'

export type PlayerPhase =
  | { kind: 'prompt' }
  | { kind: 'revealed' }
  | { kind: 'graded'; correct: boolean; typedAnswer: string }
  | { kind: 'awaiting-self-assessment' }
  | { kind: 'complete' }

export type PlayerMode = 'typed' | 'driving'

export interface PlayerState {
  queue: SessionItem[]
  index: number
  phase: PlayerPhase
  mode: PlayerMode
}

export type PlayerAction =
  | { type: 'REVEAL' }
  | { type: 'SUBMIT_TYPED'; value: string; correct: boolean }
  | { type: 'SELF_ASSESS'; outcome: 'got-it' | 'not-yet' }
  | { type: 'TIMEOUT_ADVANCE' }
  | { type: 'SKIP_BACK' }

export function initPlayerState(mode: PlayerMode, queue: SessionItem[]): PlayerState {
  return { queue, index: 0, phase: { kind: 'prompt' }, mode }
}

export function currentItem(state: PlayerState): SessionItem | undefined {
  return state.queue[state.index]
}

function moveTo(state: PlayerState, queue: SessionItem[], nextIndex: number): PlayerState {
  if (nextIndex >= queue.length) return { ...state, queue, index: nextIndex, phase: { kind: 'complete' } }
  return { ...state, queue, index: nextIndex, phase: { kind: 'prompt' } }
}

/**
 * One reducer drives both the typed-mode player and Driving Mode against the same queue — they
 * differ only in which phases they use (typed: prompt -> graded/revealed; driving: prompt ->
 * awaiting-self-assessment) and whether a UI component advances them by tap or by timer.
 */
export function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case 'REVEAL': {
      if (state.phase.kind !== 'prompt') return state
      const nextPhase: PlayerPhase = state.mode === 'driving' ? { kind: 'awaiting-self-assessment' } : { kind: 'revealed' }
      return { ...state, phase: nextPhase }
    }

    case 'SUBMIT_TYPED': {
      if (state.phase.kind !== 'prompt') return state
      return { ...state, phase: { kind: 'graded', correct: action.correct, typedAnswer: action.value } }
    }

    case 'SELF_ASSESS': {
      const assessable: PlayerPhase['kind'][] = ['awaiting-self-assessment', 'revealed', 'graded']
      if (!assessable.includes(state.phase.kind)) return state

      const item = currentItem(state)
      if (action.outcome === 'not-yet' && item) {
        // Requeuing removes the current slot and shifts everything left by one, so the *same*
        // index now holds what used to be next — advancing to index+1 here would skip an item.
        const queue = requeue(state.queue, state.index, item)
        return moveTo(state, queue, state.index)
      }
      return moveTo(state, state.queue, state.index + 1)
    }

    case 'TIMEOUT_ADVANCE': {
      // Fires either when the response window elapses with no tap, or from a manual "skip"
      // control (e.g. a lock-screen next-track button) mid-prompt. Either way it's a neutral
      // pass, not a lapse — no requeue, no SRS write (that happens in usePlayerMachine, keyed
      // off SELF_ASSESS only). Keeps Driving Mode fully usable with zero screen contact.
      if (state.phase.kind !== 'awaiting-self-assessment' && state.phase.kind !== 'prompt') return state
      return moveTo(state, state.queue, state.index + 1)
    }

    case 'SKIP_BACK': {
      // For a lock-screen/Bluetooth "previous" control — replays the prior item. If it was
      // already assessed, this simply lets it be heard (and optionally re-assessed) again.
      return moveTo(state, state.queue, Math.max(0, state.index - 1))
    }

    default:
      return state
  }
}
