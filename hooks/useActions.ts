import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  CombinedActionCreators,
  CombinedActionsType,
} from '../store/action-creators';

/**
 * custom hook that turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly.
 *@function useActions
 *@Combine All Available Redux Actions
 *@returns The object mimicking the original object, but with every action
 *creator wrapped into the `dispatch` call. If you passed a function as
 *`actionCreator`, the return value will also be a single function.
 */
export const useActions = (): CombinedActionsType => {
  const dispatch = useDispatch();
  return bindActionCreators(CombinedActionCreators, dispatch);
};
