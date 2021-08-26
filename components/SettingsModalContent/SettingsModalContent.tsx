import React from 'react';
import * as Styled from './SettingsModalContent.styles';
import { settingsIcons } from './SettingsModalContent.config';
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
  //TODO: change dummy battery value with progressively decreasing
  return (
    <>
      <Styled.Top themeMode={theme}>
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
