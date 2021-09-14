import styled from 'styled-components';
import { tiltIn } from '../../design-system/reusableCss';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20.5px);
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.systemTray.bg};

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);

  /* animation */
  animation: ${tiltIn} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.systemTray.bg};
`;

export const WindowInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    text-transform: capitalize;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface ButtonProps {
  variant: 'expand' | 'close';
}

export const NavButton = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  width: 2.25rem;
  height: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  .icon-x {
    font-size: 1.25rem;
  }

  .icon-expand {
    font-size: 1rem;
  }

  :hover {
    background-color: ${({ theme, variant }) =>
      variant === 'close' ? theme.colors.red.lightDanger : theme.gray.dark};
  }

  :active {
    transform: scale(0.9);
  }

  color: ${({ theme }) => theme.primary.text};
`;

export const Content = styled.div`
  height: 100%;
`;
