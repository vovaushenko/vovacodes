import { shallow } from 'enzyme';
import React from 'react';
import SkillListItem from './SkillListItem';
import * as Styled from './SkillListItem.styles';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <SkillListItem skillSection={'ASPARAGUS'} skillValue={'IS NUTRITIOUS'} />
  );
};

describe('SkillListItem', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render list item', () => {
    const li = wrap.find(Styled.LI);
    expect(li.length).toBe(1);
  });
  it('should render text paragraph', () => {
    const paragraph = wrap.find(PortfolioParagraph);
    expect(paragraph.length).toBe(1);
  });
  it('should render correct skill section', () => {
    const skillSection = wrap.find(Styled.SkillSection);
    expect(skillSection.text()).toBe('ASPARAGUS');
  });
});
