import { Slot } from "@radix-ui/react-slot"
import { ComponentProps, ReactNode } from "react"

import "./index.styles.scss"
import { cn } from "@/lib/utils"

interface ScreenReaderOnlyProps extends ComponentProps<"span"> {
  asChild?: boolean
  children: ReactNode
}

export function ScreenReaderOnly({ asChild, ...rest }: ScreenReaderOnlyProps) {
  const Component = asChild ? Slot : "span"

  return <Component {...rest} className={cn("sr-only", rest.className)} />
}
