import { shallow } from 'enzyme';
import React from 'react';
import '../../__mocks__/intersectionObserverMock';
import ProjectDetailsSlide from './ProjectDetailsSlide';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <ProjectDetailsSlide
      slideBgColor={'red'}
      slideHeight={'100vh'}
      projectName={'TOMATO'}
      projectMobileImg={'ASPARAGUS.JPEG'}
      projectQuotes={[]}
    />
  );
};

describe('ProjectDetailsSlide', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
