"use client"

import Link from "next/link"
import { Separator } from "~/src/ui/separator"
import { ScreenReaderOnly } from "~/src/ui/screen-reader-only"
import { HeaderLanguageSwitcher } from "../LanguageSwitcher"

import { useTheme } from "next-themes"

import { FaGithub } from "react-icons/fa"
import { LuSunMedium, LuSunMoon } from "react-icons/lu"

import "./index.styles.css"
import { useTranslations } from "next-intl"

export function HeaderSideButtons() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations("sections.Header")

  function handleChangeThemeClick() {
    setTheme(theme == "dark" ? "light" : "dark")
  }

  return (
    <div className="header-side-buttons">
      <div className="buttons">
        <button
          onClick={handleChangeThemeClick}
          className="change-theme-button"
        >
          <ScreenReaderOnly>{t("changeThemeButtonLabel")}</ScreenReaderOnly>
          {theme == "dark" ? <LuSunMedium /> : <LuSunMoon />}
        </button>
        <Link
          className="github-button"
          target="_blank"
          href="https://github.com/ofelipevaz"
        >
          <FaGithub />
          <ScreenReaderOnly>GitHub</ScreenReaderOnly>
        </Link>
      </div>
      <Separator variants={{ orientation: "vertical" }} />
      <HeaderLanguageSwitcher />
    </div>
  )
}
