import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './ProjectDetailsSlide.styles';

import ProjectDetailsSlide from './ProjectDetailsSlide';
import TextCarousel from '../TextCarousel/TextCarousel';

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
    />
  );
};

describe('ProjectDetailsSlide', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render carousel with quotes', () => {
    const carousel = wrap.find(TextCarousel);
    expect(carousel.length).toBe(1);
  });
  it('should render levitating wrapper', () => {
    const wrapper = wrap.find(Styled.LevitatingWrapper);
    expect(wrapper.length).toBe(1);
  });
  it('should render image with specified params', () => {
    const img = wrap.find('img').first();
    expect(img.prop('src')).toBe('ASPARAGUS.JPEG');
    expect(img.prop('alt')).toBe('TOMATO');
  });
  it('should render four images of specified project', () => {
    const image = wrap.find('img');
    expect(image.length).toBe(4);
  });
});
