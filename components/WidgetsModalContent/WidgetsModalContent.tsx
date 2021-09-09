import React from 'react';
import * as Styled from './WidgetsModalContent.styles';
import WidgetCard from '../WidgetCard/WidgetCard';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import NewsWidget from '../NewsWidget/NewsWidget';
import TodoWidget from '../TodoWidget/TodoWidget';

/**
 *Renders content for sliding widget modal
 *@function WidgetsModalContent
 *@returns {JSX.Element} - Rendered WidgetsModalContent component
 */
const WidgetsModalContent = (): JSX.Element => {
  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};

export default WidgetsModalContent;
