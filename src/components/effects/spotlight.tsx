"use client"

import { useEffect, useRef } from "react"

/**
 * Luz suave que acompanha o cursor. Atualiza variáveis CSS direto no DOM,
 * sem re-render. Visível apenas no tema escuro.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(pointer: coarse)").matches) return

    const onMove = (event: PointerEvent) => {
      el.style.setProperty("--spot-x", `${event.clientX}px`)
      el.style.setProperty("--spot-y", `${event.clientY}px`)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="spotlight pointer-events-none fixed inset-0 -z-10 hidden dark:block"
    />
  )
}
