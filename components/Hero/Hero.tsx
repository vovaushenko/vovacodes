import React from 'react';
import * as Styled from './Hero.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

/**
 *Renders main hero screen
 *@function Hero
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Hero = (): JSX.Element => {
  const { changeTheme } = useActions();
  const { theme } = useTypedSelector((state) => state.ui);

  const backgroundWallpaper =
    theme === 'dark'
      ? 'assets/wallpapers/default_dark_compressed.jpg'
      : 'assets/wallpapers/default_light_compressed.jpg';

  return (
    <Styled.Container bgWallpaper={backgroundWallpaper}>
      <button onClick={() => changeTheme()}>hero</button>
    </Styled.Container>
  );
};

export default Hero;
