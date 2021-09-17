import styled from 'styled-components';
import { slideTop } from '../../../../../design-system/reusableCss';

export const FifthSlide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  min-height: 100vh;

  :before {
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    width: 900px;
    height: 900px;
    background: #383838;
    background: linear-gradient(40deg, #000000 33%, #383838 69%);
    border-radius: 50%;

    animation-name: spin;
    animation-duration: 25s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    h1 {
      font-size: 2.5rem;
      line-height: 1;
    }

    :before {
      width: 400px;
      height: 400px;
    }
  }
`;

export const Milestone = styled.article`
  z-index: 5;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(22px);
  animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const MilestoneHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 1.25rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.portfolio.text.light};
  }

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.portfolio.primaryColor.dark};
    text-transform: uppercase;
  }

  time {
    font-size: 1.25rem;
    margin-right: 2rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h4 {
      font-size: 1rem;
    }

    h3 {
      font-size: 1rem;
    }

    time {
      font-size: 1rem;
      margin-right: 0;
    }
  }
`;
