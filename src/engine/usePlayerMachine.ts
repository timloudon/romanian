import { useCallback, useReducer } from 'react'
import type { ReviewableRef } from '../storage/types'
import { currentItem, initPlayerState, playerReducer, type PlayerMode } from './playerMachine'
import { recordOutcome } from './recordOutcome'
import { sessionItemId, type SessionItem } from './session'

function toReviewableRef(item: SessionItem): ReviewableRef {
  return { kind: item.kind, id: sessionItemId(item) }
}

/** The part that's genuinely shared between typed mode and Driving Mode: state transitions plus
 *  persisting an SRS outcome whenever something is actually self-assessed. Audio timing/auto-
 *  advance is mode-specific UX and lives in each mode's own player component instead. */
export function usePlayerMachine(mode: PlayerMode, queue: SessionItem[]) {
  const [state, dispatch] = useReducer(playerReducer, undefined, () => initPlayerState(mode, queue))
  const item = currentItem(state)

  const selfAssess = useCallback(
    (outcome: 'got-it' | 'not-yet') => {
      if (item) void recordOutcome(toReviewableRef(item), outcome)
      dispatch({ type: 'SELF_ASSESS', outcome })
    },
    [item],
  )

  return { state, item, dispatch, selfAssess }
}
