import { shallow } from 'enzyme';
import React from 'react';
import FilterOption from './FilterOption';
import * as Styled from './FilterOption.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */

const mockAction = jest.fn();
const setup = () => {
  return shallow(
    <FilterOption
      action={mockAction}
      filterTag={'TOMATO'}
      variant={'filterOption'}
    >
      {'FOO'}
    </FilterOption>
  );
};

describe('FilterOption', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should apply action callback', () => {
    const btn = wrap.find(Styled.Container);
    btn.simulate('click');
    expect(mockAction.mock.calls.length).toBe(1);
  });
});
