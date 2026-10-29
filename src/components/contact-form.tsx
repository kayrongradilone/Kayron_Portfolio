"use client"

import { useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import { Loader2Icon, SendIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { person, type Content } from "@/content"

const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
}

const isEmailjsConfigured = Boolean(
  emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey
)

type ContactFormProps = {
  strings: Content["contact"]["form"]
}

/**
 * Formulário de contato enviado via EmailJS (campos name, email, subject e
 * message). Sem as variáveis de ambiente, cai para mailto:.
 */
export function ContactForm({ strings }: ContactFormProps) {
  const [sending, setSending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: bots costumam preencher todos os campos.
    if (data.get("website")) {
      form.reset()
      toast.success(strings.success)
      return
    }

    if (!isEmailjsConfigured) {
      const subject = encodeURIComponent(String(data.get("subject") ?? ""))
      const body = encodeURIComponent(
        `${data.get("message") ?? ""}\n\n${data.get("name") ?? ""} (${data.get("email") ?? ""})`
      )
      window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`
      return
    }

    setSending(true)
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId!,
        emailjsConfig.templateId!,
        form,
        { publicKey: emailjsConfig.publicKey! }
      )
      toast.success(strings.success, { description: strings.successDescription })
      form.reset()
    } catch (error) {
      console.error("Falha ao enviar e-mail:", error)
      toast.error(strings.error, { description: strings.errorDescription })
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">{strings.name}</Label>
          <Input
            id="contact-name"
            name="name"
            placeholder={strings.namePlaceholder}
            autoComplete="name"
            required
            className="h-10"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">{strings.email}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder={strings.emailPlaceholder}
            autoComplete="email"
            required
            className="h-10"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-subject">{strings.subject}</Label>
        <Input
          id="contact-subject"
          name="subject"
          placeholder={strings.subjectPlaceholder}
          required
          className="h-10"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">{strings.message}</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder={strings.messagePlaceholder}
          required
          minLength={10}
          rows={5}
          className="min-h-32"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={sending} className="h-11 rounded-full px-6">
          {sending ? (
            <>
              <Loader2Icon className="animate-spin" data-icon="inline-start" />
              {strings.sending}
            </>
          ) : (
            <>
              <SendIcon data-icon="inline-start" />
              {strings.send}
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground">{strings.privacy}</p>
      </div>
    </form>
  )
}
