import { shallow } from 'enzyme';
import React from 'react';

import WindowLoaderSkeleton from './WindowLoaderSkeleton';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<WindowLoaderSkeleton />);
};

describe('WindowLoaderSkeleton', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
