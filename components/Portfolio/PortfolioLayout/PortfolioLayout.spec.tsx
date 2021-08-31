import { shallow } from 'enzyme';

import React from 'react';
import PortfolioLayout from './PortfolioLayout';

describe('PortfolioLayout wrapper component', () => {
  const wrapper = shallow(
    <PortfolioLayout title="Some Title">
      <h1>🍏Apples are nutritious🍏</h1>
    </PortfolioLayout>
  );

  it('should render without  errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });

  it('should render specified title', () => {
    const title = wrapper.find('title');

    expect(title.text()).toBe('Some Title');
  });
  it('should render specified children', () => {
    const children = wrapper.find('h1');
    expect(children.length).toBe(1);
    expect(children.text()).toBe('🍏Apples are nutritious🍏');
  });
});
