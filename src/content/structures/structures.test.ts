import { describe, expect, it } from 'vitest'
import { isCorrectOrder, tilesFor } from '../../engine/tiles'
import { roCore } from '../courses/ro-core'
import { structureLessons, structureParts, structureRomanianPhrases } from '.'

const courseLessonIds = new Set(roCore.units.flatMap((unit) => unit.lessons.map((lesson) => lesson.id)))

function allText(value: unknown): string[] {
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.flatMap(allText)
  if (value && typeof value === 'object') return Object.values(value).flatMap(allText)
  return []
}

describe('structures content', () => {
  it('gives every lesson a unique id and a known part', () => {
    const ids = structureLessons.map((lesson) => lesson.id)
    expect(new Set(ids).size).toBe(ids.length)
    const parts = new Set(structureParts.map((entry) => entry.part))
    for (const lesson of structureLessons) expect(parts.has(lesson.part), lesson.id).toBe(true)
  })

  it('gives every lesson something to say out loud', () => {
    for (const lesson of structureLessons) {
      expect(lesson.steps.some((step) => step.kind === 'ladder'), lesson.id).toBe(true)
    }
  })

  it('has exactly one right answer in every "spot the habit" question', () => {
    for (const lesson of structureLessons) {
      for (const step of lesson.steps) {
        if (step.kind !== 'choose') continue
        expect(step.options.filter((option) => option.correct).length, `${lesson.id}: ${step.question}`).toBe(1)
      }
    }
  })

  it('builds every tile sentence from its own tiles, with no distractor that is also in the answer', () => {
    for (const lesson of structureLessons) {
      for (const step of lesson.steps) {
        if (step.kind !== 'assemble') continue
        const tiles = tilesFor(step.answer, step.distractors)
        const answerTiles = tiles.slice(0, tiles.length - (step.distractors?.length ?? 0))
        expect(isCorrectOrder(answerTiles, step.answer), step.answer).toBe(true)
        for (const distractor of step.distractors ?? []) {
          expect(answerTiles.map((tile) => tile.toLowerCase()), step.answer).not.toContain(distractor.toLowerCase())
        }
      }
    }
  })

  it('only points at course lessons that exist', () => {
    for (const lesson of structureLessons) {
      if (lesson.seeAlso) expect(courseLessonIds.has(lesson.seeAlso.lessonId), lesson.id).toBe(true)
    }
  })

  it('never leaves bold or Romanian markup unclosed', () => {
    for (const lesson of structureLessons) {
      for (const text of allText(lesson)) {
        expect(text.split('{{').length, text).toBe(text.split('}}').length)
        expect((text.match(/\*\*/g) ?? []).length % 2, text).toBe(0)
      }
    }
  })

  it('collects the playable Romanian without leftover markup', () => {
    for (const lesson of structureLessons) {
      for (const phrase of structureRomanianPhrases(lesson)) expect(phrase).not.toMatch(/[{}*]/)
    }
  })
})
