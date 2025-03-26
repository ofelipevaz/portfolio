import { Inter, Fira_Mono } from "next/font/google"

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const fira_mono = Fira_Mono({
  variable: "--font-fira",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500"],
})
