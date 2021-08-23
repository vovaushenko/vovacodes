import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { LocalRootState } from '../store/reducers';

/**
 * A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
 * uses Root Reducer State interface to create a version of useSelector hook that is properly typed for the root state.
 *@function useTypedSelector
 *@returns {function} typed useSelectorHook
 */
export const useTypedSelector: TypedUseSelectorHook<LocalRootState> =
  useSelector;
