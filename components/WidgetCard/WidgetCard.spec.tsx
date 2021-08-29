import { shallow } from 'enzyme';
import React from 'react';
import WidgetCard from './WidgetCard';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <WidgetCard
      cardHeader={'test'}
      iconSize={{ width: 15, height: 15 }}
      headerIcon={'/icon'}
    />
  );
};

describe('WidgetCard', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
