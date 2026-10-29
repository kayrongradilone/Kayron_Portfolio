import { ArrowUpIcon, DownloadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { person, type Content } from "@/content"
import { getDerivedStats } from "@/lib/stats"

export async function SiteFooter({ content }: { content: Content }) {
  const { year } = await getDerivedStats()

  return (
    <footer className="border-t pt-12 pb-28 md:pb-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <a href="#home" className="font-heading text-lg font-bold tracking-tight">
              {person.firstName}
              <span className="text-primary">.</span>
            </a>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {content.ui.builtWith}
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
              © {year} · {person.name} · {content.location}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {content.nav.slice(1).map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <SocialLinks label={content.ui.socialLabel} />
              <Button asChild variant="outline" className="rounded-full">
                <a href={person.cv[content.locale]} download>
                  <DownloadIcon data-icon="inline-start" />
                  {content.ui.downloadCv}
                </a>
              </Button>
              <Button asChild variant="ghost" className="rounded-full">
                <a href="#home">
                  {content.ui.backToTop}
                  <ArrowUpIcon data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
