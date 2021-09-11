import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif
  }

  html, body, #__next {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    border: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors["white.300"]};
    color: ${({ theme }) => theme.colors["black.100"]};
    font-size: 16px;
  }

  #__next {
    a {
      text-decoration: none;
    }
  }
`
