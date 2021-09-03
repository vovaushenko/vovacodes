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
`;

export const SecondSlide = styled.div`
  height: 100%;
  padding: 4rem;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;
`;

export const LeftColumn = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
`;
export const RightColumn = styled.div`
  flex: 0.2;
  display: flex;

  height: 100%;
  align-items: center;

  h1 {
    writing-mode: tb-rl;
  }
`;

export const SocialContactsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
