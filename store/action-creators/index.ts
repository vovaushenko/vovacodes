import * as UIactionCreators from './ui-action-creators';
/**
 * This object combines all available redux action creators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...UIactionCreators,
};

export type CombinedActionsType = typeof CombinedActionCreators;
