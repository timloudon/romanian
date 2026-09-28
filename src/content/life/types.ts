import type { Drill } from '../types'

/** One week's real-life focus: phrases to drill, plus prompts that push them into actual use at
 *  home — the part a drill app can't do for you. */
export interface LifeTopic {
  id: string
  emoji: string
  title: string
  summary: string
  intro: string
  drills: Drill[]
  conversationPrompts: string[]
}
