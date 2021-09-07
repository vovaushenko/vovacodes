import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;

  @media ${({ theme }) => theme.media.desktop} {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }
`;
