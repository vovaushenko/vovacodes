import React, { useEffect, useState } from 'react';
import * as Styled from './DesktopApps.styles';
import { useDesktopApps } from './DesktopApps.config';
import DesktopButton from '../DesktopButton/DesktopButton';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IDesktopApp } from '../../types/ui/desktop-app';

/**
 *Renders list of desktop apps. App lists is stored in DesktopApps config. Configuration of icons layout is controlled through redux. If specified this configuration will be changed through useEffect
 *@function DesktopApps
 *@returns {JSX.Element} - Rendered DesktopApps component
 */
const DesktopApps = (): JSX.Element => {
  const [displayedDesktopApps, setDisplayedDesktopApps] = useState<
    IDesktopApp[]
  >([]);
  const { sortedAlphabetically, sortedByDate, sortedBySize } = useDesktopApps();
  const { sortDesktopIconsBy } = useTypedSelector((state) => state.ui);

  useEffect(() => {
    if (sortDesktopIconsBy === 'name') {
      setDisplayedDesktopApps(sortedAlphabetically);
    }
    if (sortDesktopIconsBy === 'date') {
      setDisplayedDesktopApps(sortedByDate);
    }

    if (sortDesktopIconsBy === 'size') {
      setDisplayedDesktopApps(sortedBySize);
    }
  }, [sortDesktopIconsBy]);

  return (
    <Styled.UL>
      {displayedDesktopApps.map((app) => (
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
