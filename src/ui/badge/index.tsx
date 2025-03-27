import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

import "./index.styles.css"

export function Badge({ ...props }: ComponentProps<"span">) {
  return <span {...props} className={cn("badge", props.className)} />
}
