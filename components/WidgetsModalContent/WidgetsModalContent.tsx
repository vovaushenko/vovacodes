import React from 'react';
import * as Styled from './WidgetsModalContent.styles';
import WidgetCard from '../WidgetCard/WidgetCard';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import NewsWidget from '../NewsWidget/NewsWidget';
import TodoWidget from '../TodoWidget/TodoWidget';
import { useTypedSelector } from '../../hooks/useTypedSelector';

/**
 *Renders content for sliding widget modal, namely weather and to-do widgets. Additionally, renders news widgets that are pre-fetched, pre-generated on server.
 *@function WidgetsModalContent
 *@returns {JSX.Element} - Rendered WidgetsModalContent component
 */
const WidgetsModalContent = (): JSX.Element => {
  const { newsArticles } = useTypedSelector((state) => state.news);

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

      <WidgetCard
        cardHeader={'To Do'}
        headerIcon={'/assets/icons/widget/todo.png'}
        iconSize={{ width: 16, height: 16 }}
      >
        <TodoWidget />
      </WidgetCard>

      {newsArticles
        .filter(
          (article) => article.urlToImage !== null && article.title !== null
        )
        .map((article) => (
          <NewsWidget
            key={`${article.title}${article.publishedAt}`}
            newsHeader={article.title!}
            newsSource={article.source.name}
            newsLink={article.url!}
            backgroundImg={article.urlToImage!}
            cardGradientColor={'rgba(3, 21, 41, 1)'}
          />
        ))}
    </Styled.Container>
  );
};

export default WidgetsModalContent;
