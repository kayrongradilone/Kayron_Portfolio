import {
  ArrowUpRightIcon,
  GraduationCapIcon,
  LanguagesIcon,
  MapPinIcon,
} from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { LocalTime } from "@/components/effects/local-time"
import { StackOrbit } from "@/components/effects/stack-orbit"
import { person, type Content } from "@/content"

const tileLabel = "font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase"

export function About({ content }: { content: Content }) {
  const { about } = content

  return (
    <Section
      id="about"
      index={about.index}
      label={about.label}
      title={about.title}
      accent={about.accent}
    >
      <div className="grid auto-rows-[minmax(10rem,auto)] gap-4 md:grid-cols-6 lg:grid-cols-12">
        <Reveal className="bento-tile flex flex-col md:col-span-6 lg:col-span-8 lg:row-span-2">
          <p className={tileLabel}>{about.manifestoLabel}</p>
          <p className="text-display mt-5 text-2xl leading-tight font-semibold sm:text-3xl lg:text-[2.1rem]">
            {about.manifesto}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05} className="bento-tile md:col-span-3 lg:col-span-4">
          <p className={tileLabel}>{about.clockLabel}</p>
          <LocalTime
            intlLocale={content.intlLocale}
            className="text-display mt-4 block text-5xl sm:text-6xl"
          />
          <p className="mt-3 text-sm text-muted-foreground">{about.clockNote}</p>
          <MapPinIcon
            aria-hidden="true"
            className="absolute right-6 bottom-6 size-10 text-primary/30"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="bento-tile flex flex-col justify-between border-primary bg-primary text-primary-foreground md:col-span-3 lg:col-span-4"
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase">{about.contactLabel}</p>
          <p className="text-display mt-6 text-2xl sm:text-3xl">{about.contactText}</p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-1 self-start font-medium underline-offset-4 hover:underline"
          >
            {about.contactCta}
            <ArrowUpRightIcon className="size-4" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal
          delay={0.15}
          className="bento-tile flex flex-col md:col-span-3 lg:col-span-4 lg:row-span-2"
        >
          <p className={tileLabel}>{about.orbitLabel}</p>
          <div className="flex flex-1 items-center justify-center py-8">
            <StackOrbit label={about.orbitLabel} />
          </div>
        </Reveal>

        {about.stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={0.2 + index * 0.05}
            className="bento-tile md:col-span-3 lg:col-span-4"
          >
            <p className="text-display text-6xl text-primary sm:text-7xl">{stat.value}</p>
            <p className="mt-3 text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}

        <Reveal delay={0.3} className="bento-tile md:col-span-3 lg:col-span-4">
          <GraduationCapIcon className="size-6 text-primary" aria-hidden="true" />
          <p className="mt-4 font-medium">{about.education}</p>
          <p className="mt-2 text-sm text-muted-foreground">{about.educationNote}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <LanguagesIcon className="size-4" aria-hidden="true" />
            {about.languages}
          </p>
        </Reveal>

        <Reveal
          delay={0.35}
          className="bento-tile flex flex-col justify-center gap-2 md:col-span-3 lg:col-span-4"
        >
          {[
            { label: "GitHub", value: "@kayrongradilone", href: person.socials.github, Icon: FaGithub },
            { label: "LinkedIn", value: "in/kayrongradilone", href: person.socials.linkedin, Icon: FaLinkedinIn },
          ].map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border bg-background/60 px-4 py-3 transition-colors hover:border-primary/50"
            >
              <Icon className="size-4 text-primary" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {label}
                </span>
                <span className="block truncate text-sm font-medium">{value}</span>
              </span>
              <ArrowUpRightIcon
                className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </a>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
