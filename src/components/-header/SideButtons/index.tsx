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
import { useToast } from "~/src/hooks/useToast"

export function HeaderSideButtons() {
  const { theme, setTheme } = useTheme()
  const { notify } = useToast()
  const t = useTranslations()

  function handleChangeThemeClick() {
    const newTheme = theme == "dark" ? "light" : "dark"
    const themeTranslation = {
      light: t("sections.Header.themes.light"),
      dark: t("sections.Header.themes.dark"),
    }

    setTheme(newTheme)
    notify({
      title: t("toasts.themeChanged.title"),
      description: t("toasts.themeChanged.description", {
        theme: themeTranslation[newTheme],
      }),
    })
  }

  return (
    <div className="header-side-buttons">
      <div className="buttons">
        <button
          title={t("sections.Header.changeThemeButtonLabel")}
          onClick={handleChangeThemeClick}
          className="change-theme-button"
        >
          <ScreenReaderOnly>
            {t("sections.Header.changeThemeButtonLabel")}
          </ScreenReaderOnly>
          {theme == "dark" ? <LuSunMedium /> : <LuSunMoon />}
        </button>
        <Link
          className="github-button"
          title="GitHub"
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
