// Estilos globais do CSS.

import { createGlobalStyle } from "styled-components";
import { background } from "./assets";
import fonts from "./themes/fonts";

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${fonts.primary}, ${fonts.default};
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    background-image: url(${background});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
