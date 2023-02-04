import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    font-family: "Nunito", sans-serif, Arial, Helvetica;
    /* outline: 1px solid rebeccapurple; */
  }

  body {
    background-color: #141414;
  }

  html {
    font-size: 64.7%;
  }
`;
