"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"
import { ToastProvider } from "../store/ToastContext"
import { useMount } from "../hooks/useMount"

type ProvidersType = {
  children: ReactNode
}

export function Providers({ children }: ProvidersType) {
  const { isMounted } = useMount()

  const _ThemeProvider = ({ children }: ProvidersType) => {
    return isMounted ? (
      <ThemeProvider defaultTheme="dark" attribute="class">
        {children}
      </ThemeProvider>
    ) : (
      children
    )
  }

  return (
    <_ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </_ThemeProvider>
  )
}
