"use client"

import { motion } from "motion/react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Atraso em segundos, útil para escalonar itens de uma lista. */
  delay?: number
  /** Deslocamento vertical inicial em px. */
  y?: number
  once?: boolean
}

/**
 * Anima o conteúdo ao entrar na viewport (fade + slide).
 * `prefers-reduced-motion` é tratado pelo MotionConfig em providers.tsx.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
