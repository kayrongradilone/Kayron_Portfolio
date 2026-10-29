import { ArrowUpRightIcon, DownloadIcon, FileTextIcon, MailIcon } from "lucide-react"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { person, type Content } from "@/content"

export function Contact({ content }: { content: Content }) {
  const { contact, ui } = content

  const channels = [
    {
      label: ui.downloadCv,
      value: "PDF",
      href: person.cv[content.locale],
      Icon: FileTextIcon,
      download: true,
      Arrow: DownloadIcon,
    },
    {
      label: "WhatsApp",
      value: person.phone,
      href: person.whatsapp,
      Icon: FaWhatsapp,
      download: false,
      Arrow: ArrowUpRightIcon,
    },
    {
      label: "LinkedIn",
      value: "in/kayrongradilone",
      href: person.socials.linkedin,
      Icon: FaLinkedinIn,
      download: false,
      Arrow: ArrowUpRightIcon,
    },
    {
      label: "GitHub",
      value: "@kayrongradilone",
      href: person.socials.github,
      Icon: FaGithub,
      download: false,
      Arrow: ArrowUpRightIcon,
    },
  ]

  return (
    <Section
      id="contact"
      index={contact.index}
      label={contact.label}
      title={contact.title}
      accent={contact.accent}
      description={contact.description}
    >
      <Reveal>
        <a
          href={`mailto:${person.email}`}
          className="group inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 text-display text-[clamp(1.5rem,4.6vw,4.25rem)] font-semibold"
        >
          <MailIcon
            className="hidden size-[0.7em] shrink-0 text-primary sm:block"
            aria-hidden="true"
          />
          <span className="break-all underline decoration-primary/40 decoration-[0.06em] underline-offset-[0.18em] transition-colors group-hover:decoration-primary sm:break-normal">
            {person.email}
          </span>
          <ArrowUpRightIcon
            className="size-[0.7em] shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal delay={0.05}>
          <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
            {contact.otherChannels}
          </p>
          <ul className="mt-5 space-y-3">
            {channels.map(({ label, value, href, Icon, download, Arrow }) => (
              <li key={label}>
                <a
                  href={href}
                  download={download || undefined}
                  target={download ? undefined : "_blank"}
                  rel={download ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 rounded-2xl border bg-card/60 p-4 transition-colors hover:border-primary/50 hover:bg-card"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="block truncate font-medium">{value}</span>
                  </span>
                  <Arrow
                    className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">{content.location}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border bg-card p-6 sm:p-8">
            <h3 className="text-display text-2xl sm:text-3xl">{contact.formTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{contact.formNote}</p>
            <div className="mt-6">
              <ContactForm strings={contact.form} />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
