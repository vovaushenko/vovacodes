import { shallow } from 'enzyme';
import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';

import ActionButton from './ActionButton';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <ActionButton
      buttonText={'🍅 JUICY TOMATO 🍅'}
      icon={<FiChevronsRight />}
    />
  );
};

describe('ActionButton', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render button text', () => {
    expect(wrap.text()).toBe('🍅 JUICY TOMATO 🍅<FiChevronsRight />');
  });
  it('should render specified icon', () => {
    const icon = wrap.find(FiChevronsRight);
    expect(icon.length).toBe(1);
  });
});
