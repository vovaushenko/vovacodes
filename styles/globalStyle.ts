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
    color: ${({ theme }) => theme.primary.text};
    background: ${({ theme }) => theme.primary.backround};
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


`;
