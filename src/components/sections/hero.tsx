import { ArrowDownIcon, DownloadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/effects/reveal-text"
import { Magnetic } from "@/components/effects/magnetic"
import { Marquee } from "@/components/effects/marquee"
import { StackCube } from "@/components/effects/stack-cube"
import { SocialLinks } from "@/components/social-links"
import { person, type Content } from "@/content"


function HeroCube() {
  return (
    <div className="group relative lg:-translate-y-25 [--cube-size:10rem] sm:[--cube-size:11.5rem] lg:[--cube-size:13.5rem] xl:[--cube-size:16rem]">
      <div
        aria-hidden="true"
        className="absolute inset-[18%] rounded-full bg-primary/30 opacity-80 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-primary/25"
      />
      <StackCube className="relative" />
    </div>
  )
}

export function Hero({ content }: { content: Content }) {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 lg:min-h-svh"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-primary/15 blur-3xl dark:bg-primary/10"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
          <span>{content.ui.portfolioTag}</span>
          <span className="hidden sm:inline">{content.location}</span>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="min-w-0">
            <Reveal delay={0.1}>
              <p className="text-lg font-medium sm:text-xl">
                {person.name}
                <span className="text-muted-foreground"> · {content.role}</span>
              </p>
            </Reveal>

            <h1 className="text-display mt-4 text-[clamp(2.6rem,6.8vw,5.9rem)]">
              <RevealText segments={content.hero.headline} delay={0.2} />
            </h1>

            <Reveal delay={0.55}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg lg:text-xl">
                {content.hero.summary}
              </p>
            </Reveal>

            <Reveal
              delay={0.7}
              className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-4"
            >
              <Magnetic>
                <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
                  <a href={person.cv[content.locale]} download>
                    <DownloadIcon data-icon="inline-start" />
                    {content.ui.downloadCv}
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full px-7 text-base"
                >
                  <a href="#projects">
                    {content.ui.viewProjects}
                    <ArrowDownIcon data-icon="inline-end" />
                  </a>
                </Button>
              </Magnetic>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-12 rounded-full px-5 text-base"
              >
                <a href="#contact">{content.ui.letsTalk}</a>
              </Button>
              <SocialLinks label={content.ui.socialLabel} />
            </Reveal>

            <Reveal delay={0.85}>
              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-border/60 pt-6">
                {content.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="text-display text-3xl text-primary sm:text-4xl">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal
            delay={0.35}
            y={40}
            className="justify-self-center pb-2 lg:justify-self-end lg:pr-6"
          >
            <HeroCube />
          </Reveal>
        </div>
      </div>

      <div className="relative mt-16 border-y border-border/60 py-5 sm:py-6 lg:mt-20">
        <Marquee
          items={person.marquee}
          className="text-display text-3xl text-foreground/90 sm:text-5xl"
        />
      </div>
    </section>
  )
}
