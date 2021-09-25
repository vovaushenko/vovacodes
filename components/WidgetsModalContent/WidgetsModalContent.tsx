import React, { useRef } from 'react';
import * as Styled from './WidgetsModalContent.styles';
import WidgetCard from '../WidgetCard/WidgetCard';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import NewsWidget from '../NewsWidget/NewsWidget';
import TodoWidget from '../TodoWidget/TodoWidget';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import TechWidget from '../TechWidget/TechWidget';
import { useActions } from '../../hooks/useActions';
import { useCloseModalIfClickedOutside } from '../../hooks/useCloseIfClickedOutside';

/**
 *Renders content for sliding widget modal, namely weather and to-do widgets. Additionally, renders news widgets that are pre-fetched, pre-generated on server.
 *@function WidgetsModalContent
 *@returns {JSX.Element} - Rendered WidgetsModalContent component
 */
const WidgetsModalContent = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { newsArticles } = useTypedSelector((state) => state.news);
  const { isWidgetOpen } = useTypedSelector((state) => state.ui);
  const { closeWidgetsModal } = useActions();

  useCloseModalIfClickedOutside({
    modalRef: containerRef,
    closeModalFunction: closeWidgetsModal,
    isModalOpen: isWidgetOpen,
  });

  return (
    <Styled.Container ref={containerRef}>
      <Styled.Header>
        <WidgetCard
          cardHeader={'Powered by'}
          headerIcon={'/assets/portfolio/skills/typescript-original.svg'}
          iconSize={{ width: 15, height: 15 }}
        >
          <TechWidget />
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
      </Styled.Header>

      <WidgetCard
        cardHeader={'To Do'}
        headerIcon={'/assets/icons/widget/todo.png'}
        iconSize={{ width: 16, height: 16 }}
      >
        <TodoWidget />
      </WidgetCard>

      <Styled.NewsGridWrapper>
        {newsArticles
          .filter(
            (article) =>
              article.urlToImage !== null &&
              article.title !== null &&
              article.urlToImage !== null &&
              article.url !== null
          )
          .slice(0, 15)
          .map((article, id) => (
            <NewsWidget
              key={`${article.title}${article.publishedAt}`}
              className={`grid-card-${id + 1}`}
              newsHeader={article.title!}
              newsSource={article.source.name}
              newsLink={article.url!}
              backgroundImg={article.urlToImage!}
              cardGradientColor={'rgba(3, 21, 41, 1)'}
            />
          ))}
      </Styled.NewsGridWrapper>
    </Styled.Container>
  );
};

export default WidgetsModalContent;
