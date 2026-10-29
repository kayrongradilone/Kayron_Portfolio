import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // 404 global para rotas fora de /[locale] (o layout raiz é dinâmico).
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    // Português na raiz, inglês em /en.
    return [{ source: "/", destination: "/pt" }]
  },
}

export default nextConfig
