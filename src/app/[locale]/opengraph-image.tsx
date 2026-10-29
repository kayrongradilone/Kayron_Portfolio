import { ImageResponse } from "next/og"
import { defaultLocale, getContent, isLocale, locales, person } from "@/content"

export const alt = `${person.name} · Portfólio`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const stack = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"]

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  const content = getContent(isLocale(raw) ? raw : defaultLocale)
  const host = person.siteUrl.replace(/^https?:\/\//, "")

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b1220 0%, #022c43 100%)",
          color: "#f4f6fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 32,
              background: "#022c43",
              border: "2px solid rgba(255, 215, 0, 0.55)",
              color: "#ffd700",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 28, color: "#9fb3c8" }}>{host}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              color: "#ffd700",
              textTransform: "uppercase",
            }}
          >
            {`${person.name} · ${content.role}`}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {content.meta.ogHeadline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "rgba(255, 255, 255, 0.06)",
                fontSize: 22,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
