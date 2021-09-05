import React from 'react';
import * as Styled from './HighlightedProjects.styles';
import { useHighlightedProjectsData } from './HighlightedProjects.config';
import ProjectDesktopSlide from '../ProjectDesktopSlide/ProjectDesktopSlide';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import ProjectDetailsSlide from '../ProjectDetailsSlide/ProjectDetailsSlide';

/**
 *Renders sections with some of my projects
 *@function HighlightedProjects
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered HighlightedProjects component
 */
const HighlightedProjects = (): JSX.Element => {
  const { highlightedProjects } = useHighlightedProjectsData();
  const projectOne = highlightedProjects[0];

  return (
    <Styled.Container>
      <NavigationMenu />
      <ProjectDesktopSlide {...projectOne} />
      <ProjectDetailsSlide
        slideHeight={'100vh'}
        slideBgColor={'#010606'}
        projectName={projectOne.projectTitle}
        projectMobileImg={projectOne.projectMobileImg}
      />

      <ProjectDesktopSlide {...projectOne} />
      <ProjectDesktopSlide {...projectOne} />
      <ProjectDesktopSlide {...projectOne} />
    </Styled.Container>
  );
};

export default HighlightedProjects;
