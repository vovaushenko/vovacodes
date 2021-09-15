import styled, { css } from 'styled-components';
import {
  tiltIn,
  windowsSlitOutKeyframes,
} from '../../design-system/reusableCss';

const unmountAnimation = css`
  animation: ${windowsSlitOutKeyframes} 0.4s ease-in both;
`;

const isOpenStyle = css`
  visibility: visible;
  opacity: 1;
`;

const isClosedStyle = css`
  visibility: hidden;
  transition: visibility 0.4s,
    opacity 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  opacity: 0;
`;

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  ${({ isOpen }) => (isOpen ? isOpenStyle : isClosedStyle)};
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20.5px);
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.systemTray.bg};
  box-shadow: ${({ theme }) => theme.boxShadow.window};

  /* animation */
  animation: ${tiltIn} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  /* if window will be closed (controlled through redux) unmount animation will be added*/
  ${({ isOpen }) => isOpen === false && unmountAnimation};
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
  gap: ${({ theme }) => theme.space.xxs};
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
