import React from 'react';
import * as Styled from './SecondSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';

/**
 *Renders second slide in About Portfolio presentation
 *@function SecondSlide
 *@returns {JSX.Element} - Rendered SecondSlide component
 */
const SecondSlide = (): JSX.Element => {
  return (
    <Slide bgColor={'#4831d4'} height={'100vh'} anchorID={'second-slide'}>
      <Styled.SecondSlide className="page second-page">
        <div className="left-column">
          <SectionHeader
            variant={'medium'}
            headerText={'Design'}
            margin={'0'}
            color={'#2bff88'}
          />

          <PortfolioParagraph
            margin={'0'}
            paragraphText={
              'I am a multi-talented personality driven by the quality of code and software. You can also call me a frontend, backend or full-stack web developer or by any other market defined title. I am devoted to constructing inclusive, rich web experiences for next-gen web platforms.'
            }
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          />
        </div>
        <div className="right-column">
          <PortfolioParagraph
            margin={'0'}
            paragraphText={
              'I have excellent knowledge of modern JS stack for building complex user interfaces for the web platform. In crafting JavaScript applications, I have a strong passion to build elegant, performant, scalable and user-friendly experiences. For the last 2 years I mostly worked with the React stack and building products from the ground up 🚀.'
            }
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          />
          <SectionHeader
            variant={'medium'}
            headerText={'Engineering'}
            margin={'0'}
            color={'#2bff88'}
          />
        </div>
      </Styled.SecondSlide>
    </Slide>
  );
};

export default SecondSlide;
