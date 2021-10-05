import styled, { css } from 'styled-components';
import {
  slideInLeft,
  slideInRight,
} from '../../../../../design-system/reusableCss';

export const FifthSlide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  min-height: 100vh;
  overflow: hidden;


}

@media ${({ theme }) => theme.media.tablet} {
  h1 {
    font-size: 2.5rem;
    line-height: 1;
  }

}
`;

const firstMilestoneAnimation = css`
  animation: ${slideInRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
const secondMilestoneAnimation = css`
  animation: ${slideInLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 500ms;
`;
const thirdMilestoneAnimation = css`
  animation: ${slideInRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 1000ms;
`;

interface Props {
  variant: 'first' | 'second' | 'third';
}

export const Milestone = styled.article<Props>`
  flex-direction: column;
  background-color: ${({ theme }) => theme.portfolio.secondaryBg.purple};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  ${({ variant }) => variant === 'first' && firstMilestoneAnimation};
  ${({ variant }) => variant === 'second' && secondMilestoneAnimation};
  ${({ variant }) => variant === 'third' && thirdMilestoneAnimation};
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
