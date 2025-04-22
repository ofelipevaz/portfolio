import { useEffect, useRef, useState } from "react"
import { useEffectAfterMount } from "~/src/hooks/useEffectAfterMount"

const options = ["about", "stack", "projects", "contact"] as const
export type Option = (typeof options)[number]

export function useHeroTerminal() {
  const [option, setOption] = useState<Option>("about")
  const [canSelectOption, setCanSelectOption] = useState<boolean>(true)
  const optionsRef = useRef<HTMLAnchorElement[]>([])
  const terminalContainerRef = useRef<HTMLDivElement>(null)
  const preventScrollCancel = useRef<boolean>(false)

  function appendOptionRef(target: HTMLAnchorElement | null) {
    if (target == null) return

    if (optionsRef.current.includes(target)) {
      optionsRef.current[optionsRef.current.indexOf(target)] = target
    } else {
      optionsRef.current[optionsRef.current.length] = target
    }
  }

  function backToTerminal() {
    setCanSelectOption(true)
  }

  useEffect(() => {
    const terminalContainer = terminalContainerRef.current
    if (canSelectOption) {
      window.scrollTo({ top: 0, behavior: "smooth" })

      const checkIfAtTop = () => {
        if (window.scrollY === 0) {
          document.body.style.overflowY = "hidden"
          terminalContainer?.focus()
        } else {
          requestAnimationFrame(checkIfAtTop)
        }
      }

      checkIfAtTop()
    } else {
      terminalContainer?.blur()
      document.body.style.overflowY = "auto"
    }
  }, [canSelectOption])

  useEffect(() => {
    const optionsElements = optionsRef.current

    /*
     * Handling option anchor clicking
     */

    function handleOptionClick(e: MouseEvent) {
      const element = e.target as HTMLAnchorElement

      const optionKey = element.getAttribute("data-option-key")
      const selectedOptionKey = optionsElements
        .find(
          (optionElement) =>
            optionElement.getAttribute("data-selected") == "true",
        )
        ?.getAttribute("data-option-key")

      const optionHref = element.getAttribute("href")

      if (optionKey && optionKey != selectedOptionKey) {
        setOption(optionKey as Option)
      }

      setCanSelectOption(false)

      // if (optionHref) {
      //   const sectionElement = document.querySelector(optionHref)

      //   if (sectionElement) {
      //     preventScrollCancel.current = true
      //     window.scrollTo({
      //       top: sectionElement.getBoundingClientRect().top,
      //       behavior: "smooth",
      //     })
      //   }
      // }

      // e.preventDefault()
    }

    optionsElements.forEach((optionElement) => {
      optionElement.addEventListener("click", handleOptionClick)
    })

    return () => {
      optionsElements.forEach((optionElement) => {
        optionElement.removeEventListener("click", handleOptionClick)
      })
    }
  }, [])

  useEffect(() => {
    const terminalContainer = terminalContainerRef.current

    /*
     * Handling keyboard events
     */
    const lastOptionIndex = options.length - 1
    const currentOptionIndex = options.indexOf(option)

    const isFirstOption = options.indexOf(option) == 0
    const isLastElement = currentOptionIndex == lastOptionIndex

    function nextOption() {
      if (window.scrollY != 0) return
      let newOption: Option | null

      if (isLastElement) {
        newOption = options[0]
      } else {
        const nextOptionIndex = currentOptionIndex + 1
        newOption = options[nextOptionIndex]
      }

      setOption(newOption)
    }

    function previousOption() {
      if (window.scrollY != 0) return
      let newOption: Option | null

      if (isFirstOption) {
        newOption = options[lastOptionIndex]
      } else {
        const previousOptionIndex = currentOptionIndex - 1
        newOption = options[previousOptionIndex]
      }

      setOption(newOption)
    }

    function enterOption() {
      const optionElement = optionsRef.current.find(
        (target) => target.getAttribute("data-option-key") == option,
      )

      if (optionElement) {
        optionElement.click()
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (!canSelectOption) return

      switch (event.key) {
        case "ArrowUp": {
          previousOption()
          break
        }
        case "ArrowDown": {
          nextOption()
          break
        }
        case "Enter": {
          if (canSelectOption) {
            enterOption()
          }
          break
        }
      }
    }

    function handleTerminalFocus(e?: any) {
      setCanSelectOption(true)
    }

    function handleTerminalBlur() {
      setCanSelectOption(false)
    }

    /*
     * Event listener management
     */

    window.addEventListener("keyup", handleKeyUp)
    if (terminalContainer) {
      terminalContainer.addEventListener("focus", (e) => handleTerminalFocus(e))
      terminalContainer.addEventListener("blur", handleTerminalBlur)
    }

    return () => {
      window.removeEventListener("keyup", handleKeyUp)
      if (terminalContainer) {
        terminalContainer.removeEventListener("focus", (e) =>
          handleTerminalFocus(e),
        )
        terminalContainer.removeEventListener("blur", handleTerminalBlur)
      }
    }
  }, [option, canSelectOption])

  return {
    option,
    appendOptionRef,
    terminalContainerRef,
    canSelectOption,
    backToTerminal,
  }
}
