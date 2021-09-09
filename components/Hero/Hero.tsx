import React from 'react';
import * as Styled from './Hero.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SlidingModal from '../SlidingModal/SlidingModal';
import SettingsModalContent from '../SettingsModalContent/SettingsModalContent';
import WidgetCard from '../WidgetCard/WidgetCard';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import styled from 'styled-components';
import TodoWidget from '../TodoWidget/TodoWidget';
import NewsWidget from '../NewsWidget/NewsWidget';
import DesktopApps from '../DesktopApps/DesktopApps';

/**
 *Renders main hero screen
 *@function Hero
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Hero = (): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);

  const backgroundWallpaper =
    theme === 'dark'
      ? 'assets/wallpapers/default_dark_compressed.jpg'
      : 'assets/wallpapers/default_light_compressed.jpg';

  return (
    <Styled.Container bgWallpaper={backgroundWallpaper}>
      <DesktopApps />

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

          <NewsWidget
            newsHeader={
              "Why is Elon Musk's Mars mission considered most ambitious?"
            }
            newsSource={'CNBC'}
            newsLink={
              'https://www.cnbc.com/2021/04/23/elon-musk-aiming-for-mars-so-humanity-is-not-a-single-planet-species.html'
            }
            backgroundImg={'/assets/images/news-1.jpg'}
            cardGradientColor={'rgb(248, 168, 87)'}
          />

          <NewsWidget
            newsHeader={
              '11 amazing places to visit in Canada for a summer vacation'
            }
            newsSource={'Skyscanner'}
            newsLink={
              'https://www.skyscanner.ca/tips-and-inspiration/best-summer-vacation-spots-in-canada'
            }
            backgroundImg={'/assets/images/news-2.jpg'}
            cardGradientColor={'rgb(77, 231, 255)'}
          />

          <WidgetCard
            cardHeader={'To Do'}
            headerIcon={'/assets/icons/widget/todo.png'}
            iconSize={{ width: 16, height: 16 }}
          >
            <TodoWidget />
          </WidgetCard>
          <NewsWidget
            newsHeader={
              '11 amazing places to visit in Canada for a summer vacation'
            }
            newsSource={'Skyscanner'}
            newsLink={
              'https://www.skyscanner.ca/tips-and-inspiration/best-summer-vacation-spots-in-canada'
            }
            backgroundImg={'/assets/images/news-2.jpg'}
            cardGradientColor={'rgb(77, 231, 255)'}
          />
          <NewsWidget
            newsHeader={
              '11 amazing places to visit in Canada for a summer vacation'
            }
            newsSource={'Skyscanner'}
            newsLink={
              'https://www.skyscanner.ca/tips-and-inspiration/best-summer-vacation-spots-in-canada'
            }
            backgroundImg={'/assets/images/news-2.jpg'}
            cardGradientColor={'rgb(77, 231, 255)'}
          />
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
