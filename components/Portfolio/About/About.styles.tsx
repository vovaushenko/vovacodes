import styled from 'styled-components';

//https://stackoverflow.com/questions/53416348/css-scroll-snapping-vertical-not-working
//scrollbar snap
export const Container = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

export const FirstSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
