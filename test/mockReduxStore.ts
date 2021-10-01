import { LocalRootState } from '../store/reducers';

export const mockReduxStore: LocalRootState = {
  ui: {
    theme: 'dark',
    isWidgetOpen: false,
    isSearchOpen: false,
    areSettingsOpen: false,
    isAppCenterOpen: false,
    isInNightLightMode: false,
    screenBrightness: '100',
    shouldIntroBeShown: true,
    isCalendarOpen: false,
    isContextMenuOpen: false,
    contextMenuCoords: { x: 0, y: 0 },
    iconsSize: 'medium',
    sortDesktopIconsBy: 'size',
    removedApps: [],
    compressedApps: [],
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

  news: {
    newsArticles: [],
    areNewsLoading: false,
    error: null,
  },
  comments: {
    comments: [],
    commentsCount: 0,
    error: null,
    isCommentPersisted: false,
    isLoading: false,
  },

  articles: {
    articles: [],
    areArticlesLoading: false,
    filterOptions: [],
    sortArticlesBy: 'date',
    error: null,
  },
};
