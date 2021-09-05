import styled from 'styled-components';
import { rollInLeft, rollInRight, slideTop } from '../../../styles/reusableCss';

//https://stackoverflow.com/questions/53416348/css-scroll-snapping-vertical-not-working
//scrollbar snap

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export const FirstSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

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
`;

export const ThirdSlide = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;

  .skills-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .glass-wrapper {
    display: flex;
    gap: 4rem;
    margin-top: 2rem;
  }

  .glass-content {
    z-index: 5;
    display: flex;
    flex-direction: column;
    min-width: 40%;
    max-width: 95%;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    .icon-skills {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 1rem 0;
    }

    .tech-skills {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  :after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 55%;
    width: 700px;
    height: 700px;
    background: #383838;
    background: linear-gradient(40deg, #000000 33%, #383838 69%);
    border-radius: 50%;
    animation: ${rollInLeft} 2s cubic-bezier(0.23, 1, 0.32, 1) both;
  }

  :before {
    content: '';
    position: absolute;
    top: 10px;
    left: 55%;
    width: 700px;
    height: 700px;
    background: #383838;
    background: linear-gradient(40deg, #ffc130 22%, #383838 70%, #000000 89%);
    border-radius: 50%;
    animation: ${rollInRight} 2s cubic-bezier(0.23, 1, 0.32, 1) both;
  }
`;

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
`;

export const FifthSlide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;


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
`;

export const SixthSlide = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  h1 {
    line-height: 1;
  }

  .left-column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }

  .right-column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #4831d4;
    width: 50%;
  }

  .content-wrapper {
    width: 55%;
  }

  button {
    align-self: flex-start;
  }
`;
