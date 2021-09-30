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
    width: 70%;
    line-height: 1.2;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h1 {
      width: 85%;
    }
  }
`;

export const SecondSlide = styled.div`
  min-height: 100vh;
  padding: 2rem;
  scroll-snap-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`;

export const List = styled.ul`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  animation: ${slideTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const LI = styled.li``;
