import React, { useEffect, useState } from 'react';
import * as Styled from './SliderControl.styles';
import { FiChevronRight, FiSun, FiVolume2 } from 'react-icons/fi';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

export interface Props {
  variant: 'voiceControl' | 'brightnessControl';
  withChevron: boolean;
}

/**
 *Renders two variants of slider control. Controls app's brightness and app's volume. App's brightness is passed to redux and then inject as brightness filter in Container that wraps whole app.
 *@function SliderControl
 *@param {enum} variant - voice control variant with volume icon or brightness control variant
 *@param {boolean} withChevron - specifies whether the chevron should be rendered
 *@returns {JSX.Element} - Rendered SliderControl component
 */
const SliderControl = ({ variant, withChevron }: Props): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);
  const { changeScreenBrightness } = useActions();

  const [rangeValue, setRangeValue] = useState('100');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(e.target.value);
  };

  useEffect(() => {
    if (variant === 'brightnessControl') {
      changeScreenBrightness(rangeValue);
    }
  }, [rangeValue, variant]);

  return (
    <Styled.Container>
      <Styled.Label htmlFor={variant}>
        {variant === 'voiceControl' ? (
          <FiVolume2 className={'icon'} />
        ) : (
          <FiSun className={'icon'} />
        )}
      </Styled.Label>
      <Styled.Input
        themeMode={theme}
        progress={rangeValue}
        type="range"
        min={'0'}
        max={'100'}
        value={rangeValue}
        name={variant}
        onChange={handleChange}
      />
      {withChevron && <FiChevronRight className={'icon'} />}
    </Styled.Container>
  );
};

export default SliderControl;
