import React, { FC, useState } from 'react';
import * as Styled from './WithSparkles.styles';
import { generateSparkle, ISparkle } from './WithSparkles.config';
import { useRandomInterval } from '../../../hooks/useRandomInterval';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import Sparkle from './Sparkle';
import { range } from '../../../utils';

interface Props {
  color: string;
}

/**
 *Renders withSparkles wrapper that adds sparkles of specified configuration to any wrapped children
 * https://www.joshwcomeau.com/react/animated-sparkles-in-react/  `
 *@function WithSparkles
 *@param {string} color - specifies color of sparkles
 *@returns {JSX.Element} - Rendered WithSparkles component
 */
const WithSparkles: FC<Props> = ({ color, children }): JSX.Element => {
  const [sparkles, setSparkles] = useState<ISparkle[]>(() => {
    return range(3, 3, 1).map(() => generateSparkle('red'));
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();

      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 750;
      });

      nextSparkles.push(sparkle);

      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? 0 : 50,
    prefersReducedMotion ? 0 : 450
  );

  return (
    <Styled.Container>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <Styled.ChildWrapper>{children}</Styled.ChildWrapper>
    </Styled.Container>
  );
};

export default WithSparkles;
