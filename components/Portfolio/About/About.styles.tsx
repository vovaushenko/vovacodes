import styled from 'styled-components';

//https://stackoverflow.com/questions/53416348/css-scroll-snapping-vertical-not-working
//scrollbar snap

export const Container = styled.div`
  height: 100vh;

  @media ${({ theme }) => theme.media.desktop} {
    /**
    * Scroll snapping will be applied only on desktop screens
    */
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
`;
