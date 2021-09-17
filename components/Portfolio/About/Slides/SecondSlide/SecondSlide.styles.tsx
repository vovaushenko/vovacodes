import styled from 'styled-components';

export const SecondSlide = styled.div`
  display: flex;
  height: 100%;

  .left-column {
    width: 50%;
    height: 100%;
    padding: 10rem 7rem;
    display: flex;

    h1 {
      writing-mode: vertical-lr;
    }
  }

  .right-column {
    width: 50%;
    height: 100%;
    padding: 10rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h1 {
      font-size: 3rem;
    }

    flex-direction: column;
    .left-column {
      width: 100%;
      height: 50%;
      padding: 2rem;
      display: flex;

      align-items: flex-end;
    }

    .right-column {
      width: 100%;
      height: 50%;
      padding: 2rem;
    }
  }
`;
