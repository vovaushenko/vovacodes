import { shallow } from 'enzyme';
import React from 'react';
import WidgetsModalContent from './WidgetsModalContent';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<WidgetsModalContent />);
};

describe('WidgetsModalContent', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  //  TODO:Write actual tests with the arrival of modal content
});
