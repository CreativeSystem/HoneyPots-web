import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "@/styles/global"
import { light } from "@/styles/theme"
import { StylesProvider } from "@material-ui/styles"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <StylesProvider injectFirst>
        <Component {...pageProps} />
        <GlobalStyle />
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
