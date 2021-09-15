import {
  CommentAction,
  CommentActionTypes,
  CommentsState,
} from '../../types/redux/comments-reducer-types';

const initialCommentsState: CommentsState = {
  comments: [],
  commentsCount: 0,
  isCommentPersisted: false,
  isLoading: false,
  error: null,
};

/**
 *@function commentsReducer
 *@param {CommentsState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */

export const commentsReducer = (
  state = initialCommentsState,
  action: CommentAction
): CommentsState => {
  switch (action.type) {
    case CommentActionTypes.LOAD_ALL_COMMENTS:
      return { ...state, isLoading: true };
    case CommentActionTypes.COMMENTS_DID_LOAD:
      return {
        ...state,
        isLoading: false,
        commentsCount: action.payload.total,
        comments: action.payload.comments,
      };
    case CommentActionTypes.COMMENTS_LOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case CommentActionTypes.PERSIST_COMMENT:
      return { ...state, isLoading: true };
    case CommentActionTypes.COMMENT_WAS_PERSISTED:
      return { ...state, isLoading: false, isCommentPersisted: action.payload };
    case CommentActionTypes.COMMENT_PERSIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case CommentActionTypes.CLEAR_STATE:
      return {
        ...state,
        isLoading: false,
        isCommentPersisted: false,
        error: null,
      };

    default:
      return state;
  }
};
