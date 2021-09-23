import React, { useRef, useState } from 'react';
import * as Styled from './Calendar.styles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useCloseModalIfClickedOutside } from '../../hooks/useCloseIfClickedOutside';

/**
 *Renders React-Calendar with customized styles
 *https://github.com/wojtekmaj/react-calendar
 *@function Calendar
 *@returns {JSX.Element} - Rendered CalendarWidget component
 */
const CalendarWidget = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [value, onChange] = useState(new Date());

  const { closeCalendarModal } = useActions();
  const { isCalendarOpen } = useTypedSelector((state) => state.ui);

  useCloseModalIfClickedOutside({
    isModalOpen: isCalendarOpen,
    closeModalFunction: closeCalendarModal,
    modalRef: containerRef,
  });

  return (
    <Styled.Container ref={containerRef}>
      <Calendar
        onChange={onChange}
        value={value}
        showWeekNumbers={false}
        calendarType={'US'}
        maxDetail={'month'}
        minDetail={'month'}
        view={'month'}
        showNeighboringMonth={false}
        showDoubleView={false}
      />
    </Styled.Container>
  );
};

export default CalendarWidget;
