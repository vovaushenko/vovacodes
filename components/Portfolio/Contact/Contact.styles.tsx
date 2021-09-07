import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export const FirstSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;

  h1 {
    width: 70%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h1 {
      width: 85%;
    }
  }
`;

export const SecondSlide = styled.div`
  height: 100%;
  padding: 4rem;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 0;
    h1 {
      font-size: 3rem;
      line-height: 1;
    }
  }
`;

export const LeftColumn = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  @media ${({ theme }) => theme.media.tablet} {
    gap: 1rem;
  }
`;
export const RightColumn = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  height: 100%;

  h1 {
    writing-mode: tb-rl;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column-reverse;
    justify-content: flex-end;

    h1 {
      writing-mode: lr;
    }
  }
`;

export const SocialContactsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    marging-top: 1rem;
  }
`;
