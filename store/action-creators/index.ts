import * as UIactionCreators from './ui-action-creators';
import * as TodoActionCreators from './todos-action-creators';
import * as WindowsActionCreators from './windows-action-creators';

/**
 * This object combines all available redux action creators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...UIactionCreators,
  ...TodoActionCreators,
  ...WindowsActionCreators,
};

export type CombinedActionsType = typeof CombinedActionCreators;
