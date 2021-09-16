import React from 'react';
import * as Styled from './AllAppsModal.styles';
import { usePinnedAppsConfig } from '../PinnedApps/PinnedApps.config';
import DesktopButton from '../DesktopButton/DesktopButton';

/**
 *Renders list of all available apps
 *@function AllAppsModal
 *@returns {JSX.Element} - Rendered CardContent component
 */
const AllAppsModal = (): JSX.Element => {
  const { pinnedApps } = usePinnedAppsConfig();
  return (
    <Styled.Container>
      <Styled.Container>
        {pinnedApps.map((app) => (
          <Styled.LI key={app.id}>
            <DesktopButton
              variant={'desktop'}
              iconSrc={app.icon}
              iconSize={app.iconSize}
              text={app.text}
              action={app.action}
              willOpenWindowWith={app.willOpenWindowWith}
            />
          </Styled.LI>
        ))}
      </Styled.Container>
    </Styled.Container>
  );
};

export default AllAppsModal;
