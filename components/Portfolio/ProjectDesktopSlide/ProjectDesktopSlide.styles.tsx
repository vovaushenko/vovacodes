import styled from 'styled-components';
import { IHighlightedProject } from '../../../types/portfolio';
import { slideTop, trackingInExpand } from '../../../design-system/reusableCss';

type ContainerProps = Pick<IHighlightedProject, 'slideBgColor' | 'slideHeight'>;

export const Container = styled.section<ContainerProps>`
  display: flex;
  height: ${({ slideHeight }) => slideHeight || '100%'};
  background-color: ${({ slideBgColor }) => slideBgColor};
  position: relative;
  scroll-snap-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

/**
 * LEFT COLUMN
 */
export const LeftColumn = styled.div`
  width: 50%;
  padding: 6rem 0 3rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding: 1rem;
    height: 60%;
    align-items: flex-end;
  }
  @media ${({ theme }) => theme.media.phone} {
    height: 45%;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
export const ImageWrapper = styled.div`
  transform: perspective(1500px) rotateY(20deg);
  transition: transform 1s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: perspective(3000px) rotateY(5deg);
  }

  @media ${({ theme }) => theme.media.tablet} {
    justify-content: flex-end;
    align-items: flex-end;
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

  @media ${({ theme }) => theme.media.phone} {
    img {
      width: 150px;
      height: auto;
    }
  }
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

  @media ${({ theme }) => theme.media.phone} {
    h3 {
      font-size: 0.55rem;
    }
  }
`;

/**
 * RIGHT COLUMN
 */
export const RightColumn = styled.div`
  width: 50%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    line-height: 1;
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: 40%;
    padding: 1rem;
    justify-content: flex-start;
    h1 {
      font-size: 2rem;
    }

    p {
      margin: 1rem 0;
    }
  }
  @media ${({ theme }) => theme.media.phone} {
    height: 55%;
  }
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

  @media ${({ theme }) => theme.media.phone} {
    .tech-icon {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  a {
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 250ms;
  }

  @media ${({ theme }) => theme.media.phone} {
    gap: 1rem;
    a {
      width: 50%;
    }
  }
`;
