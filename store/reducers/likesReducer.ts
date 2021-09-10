import {
  LikeAction,
  LikesActionTypes,
  LikesState,
} from '../../types/redux/likes-reducer-types';

const initialLikesState: LikesState = {
  likesCount: 0,
  isLoading: false,
  isLikePersisted: false,
  error: null,
};

/**
 *@function likesReducer
 *@param {LikesState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */

export const likesReducer = (
  state = initialLikesState,
  action: LikeAction
): LikesState => {
  switch (action.type) {
    case LikesActionTypes.LOAD_ALL_LIKES:
      return { ...state, isLoading: true };
    case LikesActionTypes.LIKES_DID_LOAD:
      return { ...state, isLoading: false, likesCount: action.payload };
    case LikesActionTypes.LIKES_LOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case LikesActionTypes.PERSIST_LIKE:
      return { ...state, isLoading: true };
    case LikesActionTypes.LIKE_WAS_PERSISTED:
      return { ...state, isLoading: false, isLikePersisted: action.payload };
    case LikesActionTypes.LIKE_PERSIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case LikesActionTypes.CLEAR_STATE:
      return {
        ...state,
        isLoading: false,
        isLikePersisted: false,
        error: null,
      };

    default:
      return state;
  }
};
