import React, { useEffect } from 'react';
import * as Styled from './Desktop.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import DesktopApps from '../DesktopApps/DesktopApps';
import DesktopWidgets from '../DesktopWidgets/DesktopWidgets';
import { useActions } from '../../hooks/useActions';

/**
 *Renders main hero screen
 *@function Desktop
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Desktop = (): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);
  const { loadAllApprovedComments } = useActions();

  const backgroundWallpaper =
    theme === 'dark'
      ? 'assets/wallpapers/default_dark_compressed.jpg'
      : 'assets/wallpapers/default_light_compressed.jpg';

  useEffect(() => {
    loadAllApprovedComments();
  }, []);

  return (
    <Styled.Container bgWallpaper={backgroundWallpaper}>
      <DesktopApps />
      <DesktopWidgets />
    </Styled.Container>
  );
};

export default Desktop;
