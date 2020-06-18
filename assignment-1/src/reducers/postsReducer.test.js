import * as types from '../actions/types';
import PostsReducer from './postsReducer';

describe('Posts Reducer', () => {
  it('should return default state', () => {
    const newState = PostsReducer(undefined, {});
    expect(newState).toEqual({ item: {}, items: [] });
  });

  it('should return new  if receiving type FETCH_POSTS ', () => {
    const posts = [
      { title: 'title 1' },
      { title: 'title 2' },
      { title: 'title 3' },
    ];

    const newState = PostsReducer(undefined, {
      type: types.FETCH_POSTS,
      posts,
    });
    expect(newState).toEqual({ item: {}, items: posts });
  });

  it('should return new  if receiving type GET_POST ', () => {
    const post = { title: 'title 1' };

    const newState = PostsReducer(undefined, {
      type: types.GET_POST,
      post,
    });
    expect(newState).toEqual({ item: post, items: [] });
  });

  it('should return new  if receiving type CLEAR_POST ', () => {
    const newState = PostsReducer(undefined, {
      type: types.CLEAR_POST,
    });
    expect(newState).toEqual({ item: {}, items: [] });
  });
});
