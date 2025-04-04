"use client"

import { ReactNode } from "react"
import { ToastProvider } from "../store/ToastContext"
import dynamic from "next/dynamic"

const NextThemesProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
)
type ProvidersType = {
  children: ReactNode
}

export function Providers({ children }: ProvidersType) {
  return (
    <NextThemesProvider defaultTheme="system" enableSystem attribute="class">
      <ToastProvider>{children}</ToastProvider>
    </NextThemesProvider>
  )
}
