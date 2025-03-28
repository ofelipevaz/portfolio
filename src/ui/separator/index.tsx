"use client"

import { ComponentProps } from "react"

import * as RadixSeparator from "@radix-ui/react-separator"

import "./index.styles.scss"
import { cn } from "~/src/lib/utils"

interface SeparatorProps extends ComponentProps<"hr"> {
  variants?: {
    orientation?: "vertical" | "horizontal"
    decorative?: boolean
  }
}

export function Separator({ variants, ...props }: SeparatorProps) {
  return (
    <RadixSeparator.Root
      {...props}
      orientation={variants?.orientation}
      decorative={variants?.decorative}
      className={cn("separator", props.className)}
    />
  )
}
