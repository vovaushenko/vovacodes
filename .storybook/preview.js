import { addDecorator } from '@storybook/react';
import * as nextImage from 'next/image';
import { Provider } from 'react-redux';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyle';
import { darkTheme, lightTheme } from '../styles/appThemes';
import { mockReduxStore } from '../test/mockReduxStore';
import { storeFactory } from '../test/testUtils';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

const themes = [darkTheme, lightTheme];

addDecorator(withThemesProvider(themes), ThemeProvider);

const store = storeFactory(mockReduxStore);
addDecorator((story) => (
  <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <GlobalStyles />
      {story()}
    </Provider>
  </ThemeProvider>
));
