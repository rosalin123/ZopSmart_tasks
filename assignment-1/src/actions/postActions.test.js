import * as types from './types';
import * as postActions from './postActions';

describe('Post actions', () => {
  it('should return post action for FETCH_POSTS', () => {
    const expectedAction = {
      type: types.FETCH_POSTS,
      posts: [{ title: 'title 1' }, { title: 'title 2' }, { title: 'title 3' }],
    };

    expect(
      postActions.fetch_posts([
        { title: 'title 1' },
        { title: 'title 2' },
        { title: 'title 3' },
      ])
    ).toEqual(expectedAction);
  });

  it('should return post action for GET_POST', () => {
    const expectedAction = {
      type: types.GET_POST,
      post: { id: 1, title: 'hey' },
    };

    expect(postActions.get_post({ id: 1, title: 'hey' })).toEqual(
      expectedAction
    );
  });

  it('should return post action for FETCH_COMMENTS', () => {
    const expectedAction = {
      type: types.FETCH_COMMENTS,
      comments: [
        { id: 1, body: 'nice' },
        { id: 2, body: 'bravo!' },
      ],
    };

    expect(
      postActions.fetch_post_comments([
        { id: 1, body: 'nice' },
        { id: 2, body: 'bravo!' },
      ])
    ).toEqual(expectedAction);
  });

  it('should return post action for FETCH_USER_POSTS', () => {
    const expectedAction = {
      type: types.FETCH_USER_POSTS,
      posts: [
        { id: 1, title: 'title 1' },
        { id: 2, title: 'title 2' },
      ],
    };

    expect(
      postActions.fetch_user_posts([
        { id: 1, title: 'title 1' },
        { id: 2, title: 'title 2' },
      ])
    ).toEqual(expectedAction);
  });

  it('should return post action for CLEAR_POST', () => {
    const expectedAction = {
      type: types.CLEAR_POST,
    };

    expect(postActions.clear_post()).toEqual(expectedAction);
  });

  it('should return post action for CLEAR_USER_POSTS', () => {
    const expectedAction = {
      type: types.CLEAR_USER_POSTS,
    };

    expect(postActions.clear_user_posts()).toEqual(expectedAction);
  });

  it('should return post action for  CLEAR_COMMENTS', () => {
    const expectedAction = {
      type: types.CLEAR_COMMENTS,
    };

    expect(postActions.clear_comments()).toEqual(expectedAction);
  });
});
