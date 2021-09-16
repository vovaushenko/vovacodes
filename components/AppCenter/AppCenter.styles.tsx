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

export const InitialScreen = styled.div`
  animation: slide-in-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-left {
    0% {
      transform: translateX(-500px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const AllAppsList = styled.div`
  padding: ${({ theme }) =>
    `${theme.space.sm} ${theme.space.sm} 0 ${theme.space.sm}`};
  background-color: ${({ theme }) => theme.colors.appCenter.bg};

  animation: slide-in-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-right {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
