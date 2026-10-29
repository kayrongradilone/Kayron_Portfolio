import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { TechIcon } from "@/components/tech-icon"
import type { Content } from "@/content"
import { cn } from "@/lib/utils"

export function Skills({ content }: { content: Content }) {
  const { skills } = content

  return (
    <Section
      id="stack"
      index={skills.index}
      label={skills.label}
      title={skills.title}
      accent={skills.accent}
      description={skills.description}
    >
      <ul className="divide-y divide-border border-y border-border">
        {skills.groups.map((group, index) => (
          <li key={group.title} className="group/row py-8 sm:py-10">
            <Reveal
              delay={index * 0.05}
              className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-12"
            >
              <div className="flex items-start gap-5">
                <span className="mt-2 font-mono text-sm text-primary">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-display text-3xl transition-colors duration-300 group-hover/row:text-primary sm:text-4xl lg:text-5xl">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{group.description}</p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={cn(
                      "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors",
                      skill.primary
                        ? "border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20"
                        : "bg-card/70 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                    )}
                  >
                    <TechIcon name={skill.icon} colored={skill.primary} className="size-4" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
