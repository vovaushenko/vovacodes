import { shallow } from 'enzyme';
import React from 'react';
import ThirdSlide from './ThirdSlide';
import '../../../../__mocks__/intersectionObserverMock';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import SkillIcon from '../../../SkillIcon/SkillIcon';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<ThirdSlide />);
};

describe('ThirdSlide', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all skill icons', () => {
    const skillIcon = wrap.find(SkillIcon);
    expect(skillIcon.length).toBe(14);
  });

  it('should render  paragraph', () => {
    const paragraph = wrap.find(PortfolioParagraph);
    expect(paragraph.length).toBe(1);
  });
  it('should render three headers', () => {
    const headers = wrap.find(SectionHeader);
    expect(headers.length).toBe(3);
  });
});
