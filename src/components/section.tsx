import { RevealText } from "@/components/effects/reveal-text"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

type SectionProps = React.ComponentProps<"section"> & {
  id: string
  /** Numeração editorial, ex.: "01". */
  index: string
  /** Rótulo curto ao lado do índice, ex.: "Sobre". */
  label: string
  title: string
  /** Palavras finais do título em serifa itálica dourada. */
  accent?: string
  description?: string
}

export function Section({
  id,
  index,
  label,
  title,
  accent,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-6 py-24 sm:py-32", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <header className="mb-14 sm:mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            {index} — {label}
          </p>
          <h2 className="text-display mt-4 text-[clamp(2.75rem,7vw,6rem)]">
            <RevealText text={title} accent={accent} />
          </h2>
          {description ? (
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl">
                {description}
              </p>
            </Reveal>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}
