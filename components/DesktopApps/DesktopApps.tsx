import React from 'react';
import * as Styled from './DesktopApps.styles';
import { useDesktopApps } from './DesktopApps.config';
import DesktopButton from '../DesktopButton/DesktopButton';

/**
 *Renders list of desktop apps. App list is stored in DesktopApps config.
 *@function DesktopApps
 *@returns {JSX.Element} - Rendered DesktopApps component
 */
const DesktopApps = (): JSX.Element => {
  const { desktopAppsList } = useDesktopApps();

  return (
    <Styled.UL>
      {desktopAppsList.map((app) => (
        <Styled.LI key={app.id}>
          <DesktopButton
            variant={app.variant}
            text={app.text}
            iconSrc={app.iconSrc}
            iconSize={app.iconSize}
            action={app.action}
            willOpenWindowWith={app.willOpenWindowWith}
          />
        </Styled.LI>
      ))}
    </Styled.UL>
  );
};

export default DesktopApps;
