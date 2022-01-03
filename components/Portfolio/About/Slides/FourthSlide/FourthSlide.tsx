import React from 'react';
import * as Styled from './FourthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import Image from 'next/image';
import WithSparkles from '../../../WithSparkles/WithSparkles';

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
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          >
            🌠 I’ve worked for several companies and universities around the
            globe and built products ranging from marketing websites to complex
            enterprise apps with the focus on elegant, performant and
            user-friendly experiences.
          </PortfolioParagraph>
          <PortfolioParagraph
            margin={'1rem 0'}
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            🌠 I've constructed full-stack web-solutions with React, Node and
            Next.js. Although I’ve worked mainly as a front-end developer, I am{' '}
            <WithSparkles color={'yellow'}>not a typical one</WithSparkles> .
            I’ve always been immersed in full-stack development, building api’s
            and backends for frontends using Node.
          </PortfolioParagraph>
          <PortfolioParagraph
            margin={'1rem 0'}
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          >
            🌠 Currently, I work at Oracle as a Senior Application Developer
            crafting well-thought and elegant experiences for Oracle CX clients.
          </PortfolioParagraph>
        </div>
        {/*  PERSON */}
        <div className="right-column">
          <Styled.ImageContainer
            position={{ left: '0', right: '0' }}
            className={'person-wrapper'}
          >
            <Styled.FloatingImgContainer variant={'person'}>
              <Image
                src={'/assets/portfolio/work-from-home.svg'}
                alt={'Vova is working from home'}
                height={500}
                width={500}
                objectFit={'contain'}
                className={'person'}
                priority
              />
            </Styled.FloatingImgContainer>
          </Styled.ImageContainer>
          {/* REACT */}
          <Styled.ImageContainer
            position={{ top: '30%', right: '4rem' }}
            className={'react-wrapper'}
          >
            <Styled.FloatingImgContainer variant={'tech'}>
              <Image
                src={'/assets/portfolio/skills/React.svg'}
                alt={'React'}
                height={150}
                width={150}
                quality={90}
                objectFit={'contain'}
                className={'react'}
                priority
              />
            </Styled.FloatingImgContainer>
            {/* REDUX */}
          </Styled.ImageContainer>
          <Styled.ImageContainer
            position={{ bottom: '3rem', right: '6rem' }}
            className={'redux-wrapper'}
          >
            <Styled.FloatingImgContainer variant={'tech'}>
              <Image
                src={'/assets/portfolio/skills/Redux.svg'}
                alt={'React'}
                height={150}
                width={150}
                quality={90}
                objectFit={'contain'}
                className={'redux'}
                priority
              />
            </Styled.FloatingImgContainer>
          </Styled.ImageContainer>
          {/* NODE */}
          <Styled.ImageContainer
            position={{ bottom: '6rem', left: '5rem' }}
            className={'node-wrapper'}
          >
            <Styled.FloatingImgContainer variant={'tech'}>
              <Image
                src={'/assets/portfolio/skills/Node.svg'}
                alt={'React'}
                height={150}
                width={150}
                quality={90}
                objectFit={'contain'}
                className={'node'}
                priority
              />
            </Styled.FloatingImgContainer>
          </Styled.ImageContainer>
        </div>
      </Styled.FourthSlide>
    </Slide>
  );
};

export default FourthSlide;
