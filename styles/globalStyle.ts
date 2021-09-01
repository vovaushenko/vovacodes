import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.primary.text};
    background: ${({ theme }) => theme.primary.background};
    line-height: 1.4;
    font-size: 1rem;
  }

  body, html {
    scroll-snap-type: proximity;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y proximity;
  }

  .icon {
    color: ${({ theme }) => theme.primary.text};
  }

  /* hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }

`;
