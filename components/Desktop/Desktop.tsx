import React from 'react';
import * as Styled from './Desktop.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import DesktopApps from '../DesktopApps/DesktopApps';
import DesktopWidgets from '../DesktopWidgets/DesktopWidgets';
import { useGetMouseCoordinates } from '../../hooks/useGetMouseCoordinates';
import ContextMenu from '../ContextMenu/ContextMenu';
import { useContextMenuConfig } from '../ContextMenu/ContextMenu.config';
import { useActions } from '../../hooks/useActions';

/**
 *Renders main hero screen
 *@function Desktop
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Desktop = (): JSX.Element => {
  const { theme, isContextMenuOpen } = useTypedSelector((state) => state.ui);
  const { openContextMenu } = useActions();
  const { desktopContextMenuContent } = useContextMenuConfig();

  const backgroundWallpaper =
    theme === 'dark'
      ? 'assets/wallpapers/default_dark_compressed.jpg'
      : 'assets/wallpapers/default_light_compressed.jpg';

  const mouseCoords = useGetMouseCoordinates();
  const handleRightMouseClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!isContextMenuOpen) openContextMenu(mouseCoords);
  };

  return (
    <Styled.Container
      bgWallpaper={backgroundWallpaper}
      onContextMenu={handleRightMouseClick}
    >
      <DesktopApps />
      <DesktopWidgets />

      <ContextMenu
        isOpen={isContextMenuOpen}
        contextMenuItems={desktopContextMenuContent}
        locationCoordinates={mouseCoords}
      />
    </Styled.Container>
  );
};

export default Desktop;
