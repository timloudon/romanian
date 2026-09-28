import { openDB, type DBSchema, type IDBPDatabase } from 'idb'
import type { ReviewState, ReviewableKind } from './types'

interface RomanianDB extends DBSchema {
  reviewState: {
    key: [ReviewableKind, string]
    value: ReviewState
    indexes: { 'by-dueDate': string; 'by-kind': ReviewableKind }
  }
}

let dbPromise: Promise<IDBPDatabase<RomanianDB>> | null = null

export function getDB(): Promise<IDBPDatabase<RomanianDB>> {
  if (!dbPromise) {
    dbPromise = openDB<RomanianDB>('romanian-app', 1, {
      upgrade(db) {
        const store = db.createObjectStore('reviewState', { keyPath: ['kind', 'id'] })
        store.createIndex('by-dueDate', 'dueDate')
        store.createIndex('by-kind', 'kind')
      },
    })
  }
  return dbPromise
}
