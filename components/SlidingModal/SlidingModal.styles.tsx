import styled, { css } from 'styled-components';
import { SliderProps } from './SlidingModal';

interface ContainerProps extends SliderProps {
  isSlidingModalOpen: boolean;
  isAppCenterOpen: boolean;
  areSettingsOpen: boolean;
  isSearchOpen: boolean;
}

const widgetModalStyles = css<ContainerProps>`
  padding: ${({ theme }) => theme.space.sm};
  background: ${({ theme }) => theme.colors.modals.widgetModalBg};

  /* occupy all height and leave space for system tray */
  height: calc(100vh - 5rem);
  /* show/hide*/
  transform: ${({ width, isSlidingModalOpen }) =>
    isSlidingModalOpen ? `translateX(1rem)` : `translateX(-${width})`};

  overflow: visible;
  overflow-y: auto;
`;

const systemTrayModalStyles = css<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.systemTray.bg};
  transform: ${({ isAppCenterOpen, width }) =>
    isAppCenterOpen ? `translateY(-7rem)` : `translateY(${width})`};
`;
const searchModalStyles = css<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.systemTray.bg};
  transform: ${({ isSearchOpen, width }) =>
    isSearchOpen ? `translateY(-7rem)` : `translateY(${width})`};
`;

const settingsModalStyles = css<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.systemTray.bg};
  transform: ${({ areSettingsOpen, width }) =>
    areSettingsOpen ? `translateY(-4rem)` : `translateY(${width})`};
`;

export const Container = styled.div<ContainerProps>`
  /* positioning */
  position: absolute;
  top: ${({ position }) => position.top};
  bottom: ${({ position }) => position.bottom};
  right: ${({ position }) => position.right};
  left: ${({ position }) => position.left};

  /* display */
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  transition: 0.3s all ease-in-out;
  /* show/hide modal*/
  ${({ variant }) => variant === 'widgetsModal' && widgetModalStyles}
  ${({ variant }) => variant === 'systemTrayModal' && systemTrayModalStyles}
  ${({ variant }) => variant === 'settingsModal' && settingsModalStyles}
  ${({ variant }) => variant === 'searchModal' && searchModalStyles}

  /* styling */
  width: ${({ width }) => width};
  border-radius: ${({ theme }) => theme.borderRadius};
  backdrop-filter: blur(20.5px);
  box-shadow: ${({ theme }) => theme.boxShadow.appBtn};
`;
