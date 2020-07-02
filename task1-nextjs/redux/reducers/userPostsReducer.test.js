import * as types from '../actions/actionConstants';
import userPostsReducer from './userPostsReducer';

describe('User posts reducer', () => {
  const initialState = { loading: false, posts: [], error: '' };
  it('should return default state', () => {
    const newState = userPostsReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('should return new state if receiving type FETCH_USER_POSTS_REQUEST', () => {
    const expectedState = { ...initialState, loading: true };
    const newState = userPostsReducer(initialState, {
      type: types.FETCH_USER_POSTS_REQUEST,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state if receiving type FETCH_USER_POSTS_SUCCESS', () => {
    const posts = [
      { id: 1, title: 'post 1' },
      { id: 2, title: 'post 2' },
    ];

    const expectedState = { loading: false, posts, error: '' };
    const newState = userPostsReducer(initialState, {
      type: types.FETCH_USER_POSTS_SUCCESS,
      posts,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state if receiving type FETCH_USER_POSTS_FAILURE', () => {
    const error = 'Something went wrong';

    const expectedState = { loading: false, posts: [], error };
    const newState = userPostsReducer(initialState, {
      type: types.FETCH_USER_POSTS_FAILURE,
      error,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state if receiving type  CLEAR_USER_POSTS', () => {
    const expectedState = { ...initialState, posts: [] };
    const newState = userPostsReducer(initialState, {
      type: types.CLEAR_USER_POSTS,
    });
    expect(newState).toEqual(expectedState);
  });
});
