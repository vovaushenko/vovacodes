import {
  CommentAction,
  CommentActionTypes,
  CommentsState,
  IComment,
} from '../../../types/redux/comments-reducer-types';
import { commentsReducer } from '../commentsReducer';

const initialState: CommentsState = {
  comments: [],
  commentsCount: 0,
  isCommentPersisted: false,
  isLoading: false,
  error: null,
};

const mockComment: IComment = {
  id: 'xyz',
  comment: 'some comment',
  author: 'TOMATO',
  createdAt: '2021',
  isApproved: true,
};

describe('Comments Reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = commentsReducer(undefined, {} as CommentAction);
    expect(newState).toStrictEqual(initialState);
  });

  test('should set isLoading flag while fetching on LOAD_ALL_COMMENTS', () => {
    const newState = commentsReducer(initialState, {
      type: CommentActionTypes.LOAD_ALL_COMMENTS,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('should stop loading, set comments and number of comments on COMMENTS_DID_LOAD', () => {
    const newState = commentsReducer(initialState, {
      type: CommentActionTypes.COMMENTS_DID_LOAD,
      payload: {
        total: 77,
        comments: [mockComment],
      },
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      commentsCount: 77,
      comments: [mockComment],
    });
  });

  test('should stop loading and set error on COMMENTS_LOAD_ERROR', () => {
    const newState = commentsReducer(initialState, {
      type: CommentActionTypes.COMMENTS_LOAD_ERROR,
      payload: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      error: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
    });
  });

  describe('Persist comment to DB', () => {
    test('should set isLoading flag while fetching on PERSIST_COMMENT', () => {
      const newState = commentsReducer(initialState, {
        type: CommentActionTypes.PERSIST_COMMENT,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('should stop loading and indicate success state of async operation on COMMENT_WAS_PERSISTED', () => {
      const newState = commentsReducer(initialState, {
        type: CommentActionTypes.COMMENT_WAS_PERSISTED,
        payload: true,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        isCommentPersisted: true,
      });
    });

    test('should stop loading and set error on COMMENT_PERSIST_ERROR', () => {
      const newState = commentsReducer(initialState, {
        type: CommentActionTypes.COMMENT_PERSIST_ERROR,
        payload: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
      });
    });
  });
});
