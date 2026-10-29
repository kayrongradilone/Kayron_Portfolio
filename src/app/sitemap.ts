import type { MetadataRoute } from "next"
import { localePath, locales, person } from "@/content"

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    "pt-BR": `${person.siteUrl}${localePath("pt")}`,
    en: `${person.siteUrl}${localePath("en")}`,
  }

  return locales.map((locale) => ({
    url: `${person.siteUrl}${localePath(locale)}`,
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.9,
    alternates: { languages },
  }))
}
