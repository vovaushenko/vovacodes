import React, { useCallback } from 'react';
import * as Styled from './OpenedWindows.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Window from '../Window/Window';
import { useActions } from '../../hooks/useActions';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import WidgetCard from '../WidgetCard/WidgetCard';

/**
 *Renders container with all currently opened windows, which are stored in redux
 *@function OpenedWindows
 *@returns {JSX.Element} - Rendered OpenedWindows component
 */
const OpenedWindows = (): JSX.Element => {
  const { openedWindows } = useTypedSelector((state) => state.windows);
  const { closeOpenedWindow } = useActions();

  const handleCloseWindow = useCallback(
    (windowName: string) => {
      closeOpenedWindow(windowName);
    },
    [closeOpenedWindow]
  );

  return (
    <Styled.Container>
      {openedWindows.map((window) => (
        <Window
          key={window.windowName}
          windowName={window.windowName}
          windowIcon={window.windowIcon}
          size={window.size}
          isOpen={window.isOpen}
          closeWindow={() => handleCloseWindow(window.windowName)}
        >
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
        </Window>
      ))}
    </Styled.Container>
  );
};
export default OpenedWindows;
