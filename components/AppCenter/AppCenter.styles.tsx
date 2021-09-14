import styled from 'styled-components';

export const Container = styled.div``;

export const AllApps = styled.div`
  padding: ${({ theme }) =>
    `${theme.space.sm} ${theme.space.sm} 0 ${theme.space.sm}`};
  background-color: ${({ theme }) => theme.colors.appCenter.bg};
`;

interface HeaderProps {
  margin: string;
}

export const SectionHeader = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ margin }) => margin};
  padding: ${({ theme }) => `0 ${theme.space.md}`};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.space.xxxs} ${theme.space.lg}`};
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
  padding: ${({ theme }) => `0 ${theme.space.sm}`};
  margin: ${({ theme }) => `${theme.space.sm} 0`};
`;
