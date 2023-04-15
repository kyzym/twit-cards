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
    text-align: center;
  }

  ul{
    list-style: none;
  }

  ul,li,p,h1,h2,h3,h4,h5{
    padding: 0;
    margin: 0;
  }

  button{
  border: none;
  outline: none;
  }
  
  button:active{
    outline: none;
  }
`;
