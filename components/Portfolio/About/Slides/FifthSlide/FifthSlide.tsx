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
            <h3>Software Development Project Lead</h3>
            <time>2023-Present</time>
          </Styled.MilestoneHeader>
          <h4>Oracle</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'I currently lead the frontend development of a modernized version of Oracle CPQ (Configure, Price, Quote). A dynamic application that helps over 500 large customers to configure complex products and services, price them according to the rules and constraints, and generate quotes and proposals.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>

        <Styled.Milestone variant={'second'}>
          <Styled.MilestoneHeader>
            <h3>Senior Software Engineer</h3>
            <time>2021-2023</time>
          </Styled.MilestoneHeader>
          <h4>Oracle</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={`As a senior engineer, I have contributed to the biggest customer facing applications and services of Oracle CX. I prototyped, designed and helped my team to build a Zoom application integration for Oracle CX Sales (CRM Selling System) from scratch. Played a key role in the modernization and re-implementation of biggest Oracle's CRM - CX Sales.`}
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>

        <Styled.Milestone variant={'third'}>
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

        <Styled.Milestone variant={'fourth'}>
          <Styled.MilestoneHeader>
            <h3>PhD Student | Applied Scientist</h3>
            <time>2015-2019</time>
          </Styled.MilestoneHeader>
          <h4>
            University of Oulu | Taras Shevchenko National University of Kyiv
          </h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'I worked in an interdisplinary international research team on the development of cutting-edge medical image processing techniques. I have published a number of papers in high-impact journals and conferences.'
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
