import React from 'react';
import * as Styled from './PinnedApps.styles';
import { usePinnedAppsConfig } from './PinnedApps.config';
import DesktopButton from '../DesktopButton/DesktopButton';

/**
 *@function PinnedApps
 *@returns {JSX.Element} - Rendered CardContent component
 */
const PinnedApps = (): JSX.Element => {
  const { pinnedApps } = usePinnedAppsConfig();

  return (
    <Styled.Container>
      {pinnedApps.map((app) => (
        <DesktopButton
          key={app.id}
          variant={'pinnedApp'}
          iconSrc={app.icon}
          iconSize={app.iconSize}
          text={app.text}
          action={app.action}
          willOpenWindowWith={app.willOpenWindowWith}
        />
      ))}
    </Styled.Container>
  );
};
export default PinnedApps;
