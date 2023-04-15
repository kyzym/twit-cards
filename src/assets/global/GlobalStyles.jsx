import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100vh;
  }

  #root{
    height: 100%;
    width: 100%;
    padding: 0;
  
  }

  main{
    flex:1 1 auto;
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
