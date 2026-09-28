import { getDB } from './db'
import type { ReviewableRef, ReviewState } from './types'

export function todayISODate(date: Date = new Date()): string {
  return date.toISOString().slice(0, 10)
}

export async function getReviewState(ref: ReviewableRef): Promise<ReviewState | undefined> {
  const db = await getDB()
  return db.get('reviewState', [ref.kind, ref.id])
}

export async function putReviewState(state: ReviewState): Promise<void> {
  const db = await getDB()
  await db.put('reviewState', state)
}

/** Everything due today or overdue. */
export async function getDueItems(today: string = todayISODate()): Promise<ReviewState[]> {
  const db = await getDB()
  return db.getAllFromIndex('reviewState', 'by-dueDate', IDBKeyRange.upperBound(today))
}

export async function getAllReviewStates(): Promise<ReviewState[]> {
  const db = await getDB()
  return db.getAll('reviewState')
}
