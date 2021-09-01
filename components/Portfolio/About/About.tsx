import React from 'react';
import * as Styled from './About.styles';
import Slide from '../Slide/Slide';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';

/**
 *Renders About section in resume
 *@function About
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const About = (): JSX.Element => {
  return (
    <Styled.Container>
      <Slide bgColor={'#010606'}>
        <Styled.FirstSlide>
          <SectionHeader
            variant={'large'}
            headerText={'Full-stack Developer'}
            margin={'0'}
            color={'#2bff88'}
          />
          <PortfolioParagraph
            margin={'2rem 0'}
            paragraphText={
              'I like to craft solid and scalable web products with great user experiences.'
            }
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          />
        </Styled.FirstSlide>
      </Slide>
      <Slide bgColor={'#4831d4'}>
        <h1>hello</h1>
      </Slide>
      <Slide bgColor={'green'}>
        <h1>hello</h1>
      </Slide>
      <Slide bgColor={'purple'}>
        <h1>hello</h1>
      </Slide>
    </Styled.Container>
  );
};

export default About;
