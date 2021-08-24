import React from 'react';
import * as Styled from './SystemTray.styles';
import { useSystemTrayConfig } from './SystemTray.config';
import DesktopButton from '../DesktopButton/DesktopButton';

/**
 *Renders system tray with control buttons
 *@function SystemTray
 *@returns {JSX.Element} - Rendered SystemTray component
 */
const SystemTray = (): JSX.Element => {
  const { systemTrayButtons } = useSystemTrayConfig();

  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};
export default SystemTray;
