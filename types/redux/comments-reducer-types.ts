/**
 *@Interface IComment
 *@describe comment api response
 */
export interface IComment {
  _id: string;
  comment: string;
  author: string;
  isApproved: boolean;
  createdAt: string;
}

/**
 * Products Reducer state interface
 */
export interface CommentsState {
  comments: IComment[];
  commentsCount: number;
  isCommentPersisted: boolean;
  isLoading: boolean;
  error: string | null;
}

/**
 * Likes Reducer action types
 */
export enum CommentActionTypes {
  LOAD_ALL_COMMENTS = 'LOAD_ALL_COMMENTS',
  COMMENTS_DID_LOAD = 'COMMENTS_DID_LOAD',
  COMMENTS_LOAD_ERROR = 'COMMENTS_LOAD_ERROR',

  PERSIST_COMMENT = 'PERSIST_COMMENT',
  COMMENT_WAS_PERSISTED = 'COMMENT_WAS_PERSISTED',
  COMMENT_PERSIST_ERROR = 'COMMENT_PERSIST_ERROR',

  CLEAR_STATE = 'CLEAR_STATE',
}

/**
 * Combined Actions
 */

export type CommentAction =
  | { type: CommentActionTypes.LOAD_ALL_COMMENTS }
  | {
      type: CommentActionTypes.COMMENTS_DID_LOAD;
      payload: { total: number; comments: IComment[] };
    }
  | { type: CommentActionTypes.COMMENTS_LOAD_ERROR; payload: string }
  | { type: CommentActionTypes.PERSIST_COMMENT }
  | { type: CommentActionTypes.COMMENT_WAS_PERSISTED; payload: boolean }
  | { type: CommentActionTypes.COMMENT_PERSIST_ERROR; payload: string }
  | { type: CommentActionTypes.CLEAR_STATE };
