import { Slot } from "@radix-ui/react-slot"
import { ComponentProps, ReactNode } from "react"

interface ScreenViewOnlyProps extends ComponentProps<"span"> {
  asChild?: boolean
  children: ReactNode
}

export function ScreenViewOnly({ asChild, ...rest }: ScreenViewOnlyProps) {
  const Component = asChild ? Slot : "span"

  return <Component aria-hidden {...rest} />
}
