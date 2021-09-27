import styled from 'styled-components';
import { tiltIn } from '../../design-system/reusableCss';

export const Container = styled.div`
  z-index: ${({ theme }) => theme.zIndex.modal};

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  position: absolute;
  top: 0;
  left: calc(100% + 5px);

  padding: ${({ theme }) => theme.space.xxs};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 200px;

  background: ${({ theme }) => theme.colors.appCenter.bg};
  backdrop-filter: blur(20.5px);
  box-shadow: ${({ theme }) => theme.boxShadow.window};

  /* animation */
  animation: ${tiltIn} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
