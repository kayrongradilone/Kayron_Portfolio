import { cn } from "@/lib/utils"

type MarqueeProps = {
  items: readonly string[]
  className?: string
}

/** Ticker infinito em CSS puro. O conteúdo é duplicado para o loop ficar contínuo. */
export function Marquee({ items, className }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
    >
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="flex items-center gap-10 whitespace-nowrap sm:gap-14"
        >
          <span className={index % 2 === 1 ? "text-outline" : undefined}>{item}</span>
          <span className="text-[0.5em] text-primary" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
