"use client"

import { motion } from "motion/react"
import type { Segment } from "@/content"
import { cn } from "@/lib/utils"

type RevealTextProps = {
  /** Texto simples (todas as palavras normais). */
  text?: string
  /** Palavras finais em serifa itálica dourada, quando usado com `text`. */
  accent?: string
  /** Alternativa a `text`: trechos com ou sem destaque. */
  segments?: Segment[]
  className?: string
  delay?: number
  stagger?: number
}

/**
 * Revela palavra por palavra ao entrar na viewport, cada uma subindo de
 * trás de uma máscara. Usado nos títulos.
 */
export function RevealText({
  text,
  accent,
  segments,
  className,
  delay = 0,
  stagger = 0.05,
}: RevealTextProps) {
  const resolved: Segment[] =
    segments ??
    [
      ...(text ? [{ text }] : []),
      ...(accent ? [{ text: accent, accent: true }] : []),
    ]

  const words = resolved.flatMap((segment) =>
    segment.text
      .split(" ")
      .filter(Boolean)
      .map((word) => ({ word, accent: Boolean(segment.accent) }))
  )
  const plain = resolved.map((segment) => segment.text).join(" ")

  return (
    <span className={cn("inline", className)}>
      <span className="sr-only">{plain}</span>
      {words.map(({ word, accent: isAccent }, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="inline-block overflow-hidden px-[0.04em] pb-[0.18em] -mx-[0.04em] -mb-[0.18em] align-bottom"
        >
          <motion.span
            className={cn(
              "inline-block",
              isAccent && "font-serif-italic text-primary"
            )}
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{
              duration: 0.8,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  )
}
