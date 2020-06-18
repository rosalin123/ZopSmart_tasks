import * as types from '../actions/types';
import userPostsReducer from './userPostsReducer';

describe('User posts reducer', () => {
  it('should return default state', () => {
    const newState = userPostsReducer(undefined, []);
    expect(newState).toEqual([]);
  });
  it('should return new state if receiving type FETCH_USER_POSTS', () => {
    const posts = [
      { id: 1, title: 'title 1' },
      { id: 2, title: 'title 2' },
    ];
    const newState = userPostsReducer(undefined, {
      type: types.FETCH_USER_POSTS,
      posts,
    });
    expect(newState).toEqual(posts);
  });

  it('should return new state if receiving type  CLEAR_USER_POSTS', () => {
    const newState = userPostsReducer(undefined, {
      type: types.CLEAR_USER_POSTS,
    });
    expect(newState).toEqual([]);
  });
});
