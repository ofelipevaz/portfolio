import React from "react"

import { Slot, SlotProps } from "@radix-ui/react-slot"
import { TextVariants, buildTextVariants } from "./index.variants"
import { cn } from "@/lib/utils"

import "./index.styles.css"

type TextTag = "p" | "span" | "blockquote"

interface TextProps<T extends TextTag> extends React.HTMLAttributes<T> {
  as?: TextTag
  variants?: TextVariants
  asChild?: boolean
}

export function Text<T extends TextTag>({
  as: Tag = "p",
  variants,
  asChild,
  ...props
}: TextProps<T> & SlotProps) {
  const variantsClasses = buildTextVariants(variants)
  const SlotTag = asChild ? Slot : Tag

  const Component = () => (
    <SlotTag
      {...props}
      className={cn(
        Tag == "blockquote" && "blockquote",
        variantsClasses,
        props.className
      )}
    />
  )

  return <Component />
}
