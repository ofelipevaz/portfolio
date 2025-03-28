import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagsapi.com",
      },
    ],
  },
}

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts")
export default withNextIntl(nextConfig)
