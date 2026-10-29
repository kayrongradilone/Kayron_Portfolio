import { ArrowLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getContent, localePath } from "@/content"

/**
 * 404 dentro de /[locale]. Como o componente não recebe o idioma,
 * mostra a mensagem em português com a versão em inglês logo abaixo.
 */
export default function NotFound() {
  const pt = getContent("pt")
  const en = getContent("en")

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">404</p>
      <h1 className="text-display text-4xl sm:text-6xl">{pt.notFound.title}</h1>
      <p className="max-w-md text-muted-foreground">
        {pt.notFound.description}
        <br />
        <span className="font-serif-italic text-lg">{en.notFound.title}.</span>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Navegação completa de propósito: o layout raiz é o segmento dinâmico [locale]. */}
        <Button asChild size="lg" className="h-11 rounded-full px-6">
          <a href={localePath("pt")}>
            <ArrowLeftIcon data-icon="inline-start" />
            {pt.notFound.back}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 rounded-full px-6">
          <a href={localePath("en")}>{en.notFound.back}</a>
        </Button>
      </div>
    </main>
  )
}
