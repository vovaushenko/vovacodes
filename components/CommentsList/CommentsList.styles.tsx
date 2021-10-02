import styled from 'styled-components';
import { slidInCenter } from '../../design-system/reusableCss';

export const Container = styled.section`
  padding: 5rem 0;
  height: 100%;
`;

export const UL = styled.ul`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: 0 2rem;
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const LI = styled.li``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  button {
    align-self: center;
  }
`;
