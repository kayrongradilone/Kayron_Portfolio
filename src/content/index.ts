import { en } from "./en"
import { pt } from "./pt"
import type { Content, Locale } from "./types"

const dictionaries: Record<Locale, Content> = { pt, en }

export function getContent(locale: Locale): Content {
  return dictionaries[locale]
}

export { person } from "./shared"
export * from "./types"
