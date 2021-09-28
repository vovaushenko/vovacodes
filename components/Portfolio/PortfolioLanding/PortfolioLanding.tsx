import React, { useState } from 'react';
import * as Styled from './PortfolioLanding.styles';
import AnimatedRouterLink from '../AnimatedRouterLink/AnimatedRouterLink';
import TapHint from '../TapHint/TapHint';

/**
 *Renders portfolio landing page
 *@function PortfolioLanding
 *@returns {JSX.Element} - Rendered PortfolioLanding component
 */
const PortfolioLanding = (): JSX.Element => {
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);

  const handleStopPropagation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => e.stopPropagation();

  return (
    <Styled.Container onClick={() => setIsMenuExpanded((p) => !p)}>
      <Styled.Navigation
        key={`this-key-is-for-triggering-animation-${isMenuExpanded}`}
      >
        <Styled.LinkWrapper onClick={handleStopPropagation}>
          <AnimatedRouterLink
            variant={'standard'}
            text={isMenuExpanded ? 'About' : 'Hello'}
            href={'/portfolio/about'}
            hoverText={'About'}
            animationTimeout={300}
          />
          <AnimatedRouterLink
            variant={'standard'}
            text={isMenuExpanded ? 'Work' : 'I am'}
            href={'/portfolio/projects'}
            hoverText={'Work'}
            animationTimeout={600}
          />
          <AnimatedRouterLink
            variant={'highlight'}
            text={isMenuExpanded ? 'Contact' : 'Vova'}
            href={'/portfolio/contact'}
            hoverText={'Contact'}
            animationTimeout={900}
          />
        </Styled.LinkWrapper>
      </Styled.Navigation>
      <Styled.Photo photo={'/assets/portfolio/processed-avatar.png'} />

      <TapHint />
    </Styled.Container>
  );
};
export default PortfolioLanding;
