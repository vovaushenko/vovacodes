import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './ProjectDesktopSlide.styles';
import { IHighlightedProject } from '../../../types/portfolio';
import Image from 'next/image';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ActionButton from '../ActionButton/ActionButton';
import { FiCast, FiGithub } from 'react-icons/fi';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

/**
 *Renders full-viewport project slide
 *@function Slide
 *@param {IHighlightedProject} projectDetails - project details data to be mapped into view
 *@returns {JSX.Element} - Rendered ProjectDesktopSlide component
 */
const ProjectDesktopSlide = ({
  slideNumberImg,
  projectDescription,
  projectImg,
  projectTechnologies,
  projectTitle,
  slideBgColor,
  technologyIcons,
  slideHeight,
  liveLink,
  githubLink,
}: IHighlightedProject): JSX.Element | null => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isElementVisible] = useIntersectionObserver(containerRef, {
    threshold: 0.5,
  });
  const [isOnScreen, setIsOnScreen] = useState(false);
  useEffect(() => {
    if (isElementVisible && !isOnScreen) setIsOnScreen(true);
  }, [isElementVisible, isOnScreen]);

  const randomKey = `${~~Math.random() * 10000}${isOnScreen}`;

  return (
    <Styled.Container
      key={randomKey}
      slideHeight={slideHeight}
      slideBgColor={slideBgColor}
      ref={containerRef}
    >
      {isOnScreen && (
        <>
          <Styled.LeftColumn>
            <Styled.Figure>
              <Styled.SlideNumber>
                <Image
                  src={slideNumberImg}
                  height={200}
                  width={200}
                  quality={90}
                  objectFit={'contain'}
                  alt={`This image indicates the number of current slide`}
                />
              </Styled.SlideNumber>
              <Styled.Figcaption>
                <h3>{projectTechnologies.join(` ● `)}</h3>
              </Styled.Figcaption>
              <Styled.ImageWrapper>
                <Image
                  src={projectImg}
                  height={800}
                  width={800}
                  quality={90}
                  objectFit={'contain'}
                  alt={projectTitle}
                />
              </Styled.ImageWrapper>
            </Styled.Figure>
          </Styled.LeftColumn>

          <Styled.RightColumn>
            <SectionHeader
              variant={'small'}
              headerText={projectTitle}
              margin={'0'}
              color={'#2bff88'}
              withGradient
            />

            <Styled.IconWrapper>
              {technologyIcons.map((icon, id) => (
                <Styled.Icon key={id}>{icon}</Styled.Icon>
              ))}
            </Styled.IconWrapper>
            <PortfolioParagraph
              margin={'2rem 0'}
              paragraphText={projectDescription}
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
            <Styled.ButtonsWrapper>
              <ActionButton
                renderAsLink
                href={liveLink}
                buttonText={'Live'}
                icon={<FiCast className={'action-icon'} />}
              />
              <ActionButton
                renderAsLink
                href={githubLink}
                buttonText={'GitHub'}
                icon={<FiGithub className={'action-icon'} />}
              />
            </Styled.ButtonsWrapper>
          </Styled.RightColumn>
        </>
      )}
    </Styled.Container>
  );
};

export default ProjectDesktopSlide;
