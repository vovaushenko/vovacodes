import { LocalRootState } from '../store/reducers';

export const mockReduxStore: LocalRootState = {
  ui: {
    theme: 'dark',
    isWidgetOpen: false,
    isSearchOpen: false,
    areSettingsOpen: false,
    isAppCenterOpen: false,
  },

  test: {
    isTested: true,
    value: 7,
  },
  todos: {
    todos: [],
  },
  windows: {
    openedWindows: [],
  },
  likes: {
    likesCount: 1,
    isLikePersisted: false,
    isLoading: false,
    error: null,
  },
  contact: {
    isEmailSending: false,
    isEmailSent: false,
    error: null,
  },
};
