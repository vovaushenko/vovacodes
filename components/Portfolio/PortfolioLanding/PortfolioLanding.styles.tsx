import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  overflow: hidden;
  min-height: 100vh;
`;

export const Navigation = styled.nav`
  width: 30%;
  position: relative;

  @media ${({ theme }) => theme.media.phone} {
    width: 0%;
  }
`;

export const LinkWrapper = styled.div`
  z-index: 2;
  /* position */
  position: absolute;
  top: 20%;
  left: 40%;
  /* display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${({ theme }) => theme.media.phone} {
    top: 30%;
    left: 2rem;
  }
`;

interface Props {
  photo: string;
}

export const Photo = styled.div<Props>`
  z-index: 1;
  width: 70%;

  background: ${({
    photo,
  }) => `linear-gradient(to top, #010606, transparent 200%),
    url(${photo}) center/cover`};
  /**
   * ----------------------------------------
   * animation fade-in
   * ----------------------------------------
   */
  @keyframes fade-in {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    background: ${({
      photo,
    }) => `linear-gradient(to top, #010606, transparent 250%),
    url(${photo}) left/cover`};
  }
`;
