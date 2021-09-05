import styled from 'styled-components';
import { IHighlightedProject } from '../../../types/portfolio';
import { slideTop, trackingInExpand } from '../../../styles/reusableCss';

type ContainerProps = Pick<IHighlightedProject, 'slideBgColor' | 'slideHeight'>;

export const Container = styled.section<ContainerProps>`
  display: flex;
  height: ${({ slideHeight }) => slideHeight || '100%'};
  background-color: ${({ slideBgColor }) => slideBgColor};
  position: relative;
  scroll-snap-align: center;
`;

/**
 * LEFT COLUMN
 */
export const LeftColumn = styled.div`
  width: 45%;
  padding: 6rem 0 3rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageWrapper = styled.div`
  transform: perspective(1500px) rotateY(20deg);
  transition: transform 1s ease 0s;

  :hover {
    transform: perspective(3000px) rotateY(5deg);
  }
`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
  height: 100%;
  gap: 1rem;
`;
export const SlideNumber = styled.div`
  z-index: ${({ theme }) => theme.zIndex.lowPriority};
  position: absolute;
  top: 5%;
  right: 0;
  animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 250ms;
`;

export const Figcaption = styled.figcaption`
  gap: 1rem;
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1rem;
    writing-mode: vertical-lr;
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
    animation: ${trackingInExpand} 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }
`;

/**
 * RIGHT COLUMN
 */
export const RightColumn = styled.div`
  width: 55%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const IconWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const Icon = styled.li`
  .tech-icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  a {
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 250ms;
  }
`;
