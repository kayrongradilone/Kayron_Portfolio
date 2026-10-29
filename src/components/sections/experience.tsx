import { CheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { Segments } from "@/components/segments"
import type { Content } from "@/content"

export function Experience({ content }: { content: Content }) {
  const { experience, ui } = content

  return (
    <Section
      id="experience"
      index={experience.index}
      label={experience.label}
      title={experience.title}
      accent={experience.accent}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-display text-2xl leading-tight font-semibold sm:text-3xl">
            <Segments segments={experience.manifesto} />
          </p>
          <p className="mt-6 text-muted-foreground">{experience.note}</p>
        </Reveal>

        <ol className="divide-y divide-border">
          {experience.items.map((item, index) => (
            <li key={`${item.title}-${index}`} className="py-10 first:pt-0 last:pb-0">
              <Reveal delay={index * 0.05}>
                <div className="grid gap-4 sm:grid-cols-[10.5rem_1fr] sm:gap-8">
                  <span className="font-mono text-sm text-primary">{item.period}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-display text-2xl sm:text-3xl">{item.title}</h3>
                      <Badge variant="outline" className="rounded-full font-mono text-[10px] uppercase">
                        {item.type === "work" ? ui.workLabel : ui.educationLabel}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm font-medium">
                      {item.organization}
                      {item.location ? (
                        <span className="font-normal text-muted-foreground">
                          {" "}
                          · {item.location}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
                      {item.summary}
                    </p>

                    {item.highlights?.length ? (
                      <ul className="mt-4 max-w-2xl space-y-2 text-sm text-muted-foreground">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2.5">
                            <CheckIcon
                              className="mt-0.5 size-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {item.tags?.length ? (
                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <li key={tag}>
                            <Badge variant="secondary" className="rounded-full">
                              {tag}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
