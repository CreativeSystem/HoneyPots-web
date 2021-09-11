import Logo from "../Logo"
import { Container } from "./styles"

const Header: React.FC = () => {
  return (
    <Container>
      <Logo isOpposite size="text.lg" redirectPath="/home" />
    </Container>
  )
}

export default Header
