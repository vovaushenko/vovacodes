import React, { ReactNode, useRef } from 'react';
import * as Styled from './ScrollLink.styles';
import useHover from '../../../hooks/useHover';
import { Link as LinkScroll } from 'react-scroll';

export interface Props {
  icon: ReactNode;
  hiddenText: string;
  anchorID: string;
}

/**
 *@function ScrollLink
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered ScrollLink component
 */
const ScrollLink = ({ anchorID, icon, hiddenText }: Props): JSX.Element => {
  const linkRef = useRef(null);
  const isHovering = useHover(linkRef);

  return (
    <Styled.LIcontainer ref={linkRef} isHovering={isHovering}>
      <LinkScroll to={anchorID} smooth={true} duration={1000}>
        {isHovering ? <p>{hiddenText}</p> : <p>{icon}</p>}
      </LinkScroll>
    </Styled.LIcontainer>
  );
};

export default ScrollLink;
