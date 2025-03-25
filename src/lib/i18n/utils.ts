import { cookies } from "next/headers"

export const locales = ["en", "pt-br"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export async function getLocaleFromCookies(): Promise<Locale> {
  const cache = await cookies()
  let locale = (cache.get("locale")?.value as Locale) || defaultLocale

  if (!locales.includes(locale)) {
    locale = defaultLocale
  }

  return locale
}
