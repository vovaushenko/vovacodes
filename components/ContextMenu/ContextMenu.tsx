import React, { useRef } from 'react';
import * as Styled from './ContextMenu.styles';
import ContextMenuItem, {
  IContextMenuItem,
} from '../ContextMenuItem/ContextMenuItem';
import { useCloseModalIfClickedOutside } from '../../hooks/useCloseIfClickedOutside';
import { useActions } from '../../hooks/useActions';

export interface Props {
  isOpen: boolean;
  contextMenuItems: IContextMenuItem[];
  locationCoordinates: { x: number; y: number };
}

/**
 *Renders context menu with list of actions that can be opened by right click (contextmenu event)
 *@function ContextMenu
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered ContextMenu component
 */
const ContextMenu = ({
  contextMenuItems,
  locationCoordinates,
  isOpen,
}: Props): JSX.Element => {
  const containerRef = useRef(null);
  const { closeContextMenu } = useActions();

  useCloseModalIfClickedOutside({
    isModalOpen: true,
    modalRef: containerRef,
    closeModalFunction: closeContextMenu,
  });

  return (
    <Styled.Container
      ref={containerRef}
      locationCoordinates={locationCoordinates}
      isOpen={isOpen}
    >
      <Styled.UL>
        {contextMenuItems.map((item) => (
          <ContextMenuItem
            key={item.id}
            id={item.id}
            text={item.text}
            action={item.action}
            hoverMenuItems={item.hoverMenuItems}
            iconSrc={item.iconSrc}
            withUnderline={item.withUnderline}
            withIcon={item.withIcon}
          />
        ))}
      </Styled.UL>
    </Styled.Container>
  );
};
export default ContextMenu;
