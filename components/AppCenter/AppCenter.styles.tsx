import styled from 'styled-components';

export const Container = styled.div``;

interface Props {
  themeMode: 'dark' | 'light';
}

export const AllApps = styled.div<Props>`
  padding: 1rem 1rem 0 1rem;

  ${({ themeMode }) =>
    themeMode === 'dark'
      ? 'background: rgba(28, 33, 39, 0.63)'
      : 'background: rgba(255, 255, 255, 0.26)'}
`;

interface HeaderProps {
  margin: string;
}

export const SectionHeader = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ margin }) => margin};
  padding: 0 1.5rem;

  h3 {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.25rem 2rem;
`;

export const PowerOff = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;

  .power-off {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary.text};
  }
`;

export const SearchBarForm = styled.form`
  padding: 0 1rem;
  margin: 1.25rem 0;
`;
