import { LocalRootState } from '../store/reducers';

export const mockReduxStore: LocalRootState = {
  ui: {
    theme: 'dark',
    isWidgetOpen: false,
    isSearchOpen: false,
    areSettingsOpen: false,
  },

  test: {
    isTested: true,
    value: 7,
  },
};
