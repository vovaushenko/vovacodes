import React from 'react';
import * as Styled from './TimePanel.styles';
import Clock from '../Clock/Clock';
import CurrentDate from '../CurrentDate/CurrentDate';

/**
 *Renders component to display current time and date
 *@function TimePanel
 *@returns {JSX.Element} - Rendered TimePanel component
 */
const TimePanel = (): JSX.Element => {
  return (
    <Styled.Container>
      <Clock variant={'middleFont'} />
      <CurrentDate variant={'middleFont'} />
    </Styled.Container>
  );
};

export default TimePanel;
