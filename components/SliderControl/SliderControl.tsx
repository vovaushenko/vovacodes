import React, { useState } from 'react';
import * as Styled from './SliderControl.styles';
import { FiChevronRight, FiSun, FiVolume2 } from 'react-icons/fi';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export interface Props {
  variant: 'voiceControl' | 'brightnessControl';
  withChevron: boolean;
}

/**
 *@function SliderControl
 *@param {enum} variant - voice control variant with volume icon or brightness control variant
 *@param {boolean} withChevron - specifies whether the chevron should be rendered
 *@returns {JSX.Element} - Rendered SliderControl component
 */
const SliderControl = ({ variant, withChevron }: Props): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);

  const [rangeValue, setRangeValue] = useState('30');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(e.target.value);
  };

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
