import Link from "next/link"

import { FontSizeType } from "@/styles/theme"

import Text from "../Text"

interface LogoProps {
  isOpposite?: boolean
  size?: FontSizeType
  redirectPath?: string
}

const Logo: React.FC<LogoProps> = ({
  redirectPath = "/",
  isOpposite = false,
  size = "title.sm"
}) => {
  return (
    <Link href={redirectPath}>
      <a className="cursor-pointer text-decoration-none">
        <Text
          as="h1"
          size={size}
          colorKey={isOpposite ? "white.300" : "yellow.100"}
          fontWeight="bold"
          style={{
            marginBottom: 0
          }}
        >
          HoneyPots
        </Text>
      </a>
    </Link>
  )
}

export default Logo
