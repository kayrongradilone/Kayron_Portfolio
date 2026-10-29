import type { Locale } from "./types"

/**
 * Dados que não mudam com o idioma: identidade, links, contatos e arquivos.
 */
export const person = {
  name: "Kayron Gradilone",
  firstName: "Kayron",
  lastName: "Gradilone",
  email: "kayrongradilone@hotmail.com",
  phone: "+55 48 99115-8345",
  whatsapp: "https://api.whatsapp.com/send?phone=5548991158345",
  socials: {
    github: "https://github.com/kayrongradilone",
    linkedin: "https://www.linkedin.com/in/kayrongradilone/",
    instagram: "https://instagram.com/kayrongradilone",
  },
  /** Ano usado para calcular "anos de experiência" (CV: 4+ anos em 2026). */
  careerStartYear: 2022,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kayron-portfolio.vercel.app",
  /** PDFs em /public/cv. */
  cv: {
    pt: "/cv/kayron-gradilone-cv-pt.pdf",
    en: "/cv/kayron-gradilone-cv-en.pdf",
  } satisfies Record<Locale, string>,
  /** Itens do ticker da hero (iguais nos dois idiomas). */
  marquee: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Node.js",
    "PostgreSQL",
    "React Query",
    "Zod",
    "Git",
  ],
  /** Capas e links dos projetos (os textos ficam em pt.ts / en.ts). */
  projects: {
    portalPalhoca: {
      cover: "/projects/portal-palhoca.webp",
      liveUrl: "https://www.portalpalhoca.com.br",
      tags: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "react-hook-form", "Zod"],
    },
    horus: {
      cover: "/projects/horus.webp",
      liveUrl: "https://horus.equatorialenergia.where-cloud.com/login",
      tags: ["Next.js", "React", "TypeScript", "React Flow", "Tailwind CSS"],
      year: "2026",
    },
    jsilveiraNext: {
      cover: "/projects/jsilveira-next.webp",
      liveUrl: "https://j-silveira-next.vercel.app",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Server Actions", "Yup", "Cloudinary"],
    },
    jsilveira: {
      cover: "/projects/jsilveira.png",
      liveUrl: "https://j-silveira-adm-imoveis.vercel.app/",
      tags: ["React", "TypeScript", "Material UI", "React Router", "Axios", "Yup", "JSON Server"],
      year: "2023",
    },
  },
} as const

/** Ícones da stack: as chaves mapeiam para src/components/tech-icon.tsx. */
export const skillIcons = {
  frontend: [
    { name: "React", icon: "react", primary: true },
    { name: "Next.js", icon: "nextjs", primary: true },
    { name: "TypeScript", icon: "typescript", primary: true },
    { name: "JavaScript", icon: "javascript", primary: true },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Angular", icon: "angular" },
  ],
  ui: [
    { name: "Tailwind CSS", icon: "tailwind", primary: true },
    { name: "shadcn/ui", icon: "shadcn", primary: true },
    { name: "React Query", icon: "reactquery", primary: true },
    { name: "react-hook-form", icon: "reacthookform" },
    { name: "Zod", icon: "zod" },
    { name: "React Flow", icon: "reactflow" },
    { name: "Material UI", icon: "mui" },
    { name: "Bootstrap", icon: "bootstrap" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs", primary: true },
    { name: "PostgreSQL", icon: "postgresql", primary: true },
    { name: "REST APIs", icon: "rest" },
    { name: "SQL", icon: "sql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Axios", icon: "axios" },
  ],
  tools: [
    { name: "Git", icon: "git", primary: true },
    { name: "GitHub", icon: "github" },
    { name: "ESLint", icon: "eslint" },
    { name: "Vercel", icon: "vercel" },
    { name: "Figma", icon: "figma" },
  ],
} as const
