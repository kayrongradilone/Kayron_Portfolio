import type { Metadata } from "next"
import { localePath } from "@/content/types"
import { fontVariables } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "404 · Kayron Gradilone",
}

/**
 * 404 global: usado quando a URL não bate com nenhuma rota.
 * Não passa pelo layout, então carrega estilos e fontes por conta própria.
 */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={`${fontVariables} dark h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center gap-6 bg-background px-4 text-center text-foreground">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
          404
        </p>
        <h1 className="text-display text-4xl sm:text-6xl">
          Página não encontrada
        </h1>
        <p className="max-w-md text-muted-foreground">
          O endereço que você acessou não existe ou foi movido.
          <br />
          <span className="font-serif-italic text-lg">Page not found.</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Navegação completa de propósito: esta página fica fora do app router. */}
          <a
            href={localePath("pt")}
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Voltar ao início
          </a>
          <a
            href={localePath("en")}
            className="rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            Back to home
          </a>
        </div>
      </body>
    </html>
  )
}
