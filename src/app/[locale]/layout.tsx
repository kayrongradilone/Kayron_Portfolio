import type { Metadata, Viewport } from "next"
import { Providers } from "@/components/providers"
import { Spotlight } from "@/components/effects/spotlight"
import { ScrollProgress } from "@/components/effects/scroll-progress"
import { fontVariables } from "@/lib/fonts"
import {
  defaultLocale,
  getContent,
  isLocale,
  localePath,
  locales,
  person,
} from "@/content"
import "../globals.css"

type Params = Promise<{ locale: string }>

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale = isLocale(raw) ? raw : defaultLocale
  const content = getContent(locale)
  const path = localePath(locale)

  return {
    metadataBase: new URL(person.siteUrl),
    title: {
      default: content.meta.title,
      template: `%s · ${person.name}`,
    },
    description: content.meta.description,
    keywords: content.meta.keywords,
    authors: [{ name: person.name, url: person.siteUrl }],
    creator: person.name,
    alternates: {
      canonical: path,
      languages: {
        "pt-BR": localePath("pt"),
        en: localePath("en"),
        "x-default": localePath(defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt" ? ["en_US"] : ["pt_BR"],
      url: path,
      siteName: person.name,
      title: content.meta.title,
      description: content.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
    robots: { index: true, follow: true },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Params }>) {
  const { locale: raw } = await params
  const content = getContent(isLocale(raw) ? raw : defaultLocale)

  return (
    <html
      lang={content.htmlLang}
      suppressHydrationWarning
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>
          <ScrollProgress />
          <Spotlight />
          <div className="grain" aria-hidden="true" />
          {children}
        </Providers>
      </body>
    </html>
  )
}
