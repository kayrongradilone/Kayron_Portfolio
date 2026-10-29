"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const noopSubscribe = () => () => {}

type ThemeToggleProps = {
  className?: string
  labels: { toggle: string; light: string; dark: string }
}

export function ThemeToggle({ className, labels }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  // Evita divergência de hidratação: o tema só é conhecido no cliente.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  )

  const isDark = resolvedTheme === "dark"
  // Antes da hidratação o rótulo precisa ser igual ao do servidor.
  const label = !mounted ? labels.toggle : isDark ? labels.light : labels.dark

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={label}
          className={className}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {mounted ? isDark ? <SunIcon /> : <MoonIcon /> : <span className="size-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}
