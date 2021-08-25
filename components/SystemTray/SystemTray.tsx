import React from 'react';
import * as Styled from './SystemTray.styles';
import { useSystemTrayConfig } from './SystemTray.config';
import DesktopButton from '../DesktopButton/DesktopButton';
import Taskbar from '../Taskbar/Taskbar';

/**
 *Renders system tray with control buttons
 *@function SystemTray
 *@returns {JSX.Element} - Rendered SystemTray component
 */
const SystemTray = (): JSX.Element => {
  const { systemTrayButtons } = useSystemTrayConfig();

  return (
    <Styled.Container>
      <Styled.ButtonList>
        {systemTrayButtons.map((button) => (
          <DesktopButton
            variant={'systemTray'}
            key={button.id}
            iconSrc={button.src}
            iconSize={button.size}
            text={button.alt}
            onClick={button.action}
          />
        ))}
      </Styled.ButtonList>

      <Taskbar />
    </Styled.Container>
  );
};
export default SystemTray;
