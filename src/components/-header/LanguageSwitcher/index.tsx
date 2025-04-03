"use client"
import * as Popover from "@radix-ui/react-popover"
import * as RadioGroup from "@radix-ui/react-radio-group"

import { usePopover } from "@/hooks/usePopover"
import { useLocale, useTranslations } from "next-intl"

import { LuCheck, LuChevronDown, LuGlobe } from "react-icons/lu"

import { ScreenViewOnly } from "@/ui/screen-view-only"
import { CountryFlag } from "@/ui/country-flag"
import { useRouter } from "next/navigation"
import { useToast } from "~/src/hooks/useToast"

import "./index.styles.css"
import { useEffectAfterMount } from "~/src/hooks/useEffectAfterMount"

function PopoverRadioItemIndicator() {
  return (
    <RadioGroup.Indicator>
      <ScreenViewOnly>
        <LuCheck />
      </ScreenViewOnly>
    </RadioGroup.Indicator>
  )
}

export function HeaderLanguageSwitcher() {
  const { open, closePopover, onClick, onMouseEnter, onMouseLeave } =
    usePopover(200)
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const toast = useToast()

  useEffectAfterMount(() => {
    closePopover()

    toast.notify({
      title: t("toasts.languageChanged.title"),
      description: t("toasts.languageChanged.description", {
        language: t("display"),
      }),
    })
  }, [locale])

  function handleLanguageSelect(value: string | null) {
    document.cookie = `locale=${value}; path=/`
    router.refresh()
  }

  return (
    <div className="header-language-switcher">
      <Popover.Root open={open}>
        <Popover.Trigger
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <ScreenViewOnly asChild>
            <LuGlobe className="globe-icon" />
          </ScreenViewOnly>{" "}
          {t("display")}
          <ScreenViewOnly asChild>
            <LuChevronDown className="down-arrow-icon" />
          </ScreenViewOnly>{" "}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="header-language-switcher-container"
            align="end"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="language-switcher-content">
              <RadioGroup.Root
                defaultValue={locale}
                className="language-radio-group"
                onValueChange={handleLanguageSelect}
              >
                <Popover.Close asChild>
                  <RadioGroup.Item value={"pt-br"}>
                    <span className="language-display">
                      <CountryFlag country="BR" size="24" />
                      Português
                    </span>
                    <PopoverRadioItemIndicator />
                  </RadioGroup.Item>
                </Popover.Close>
                <Popover.Close asChild>
                  <RadioGroup.Item value="en">
                    <span className="language-display">
                      <CountryFlag country="US" size="24" />
                      English
                    </span>
                    <PopoverRadioItemIndicator />
                  </RadioGroup.Item>
                </Popover.Close>
              </RadioGroup.Root>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}
