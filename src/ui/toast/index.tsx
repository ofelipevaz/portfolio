import * as RxToast from "@radix-ui/react-toast"
import { ComponentProps, ReactNode } from "react"
import { IconType } from "react-icons"
import { LuCircleCheckBig, LuInfo } from "react-icons/lu"
import { VscError } from "react-icons/vsc"
import { ToastVariant } from "~/src/hooks/useToast"

import "./index.styles.css"
import { IoMdClose } from "react-icons/io"

type ToastType = "success" | "info" | "error"

const ToastTypeIcons: Record<ToastType, IconType> = {
  success: LuCircleCheckBig,
  info: LuInfo,
  error: VscError,
} as const

type ToastProps = {
  rootProps?: ComponentProps<typeof RxToast.Root>
  options: {
    title: string | ReactNode
    description: string | ReactNode
    variant?: ToastVariant
  }
}

export function Toast({ rootProps, options }: ToastProps) {
  const { title, description, variant: type = "info" } = options
  const ToastIcon = ToastTypeIcons[type]

  return (
    <RxToast.Root {...rootProps} className="toast" data-toast-type={type}>
      <div className="toast-icon">
        <ToastIcon />
      </div>
      <div className="toast-content">
        <RxToast.Title className="toast-title">
          <h4>{title}</h4>
        </RxToast.Title>
        <RxToast.Description className="toast-description">
          <p>{description}</p>
        </RxToast.Description>
      </div>
      <RxToast.Close className="toast-close-button">
        <IoMdClose />
      </RxToast.Close>
    </RxToast.Root>
  )
}
