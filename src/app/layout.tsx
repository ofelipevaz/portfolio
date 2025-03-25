import { getLocale, getTranslations } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { getLocaleFromCookies } from "@/lib/i18n/utils"

import type { Metadata } from "next"
import { inter } from "@/constants/font"

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
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider {...rest} />
      </body>
    </html>
  )
}
