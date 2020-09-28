import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  a {
    display: inline-block;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: .15em;
    color: #E54C29 !important;
    font-size: 1.3rem;
    margin-right: 3em;
    text-align: center;
  }
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
`;

export default GlobalStyles;
