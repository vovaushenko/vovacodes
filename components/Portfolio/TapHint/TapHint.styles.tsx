import styled from 'styled-components';

export const Container = styled.div`
  z-index: ${({ theme }) => theme.zIndex.modal};
  position: absolute;
  top: 90%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  left: 45%;

  animation: 2.35s linear 0s infinite normal none running scrollDown;
  animation-delay: 1000ms;

  @keyframes scrollDown {
    50% {
      transform: translateY(0.5rem);
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    top: 80%;
    left: 35%;
  }
`;
