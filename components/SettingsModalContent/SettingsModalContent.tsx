import React from 'react';
import * as Styled from './SettingsModalContent.styles';
import { useSettingsModalConfig } from './SettingsModalContent.config';
import SettingsButton from '../SettingsButton/SettingsButton';
import SliderControl from '../SliderControl/SliderControl';
import { FiBattery, FiSettings } from 'react-icons/fi';
import { useTypedSelector } from '../../hooks/useTypedSelector';

/**
 *Renders settings panel content for sliding modal
 *@function SettingsModalContent
 *@returns {JSX.Element} - Rendered SettingsModalContent component
 */
const SettingsModalContent = (): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);
  const { settingsButtons } = useSettingsModalConfig();

  return (
    <>
      <Styled.Top themeMode={theme}>
        <Styled.ButtonWrapper>
          {settingsButtons.map((btn) => (
            <SettingsButton
              key={btn.id}
              variant={btn.variant}
              isTurnedOn={false}
              text={btn.text}
              btnAction={btn.btnAction}
            >
              {btn.icon}
            </SettingsButton>
          ))}
        </Styled.ButtonWrapper>

        <Styled.SlidersWrapper>
          <SliderControl variant={'voiceControl'} withChevron={false} />
          <SliderControl variant={'brightnessControl'} withChevron={false} />
        </Styled.SlidersWrapper>
      </Styled.Top>

      <Styled.Footer>
        <Styled.Battery>
          <FiBattery className="icon" />
          <span>77%</span>
        </Styled.Battery>
        <Styled.Settings>
          <FiSettings className="icon" />
        </Styled.Settings>
      </Styled.Footer>
    </>
  );
};

export default SettingsModalContent;
