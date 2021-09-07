import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 90%;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  animation: 2.35s linear 0s infinite normal none running scrollDown;

  .icon {
    font-size: 1.25rem;
  }

  @keyframes scrollDown {
    50% {
      transform: translateY(0.5rem);
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    top: 80%;
  }
`;
