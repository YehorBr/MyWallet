import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

body {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.4;

  color: #000;

  padding-bottom: 80px;

  background: #fefefe;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65%;
  background: #F5F6FB;
  border-bottom-left-radius: 200px;
  z-index: -1;

  @media screen and (min-width: 768px) and (max-width: 1199px){
    height: 45%;
  }
}

  button {
    font-family: inherit;
    cursor: pointer;

    &:focus{
      outline: none;
    }
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
  }
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  *:hover,
  *:focus{
    outline: none;
  }
`;