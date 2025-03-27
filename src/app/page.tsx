import { Button } from "@/components/@ui/button"
import { Text } from "@/components/@ui/text"
import { Badge } from "@/components/@ui/badge"

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

      <div className="m-10">
        <Button variants={{ background: "primary" }}>Submit</Button>
      </div>
      <div className="m-10">
        <Button variants={{ background: "contrast" }}>Submit</Button>
      </div>
      <div className="m-10">
        <Button variants={{ style: "outlined", background: "primary" }}>
          Submit
        </Button>
      </div>
      <div className="m-10">
        <Button variants={{ style: "outlined", background: "contrast" }}>
          Submit
        </Button>
      </div>
      <div className="m-10">
        <Button
          variants={{
            style: "outlined",
            width: "full",
            size: "md",
            background: "contrast",
          }}
        >
          Submit
        </Button>
      </div>

      <div className="mt-4">
        <Badge>Portfolio</Badge>
      </div>
    </div>
  )
}
