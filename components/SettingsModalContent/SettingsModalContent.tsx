import React from 'react';
import * as Styled from './SettingsModalContent.styles';
import { settingsIcons } from './SettingsModalContent.config';
import SettingsButton from '../SettingsButton/SettingsButton';

/**
 *Renders settings panel content for sliding modal
 *@function SettingsModalContent
 *@returns {JSX.Element} - Rendered SettingsModalContent component
 */
const SettingsModalContent = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ButtonWrapper>
        {settingsIcons.map((icon) => (
          <SettingsButton
            key={icon.id}
            variant={icon.variant}
            isTurnedOn={false}
            text={icon.text}
          >
            {icon.icon}
          </SettingsButton>
        ))}
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default SettingsModalContent;
