import React, { useEffect, useRef, useState } from 'react';
import DesktopButton from '../DesktopButton/DesktopButton';
import Taskbar from '../Taskbar/Taskbar';
import { useSystemTrayConfig } from './SystemTray.config';
import * as Styled from './SystemTray.styles';
import SlidingModal from '../SlidingModal/SlidingModal';
import AppCenter from '../AppCenter/AppCenter';

/**
 *Renders system tray with control buttons
 *@function SystemTray
 *@returns {JSX.Element} - Rendered SystemTray component
 */
const SystemTray = (): JSX.Element => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [rightCoordinate, setRightCoordinate] = useState(0);
  const { systemTrayButtons } = useSystemTrayConfig();

  useEffect(() => {
    if (containerRef.current) {
      const offsets = containerRef.current.getBoundingClientRect();
      setRightCoordinate(offsets.right);
    }
  }, []);

  return (
    <>
      <Styled.Container>
        <Styled.ButtonList ref={containerRef}>
          {systemTrayButtons.map((button) => (
            <DesktopButton
              variant={'systemTray'}
              key={button.id}
              iconSrc={button.src}
              iconSize={button.size}
              text={button.alt}
              action={button.action}
            />
          ))}
        </Styled.ButtonList>

        <Taskbar />
      </Styled.Container>
      <SlidingModal
        variant={'systemTrayModal'}
        width={'600px'}
        position={{ bottom: '-50px', right: `${rightCoordinate - 300}px` }}
      >
        <AppCenter />
      </SlidingModal>
    </>
  );
};
export default SystemTray;
