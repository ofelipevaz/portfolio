import { ComponentProps } from "react"
import { Option } from "../-hero/Terminal/index.hooks"
import { cn } from "~/src/lib/utils"

import "./index.styles.css"
import { Heading } from "~/src/ui/heading"

interface SectionType extends ComponentProps<"section"> {
  title: string
  id: Option
}

export function Section({ id, title, ...rest }: SectionType) {
  return (
    <section
      {...rest}
      id={`${id}-section`}
      className={cn("section", rest.className)}
    >
      <Heading
        variants={{ size: "xl", weight: "medium", color: "heading" }}
        as="h2"
        className="section-title"
      >
        {title}
      </Heading>
      <div className="section-content">{rest.children}</div>
    </section>
  )
}
