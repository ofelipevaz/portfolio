import Image from "next/image"
import LogotypeImage from "~/public/logotype.png"
import { ScreenReaderOnly } from "~/src/ui/screen-reader-only"

import "./index.styles.css"
import { useTranslations } from "next-intl"
import Link from "next/link"

export function Logotype() {
  const imageAlts = useTranslations("ImageAlts")

  return (
    <Link href="/" className="logotype">
      <Image
        className="logotype-image"
        src={LogotypeImage.src}
        width={LogotypeImage.width}
        height={LogotypeImage.height}
        alt={imageAlts("selfLogotype")}
        draggable={false}
      />
      <h1 className="logotype-display">
        <ScreenReaderOnly>Felipe Vaz</ScreenReaderOnly>
        <span>Dev</span>
      </h1>
    </Link>
  )
}
