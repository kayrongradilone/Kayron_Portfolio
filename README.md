# Kayron Gradilone · Portfólio

Portfólio pessoal de desenvolvedor Front-End, reconstruído com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4** e **shadcn/ui**.

Landing page única, pensada para recrutadores: proposta de valor na primeira dobra, stack, experiência, projetos com links e contato direto.

## Conceito visual

Direção editorial, no espírito dos portfólios premiados: headline de display gigante com palavras em serifa itálica, foto como card inclinado, ticker infinito da stack, grid bento no "Sobre" (relógio ao vivo de Florianópolis, ícones orbitando o monograma, estatísticas), projetos em cards que empilham no scroll dentro de molduras de navegador, navegação em pílula flutuante (barra inferior no celular), luz que segue o cursor e textura de grão. Tema escuro por padrão, com modo claro.

## Stack

| Camada     | Tecnologia                                   |
| ---------- | -------------------------------------------- |
| Framework  | Next.js 16 (App Router, Cache Components)    |
| Linguagem  | TypeScript                                   |
| Estilo     | Tailwind CSS v4 + shadcn/ui (Radix)          |
| Animações  | Motion (`motion/react`)                      |
| Tema       | next-themes (dark por padrão, toggle light)  |
| Ícones     | lucide-react + react-icons (Simple Icons)    |
| Formulário | EmailJS + sonner (toasts)                    |
| Fontes     | Bricolage Grotesque (display), Instrument Serif (itálico), Geist, Geist Mono |

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha as variáveis
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # ESLint
```

## Variáveis de ambiente

| Variável                          | Descrição                                           |
| --------------------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`            | URL pública (metadata, Open Graph, sitemap, robots) |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | Service ID do EmailJS                               |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Template ID do EmailJS                              |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | Public key do EmailJS                               |

Sem as chaves do EmailJS o formulário abre o cliente de e-mail (`mailto:`) como fallback.

## Idiomas

O site é bilíngue: português na raiz (`/`) e inglês em `/en`. O seletor PT/EN fica no canto superior direito. Por baixo, a rota é `app/[locale]` e um rewrite em `next.config.ts` mapeia `/` para `/pt`. Cada idioma tem `<html lang>`, metadata, Open Graph e sitemap próprios, com `hreflang` cruzado.

## Onde editar o conteúdo

Todo o conteúdo fica em `src/content`, sem tocar nos componentes:

- `src/content/pt.ts` e `src/content/en.ts`: todos os textos de cada idioma (hero, sobre, experiência, projetos, stack, contato, rótulos de interface).
- `src/content/shared.ts`: o que não muda com o idioma: nome, e-mail, telefone, links, ano de início da carreira, caminhos dos CVs, itens do ticker, capas e links dos projetos, ícones da stack.
- `src/content/types.ts`: o formato do conteúdo (o TypeScript avisa se faltar algo em um idioma).

Os ícones das tecnologias são mapeados em `src/components/tech-icon.tsx`.

## CV

Os PDFs ficam em `public/cv` (`kayron-gradilone-cv-pt.pdf` e `kayron-gradilone-cv-en.pdf`). O botão **Baixar CV** da hero, do contato e do rodapé baixa o arquivo do idioma atual. Para atualizar, basta substituir os PDFs mantendo os nomes (ou ajustar `person.cv` em `shared.ts`).

## Estrutura

```
src/
├── app/
│   ├── [locale]/       # layout raiz, página, OG image e 404 por idioma
│   ├── global-not-found.tsx, sitemap.ts, robots.ts, icon.svg, globals.css
├── content/            # textos em pt/en, dados compartilhados e tipos
├── components/
│   ├── sections/       # hero, sobre (bento), projetos, experiência, stack, contato
│   ├── effects/        # spotlight, progresso de scroll, magnético, revelações, ticker, relógio, órbita
│   ├── ui/             # componentes shadcn/ui
│   └── ...             # header (pílula), footer (wordmark), reveal, theme toggle, etc.
├── hooks/              # scroll spy
└── lib/                # utilitários e estatísticas cacheadas
```

## Deploy

Pronto para a [Vercel](https://vercel.com): importe o repositório, configure as variáveis de ambiente e publique. Depois ajuste `NEXT_PUBLIC_SITE_URL` para o domínio final.
