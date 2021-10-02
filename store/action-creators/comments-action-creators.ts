import { Dispatch } from 'redux';
import {
  CommentAction,
  CommentActionTypes,
} from '../../types/redux/comments-reducer-types';
import {
  getAllApprovedCommentsFromDB,
  persistNewCommentToDB,
} from '../../frontend-rest-client/rest/comments';

/**
 *@Action creator, will dispatch action to load all submitted comments from DB, also will dispatch error action if async operation fails
 *@function loadAllReviews
 *@returns {function} - Redux thunk function
 */
export const loadAllApprovedComments = () => {
  return async (dispatch: Dispatch<CommentAction>): Promise<void> => {
    dispatch({ type: CommentActionTypes.LOAD_ALL_COMMENTS });
    try {
      const { data } = await getAllApprovedCommentsFromDB();
      dispatch({
        type: CommentActionTypes.COMMENTS_DID_LOAD,
        payload: { total: data.total, comments: data.comments },
      });
    } catch (error) {
      dispatch({
        type: CommentActionTypes.COMMENTS_LOAD_ERROR,
        payload: error.message,
      });
    }
  };
};

/**
 *@Action creator, will dispatch action to persist a comment to DB, also will dispatch error action if async operation fails
 *@function uploadNewComment
 *@returns {function} - Redux thunk function
 */
export const uploadNewComment = (newComment: {
  author: string;
  comment: string;
}) => {
  return async (dispatch: Dispatch<CommentAction>): Promise<void> => {
    dispatch({ type: CommentActionTypes.PERSIST_COMMENT });
    try {
      const { data } = await persistNewCommentToDB(newComment);
      dispatch({
        type: CommentActionTypes.COMMENT_WAS_PERSISTED,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: CommentActionTypes.COMMENT_PERSIST_ERROR,
        payload: error.message,
      });
    }
  };
};
