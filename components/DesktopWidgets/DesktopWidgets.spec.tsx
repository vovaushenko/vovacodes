import { shallow } from 'enzyme';
import React from 'react';
import DesktopWidgets from './DesktopWidgets';
import SlidingModal from '../SlidingModal/SlidingModal';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<DesktopWidgets />);
};

describe('DesktopWidgets', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render two sliding modals', () => {
    const slidingModal = wrap.find(SlidingModal);
    expect(slidingModal.length).toBe(2);
  });
});
