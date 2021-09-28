import React, { useRef } from 'react';
import * as Styled from './AnimatedRouterLink.styles';
import Link from 'next/link';
import useHover from '../../../hooks/useHover';

export interface Props {
  variant: 'standard' | 'highlight';
  text: string;
  hoverText: string;
  href: string;
  animationTimeout: number;
}

/**
 *Renders animated router link
 *@function AnimatedRouterLink
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const AnimatedRouterLink = ({
  variant,
  href,
  text,
  hoverText,
  animationTimeout,
}: Props): JSX.Element => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const isHovering = useHover(linkRef);

  return (
    <Link href={href} passHref>
      <Styled.A
        ref={linkRef}
        variant={variant}
        animationTimeout={animationTimeout}
      >
        {isHovering ? hoverText : text}
      </Styled.A>
    </Link>
  );
};

export default AnimatedRouterLink;
