import styled, { css } from 'styled-components';
import { SliderProps } from './SlidingModal';

interface ContainerProps extends SliderProps {
  isSlidingModalOpen: boolean;
  isSearchOpen: boolean;
  areSettingsOpen: boolean;
}

const widgetModalStyles = css<ContainerProps>`
  padding: 1rem;
  background: rgba(47, 70, 95, 0.37);
  /* occupy all height and leave space for system tray */
  height: calc(100vh - 5rem);
  /* show/hide*/
  transform: ${({ width, isSlidingModalOpen }) =>
    isSlidingModalOpen ? `translateX(1rem)` : `translateX(-${width})`};
`;

const systemTrayModalStyles = css<ContainerProps>`
  background-color: ${({ theme }) => theme.systemTrayBackground};
  transform: ${({ isSearchOpen, width }) =>
    isSearchOpen ? `translateY(-4rem)` : `translateY(${width})`};
`;
const settingsModalStyles = css<ContainerProps>`
  background-color: ${({ theme }) => theme.systemTrayBackground};
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
  /* show/hide modal*/
  ${({ variant }) => variant === 'widgetsModal' && widgetModalStyles}
  ${({ variant }) => variant === 'systemTrayModal' && systemTrayModalStyles}
  ${({ variant }) => variant === 'settingsModal' && settingsModalStyles}
  overflow: hidden;
  transition: 0.3s all ease-in-out;
  /* styling */
  width: ${({ width }) => width};
  border-radius: ${({ theme }) => theme.borderRadius};
  backdrop-filter: blur(20.5px);
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 2%), 0 6.7px 5.3px rgb(0 0 0 / 3%),
    0 12.5px 10px rgb(0 0 0 / 4%), 0 22.3px 17.9px rgb(0 0 0 / 4%),
    0 41.8px 33.4px rgb(0 0 0 / 5%), 0 100px 80px rgb(0 0 0 / 7%);
`;
