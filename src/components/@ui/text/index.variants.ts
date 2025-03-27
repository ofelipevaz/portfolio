import { VariantProps, cva } from "class-variance-authority"

export const buildTextVariants = cva([], {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-2xl",
    },
    weight: {
      extralight: "font-extralight",
      light: "font-light",
      medium: "font-medium",
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    color: {
      primary: "text-primary",
      error: "text-error",
      disabled: "text-disabled",
      muted: "text-muted",
    },
    hyphens: {
      on: "hyphens-auto",
      off: "hyphens-none",
    },
    wordBreak: {
      all: "break-all",
      keep: "break-keep",
      normal: "break-normal",
    },
    overflow: {
      none: undefined,
      hidden: "overflow-hidden",
      truncate: "truncate",
    },
    wrap: {
      balance: "text-balance",
      pretty: "text-pretty",
      wrap: "text-wrap",
      noWrap: "text-nowrap",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    clamp: {
      none: "line-clamp-none",
      "1": "line-clamp-1",
      "2": "line-clamp-2",
      "3": "line-clamp-3",
      "4": "line-clamp-4",
      "5": "line-clamp-5",
      "6": "line-clamp-6",
    },
    decoration: {
      none: "no-underline",
      underline: "underline",
      lineThrough: "line-through",
      overline: "overline",
    },
    transform: {
      none: "normal-case",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
    lineHeight: {
      xs: "!leading-3",
      sm: "!leading-4",
      md: "!leading-6",
      lg: "!leading-7",
      xl: "!leading-8",
    },
    underlineOffset: {
      xs: "underline-offset-1",
      sm: "underline-offset-2",
      md: "underline-offset-4",
      lg: "underline-offset-8",
    },
  },
  compoundVariants: [
    // defining default value of underline's offset
    {
      decoration: "underline",
      underlineOffset: undefined,
      className: "underline underline-offset-2",
    },
  ],
})

export type TextVariants = VariantProps<typeof buildTextVariants>
