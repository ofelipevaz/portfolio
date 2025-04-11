import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/*
 * "ClassPrefix" | create a simple class prefixer
 */
export function cp(base: string, separator: string = "-") {
  return (value?: string) => {
    return value ? base + separator + value : base
  }
}
