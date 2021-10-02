import {
  LikeAction,
  LikesActionTypes,
  LikesState,
} from '../../../types/redux/likes-reducer-types';
import { likesReducer } from '../likesReducer';

const initialState: LikesState = {
  likesCount: 0,
  isLoading: false,
  areLikesFetching: false,
  isLikePersisted: false,
  error: null,
};

describe('Likes Reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = likesReducer(undefined, {} as LikeAction);
    expect(newState).toStrictEqual(initialState);
  });

  test('should set isLoading flag while fetching on LOAD_ALL_LIKES', () => {
    const newState = likesReducer(initialState, {
      type: LikesActionTypes.LOAD_ALL_LIKES,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      areLikesFetching: true,
    });
  });

  test('should stop loading and set number of likes on LIKES_DID_LOAD', () => {
    const newState = likesReducer(initialState, {
      type: LikesActionTypes.LIKES_DID_LOAD,
      payload: 77,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      areLikesFetching: false,
      likesCount: 77,
    });
  });

  test('should stop loading and set error on LIKES_LOAD_ERROR', () => {
    const newState = likesReducer(initialState, {
      type: LikesActionTypes.LIKES_LOAD_ERROR,
      payload: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      areLikesFetching: false,
      error: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
    });
  });

  describe('Persist like to DB', () => {
    test('should set isLoading flag while fetching on PERSIST_LIKE', () => {
      const newState = likesReducer(initialState, {
        type: LikesActionTypes.PERSIST_LIKE,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('should stop loading and indicate success statate of async operation on LIKE_WAS_PERSISTED', () => {
      const newState = likesReducer(initialState, {
        type: LikesActionTypes.LIKE_WAS_PERSISTED,
        payload: true,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        isLikePersisted: true,
      });
    });

    test('should stop loading and set error on LIKE_PERSIST_ERROR', () => {
      const newState = likesReducer(initialState, {
        type: LikesActionTypes.LIKE_PERSIST_ERROR,
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
