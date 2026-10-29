import Image from "next/image"
import { ArrowUpRightIcon, ExternalLinkIcon } from "lucide-react"
import { FaGithub } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { Magnetic } from "@/components/effects/magnetic"
import { person, type Content, type Project } from "@/content"

function BrowserFrame({ project }: { project: Project }) {
  const url = project.liveUrl ?? project.repoUrl ?? ""
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "")

  return (
    <div className="flex items-center border-t bg-muted/40 p-5 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
      <div className="group/frame w-full overflow-hidden rounded-xl border bg-background shadow-2xl shadow-black/30">
        <div className="flex items-center gap-1.5 border-b bg-muted/70 px-3 py-2">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 w-0 min-w-0 flex-1 truncate rounded-md bg-background/80 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            {host}
          </span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-navy">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 40rem, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.04]"
          />
        </div>
      </div>
    </div>
  )
}

type ProjectCardProps = {
  project: Project
  index: number
  total: number
  ui: Content["ui"]
}

function ProjectCard({ project, index, total, ui }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <article
      className="mb-6 lg:sticky lg:mb-10"
      style={{ top: `calc(5.5rem + ${index} * 1.5rem)` }}
    >
      <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] border bg-card shadow-2xl shadow-black/25 lg:grid-cols-2">
        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
              <span>
                {number} / {String(total).padStart(2, "0")}
              </span>
              {project.year ? <span>{project.year}</span> : null}
            </div>
            <h3 className="text-display mt-6 text-3xl sm:text-4xl lg:text-5xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-md text-base text-pretty text-muted-foreground sm:text-lg">
              {project.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={ui.stackPill}>
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Badge variant="outline" className="h-7 rounded-full px-3 text-xs">
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <Button asChild className="h-11 rounded-full px-6">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon data-icon="inline-start" />
                  {ui.viewOnline}
                </a>
              </Button>
            ) : null}
            {project.repoUrl ? (
              <Button asChild variant="outline" className="h-11 rounded-full px-6">
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <FaGithub data-icon="inline-start" aria-hidden="true" />
                  {ui.code}
                </a>
              </Button>
            ) : null}
          </div>
        </div>

        <BrowserFrame project={project} />
      </div>
    </article>
  )
}

export function Projects({ content }: { content: Content }) {
  const { projects, ui } = content

  return (
    <Section
      id="projects"
      index={projects.index}
      label={projects.label}
      title={projects.title}
      accent={projects.accent}
      description={projects.description}
    >
      <div className="relative">
        {projects.items.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            total={projects.items.length}
            ui={ui}
          />
        ))}
      </div>

      <Reveal className="mt-14 flex justify-center">
        <Magnetic>
          <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-7 text-base">
            <a href={person.socials.github} target="_blank" rel="noreferrer">
              <FaGithub data-icon="inline-start" aria-hidden="true" />
              {ui.moreOnGithub}
              <ArrowUpRightIcon data-icon="inline-end" />
            </a>
          </Button>
        </Magnetic>
      </Reveal>
    </Section>
  )
}
