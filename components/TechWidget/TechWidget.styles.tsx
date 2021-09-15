import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
`;

export const ReactFigure = styled.figure`
  flex: 0.25;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: spin;
  animation-duration: 8000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const TextWrapper = styled.div`
  flex: 0.75;
`;
