import React from 'react';
import * as Styled from './Hero.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import DesktopButton from '../DesktopButton/DesktopButton';

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
      <DesktopButton
        onClick={() => changeTheme()}
        iconSrc={'/assets/icons/Desktop/this_pc.webp'}
        iconSize={{ width: 40, height: 40 }}
        text={'This PC'}
      />
    </Styled.Container>
  );
};

export default Hero;
