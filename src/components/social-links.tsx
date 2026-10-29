import { MailIcon } from "lucide-react"
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { person } from "@/content"
import { cn } from "@/lib/utils"

const links = [
  { label: "GitHub", href: person.socials.github, Icon: FaGithub },
  { label: "LinkedIn", href: person.socials.linkedin, Icon: FaLinkedinIn },
  { label: "WhatsApp", href: person.whatsapp, Icon: FaWhatsapp },
  { label: "Instagram", href: person.socials.instagram, Icon: FaInstagram },
  { label: "E-mail", href: `mailto:${person.email}`, Icon: MailIcon },
]

type SocialLinksProps = {
  className?: string
  label: string
}

export function SocialLinks({ className, label }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-1", className)} aria-label={label}>
      {links.map(({ label: name, href, Icon }) => (
        <li key={name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
              >
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={name}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}
