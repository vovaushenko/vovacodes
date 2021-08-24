import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.primary.text};
    background: ${({ theme }) => theme.primary.background};
    line-height: 1.4;
    font-size: 1rem;
  }
`;
