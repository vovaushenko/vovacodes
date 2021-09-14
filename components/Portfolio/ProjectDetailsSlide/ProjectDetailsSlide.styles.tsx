import styled from 'styled-components';
import {
  floatKeyframes,
  slidInCenter,
} from '../../../design-system/reusableCss';

interface Props {
  slideHeight: string;
  slideBgColor: string;
}

export const Container = styled.section<Props>`
  display: flex;
  height: ${({ slideHeight }) => slideHeight || '100%'};
  background-color: ${({ slideBgColor }) => slideBgColor};
  position: relative;
  scroll-snap-align: center;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column-reverse;
  }
`;

export const LeftColumn = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 500ms;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: 50%;
    align-items: flex-start;
  }
`;

export const LevitatingWrapper = styled.div`
  animation: ${floatKeyframes} 6s ease-in-out infinite;
`;

export const Figure = styled.figure`
  position: relative;
  width: 300px;
  height: 580px;
  transform: rotate(-30deg) skew(25deg) scale(0.8);
  transition: 0.5s;

  img {
    position: absolute;
    left: -50px;
    width: 100%;
    transition: 0.5s;
    filter: drop-shadow(-8px 5px 2px #00254d);
  }

  :hover img:nth-child(4) {
    transform: translate(160px, -160px);
    opacity: 1;
  }

  :hover img:nth-child(3) {
    transform: translate(120px, -120px);
    opacity: 0.8;
  }

  :hover img:nth-child(2) {
    transform: translate(80px, -80px);
    opacity: 0.6;
  }

  :hover img:nth-child(1) {
    transform: translate(40px, -40px);
    opacity: 0.4;
  }

  @media ${({ theme }) => theme.media.phone} {
    width: 200px;
    height: 480px;
    transform: rotate(-35deg) skew(25deg) scale(0.65);
    img {
      left: -10px;
      top: 50px;
    }
  }
`;

export const RightColumn = styled.div`
  width: 50%;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: 50%;
  }
`;
