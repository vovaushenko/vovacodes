import React from 'react';
import * as Styled from './Hero.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import DesktopButton from '../DesktopButton/DesktopButton';
import SystemTray from '../SystemTray/SystemTray';
import SlidingModal from '../SlidingModal/SlidingModal';
import SettingsModalContent from '../SettingsModalContent/SettingsModalContent';
import WidgetCard from '../WidgetCard/WidgetCard';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import styled from 'styled-components';
import TodoWidget from '../TodoWidget/TodoWidget';

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
        variant={'desktop'}
        onClick={() => changeTheme()}
        iconSrc={'/assets/icons/Desktop/this_pc.webp'}
        iconSize={{ width: 40, height: 40 }}
        text={'This PC'}
      />
      <SystemTray />
      <SlidingModal
        width={'700px'}
        variant={'widgetsModal'}
        position={{ top: '1rem', bottom: '0', left: '0', right: '0' }}
      >
        <TestWrapper>
          <WidgetCard
            cardHeader={'Weather'}
            headerIcon={'/assets/icons/widget/weather.svg'}
            iconSize={{ width: 20, height: 20 }}
          >
            <WeatherWidget
              location={'Toronto, Ontario'}
              temperature={72}
              forecastDetails={'Strong UV Today'}
              humidity={0}
              iconSrc={'/assets/icons/widget/sun.svg'}
            />
          </WidgetCard>
          <WidgetCard
            cardHeader={'Weather'}
            headerIcon={'/assets/icons/widget/weather.svg'}
            iconSize={{ width: 20, height: 20 }}
          >
            <WeatherWidget
              location={'Toronto, Ontario'}
              temperature={72}
              forecastDetails={'Strong UV Today'}
              humidity={0}
              iconSrc={'/assets/icons/widget/sun.svg'}
            />
          </WidgetCard>

          <WidgetCard
            cardHeader={'To Do'}
            headerIcon={'/assets/icons/widget/todo.png'}
            iconSize={{ width: 16, height: 16 }}
          >
            <TodoWidget />
          </WidgetCard>
        </TestWrapper>
      </SlidingModal>

      <SlidingModal
        variant={'settingsModal'}
        width={'300px'}
        position={{ bottom: '0', right: `16px` }}
      >
        <SettingsModalContent />
      </SlidingModal>
    </Styled.Container>
  );
};

const TestWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export default Hero;
