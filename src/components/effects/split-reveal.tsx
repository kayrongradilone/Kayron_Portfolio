"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type SplitRevealProps = {
  text: string
  className?: string
  /** Atraso inicial em segundos. */
  delay?: number
  /** Intervalo entre letras em segundos. */
  stagger?: number
  /** Inclui uma cópia só para leitores de tela. Desative se o pai já fornece o texto. */
  srOnly?: boolean
}

/**
 * Cada letra sobe de trás de uma "máscara", como em títulos editoriais.
 * Leitores de tela recebem o texto inteiro; as letras animadas ficam ocultas.
 */
export function SplitReveal({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  srOnly = true,
}: SplitRevealProps) {
  return (
    <span className={cn("inline-block", className)}>
      {srOnly ? <span className="sr-only">{text}</span> : null}
      <span aria-hidden="true" className="inline-block">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden px-[0.04em] pb-[0.16em] -mx-[0.04em] -mb-[0.16em] align-bottom"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: delay + index * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char === " " ? " " : char}
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  )
}
