import styled from 'styled-components';
import { slideTop } from '../../../design-system/reusableCss';

export const Container = styled.section`
  height: 100vh;
  @media ${({ theme }) => theme.media.desktop} {
    /**
    * Scroll snapping will be applied only on desktop screens
    */
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }
`;

export const FirstSlide = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  scroll-snap-align: center;
  background-color: ${({ theme }) => theme.portfolio.secondaryBg.purple};

  h1 {
    width: 65%;
    line-height: 1.2;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h1 {
      width: 85%;
    }
  }
`;

export const InlineLink = styled.a`
  display: inline-block;

  color: ${({ theme }) => theme.portfolio.primaryColor.light};

  transition: all 0.3s ease;

  :hover {
    transform: translateX(35px);
    letter-spacing: -1px;
    background-image: linear-gradient(
      45deg,
      #01bf71 0%,
      #2bd2ff 52%,
      #2bff88 90%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SecondSlide = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 2rem;
  scroll-snap-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`;

export const List = styled.ul`
  margin-top: 4rem;
  display: grid;
  gap: 1.5rem;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  animation: ${slideTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media ${({ theme }) => theme.media.tablet} {
    gap: 1rem;
    padding: 1rem;
  }
`;

export const LI = styled.li``;

export const FiltersToggler = styled.button`
  z-index: ${({ theme }) => theme.zIndex.lowPriority};
  position: absolute;
  bottom: 3rem;
  right: 4rem;

  display: grid;
  place-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.portfolio.primaryColor.light};
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;

  animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  /**
   * ----------------------------------------
   * animation shake-horizontal
   * ----------------------------------------
   */
  @keyframes shake-horizontal {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
  }

  .filter__icon {
    font-size: 1.75rem;
    transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
  }

  &:hover {
    .filter__icon {
      transform: rotate(360deg);
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    bottom: 1rem;
    right: 1rem;
  }
`;
