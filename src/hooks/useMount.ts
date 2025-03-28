import { useEffect, useState } from "react"

export function useMount() {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return { isMounted }
}
