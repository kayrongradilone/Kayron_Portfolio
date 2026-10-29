"use client"

import { motion } from "motion/react"
import {
  BriefcaseIcon,
  FolderOpenIcon,
  HouseIcon,
  LayersIcon,
  MailIcon,
  UserIcon,
  type LucideIcon,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useActiveSection } from "@/hooks/use-active-section"
import { localePath, locales, type Content, type SectionId } from "@/content"
import { cn } from "@/lib/utils"

const icons: Record<SectionId, LucideIcon> = {
  home: HouseIcon,
  about: UserIcon,
  projects: FolderOpenIcon,
  experience: BriefcaseIcon,
  stack: LayersIcon,
  contact: MailIcon,
}

const SECTION_IDS: SectionId[] = ["home", "about", "projects", "experience", "stack", "contact"]

/**
 * Seletor PT/EN. Usa <a> de propósito: o layout raiz é o segmento dinâmico
 * [locale], e a troca de idioma precisa ser uma navegação completa.
 */
function LanguageSwitch({ content }: { content: Content }) {
  return (
    <nav
      aria-label={content.ui.languageLabel}
      className="flex items-center rounded-full border border-border/70 bg-background/70 p-1 shadow-lg shadow-black/10 backdrop-blur-xl"
    >
      {locales.map((locale) => {
        const isActive = locale === content.locale
        return (
          <a
            key={locale}
            href={localePath(locale)}
            hrefLang={locale}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider uppercase transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {locale}
          </a>
        )
      })}
    </nav>
  )
}

/**
 * Navegação flutuante: logo e controles fixos nos cantos, pílula central no
 * desktop e barra inferior no celular (alcance do polegar).
 */
export function SiteHeader({ content }: { content: Content }) {
  const active = useActiveSection(SECTION_IDS)

  return (
    <>
      <a
        href="#home"
        aria-label={content.nav[0]?.label}
        className="fixed top-4 left-4 z-40 flex size-10 items-center justify-center rounded-full border border-primary/40 bg-navy font-heading text-base font-bold text-primary shadow-lg transition-shadow hover:shadow-[0_0_0_5px_color-mix(in_oklch,var(--primary)_25%,transparent)] sm:top-5 sm:left-6"
      >
        K
      </a>

      <nav
        aria-label={content.nav[0]?.label}
        className="fixed top-4 left-1/2 z-40 hidden -translate-x-1/2 md:block"
      >
        <ul className="flex items-center gap-0.5 rounded-full border border-border/70 bg-background/70 p-1.5 shadow-lg shadow-black/10 backdrop-blur-xl">
          {content.nav.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="fixed top-4 right-4 z-40 flex items-center gap-2 sm:top-5 sm:right-6">
        <LanguageSwitch content={content} />
        <ThemeToggle
          className="size-10 rounded-full border border-border/70 bg-background/70 shadow-lg shadow-black/10 backdrop-blur-xl"
          labels={{
            toggle: content.ui.themeToggle,
            light: content.ui.themeLight,
            dark: content.ui.themeDark,
          }}
        />
      </div>

      <nav
        aria-label={content.nav[0]?.label}
        className="fixed inset-x-3 bottom-3 z-40 md:hidden"
      >
        <ul className="flex items-center justify-between rounded-full border border-border/70 bg-background/85 px-1.5 py-1.5 shadow-lg shadow-black/20 backdrop-blur-xl">
          {content.nav.map((item) => {
            const Icon = icons[item.id]
            const isActive = active === item.id
            return (
              <li key={item.id} className="flex-1">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "flex flex-col items-center gap-0.5 rounded-full py-1.5 text-[10px] font-medium transition-colors",
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {item.short}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
