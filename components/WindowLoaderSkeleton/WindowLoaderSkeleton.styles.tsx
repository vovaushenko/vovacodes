import styled, { keyframes } from 'styled-components';

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-20px);
  }
`;

export const Container = styled.div`
  height: 100%;

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
