import styled from 'styled-components';

export const SixthSlide = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  h1 {
    line-height: 1;
  }

  .left-column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 0.5;
  }

  .right-column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #4831d4;
    flex: 0.5;
  }

  .content-wrapper {
    width: 55%;
  }

  button {
    align-self: flex-start;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    margin-top: 2rem;
    h1 {
      font-size: 2.5rem;
    }

    .content-wrapper {
      width: 85%;
    }

    .left-column {
    }

    .right-column {
    }
  }
`;
