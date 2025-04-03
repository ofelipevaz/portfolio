import { HeaderLogotype } from "./Logotype"
import { HeaderSideButtons } from "./SideButtons"

import "./index.styles.css"

export function Header() {
  return (
    <header className="header">
      <HeaderLogotype />

      <nav className="header-navigation">
        <HeaderSideButtons />
      </nav>
    </header>
  )
}
