import * as types from '../actions/actionConstants';
import PostsReducer from './postsReducer';

describe('Posts Reducer', () => {
  const initialState = { loading: false, posts: [], error: '' };

  it('should return default state', () => {
    const newState = PostsReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('should return new state  if receiving type FETCH_POSTS_REQUEST ', () => {
    const expectedState = { ...initialState, loading: true };
    const newState = PostsReducer(initialState, {
      type: types.FETCH_POSTS_REQUEST,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state  if receiving type FETCH_POSTS_SUCCESS ', () => {
    const posts = [
      { title: 'title 1' },
      { title: 'title 2' },
      { title: 'title 3' },
    ];

    const expectedState = { loading: false, posts, error: '' };
    const newState = PostsReducer(initialState, {
      type: types.FETCH_POSTS_SUCCESS,
      posts,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state  if receiving type FETCH_POSTS_FAILURE ', () => {
    const error = 'Something went wrong';

    const expectedState = { loading: false, posts: [], error };
    const newState = PostsReducer(initialState, {
      type: types.FETCH_POSTS_FAILURE,
      error,
    });
    expect(newState).toEqual(expectedState);
  });
});
