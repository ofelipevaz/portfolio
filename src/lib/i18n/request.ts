import { getRequestConfig } from "next-intl/server"
import { getLocaleFromCookies } from "./utils"

export default getRequestConfig(async () => {
  const locale = await getLocaleFromCookies()

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
