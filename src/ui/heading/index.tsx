import { Text } from "../text"
import { TextVariants } from "../text/index.variants"

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variants?: TextVariants
  as: HeadingTag
}

export function Heading({ as: Tag, variants, ...props }: HeadingProps) {
  return (
    <Text variants={variants} asChild>
      <Tag {...props} />
    </Text>
  )
}
