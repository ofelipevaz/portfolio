import { Text } from "@/components/@ui/text"

export default function Home() {
  return (
    <div>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        magni explicabo at asperiores quis fugiat enim mollitia animi quae,
        quisquam aliquam nulla earum neque ex error tempora ab cumque suscipit.
      </Text>
      <Text as="blockquote" variants={{ decoration: "underline" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        magni explicabo at asperiores quis fugiat enim mollitia animi quae,
        quisquam aliquam nulla earum neque ex error tempora ab cumque suscipit.
      </Text>
    </div>
  )
}
