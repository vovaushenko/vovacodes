import { mount } from 'enzyme';
import React from 'react';
import SearchBar from './SearchBar';
import { withReduxAndStyledProviders } from '../../test/testUtils';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(
    withReduxAndStyledProviders(
      <SearchBar
        name="tomato"
        type="email"
        placeholder="tomato"
        value="test"
        setValue={() => console.log('test')}
      />
    )
  );
};

describe('Form text control component', () => {
  const wrap = setup();
  it('should render without errors', () => {
    expect(wrap.length).toBe(1);
  });

  it('should render specified input name', () => {
    expect(wrap);
    expect(wrap.find('input').prop('name')).toBe('tomato');
  });
  it('should render specified input type', () => {
    expect(wrap.find('input').prop('type')).toBe('email');
  });
  it('should render specified input placeholder', () => {
    const placeholder = wrap.find('label');
    expect(placeholder.text()).toBe('tomato');
  });
});
