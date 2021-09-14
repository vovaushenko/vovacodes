import { createGlobalStyle } from 'styled-components';
/*
 * Styled components global style configuration
 * used to globally inject configurable variables in styling
 * Main part of our styling is atomic and governed by themes configured in "system-design-variables.ts"
 * */
export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.primary.text};
    background: ${({ theme }) => theme.primary.background};
  }

  html,
  body {
    height: 100%;
    overflow: auto;
  }

  .icon {
    color: ${({ theme }) => theme.primary.text};
  }

  /* hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
`;
