import React from 'react';
import * as Styled from './FourthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import Image from 'next/image';

/**
 *Renders fourth slide in About Portfolio presentation
 *@function SecondSlide
 *@returns {JSX.Element} - Rendered FourthSlide component
 */
const FourthSlide = (): JSX.Element => {
  return (
    <Slide bgColor={'#4831d4'} height={'100vh'} anchorID={'fourth-slide'}>
      <Styled.FourthSlide>
        <div className="left-column">
          <SectionHeader
            variant={'small'}
            headerText={'Over the past five years'}
            margin={'0'}
            color={'#2bff88'}
          />
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              "I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences."
            }
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          />
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              "I've created full-stack projects with React & Node.js. I Have excellent knowledge of modern JS stack for building complex user interfaces for the web platform."
            }
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          />
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'Currently, I work at Shopify as a Senior UX Developer and Accessibility advocate crafting thoughtful and inclusive experiences that adhere to web standards for over a million merchants across the world.'
            }
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          />
        </div>

        <div className="right-column">
          <Image
            src={'/assets/portfolio/work-from-home.svg'}
            alt={'Vova is working from home'}
            height={500}
            width={500}
            objectFit={'contain'}
          />
        </div>
      </Styled.FourthSlide>
    </Slide>
  );
};

export default FourthSlide;