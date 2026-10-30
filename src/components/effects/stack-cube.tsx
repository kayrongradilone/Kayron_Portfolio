import { TechIcon } from "@/components/tech-icon"
import { cn } from "@/lib/utils"


const faces = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "PostgreSQL", icon: "postgresql" },
] as const

export function StackCube({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label={faces.map((face) => face.name).join(", ")}
      className={cn(
        "grid size-[calc(var(--cube-size)*1.7)] place-items-center [perspective:1200px]",
        className,
      )}
    >
      <div className="stack-cube">
        {faces.map((face) => (
          <div key={face.icon} className="stack-cube__face">
            <TechIcon
              name={face.icon}
              colored
              className="size-[calc(var(--cube-size)*0.48)] drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
