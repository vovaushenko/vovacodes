import styled from 'styled-components';
import { slideTop } from '../../../../../design-system/reusableCss';

export const FourthSlide = styled.div`
  display: flex;

  .left-column {
    width: 50%;
    height: 100%;
    padding: 3rem 2rem 3rem 10rem;

    h1 {
      line-height: 1;
      margin-bottom: 2rem;
    }
  }

  .right-column {
    width: 50%;
    height: 100%;
    padding: 2rem;
    padding-top: 10rem;
    animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    .left-column {
      width: 100%;

      padding: 2rem;

      h1 {
        font-size: 2.5rem;
        line-height: 1;
        margin-bottom: 1rem;
      }
    }

    .right-column {
      width: 100%;
      padding: 0;
    }
  }
`;
