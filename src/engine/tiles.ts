/** Word tiles for the Structures "put it together" step. */

function words(sentence: string): string[] {
  return sentence
    .replace(/[.,!?…]/g, '')
    .split(/\s+/)
    .filter(Boolean)
}

/** The answer's words — first letter lowered, so the capital doesn't give the start away — plus
 *  any distractors. Unshuffled; the component shuffles. */
export function tilesFor(answer: string, distractors: string[] = []): string[] {
  const answerWords = words(answer)
  answerWords[0] = answerWords[0].charAt(0).toLowerCase() + answerWords[0].slice(1)
  return [...answerWords, ...distractors]
}

export function isCorrectOrder(chosen: string[], answer: string): boolean {
  const expected = words(answer).map((word) => word.toLowerCase())
  return chosen.length === expected.length && chosen.every((word, index) => word.toLowerCase() === expected[index])
}
