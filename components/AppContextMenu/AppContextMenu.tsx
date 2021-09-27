import React, { ReactNode } from 'react';
import * as Styled from './AppContextMenu.styles';
import ContextMenuItem from '../ContextMenuItem/ContextMenuItem';
import { useAppContextMenuConfig } from './AppContextMenu.config';

export interface Props {
  appName: string;
  willOpenWindowWith: ReactNode | null;
  iconSrc: string;
}

/**
 *Renders context menu for desktop apps. Will be open on contextmenu event (right mouse click) on desktop app
 *@function AppContextMenu
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const AppContextMenu = ({
  appName,
  iconSrc,
  willOpenWindowWith,
}: Props): JSX.Element => {
  const { desktopContextMenuContent } = useAppContextMenuConfig({
    appName,
    iconSrc,
    willOpenWindowWith,
  });

  return (
    <Styled.Container>
      {desktopContextMenuContent.map((ctx) => (
        <ContextMenuItem
          key={ctx.id}
          id={ctx.id}
          text={ctx.text}
          action={ctx.action}
          appName={appName}
          withUnderline={ctx.withUnderline}
          withIcon={ctx.withIcon}
        />
      ))}
    </Styled.Container>
  );
};

export default AppContextMenu;
