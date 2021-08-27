import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
`;

export const Label = styled.label`
  /* position */
  position: absolute;
  top: 50%;
  left: 1rem;
  /* display */
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform */
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  /* styling */
  color: rgb(133, 133, 133);
  cursor: text;
  user-select: none;
  transition: 0.15s ease-in-out;
  font-size: ${({ theme }) => theme.fontSize.medium};

  .search-icon {
    font-size: 1.25rem;
    color: rgb(3, 132, 192);
    margin-right: 0.5rem;
  }
`;

interface InputProps {
  themeMode: 'dark' | 'light';
}

const lightThemeStyles = css`
  background: rgb(255, 255, 255);
`;
const darkThemeStyles = css`
  background: rgb(24, 34, 61);
`;

export const Input = styled.input<InputProps>`
  ${({ themeMode }) =>
    themeMode === 'dark' ? darkThemeStyles : lightThemeStyles}

  display: block;
  padding: 0.75rem;
  width: 100%;
  background: rgb(24, 34, 61);
  border: 0;
  border-bottom: 2px #4489aa solid;
  color: ${({ theme }) => theme.primary.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;

  [data-empty='false'] + label,
  :valid + label,
  :focus + label {
    top: -11px;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.primary.text};
  }
`;
