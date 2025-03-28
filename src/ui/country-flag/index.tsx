import Image from "next/image"

const flags = {
  BR: "Brasil",
  US: "United States",
} as const

type CountryFlagProps = {
  country: "BR" | "US"
  size: "16" | "24" | "32" | "48" | "64"
}

export function CountryFlag({ country, size }: CountryFlagProps) {
  const sizeNumber = Number(size)
  const imageURL = `https://flagsapi.com/${country}/flat/${size}.png`

  return (
    <Image
      className="country-flag"
      width={sizeNumber}
      height={sizeNumber}
      src={imageURL}
      alt={`${flags[country]}`}
    />
  )
}
