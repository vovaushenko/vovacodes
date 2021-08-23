import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.primaryWhite};
    background: ${({ theme }) => theme.primaryBg};
    line-height: 1.4;
    font-size: 1rem;
  }

  html, body {
    height: 100%;
    overflow: auto
  }

  ul {
    list-style-type: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    display: block;
  }

  input {
    font-family: 'Poppins', sans-serif;

    ::placeholder {
      font-family: 'Poppins', sans-serif;
    }
  }

  button {
    font-family: inherit;

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => theme.secondaryBgLighter};
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  button, input, a {
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => theme.secondaryBgLighter};
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0);

  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.secondaryBgLighter};
  }
`;
