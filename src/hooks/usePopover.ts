import { useState, useRef } from "react"

export function usePopover(leaveTime?: number) {
  if (leaveTime && (leaveTime <= 0 || leaveTime >= 10000)) {
    throw new Error("Leave time must be between 1 and 10000.")
  }

  const [open, setOpen] = useState(false)
  const scheduleRef = useRef<NodeJS.Timeout | null>(null)

  const clearLeaveTimeout = () => {
    if (scheduleRef.current) {
      clearTimeout(scheduleRef.current)
      scheduleRef.current = null
    }
  }

  const onMouseEnter = () => {
    setOpen(true)
    clearLeaveTimeout()
  }

  const onMouseLeave = () => {
    clearLeaveTimeout()

    if (leaveTime) {
      scheduleRef.current = setTimeout(() => {
        setOpen(false)
      }, leaveTime)
    } else {
      setOpen(false)
    }
  }

  const onClick = () => {
    togglePopover()
  }

  const openPopover = () => setOpen(true)
  const closePopover = () => setOpen(false)
  const togglePopover = () => setOpen((prev) => !prev)

  return {
    open,
    openPopover,
    closePopover,
    togglePopover,
    onMouseEnter,
    onMouseLeave,
    onClick,
  }
}
