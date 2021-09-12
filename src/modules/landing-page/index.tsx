import Text from "@/components/Text"
import usePersistedState from "@/hooks/usePersistedState"
import Layout from "@/modules/layouts/LandingPage"

import { MainContainer } from "./styles"

const LandingPage: React.FC = () => {
  const [state, setState] = usePersistedState("teste", true)

  return (
    <Layout>
      <MainContainer>
        <Text>Honeypots</Text>
        <Text>Honeypots</Text>
        <button onClick={() => setState(!state)}>button</button>
      </MainContainer>
    </Layout>
  )
}

export default LandingPage
