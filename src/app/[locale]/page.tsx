import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"
import { getContent, isLocale } from "@/content"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const content = getContent(locale)

  return (
    <>
      <a
        href="#content"
        className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2"
      >
        {content.ui.skipToContent}
      </a>
      <SiteHeader content={content} />
      <main id="content" className="flex-1">
        <Hero content={content} />
        <About content={content} />
        <Projects content={content} />
        <Experience content={content} />
        <Skills content={content} />
        <Contact content={content} />
      </main>
      <SiteFooter content={content} />
    </>
  )
}
