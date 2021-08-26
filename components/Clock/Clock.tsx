import React, { useEffect, useState } from 'react';
import * as Styled from './Clock.styles';

export interface Props {
  variant: 'smallFont' | 'middleFont' | 'largeFont';
}

/**
 *Renders several variants of clock component
 *@function Clock
 *@param {enum} variant - clock variant with varying font-size
 *@returns {JSX.Element} - Rendered Clock component
 */
const Clock = ({ variant }: Props): JSX.Element => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Styled.Time variant={variant}>
      {currentTime.toLocaleTimeString('en-us', {
        timeStyle: 'short',
      })}
    </Styled.Time>
  );
};

export default Clock;
