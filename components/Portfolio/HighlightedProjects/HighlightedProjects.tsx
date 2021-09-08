import React from 'react';
import * as Styled from './HighlightedProjects.styles';
import { useHighlightedProjectsData } from './HighlightedProjects.config';
import Navbar from '../Navbar/Navbar';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import Image from 'next/image';
import ScrollHint from '../ScrollHint/ScrollHint';
import ProjectDesktopSlide from '../ProjectDesktopSlide/ProjectDesktopSlide';
import ProjectDetailsSlide from '../ProjectDetailsSlide/ProjectDetailsSlide';
import WaveDivider from '../WaveDivider/WaveDivider';

/**
 *Renders sections with some of my projects
 *@function HighlightedProjects
 *@returns {JSX.Element} - Rendered HighlightedProjects component
 */
const HighlightedProjects = (): JSX.Element => {
  const { highlightedProjects } = useHighlightedProjectsData();
  const projectOne = highlightedProjects[0];
  const projectTwo = highlightedProjects[1];

  return (
    <Styled.Container>
      {/* NAVIGATION */}
      <Navbar isLogoExpanded={true} />
      {/* HERO */}
      <Styled.ProjectsHero>
        <Styled.HeroLeftColumn>
          <SectionHeader
            variant={'medium'}
            headerText={`Selected list of projects`}
            margin={'0'}
            color={'#2bff88'}
          />

          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={`Due to NDA agreements, I am limited to personal projects and already shipped products that I've build and worked on in the past`}
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence
          />
        </Styled.HeroLeftColumn>
        <Styled.HeroRightColumn>
          <Styled.ImageContainer
            position={{ top: '0', right: '0' }}
            className={'laptop-wrapper'}
          >
            <Styled.FloatingImgContainer variant={'laptop'}>
              <Image
                src={'/assets/portfolio/landing-laptop.png'}
                quality={95}
                height={800}
                width={800}
                objectFit={'contain'}
                alt={'Laptop with open IDE'}
                priority
                className={'laptop'}
              />
            </Styled.FloatingImgContainer>
          </Styled.ImageContainer>
          <Styled.ImageContainer
            position={{ top: '35%', right: '10px' }}
            className={'mobile-wrapper'}
          >
            <Styled.FloatingImgContainer variant={'phone'}>
              <Image
                src={'/assets/portfolio/landing-mobile.png'}
                quality={95}
                height={450}
                width={350}
                alt={'Laptop with open IDE'}
                layout={'fixed'}
                objectFit={'contain'}
                priority
                className={'mobile'}
              />
            </Styled.FloatingImgContainer>
          </Styled.ImageContainer>
          <Styled.ImageContainer
            position={{ bottom: '6rem', left: '0' }}
            className={'watch-wrapper'}
          >
            <Styled.FloatingImgContainer variant={'watch'}>
              <Image
                src={'/assets/portfolio/landing-watch.png'}
                layout={'fixed'}
                quality={95}
                height={200}
                width={200}
                objectFit={'contain'}
                alt={'Laptop with open IDE'}
                priority
                className={'watch'}
              />
            </Styled.FloatingImgContainer>
          </Styled.ImageContainer>
        </Styled.HeroRightColumn>

        <ScrollHint />
      </Styled.ProjectsHero>

      {/* PROJECT1 */}
      <ProjectDesktopSlide {...projectOne} />
      <ProjectDetailsSlide
        slideHeight={'100vh'}
        slideBgColor={'#010606'}
        projectName={projectOne.projectTitle}
        projectMobileImg={projectOne.projectMobileImg}
      />
      <WaveDivider
        waveImg={'/assets/portfolio/blob-1.svg'}
        dividerHeight={'150px'}
      />
      {/* PROJECT 2*/}
      <ProjectDesktopSlide {...projectTwo} />
      <ProjectDetailsSlide
        slideHeight={'100vh'}
        slideBgColor={'#4831d4'}
        projectName={projectTwo.projectTitle}
        projectMobileImg={projectTwo.projectMobileImg}
      />
    </Styled.Container>
  );
};

export default HighlightedProjects;
