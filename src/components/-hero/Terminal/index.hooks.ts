import { useEffect, useRef, useState } from "react"

const options = ["about", "stack", "projects", "contact"] as const
export type Option = (typeof options)[number]

export function useHeroTerminal() {
  const [option, setOption] = useState<Option>("about")
  const [canSelectOption, setCanSelectOption] = useState<boolean>(true)
  const optionsRef = useRef<HTMLAnchorElement[]>([])
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
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function onOptionChange(option: Option) {
    const optionsElements = optionsRef.current

    const optionElement = optionsElements.find(
      (optionElement) => optionElement.getAttribute("data-option-key") == option
    )

    optionElement?.focus()
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })

    /*
     * Handling option anchor clicking
     */
    const optionsElements = optionsRef.current

    optionsElements.find(() => true)?.focus() // Get first option and focus on it

    function handleOptionClick(e: MouseEvent) {
      const element = e.target as HTMLAnchorElement

      const optionKey = element.getAttribute("data-option-key")
      const selectedOptionKey = optionsElements
        .find(
          (optionElement) =>
            optionElement.getAttribute("data-selected") == "true"
        )
        ?.getAttribute("data-option-key")

      const optionHref = element.getAttribute("href")
      if (optionKey && optionKey != selectedOptionKey) {
        setOption(optionKey as Option)
      }

      if (optionHref) {
        const sectionElement = document.querySelector(optionHref)

        if (sectionElement) {
          preventScrollCancel.current = true
          window.scrollTo({
            top: sectionElement.getBoundingClientRect().top - 36,
            behavior: "smooth",
          })
          element.blur()
        }
      }

      e.preventDefault()
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
      onOptionChange(newOption)
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
      onOptionChange(newOption)
    }

    function enterOption() {
      if (window.scrollY != 0) return
      const optionElement = optionsRef.current.find(
        (target) => target.getAttribute("data-option-key") == option
      )
      if (optionElement) {
        optionElement.click()
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowUp": {
          event.preventDefault()
          previousOption()
          break
        }
        case "ArrowDown": {
          event.preventDefault()
          nextOption()
          break
        }
        case "Enter": {
          event.preventDefault()
          enterOption()
          break
        }
      }
    }

    function handleScroll(event?: Event) {
      if (event) event.preventDefault()

      const scrollY = window.scrollY

      if (scrollY == 0) {
        document.body.style.overflowY = "hidden"
      } else {
        document.body.style.overflowY = "auto"
      }

      setCanSelectOption(scrollY == 0)
    }

    handleScroll() // on mount

    /*
     * Event listener management
     */

    window.addEventListener("keyup", handleKeyUp)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("keyup", handleKeyUp)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [option])

  return { option, appendOptionRef, canSelectOption, backToTerminal }
}
