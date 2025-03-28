import { getLocale, getTranslations } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { getLocaleFromCookies } from "@/lib/i18n/utils"

import type { Metadata } from "next"
import { fira_mono, inter } from "@/constants/font"

import "./globals.css"
import { ThemeProvider } from "next-themes"
import { ToastProvider } from "../store/ToastContext"
import { cn } from "../lib/utils"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies()
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function RootLayout({
  ...rest
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={cn(inter.variable, fira_mono.variable, "antialiased")}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <ToastProvider>
            <NextIntlClientProvider {...rest} />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
