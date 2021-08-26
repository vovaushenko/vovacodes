import React, { FC } from 'react';
import * as Styled from './SlidingModal.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export interface SliderProps {
  variant: 'widgetsModal' | 'systemTrayModal' | 'settingsModal';
  width: string;
  position: { top?: string; bottom?: string; right?: string; left?: string };
}

/**
 *@function SlidingModal
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SlidingModal: FC<SliderProps> = ({
  variant,
  width,
  position,
  children,
}): JSX.Element => {
  const { isWidgetOpen, isSearchOpen, areSettingsOpen } = useTypedSelector(
    (state) => state.ui
  );

  return (
    <Styled.Container
      variant={variant}
      width={width}
      position={position}
      isSlidingModalOpen={isWidgetOpen}
      isSearchOpen={isSearchOpen}
      areSettingsOpen={areSettingsOpen}
    >
      {children}
    </Styled.Container>
  );
};

export default SlidingModal;
