import {
  Bricolage_Grotesque,
  Geist,
  Geist_Mono,
  Instrument_Serif,
} from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
})

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

/** Classes das variáveis de fonte, aplicadas no <html>. */
export const fontVariables = `${geistSans.variable} ${geistMono.variable} ${bricolage.variable} ${instrument.variable}`
