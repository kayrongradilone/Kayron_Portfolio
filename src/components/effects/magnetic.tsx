"use client"

import { useRef, type PointerEvent } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

type MagneticProps = {
  children: React.ReactNode
  className?: string
  /** Quanto o elemento "gruda" no cursor (0 a 1). */
  strength?: number
}

/** Envolve um botão para que ele acompanhe levemente o cursor ao passar por cima. */
export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.2 })

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  )
}
