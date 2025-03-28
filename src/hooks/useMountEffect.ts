import { DependencyList, EffectCallback, useEffect, useRef } from "react"

export function useEffectAfterMount(
  effect: EffectCallback,
  deps?: DependencyList
) {
  const isMounted = useRef<boolean>(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
