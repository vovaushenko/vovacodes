import React from 'react';
import * as Styled from './TimePanel.styles';
import Clock from '../Clock/Clock';
import CurrentDate from '../CurrentDate/CurrentDate';
import { useActions } from '../../hooks/useActions';

/**
 *Renders component to display current time and date
 *@function TimePanel
 *@returns {JSX.Element} - Rendered TimePanel component
 */
const TimePanel = (): JSX.Element => {
  const { toggleCalendarModal } = useActions();

  const handleOpenCalendar = () => toggleCalendarModal();

  return (
    <Styled.Container onClick={handleOpenCalendar}>
      <Clock variant={'middleFont'} />
      <CurrentDate variant={'middleFont'} />
    </Styled.Container>
  );
};

export default TimePanel;
