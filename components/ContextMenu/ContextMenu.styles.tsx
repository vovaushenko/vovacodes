import styled, { css } from 'styled-components';
import { Props } from './ContextMenu';
import { tiltIn } from '../../design-system/reusableCss';

type ContainerProps = Pick<Props, 'locationCoordinates' | 'isOpen'>;

/**
 * CLOSED STYLES - item is initially hidden when closed
 */
const isClosedStyle = css`
  visibility: hidden;
  transition: visibility 0.2s,
    opacity 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  opacity: 0;
`;
/**
 * OPEN STYLES - item is only visible when isOpen flag is in "true" state
 */
const isOpenStyle = css`
  visibility: visible;
  opacity: 1;
`;
/**
 * BASE STYLES
 */
export const Container = styled.nav<ContainerProps>`
  ${({ isOpen }) => (isOpen ? isOpenStyle : isClosedStyle)};

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  position: absolute;
  top: ${({ locationCoordinates }) => `${locationCoordinates.y}px`};
  left: ${({ locationCoordinates }) => `${locationCoordinates.x}px`};
  right: ${({ locationCoordinates }) => `${locationCoordinates.x}px`};

  padding: ${({ theme }) => theme.space.xxs};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 250px;

  background: ${({ theme }) => theme.colors.appCenter.bg};
  backdrop-filter: blur(20.5px);
  box-shadow: ${({ theme }) => theme.boxShadow.window};

  /* animation */
  animation: ${tiltIn} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const UL = styled.ul``;
export const LI = styled.li``;
