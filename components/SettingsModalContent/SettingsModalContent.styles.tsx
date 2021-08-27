import styled, { css } from 'styled-components';

const darkThemeStyles = css`
  background-color: rgba(28, 33, 39, 0.63);
`;
const lightThemeStyles = css`
  background-color: rgba(255, 255, 255, 0.1);
`;

interface Props {
  themeMode: 'dark' | 'light';
}

export const Top = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  ${({ themeMode }) =>
    themeMode === 'dark' ? darkThemeStyles : lightThemeStyles}
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  gap: 0.75rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const SlidersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0 1rem;

  .icon {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const Battery = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};

  span {
    margin-left: 5px;
  }
`;
export const Settings = styled.div``;
