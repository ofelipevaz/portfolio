import { getLocale, getTranslations } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { getLocaleFromCookies } from "~/src/lib/i18n/utils"

import type { Metadata } from "next"
import { fira_mono, inter } from "@/constants/font"

import { cn } from "../lib/utils"
import { Providers } from "../components/providers"

import "./globals.css"

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
        <Providers>
          <NextIntlClientProvider {...rest} />
        </Providers>
      </body>
    </html>
  )
}
