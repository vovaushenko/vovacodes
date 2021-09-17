import React from 'react';
import * as Styled from './ThirdSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import SkillIcon from '../../../SkillIcon/SkillIcon';
import SkillListItem from '../../../SkillListItem/SkillListItem';
import { useAboutConfig } from '../../About.config';

/**
 *Renders third slide in About Portfolio presentation
 *@function ThirdSlide
 *@returns {JSX.Element} - Rendered ThirdSlide component
 */
const ThirdSlide = (): JSX.Element => {
  const {
    frontendSkills,
    frontendTechSkills,
    backendSkills,
    backendTechSkills,
  } = useAboutConfig();

  return (
    <Slide bgColor={'#010606'} height={'100vh'} anchorID={'third-slide'}>
      <Styled.ThirdSlide id={'third-slide'}>
        <div className="skills-wrapper">
          <SectionHeader
            variant={'small'}
            headerText={'Skills'}
            margin={'0'}
            color={'#2bff88'}
          />
          <PortfolioParagraph
            margin={'0'}
            paragraphText={
              'Languages I speak, Dev & Design Tools that I particularly enjoy'
            }
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          />
          <div className="glass-wrapper">
            <div className="glass-content">
              <SectionHeader
                variant={'extraSmall'}
                headerText={'Frontend'}
                margin={'0'}
                color={'#2bff88'}
              />
              <ul className={'icon-skills'}>
                {frontendSkills.map((skill) => (
                  <li key={skill.id}>
                    <SkillIcon
                      iconSrc={skill.iconSrc}
                      text={skill.text}
                      iconSize={skill.iconSize}
                    />
                  </li>
                ))}
              </ul>

              <ul className="tech-skills">
                {frontendTechSkills.map((tech) => (
                  <SkillListItem
                    key={tech.id}
                    skillSection={tech.skillSection}
                    skillValue={tech.skillValue}
                  />
                ))}
              </ul>
            </div>

            <div className="glass-content">
              <SectionHeader
                variant={'extraSmall'}
                headerText={'Backend'}
                margin={'0'}
                color={'#2bff88'}
              />
              <ul className={'icon-skills'}>
                {backendSkills.map((skill) => (
                  <li key={skill.id}>
                    <SkillIcon
                      iconSrc={skill.iconSrc}
                      text={skill.text}
                      iconSize={skill.iconSize}
                    />
                  </li>
                ))}
              </ul>
              <ul className="tech-skills">
                {backendTechSkills.map((tech) => (
                  <SkillListItem
                    key={tech.id}
                    skillSection={tech.skillSection}
                    skillValue={tech.skillValue}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Styled.ThirdSlide>
    </Slide>
  );
};

export default ThirdSlide;
