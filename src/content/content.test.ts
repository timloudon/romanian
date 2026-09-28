import { describe, expect, it } from 'vitest'
import { everyDrill } from '.'
import { roCore } from './courses/ro-core'
import { lifeTopics } from './life'

function duplicates(ids: string[]): string[] {
  return ids.filter((id, index) => ids.indexOf(id) !== index)
}

describe('content integrity', () => {
  it('gives every drill a unique id across the course and weekly topics', () => {
    // Progress is keyed by drill id — a duplicate would make two phrases share one review history.
    expect(duplicates(everyDrill().map((drill) => drill.id))).toEqual([])
  })

  it('gives every lesson and weekly topic a unique id', () => {
    const lessonIds = roCore.units.flatMap((unit) => unit.lessons.map((lesson) => lesson.id))
    expect(duplicates([...lessonIds, ...lifeTopics.map((topic) => topic.id)])).toEqual([])
  })

  it('has a prompt and an answer on every drill', () => {
    for (const drill of everyDrill()) {
      expect(drill.prompt.trim(), drill.id).not.toBe('')
      expect(drill.answer.trim(), drill.id).not.toBe('')
    }
  })

  it('gives every weekly topic phrases to drill and something to try for real', () => {
    for (const topic of lifeTopics) {
      expect(topic.drills.length, topic.id).toBeGreaterThan(0)
      expect(topic.conversationPrompts.length, topic.id).toBeGreaterThan(0)
    }
  })
})
