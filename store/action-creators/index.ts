import * as UIactionCreators from './ui-action-creators';
import * as TodoActionCreators from './todos-action-creators';
import * as WindowsActionCreators from './windows-action-creators';
import * as LikeActionCreators from './like-action-creators';
import * as ContactActionCreators from './contact-action-creators';

/**
 * This object combines all available redux action creators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...UIactionCreators,
  ...TodoActionCreators,
  ...WindowsActionCreators,
  ...LikeActionCreators,
  ...ContactActionCreators,
};

export type CombinedActionsType = typeof CombinedActionCreators;
