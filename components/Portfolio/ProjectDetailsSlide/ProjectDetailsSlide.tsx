import React from 'react';
import * as Styled from './ProjectDetailsSlide.styles';
import { projectDetailsQuotes } from './ProjectDetailsSlide.config';
import TextCarousel from '../TextCarousel/TextCarousel';

export interface Props {
  slideHeight: string;
  slideBgColor: string;
  projectMobileImg: string;
  projectName: string;
}

/**
 *Renders project details slide with project details carousel and floating project image
 *@function ProjectDetailsSlide
 *@param {slideHeight} string - height of slide
 *@param {slideBgColor} string - background color of slide to be applied
 *@returns {JSX.Element} - Rendered ProjectDetailsSlide component
 */
const ProjectDetailsSlide = ({
  slideHeight,
  slideBgColor,
  projectName,
  projectMobileImg,
}: Props): JSX.Element => {
  return (
    <Styled.Container slideHeight={slideHeight} slideBgColor={slideBgColor}>
      <Styled.RightColumn>
        <TextCarousel quotes={projectDetailsQuotes} />
      </Styled.RightColumn>

      <Styled.LeftColumn>
        <Styled.LevitatingWrapper>
          <Styled.Figure>
            {[1, 2, 3, 4].map((id) => (
              <img key={id} src={projectMobileImg} alt={projectName} />
            ))}
          </Styled.Figure>
        </Styled.LevitatingWrapper>
      </Styled.LeftColumn>
    </Styled.Container>
  );
};

export default ProjectDetailsSlide;
