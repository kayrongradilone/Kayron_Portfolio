import { TechIcon } from "@/components/tech-icon"
import { cn } from "@/lib/utils"

const inner = ["react", "nextjs", "typescript", "tailwind"]
const outer = [
  "javascript",
  "nodejs",
  "postgresql",
  "reactquery",
  "zod",
  "git",
  "shadcn",
  "html5",
]

type RingProps = {
  names: string[]
  radius: number
  reverse?: boolean
  duration: string
}

function Ring({ names, radius, reverse = false, duration }: RingProps) {
  return (
    <div
      className={cn(
        "absolute inset-0",
        reverse ? "animate-orbit-reverse" : "animate-orbit"
      )}
      style={{ animationDuration: duration }}
    >
      {names.map((name, index) => {
        const angle = (360 / names.length) * index
        return (
          <div
            key={name}
            className="absolute top-1/2 left-1/2 -mt-5 -ml-5 size-10"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
            }}
          >
            {/* Contra-rotação para o ícone ficar sempre "em pé". */}
            <div
              className={cn(
                "flex size-10 items-center justify-center rounded-full border bg-background shadow-md",
                reverse ? "animate-orbit" : "animate-orbit-reverse"
              )}
              style={{ animationDuration: duration }}
            >
              <TechIcon name={name} colored className="size-4" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

/** Ícones da stack orbitando o monograma, em CSS puro. */
export function StackOrbit({ className, label }: { className?: string; label: string }) {
  return (
    <div
      className={cn("relative mx-auto size-72 shrink-0", className)}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-border" />
      <div className="absolute inset-[22%] rounded-full border border-dashed border-border" />
      <div className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-navy font-heading text-xl font-bold text-primary ring-1 ring-primary/40">
        K
      </div>
      <Ring names={inner} radius={80} duration="22s" reverse />
      <Ring names={outer} radius={134} duration="40s" />
    </div>
  )
}
