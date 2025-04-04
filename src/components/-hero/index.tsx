import { HeroContent } from "./Content"
import { HeroTerminal } from "./Terminal"

import "./index.styles.css"

export function Hero() {
  return (
    <main className="hero">
      <HeroContent />
      <HeroTerminal />
    </main>
  )
}
