import { useToastContext } from "../store/ToastContext"

export type ToastVariant = "success" | "info" | "error"

export type ToastType = {
  title: string
  description: string
  variant?: ToastVariant
}

export function useToast() {
  const { toast, setToast } = useToastContext()

  function notify(toast: ToastType) {
    setToast(toast)
  }

  return { notify, toast }
}
