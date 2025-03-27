import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { ComponentProps } from "react"
import { buildButtonVariants, ButtonVariants } from "./index.variants"

type ButtonProps = {
  asChild?: boolean
  variants?: ButtonVariants
}

export function Button({
  asChild,
  variants,
  ...props
}: ButtonProps & ComponentProps<"button">) {
  const Element = asChild ? Slot : "button"
  const variantsClasses = buildButtonVariants(variants)

  return <Element {...props} className={cn(props.className, variantsClasses)} />
}
