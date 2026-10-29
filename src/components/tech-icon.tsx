import type { IconType } from "react-icons"
import {
  SiAngular,
  SiAxios,
  SiBootstrap,
  SiCss,
  SiEslint,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrettier,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si"
import {
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  PlugIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react"

/** Chaves usadas em `src/content/shared.ts`. */
export const techIcons: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss,
  angular: SiAngular,
  tailwind: SiTailwindcss,
  shadcn: SiShadcnui,
  mui: SiMui,
  bootstrap: SiBootstrap,
  sass: SiSass,
  figma: SiFigma,
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
  axios: SiAxios,
  reactrouter: SiReactrouter,
  reactquery: SiReactquery,
  reacthookform: SiReacthookform,
  zod: SiZod,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  jest: SiJest,
  testinglibrary: SiTestinglibrary,
  eslint: SiEslint,
  prettier: SiPrettier,
}

/** Tecnologias sem logo no Simple Icons recebem um ícone genérico do Lucide. */
const genericIcons: Record<string, LucideIcon> = {
  reactflow: WorkflowIcon,
  rest: PlugIcon,
  sql: DatabaseIcon,
  cloud: CloudIcon,
}

/** Cores oficiais das marcas, usadas apenas em destaques. */
export const techColors: Record<string, string> = {
  react: "#61dafb",
  typescript: "#3178c6",
  javascript: "#f7df1e",
  tailwind: "#06b6d4",
  html5: "#e34f26",
  css3: "#663399",
  git: "#f05032",
  nodejs: "#5fa04e",
  postgresql: "#4169e1",
  reactquery: "#ff4154",
  zod: "#3e67b1",
  mongodb: "#47a248",
}

type TechIconProps = {
  name: string
  className?: string
  /** Usa a cor oficial da marca em vez de herdar a cor do texto. */
  colored?: boolean
}

export function TechIcon({ name, className, colored = false }: TechIconProps) {
  const Icon = techIcons[name]
  const color = colored ? techColors[name] : undefined

  if (!Icon) {
    const Generic = genericIcons[name] ?? CodeIcon
    return <Generic className={className} aria-hidden="true" />
  }

  return <Icon className={className} style={color ? { color } : undefined} aria-hidden="true" />
}
