import React from 'react';
import * as Styled from './DesktopWidgets.styles';
import SlidingModal from '../SlidingModal/SlidingModal';
import SettingsModalContent from '../SettingsModalContent/SettingsModalContent';
import WidgetsModalContent from '../WidgetsModalContent/WidgetsModalContent';
import CalendarWidget from '../Calendar/Calendar';

/**
 *Renders container with sliding widget modals. That are initially hidden.
 *@function DesktopWidgets
 *@returns {JSX.Element} - Rendered CardContent component
 */
const DesktopWidgets = (): JSX.Element => {
  return (
    <Styled.Container>
      <SlidingModal
        width={'700px'}
        variant={'widgetsModal'}
        position={{ top: '1rem', bottom: '0', left: '0', right: '0' }}
      >
        <WidgetsModalContent />
      </SlidingModal>

      <SlidingModal
        variant={'settingsModal'}
        width={'360px'}
        position={{ bottom: '0', right: `0`, top: '1rem' }}
      >
        <SettingsModalContent />
      </SlidingModal>

      <SlidingModal
        variant={'calendarModal'}
        width={'350px'}
        position={{ bottom: '0', right: '1rem' }}
      >
        <CalendarWidget />
      </SlidingModal>
    </Styled.Container>
  );
};

export default DesktopWidgets;
