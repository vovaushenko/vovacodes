import styled from 'styled-components';

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
`;

export const LeftColumn = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LevitatingWrapper = styled.div`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  animation: float 6s ease-in-out infinite;
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
`;

export const RightColumn = styled.div`
  width: 50%;
`;
