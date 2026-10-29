"use client"

import { ThemeProvider } from "next-themes"
import { MotionConfig } from "motion/react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {/* reducedMotion="user" respeita prefers-reduced-motion sem divergir o markup entre servidor e cliente. */}
      <MotionConfig reducedMotion="user">
        <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      </MotionConfig>
      <Toaster position="bottom-right" richColors closeButton />
    </ThemeProvider>
  )
}
