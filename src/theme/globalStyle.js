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
  li {
    display: inline-block;
  }
`;

export default GlobalStyles;
