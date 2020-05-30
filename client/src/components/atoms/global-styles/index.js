import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Manrope', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.primary};
  }

  button {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
