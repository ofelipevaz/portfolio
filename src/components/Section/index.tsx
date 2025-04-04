import { ComponentProps } from "react"
import { Option } from "../-hero/Terminal/index.hooks"
import { cn } from "~/src/lib/utils"

import "./index.styles.css"

interface SectionType extends ComponentProps<"section"> {
  title: string
  id: Option
}

export function Section({ id, title, ...rest }: SectionType) {
  return (
    <section id={id} {...rest} className={cn("section", rest.className)}>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{rest.children}</div>
    </section>
  )
}
