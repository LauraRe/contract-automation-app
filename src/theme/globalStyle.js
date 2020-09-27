import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Barlow', sans-serif;
  }
  div {
    text-align: center;
  }
  h1 {
    font-family: 'Barlow', sans-serif;
  }
  h2 {
    font-family: 'Barlow', sans-serif;
    font-size: 2.2rem;
    margin-left: 4rem;
    text-align: left;
    color: #E54C29;
  }
  h3 {
    font-family: 'Barlow', sans-serif;
    font-size: 1.5rem;
    text-align: center;
    color: black;
  }
  li {
    display: inline-block;
  }
`;

export default GlobalStyles;
