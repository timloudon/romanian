export type ReviewableKind = 'drill' | 'vocab'

/** Points at one drillable/reviewable thing — a course Drill or a VocabItem — without a hard
 *  foreign key into either content schema. `id` is the Drill/VocabItem id. */
export interface ReviewableRef {
  kind: ReviewableKind
  id: string
}

export interface ReviewState extends ReviewableRef {
  /** Leitner box, 1-5. Never 0 — a row only exists once something has been reviewed at least once. */
  box: number
  /** ISO 'YYYY-MM-DD'. Plain string comparison is also chronological comparison. */
  dueDate: string
  lastReviewedAt: string | null
  lapseCount: number
  reviewCount: number
  createdAt: string
}

/** Which weekly real-life topic is the current focus, and when it was picked. */
export interface LifeFocus {
  topicId: string
  startedAt: string
}

export interface Settings {
  drivingNoticeAcknowledged: boolean
  installBannerDismissed: boolean
  preferredVoiceURI: string | null
  playbackRate: number
  lifeFocus: LifeFocus | null
  /** Structures lessons read to the end — shown as a quiet tick, nothing more. */
  structuresDone: string[]
}
