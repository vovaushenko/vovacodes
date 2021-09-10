import {
  LikeAction,
  LikesActionTypes,
} from '../../types/redux/likes-reducer-types';
import { Dispatch } from 'redux';
import {
  getAllLikesFromDB,
  persistNewLikeToDB,
} from '../../frontend-rest-client/rest/likes';

/**
 *@Action creator, will dispatch action to load all submitted likes from DB, also will dispatch error action if async operation fails
 *@function loadAllReviews
 *@returns {function} - Redux thunk function
 */
export const getAllLikes = () => {
  return async (dispatch: Dispatch<LikeAction>): Promise<void> => {
    dispatch({ type: LikesActionTypes.LOAD_ALL_LIKES });
    try {
      const { data } = await getAllLikesFromDB();
      dispatch({
        type: LikesActionTypes.LIKES_DID_LOAD,
        payload: data.totalLikes,
      });
    } catch (error) {
      dispatch({
        type: LikesActionTypes.LIKES_LOAD_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 *@Action creator, will dispatch action to persist a like to DB, also will dispatch error action if async operation fails
 *@function loadAllReviews
 *@returns {function} - Redux thunk function
 */
export const postLike = () => {
  return async (dispatch: Dispatch<LikeAction>): Promise<void> => {
    dispatch({ type: LikesActionTypes.PERSIST_LIKE });
    try {
      const { data } = await persistNewLikeToDB();
      dispatch({
        type: LikesActionTypes.LIKE_WAS_PERSISTED,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: LikesActionTypes.LIKE_PERSIST_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};
/**
 *@Action creator, will dispatch action clear likes state
 *@function loadAllReviews
 *@returns {function} - Redux thunk function
 */
export const clearLikeState = () => {
  return async (dispatch: Dispatch<LikeAction>): Promise<void> => {
    dispatch({ type: LikesActionTypes.CLEAR_STATE });
  };
};
