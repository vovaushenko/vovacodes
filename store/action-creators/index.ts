import * as UIactionCreators from './ui-action-creators';
import * as TodoActionCreators from './todos-action-creators';

/**
 * This object combines all available redux action creators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...UIactionCreators,
  ...TodoActionCreators,
};

export type CombinedActionsType = typeof CombinedActionCreators;
