import { shallow } from 'enzyme';
import React from 'react';
import FirstSlide from './FirstSlide';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import '../../../../__mocks__/intersectionObserverMock';
import ScrollHint from '../../../ScrollHint/ScrollHint';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<FirstSlide />);
};

describe('FirstSlide', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render header', () => {
    const header = wrap.find(SectionHeader);
    expect(header.length).toBe(1);
  });
  it('should render message', () => {
    const message = wrap.find(PortfolioParagraph);
    expect(message.length).toBe(1);
  });
  it('should render scroll hint', () => {
    const scrollHint = wrap.find(ScrollHint);
    expect(scrollHint.length).toBe(1);
  });
});
