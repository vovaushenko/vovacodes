import React from 'react';
import * as Styled from './HighlightedProjects.styles';
import { useHighlightedProjectsData } from './HighlightedProjects.config';
import ProjectDesktopSlide from '../ProjectDesktopSlide/ProjectDesktopSlide';
import ProjectDetailsSlide from '../ProjectDetailsSlide/ProjectDetailsSlide';
import WaveDivider from '../WaveDivider/WaveDivider';
import Navbar from '../Navbar/Navbar';

/**
 *Renders sections with some of my projects
 *@function HighlightedProjects
 *@returns {JSX.Element} - Rendered HighlightedProjects component
 */
const HighlightedProjects = (): JSX.Element => {
  const { highlightedProjects } = useHighlightedProjectsData();
  const projectOne = highlightedProjects[0];
  const projectTwo = highlightedProjects[1];

  return (
    <Styled.Container>
      {/* NAVIGATION */}
      <Navbar isLogoExpanded={true} />
      {/* PROJECT1 */}
      <ProjectDesktopSlide {...projectOne} />
      <ProjectDetailsSlide
        slideHeight={'100vh'}
        slideBgColor={'#010606'}
        projectName={projectOne.projectTitle}
        projectMobileImg={projectOne.projectMobileImg}
      />
      <WaveDivider
        waveImg={'/assets/portfolio/blob-1.svg'}
        dividerHeight={'150px'}
      />
      {/* PROJECT 2*/}
      <ProjectDesktopSlide {...projectTwo} />
      <ProjectDetailsSlide
        slideHeight={'100vh'}
        slideBgColor={'#4831d4'}
        projectName={projectTwo.projectTitle}
        projectMobileImg={projectTwo.projectMobileImg}
      />
    </Styled.Container>
  );
};

export default HighlightedProjects;
