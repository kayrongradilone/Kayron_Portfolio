import type { Segment } from "@/content"
import { cn } from "@/lib/utils"

type SegmentsProps = {
  segments: Segment[]
  accentClassName?: string
}

/** Renderiza trechos de texto, com os marcados como `accent` em serifa itálica dourada. */
export function Segments({ segments, accentClassName }: SegmentsProps) {
  return (
    <>
      {segments.map((segment, index) => (
        <span key={index}>
          {index > 0 ? " " : null}
          <span
            className={cn(
              segment.accent && "font-serif-italic text-primary",
              segment.accent && accentClassName
            )}
          >
            {segment.text}
          </span>
        </span>
      ))}
    </>
  )
}
