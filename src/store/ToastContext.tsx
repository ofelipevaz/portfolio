"use client"

import React, { ReactNode, useState } from "react"
import { ToastType } from "../hooks/useToast"
import * as RxToast from "@radix-ui/react-toast"
import { Toast } from "../ui/toast"

export type ToastContextProps = {
  toast: ToastType | null
  setToast: (toast: ToastType) => void
}

export const ToastContext = React.createContext<ToastContextProps | null>(null)

export const useToastContext = () => {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider")
  }

  return context
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastType | null>(null)

  return (
    <RxToast.Provider swipeDirection="right">
      <ToastContext.Provider value={{ toast, setToast }}>
        {toast && (
          <Toast
            rootProps={{
              onOpenChange: () => {
                setToast(null)
              },
            }}
            options={{ ...toast }}
          />
        )}
        {children}
      </ToastContext.Provider>
      <RxToast.Viewport tabIndex={0} className="toast-viewport" />
    </RxToast.Provider>
  )
}
