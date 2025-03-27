import { cva, VariantProps } from "class-variance-authority"

export const buildButtonVariants = cva(["button cursor-pointer py-1 px-2.5"], {
  variants: {
    style: {
      solid: undefined,
      outlined: undefined,
    },
    centralize: {
      true: "flex justify-center items-center",
      false: undefined,
    },
    rounded: {
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      ful: "rounded-full",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    background: {
      primary:
        "bg-btn-primary-background hover:bg-btn-primary-background/90 text-btn-primary-display",
      contrast:
        "bg-btn-contrast-background hover:bg-btn-contrast-background/90 text-btn-contrast-display",
    },
    width: {
      fit: "w-fit",
      full: "w-full",
    },
  },
  compoundVariants: [
    {
      background: "primary",
      style: "outlined",
      className:
        "border border-btn-primary-background text-btn-primary-background bg-transparent hover:bg-btn-primary-background hover:text-btn-primary-display transition-colors",
    },
    {
      background: "contrast",
      style: "outlined",
      className:
        "border border-btn-contrast-background text-btn-contrast-background bg-transparent hover:bg-btn-contrast-background hover:text-btn-contrast-display transition-colors",
    },
  ],
  defaultVariants: {
    background: "contrast",
    style: "solid",
    size: "md",
    rounded: "xs",
  },
})
export type ButtonVariants = VariantProps<typeof buildButtonVariants>
