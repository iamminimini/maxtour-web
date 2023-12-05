import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`${css`
  ${reset}
  body {
    height: 100vh;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`}
`;
