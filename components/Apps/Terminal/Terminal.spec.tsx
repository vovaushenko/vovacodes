import { shallow } from 'enzyme';
import React from 'react';
import Terminal from './Terminal';
import { withReduxAndStyledProviders } from '../../../test/testUtils';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(withReduxAndStyledProviders(<Terminal />));
};

describe('Terminal', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
