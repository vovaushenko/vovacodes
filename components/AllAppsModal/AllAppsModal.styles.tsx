import styled from 'styled-components';
import { showScrollbarStyles } from '../../design-system/reusableCss';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  max-height: 501px;
  overflow-y: auto;

  ${showScrollbarStyles}
`;

export const LI = styled.li`
  button {
    width: 100%;
    align-items: flex-start;
  }
`;
