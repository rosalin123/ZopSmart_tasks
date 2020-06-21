import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as postActions from '../actions/postActions';
import * as types from '../actions/actionConstants';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('post actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  //fetching posts in bulk
  describe('fetching posts', () => {
    it('should return post action for FETCH_POSTS_REQUEST', () => {
      const expectedAction = {
        type: types.FETCH_POSTS_REQUEST,
      };

      expect(postActions.fetchPostsRequest()).toEqual(expectedAction);
    });

    it('should return post action for FETCH_POSTS_SUCCESS', () => {
      const expectedAction = {
        type: types.FETCH_POSTS_SUCCESS,
        posts: [
          { title: 'title 1' },
          { title: 'title 2' },
          { title: 'title 3' },
        ],
      };

      expect(
        postActions.fetchPostsSuccess([
          { title: 'title 1' },
          { title: 'title 2' },
          { title: 'title 3' },
        ])
      ).toEqual(expectedAction);
    });

    it('should return post action for FETCH_POSTS_FAILURE', () => {
      const expectedAction = {
        type: types.FETCH_POSTS_FAILURE,
        error: "Something's not right",
      };

      expect(postActions.fetchPostsFailure("Something's not right")).toEqual(
        expectedAction
      );
    });

    it('creates FETCH_POSTS_SUCCESS when fetching posts has been done', () => {
      fetchMock.getOnce('https://jsonplaceholder.typicode.com/posts', {
        body: {
          posts: [
            { id: 1, title: 'post 1' },
            { id: 2, title: 'post 2' },
          ],
        },

        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.FETCH_POSTS_REQUEST },
        {
          type: types.FETCH_POSTS_SUCCESS,
          posts: {
            posts: [
              { id: 1, title: 'post 1' },
              { id: 2, title: 'post 2' },
            ],
          },
        },
      ];
      const store = mockStore({ Posts: [] });

      return store
        .dispatch(
          postActions.fetchPosts([
            { id: 1, title: 'post 1' },
            { id: 2, title: 'post 2' },
          ])
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  //fetching a single post
  describe('fetching a post by id', () => {
    it('should return post action for GET_POST_REQUEST', () => {
      const expectedAction = {
        type: types.GET_POST_REQUEST,
      };

      expect(postActions.getPostRequest()).toEqual(expectedAction);
    });

    it('should return post action for GET_POST_SUCCESS', () => {
      const expectedAction = {
        type: types.GET_POST_SUCCESS,
        post: { id: 1, title: 'hey' },
      };

      expect(postActions.getPostSuccess({ id: 1, title: 'hey' })).toEqual(
        expectedAction
      );
    });

    it('should return post action for GET_POST_FAILURE', () => {
      const expectedAction = {
        type: types.GET_POST_FAILURE,
        error: 'Something went wrong',
      };

      expect(postActions.getPostFailure('Something went wrong')).toEqual(
        expectedAction
      );
    });

    it('creates GET_POST_SUCCESS when fetching a post has been done', () => {
      fetchMock.getOnce(`https://jsonplaceholder.typicode.com/posts/1`, {
        body: {
          post: { id: 1, title: 'post 1' },
        },

        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.GET_POST_REQUEST },
        {
          type: types.GET_POST_SUCCESS,
          post: {
            post: { id: 1, title: 'post 1' },
          },
        },
      ];
      const store = mockStore({ Post: {} });

      return store.dispatch(postActions.getPost(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  //fetching all the comments on a particular post

  describe('fetching comments', () => {
    it('should return post action for FETCH_COMMENTS_REQUEST', () => {
      const expectedAction = {
        type: types.FETCH_COMMENTS_REQUEST,
      };

      expect(postActions.fetchCommentsRequest()).toEqual(expectedAction);
    });

    it('should return post action for FETCH_COMMENTS_SUCCESS', () => {
      const expectedAction = {
        type: types.FETCH_COMMENTS_SUCCESS,
        comments: [
          { id: 1, body: 'nice' },
          { id: 2, body: 'bravo!' },
        ],
      };

      expect(
        postActions.fetchCommentsSuccess([
          { id: 1, body: 'nice' },
          { id: 2, body: 'bravo!' },
        ])
      ).toEqual(expectedAction);
    });

    it('should return post action for FETCH_COMMENTS_FAILURE', () => {
      const expectedAction = {
        type: types.FETCH_COMMENTS_FAILURE,
        error: 'Something went wrong',
      };

      expect(postActions.fetchCommentsFailure('Something went wrong')).toEqual(
        expectedAction
      );
    });

    it('creates FETCH_COMMENTS_SUCCESS when fetching comments for a post has been done', () => {
      fetchMock.getOnce(
        `https://jsonplaceholder.typicode.com/posts/1/comments`,
        {
          body: {
            comments: [
              { id: 1, body: 'comment 1' },
              { id: 2, body: 'comment 2' },
            ],
          },
          headers: { 'content-type': 'application/json' },
        }
      );

      const expectedActions = [
        { type: types.FETCH_COMMENTS_REQUEST },
        {
          type: types.FETCH_COMMENTS_SUCCESS,
          comments: {
            comments: [
              { id: 1, body: 'comment 1' },
              { id: 2, body: 'comment 2' },
            ],
          },
        },
      ];
      const store = mockStore({ Comments: [] });

      return store.dispatch(postActions.fetchPostComments(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  //fetching all posts of a user
  describe('fetching all posts of a particular user', () => {
    it('should return post action for FETCH_USER_POSTS_REQUEST', () => {
      const expectedAction = {
        type: types.FETCH_USER_POSTS_REQUEST,
      };

      expect(postActions.fetchUserPostsRequest()).toEqual(expectedAction);
    });

    it('should return post action for FETCH_USER_POSTS_SUCCESS', () => {
      const expectedAction = {
        type: types.FETCH_USER_POSTS_SUCCESS,
        posts: [
          { id: 1, title: 'title 1' },
          { id: 2, title: 'title 2' },
        ],
      };

      expect(
        postActions.fetchUserPostsSuccess([
          { id: 1, title: 'title 1' },
          { id: 2, title: 'title 2' },
        ])
      ).toEqual(expectedAction);
    });

    it('should return post action for FETCH_USER_POSTS_FAILURE', () => {
      const expectedAction = {
        type: types.FETCH_USER_POSTS_FAILURE,
        error: 'Something went wrong',
      };

      expect(postActions.fetchUserPostsFailure('Something went wrong')).toEqual(
        expectedAction
      );
    });

    it('creates FETCH_USERS_POSTS_SUCCESS when fetching a posts of an user has been done', () => {
      fetchMock.getOnce(`https://jsonplaceholder.typicode.com/posts?userId=1`, {
        body: {
          posts: [
            { id: 1, title: 'post 1' },
            { id: 2, title: 'post 2' },
          ],
        },
        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.FETCH_USER_POSTS_REQUEST },
        {
          type: types.FETCH_USER_POSTS_SUCCESS,
          posts: {
            posts: [
              { id: 1, title: 'post 1' },
              { id: 2, title: 'post 2' },
            ],
          },
        },
      ];
      const store = mockStore({ UserPosts: [] });

      return store.dispatch(postActions.fetchUserPosts(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  it('should return post action for CLEAR_POST', () => {
    const expectedAction = {
      type: types.CLEAR_POST,
    };

    expect(postActions.clearPostRequest()).toEqual(expectedAction);
  });

  it('should return post action for CLEAR_USER_POSTS', () => {
    const expectedAction = {
      type: types.CLEAR_USER_POSTS,
    };

    expect(postActions.clearUserPostsRequest()).toEqual(expectedAction);
  });

  it('should return post action for CLEAR_COMMENTS', () => {
    const expectedAction = {
      type: types.CLEAR_COMMENTS,
    };

    expect(postActions.clearCommentsRequest()).toEqual(expectedAction);
  });
});
