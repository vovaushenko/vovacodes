import { shallow } from 'enzyme';
import React from 'react';
import ProjectDesktopSlide from './ProjectDesktopSlide';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <ProjectDesktopSlide
      slideHeight={'100vh'}
      projectMobileImg={'test.img'}
      slideBgColor={'tomato'}
      projectImg={'test.img'}
      githubLink={'link'}
      liveLink={'link'}
      projectDescription={'tomato'}
      projectTechnologies={['next.js']}
      projectTitle={'tomato'}
      slideNumberImg={'1'}
      technologyIcons={[<h1 key={1}>hello</h1>]}
    />
  );
};

describe('ProjectDesktopSlide', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
