import styled, { keyframes } from 'styled-components';
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

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-20px);
  }
`;

export const Loader = styled.div`
  heigth: 100%;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: ${({ theme }) => theme.portfolio.primaryColor.light}
      repeating-linear-gradient(
        60deg,
        transparent,
        transparent 10px,
        #01bf71 10px,
        rgba(3, 21, 41, 0.32) 20px
      );
    animation: ${loadingKeyframes} 1s infinite linear;
  }

  & > span {
    opacity: 0.5;
  }

  cursor: wait;
`;
