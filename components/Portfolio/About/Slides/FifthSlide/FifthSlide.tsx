import React from 'react';
import * as Styled from './FifthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';

/**
 *Renders fifth slide in About Portfolio presentation
 *@function FifthSlide
 *@returns {JSX.Element} - Rendered FifthSlide component
 */
const FifthSlide = (): JSX.Element => {
  return (
    <Slide bgColor={'#010606'} height={'100vh'} anchorID={'fifth-slide'}>
      <Styled.FifthSlide>
        <SectionHeader
          variant={'small'}
          headerText={'Highlighted milestones'}
          margin={'0'}
          color={'#2bff88'}
        />
        <Styled.Milestone variant={'first'}>
          <Styled.MilestoneHeader>
            <h3>Senior Application Developer</h3>
            <time>2021-Present</time>
          </Styled.MilestoneHeader>
          <h4>Oracle</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'Currently, I work at Oracle CX team constructing inclusive performant solutions that encompass not only Web, but also native devices.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>

        <Styled.Milestone variant={'second'}>
          <Styled.MilestoneHeader>
            <h3>Full-Stack Developer</h3>
            <time>2019-2021</time>
          </Styled.MilestoneHeader>
          <h4>Chernivtsi National University</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'I worked at Chernivtsi National University on a number of educational and Web projects as a front and back end developer. I architected and constructed solutions daily used by tens of thousands of students and thousands of employees.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>

        <Styled.Milestone variant={'third'}>
          <Styled.MilestoneHeader>
            <h3>FRONT-END DEVELOPER</h3>
            <time>2018-2019</time>
          </Styled.MilestoneHeader>
          <h4>University of Oulu</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'Learning and expanding my skills in Web development, I worked on and supervised several internal web projects and educational platforms for the University. Played a crucial role in managing, maintaining and upgrading several internal IT projects.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>
      </Styled.FifthSlide>
    </Slide>
  );
};

export default FifthSlide;
