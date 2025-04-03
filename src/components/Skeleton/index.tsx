import { ReactNode } from "react"

import "./index.styles.css"

type SkeletonProps = {
  children: ReactNode
}

export function Skeleton({ ...rest }: SkeletonProps) {
  return <div className="skeleton" {...rest} />
}
