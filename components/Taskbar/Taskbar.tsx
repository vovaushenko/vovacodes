import React from 'react';
import * as Styled from './Taskbar.styles';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import TimePanel from '../TimePanel/TimePanel';

/**
 *Renders Taskbar with time and settings panels for System Tray
 *@function Taskbar
 *@returns {JSX.Element} - Rendered Taskbar component
 */
const Taskbar = (): JSX.Element => {
  return (
    <Styled.Container>
      <SettingsPanel />
      <TimePanel />
    </Styled.Container>
  );
};

export default Taskbar;
