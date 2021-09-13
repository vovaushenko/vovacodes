import React from 'react';
import { Provider } from 'react-redux';
import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { LocalRootState, rootReducer } from '../store/reducers';
import { useAppThemes } from '../styles/appThemes';
import { mockReduxStore } from './mockReduxStore';

/**
 * Create a testing store with imported reducers, middleware, and initial state
 *@param {object} initialState - Initial store for store
 *@function storeFactory
 *@returns {Store} - Redux store
 */
export const storeFactory = (
  initialState: LocalRootState
): Store<LocalRootState, AnyAction> => {
  const middlewares = [thunk];
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

/**
 * Create a wrapper for tested components  with imported reducers, middleware, initial state and styled-components theme props
 *@param {JSX.Element} component - tested component
 *@function withReduxAndStyledProviders
 *@returns {JSX.Element} - tested element wrapped in redux and styled components providers
 */

const { darkTheme } = useAppThemes();
export const withReduxAndStyledProviders = (
  component: JSX.Element
): JSX.Element => {
  const store = storeFactory(mockReduxStore);

  return (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>{component}</Provider>
    </ThemeProvider>
  );
};
