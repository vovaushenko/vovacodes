import React, { useEffect, useState } from 'react';
import * as Styled from './Loader.styles';
import Logo from '../Portfolio/Logo/Logo';

export interface Props {
  isOnScreen: boolean;
  loadingDuration: number;
}

/**
 *Renders main loading component
 *@function Loader
 *@param {boolean} isOnScreen - specifies whether element is on screen
 *@param {number} loadingDuration - duration of dummy loading in milliseconds, based on this duration, un-mounting animation will be toggled after duration - 500ms
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Loader = ({ isOnScreen, loadingDuration }: Props): JSX.Element => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLogoExpanded(false);
    }, loadingDuration - 1000);
  }, [loadingDuration]);
  return (
    <Styled.Container isOnScreen={isOnScreen} loadingDuration={loadingDuration}>
      <Logo isExpanded={isLogoExpanded} />
      <Styled.TextContainer>
        <Styled.ScrollText>
          JavaScript <br />
          TypeScript <br />
          React <br />
          Next.js <br />
          Node.js <br />
          Coffee ☕
        </Styled.ScrollText>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default Loader;
