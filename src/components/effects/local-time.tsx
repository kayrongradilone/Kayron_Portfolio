"use client"

import { useSyncExternalStore } from "react"
import { cn } from "@/lib/utils"

function subscribe(callback: () => void) {
  const id = window.setInterval(callback, 1000)
  return () => window.clearInterval(id)
}

type LocalTimeProps = {
  className?: string
  /** Locale do Intl, ex.: "pt-BR" ou "en-US". */
  intlLocale: string
}

/** Relógio ao vivo no fuso de Florianópolis. No servidor renderiza um placeholder. */
export function LocalTime({ className, intlLocale }: LocalTimeProps) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat(intlLocale, {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      }).format(new Date()),
    () => null
  )

  return (
    <span className={cn("tabular-nums", className)}>
      {time ?? "--:--:--"}
    </span>
  )
}
