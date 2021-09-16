import styled from 'styled-components';
import { Props } from './Loader';

export const Container = styled.section<Props>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.lg};
  font-family: 'Poppins', sans-serif;

  animation: slide-out-blurred-top 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06)
    both;
  animation-delay: ${({ loadingDuration }) => `${loadingDuration - 500}ms`};

  @keyframes slide-out-blurred-top {
    0% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 0%;
      filter: blur(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-1000px) scaleY(2) scaleX(0.2);
      transform-origin: 50% 0%;
      filter: blur(40px);
      opacity: 0;
    }
  }
`;

export const TextContainer = styled.div`
  height: 50px;
  overflow: hidden;
`;

export const ScrollText = styled.div`
  height: 100%;
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.portfolio.primaryColor.light};

  transform: translateY(100%);
  animation: my-animation 6s linear;
  animation-delay: 700ms;

  @keyframes my-animation {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(-600%);
    }
  }
`;
