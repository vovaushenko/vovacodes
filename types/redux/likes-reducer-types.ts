/**
 * Likes Reducer state interface
 */
export interface LikesState {
  likesCount: number;
  areLikesFetching: boolean;
  isLoading: boolean;
  isLikePersisted: boolean;
  error: string | null;
}

/**
 * Likes Reducer action types
 */

export enum LikesActionTypes {
  LOAD_ALL_LIKES = 'LOAD_ALL_LIKES',
  LIKES_DID_LOAD = 'LIKES_DID_LOAD',
  LIKES_LOAD_ERROR = 'LIKES_LOAD_ERROR',
  PERSIST_LIKE = 'PERSIST_LIKE',
  LIKE_WAS_PERSISTED = 'LIKE_WAS_PERSISTED',
  LIKE_PERSIST_ERROR = 'LIKE_PERSIST_ERROR',
  CLEAR_STATE = 'CLEAR_STATE',
}

/**
 * Combined Actions
 */

export type LikeAction =
  | { type: LikesActionTypes.LOAD_ALL_LIKES }
  | { type: LikesActionTypes.LIKES_DID_LOAD; payload: number }
  | { type: LikesActionTypes.LIKES_LOAD_ERROR; payload: string }
  | { type: LikesActionTypes.PERSIST_LIKE }
  | { type: LikesActionTypes.LIKE_WAS_PERSISTED; payload: boolean }
  | { type: LikesActionTypes.LIKE_PERSIST_ERROR; payload: string }
  | { type: LikesActionTypes.CLEAR_STATE };
