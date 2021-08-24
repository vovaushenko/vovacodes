import { LocalRootState } from '../store/reducers';

export const mockReduxStore: LocalRootState = {
  ui: {
    theme: 'dark',
  },

  test: {
    isTested: true,
    value: 7,
  },
};
