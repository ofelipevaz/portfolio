import { getLocale, getTranslations } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { getLocaleFromCookies } from "@/lib/i18n/utils"

import type { Metadata } from "next"
import { fira_mono, inter } from "@/constants/font"

import "./globals.css"
import { ThemeProvider } from "next-themes"

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
      <body className={`${inter.variable} ${fira_mono.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <NextIntlClientProvider {...rest} />
        </ThemeProvider>
      </body>
    </html>
  )
}
