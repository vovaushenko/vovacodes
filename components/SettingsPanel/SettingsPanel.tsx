import React from 'react';
import * as Styled from './SettingsPanel.styles';
import { FiBattery, FiChevronUp, FiVolume2, FiWifi } from 'react-icons/fi';

/**
 *Renders settings panel
 *@function SettingsPanel
 *@returns {JSX.Element} - Rendered SettingsPanel component
 */
const SettingsPanel = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Tray>
        <FiChevronUp className="icon" />
      </Styled.Tray>

      <Styled.Settings>
        <FiBattery className="icon" />
        <FiWifi className="icon" />
        <FiVolume2 className="icon" />
      </Styled.Settings>
    </Styled.Container>
  );
};

export default SettingsPanel;
