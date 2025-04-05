import { useTranslations } from "next-intl"
import { Section } from "../../Section"
import { stacks } from "~/src/constants/stacks"

import { Slot } from "@radix-ui/react-slot"
import "./index.styles.css"

export function StacksSection() {
  const tStack = useTranslations("sections.Stack")
  return (
    <Section className="section-stacks" id="stack" title={tStack("display")}>
      <ul className="section-stacks-list">
        {stacks.map((stack) => (
          <li key={stack.display} className="section-stacks-list-item">
            <Slot className="section-stacks-list-item-icon">{stack.icon}</Slot>
            <p className="section-stacks-list-item-display">{stack.display}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
