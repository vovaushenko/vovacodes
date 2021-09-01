import React from 'react';
import * as Styled from './SkillListItem.styles';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';

export interface Props {
  skillSection: string;
  skillValue: string;
}

/**
 *@function SkillListItem
 *@param {string} skillSection - section of skill, eg programming language or framework
 *@param {string} skillValue - values of skill, eg javascript or python
 *@returns {JSX.Element} - Rendered SkillListItem component
 */
const SkillListItem = ({ skillSection, skillValue }: Props): JSX.Element => {
  return (
    <Styled.LI>
      <Styled.SkillSection>{skillSection}</Styled.SkillSection>
      <PortfolioParagraph
        margin={'0'}
        paragraphText={skillValue}
        withDarkColor={false}
        variant={'medium'}
        withAnimatedPresence={false}
      />
    </Styled.LI>
  );
};

export default SkillListItem;
