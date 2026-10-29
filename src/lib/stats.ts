import { cacheLife } from "next/cache"
import { person } from "@/content/shared"

/**
 * Valores derivados da data atual, calculados em escopo cacheado para manter
 * a página estática e revalidar automaticamente a cada dia.
 */
export async function getDerivedStats() {
  "use cache"
  cacheLife("days")

  const year = new Date().getFullYear()

  return {
    year,
    yearsOfExperience: Math.max(1, year - person.careerStartYear),
  }
}
