import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    font-family: sans-serif;
  }

  body {
    background-color: #3c3c3c;
  }

  html {
    font-size: 64.7%;
  }
`;