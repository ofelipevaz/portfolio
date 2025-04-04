import { useTranslations } from "next-intl"
import Link from "next/link"

import { Button } from "~/src/ui/button"
import Image from "next/image"

import CriativityIllustration from "~/public/illustrations/criativity.png"

import "./index.styles.css"
import { FaGithub } from "react-icons/fa"
import { ScreenViewOnly } from "~/src/ui/screen-view-only"

export function HeroContent() {
  const tHeader = useTranslations("sections.Header")
  return (
    <div className="hero-content">
      <div className="hero-illustration">
        <Image
          src={CriativityIllustration.src}
          width={CriativityIllustration.width}
          height={CriativityIllustration.height}
          alt="Decorative illustration"
          aria-hidden
          className="invert-75 dark:invert-0"
        />
      </div>
      <h1 className="hero-title">{tHeader("title")}</h1>
      <p className="hero-subtitle">{tHeader("subtitle")}</p>

      <Button
        className="hero-github-link"
        variants={{
          rounded: "full",
          background: "primary",
          style: "outlined",
          size: "lg",
        }}
        asChild
      >
        <Link href="https://github.com/ofelipevaz" target="_blank">
          <ScreenViewOnly>
            <FaGithub size={24} />
          </ScreenViewOnly>
          {tHeader("githubButtonLabel")}
        </Link>
      </Button>
    </div>
  )
}
