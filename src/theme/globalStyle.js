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
  li {
    display: inline-block;
  }
  ul {
    border: 2px solid #E54C29;
    border-radius: 5px;
    background: linear-gradient(to bottom,#147CBD 20%,#203974 100%);
    padding: 1em;
    color: white;
  }
  wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-left: 1em;
    margin-right: 1em;
  }
`;

export default GlobalStyles;
