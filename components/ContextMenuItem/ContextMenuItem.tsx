import React, { useRef } from 'react';
import * as Styled from './ContextMenuItem.styles';
import { FiChevronRight } from 'react-icons/fi';
import ContextMenu from '../ContextMenu/ContextMenu';
import useHover from '../../hooks/useHover';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export interface IContextMenuItem {
  id: number;
  text: string;
  action: null | (() => void);
  iconSrc?: string;
  withIcon?: JSX.Element;
  hoverMenuItems?: IContextMenuItem[];
  withUnderline?: boolean;
}

/**
 *Renders menu item in context menu that can toggle action on click (if specified), or open new context menu section on hover (if specified)
 *@function ContextMenuItem
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered ContextMenuItem component
 */
const ContextMenuItem = ({
  text,
  hoverMenuItems,
  action,
  withUnderline,
  withIcon,
}: IContextMenuItem): JSX.Element => {
  const containerRef = useRef<HTMLLIElement>(null);
  const { isContextMenuOpen } = useTypedSelector((state) => state.ui);
  const DISTANCE_FROM_MAIN_CONTAINER = 15; // this constant is the distance between main container and hoverable content
  const isHovering = useHover(containerRef);

  const handleClick = () => {
    action && action();
  };

  return (
    <>
      <Styled.Container
        ref={containerRef}
        withUnderline={withUnderline}
        onClick={handleClick}
      >
        <Styled.TextIconWrapper>
          {withIcon}
          <p>{text}</p>
        </Styled.TextIconWrapper>

        {hoverMenuItems !== undefined && <FiChevronRight className={'icon'} />}

        {hoverMenuItems !== undefined && isContextMenuOpen && (
          <Styled.ContextMenuWrapper
            isContextMenuShown={isHovering}
            distanceFromMainContainer={DISTANCE_FROM_MAIN_CONTAINER}
          >
            <ContextMenu
              isOpen={isHovering}
              contextMenuItems={hoverMenuItems}
              locationCoordinates={{ x: 0, y: 0 }}
            />
          </Styled.ContextMenuWrapper>
        )}
      </Styled.Container>
    </>
  );
};

export default React.memo(ContextMenuItem);
