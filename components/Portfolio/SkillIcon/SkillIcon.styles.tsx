import styled, { css } from 'styled-components';
import { slideBottom, slideOutKeyframes } from '../../../styles/reusableCss';

interface Props {
  isHovering: boolean;
}

export const Container = styled.figure<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 5rem;

  :hover {
    .icon-img {
      filter: brightness(130%);
    }
  }
`;

export const SkillText = styled.figcaption`
  text-align: center;
`;

const isHoveredStyles = css`
  visibility: visible;
  opacity: 1;
`;

const isNotHoveredStyles = css`
  visibility: hidden;
  transition: visibility 0.5s,
    opacity 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  opacity: 0;
`;

const slideOutAnimation = css`
  animation: ${slideOutKeyframes} 0.5s ease-in both;
`;

export const IconText = styled.p<Props>`
  ${({ isHovering }) => (isHovering ? isHoveredStyles : isNotHoveredStyles)};
  font-size: 1rem;
  animation: ${slideBottom} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  ${({ isHovering }) => isHovering === false && slideOutAnimation};
`;
