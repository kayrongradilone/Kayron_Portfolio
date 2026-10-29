export const locales = ["pt", "en"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "pt"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Caminho base de cada idioma. O português vive na raiz via rewrite. */
export function localePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`
}

export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "experience"
  | "stack"
  | "contact"

export type NavItem = { id: SectionId; label: string; short: string }
export type Stat = { value: string; label: string }

export type Skill = { name: string; icon: string; primary?: boolean }
export type SkillGroup = { title: string; description: string; skills: Skill[] }

export type TimelineItem = {
  type: "work" | "education"
  title: string
  organization: string
  period: string
  location?: string
  summary: string
  highlights?: string[]
  tags?: string[]
}

export type Project = {
  slug: string
  title: string
  description: string
  cover: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
  year?: string
}

export type Segment = { text: string; accent?: boolean }

export type Content = {
  locale: Locale
  /** Valor do atributo lang do <html>. */
  htmlLang: string
  /** Locale usado pelo Intl (datas, horas). */
  intlLocale: string
  role: string
  location: string
  meta: {
    title: string
    description: string
    keywords: string[]
    ogHeadline: string
  }
  nav: NavItem[]
  ui: {
    skipToContent: string
    portfolioTag: string
    downloadCv: string
    viewProjects: string
    letsTalk: string
    backToTop: string
    builtWith: string
    themeToggle: string
    themeLight: string
    themeDark: string
    languageLabel: string
    socialLabel: string
    workLabel: string
    educationLabel: string
    viewOnline: string
    code: string
    moreOnGithub: string
    stackPill: string
  }
  hero: {
    headline: Segment[]
    summary: string
    stats: Stat[]
  }
  about: {
    index: string
    label: string
    title: string
    accent: string
    manifestoLabel: string
    manifesto: string
    paragraphs: string[]
    clockLabel: string
    clockNote: string
    contactLabel: string
    contactText: string
    contactCta: string
    orbitLabel: string
    stats: Stat[]
    education: string
    educationNote: string
    languages: string
  }
  projects: {
    index: string
    label: string
    title: string
    accent: string
    description: string
    items: Project[]
  }
  experience: {
    index: string
    label: string
    title: string
    accent: string
    manifesto: Segment[]
    note: string
    items: TimelineItem[]
  }
  skills: {
    index: string
    label: string
    title: string
    accent: string
    description: string
    groups: SkillGroup[]
  }
  contact: {
    index: string
    label: string
    title: string
    accent: string
    description: string
    otherChannels: string
    formTitle: string
    formNote: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      subject: string
      subjectPlaceholder: string
      message: string
      messagePlaceholder: string
      send: string
      sending: string
      success: string
      successDescription: string
      error: string
      errorDescription: string
      privacy: string
    }
  }
  notFound: {
    title: string
    description: string
    back: string
  }
}
