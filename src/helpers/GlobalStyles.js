import { createGlobalStyle } from "styled-components";
import { colors } from "./ColorPalette";

export const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    font-family: "Nunito", sans-serif, Arial, Helvetica;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.bodyBackground};

    .Toastify__zoom-enter {
      path {
        fill: #AEAEAE
      }
    }

    .Toastify__progress-bar--info {
      background: #FFC800;
    }

    .Toastify__progress-bar--success {
      background: ${colors.statsHigherValue};
    }
  }
  
  html {
    font-size: 64.7%;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 60%;   
    }
  }
`;
