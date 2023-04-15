import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul{
    list-style: none;
  }
  ul,li,p{
    padding: 0;
    margin: 0;
  }
  button{
  border: none;
  outline: none;
  }
`;
