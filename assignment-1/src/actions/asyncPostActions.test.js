import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions/postActions';
import * as types from '../actions/types';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async post actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_POSTS when fetching posts has been done', () => {
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
      {
        type: types.FETCH_POSTS,
        posts: {
          posts: [
            { id: 1, title: 'post 1' },
            { id: 2, title: 'post 2' },
          ],
        },
      },
    ];
    const store = mockStore({ Posts: { items: [], item: [] } });
    console.log(`expected`, expectedActions);
    return store.dispatch(actions.fetchPosts()).then(() => {
      console.log(`received`, store.getActions());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_POST when fetching a post has been done', () => {
    fetchMock.getOnce(`https://jsonplaceholder.typicode.com/posts/1`, {
      body: {
        post: { id: 1, title: 'post 1' },
      },

      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: types.GET_POST,
        post: {
          post: { id: 1, title: 'post 1' },
        },
      },
    ];
    const store = mockStore({ Posts: { items: [], item: [] } });
    console.log(`expected`, expectedActions);
    return store.dispatch(actions.getPost(1)).then(() => {
      console.log(`received`, store.getActions());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_COMMENTS when fetching comments for a post has been done', () => {
    fetchMock.getOnce(`https://jsonplaceholder.typicode.com/posts/1/comments`, {
      body: {
        comments: [
          { id: 1, body: 'comment 1' },
          { id: 2, body: 'comment 2' },
        ],
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: types.FETCH_COMMENTS,
        comments: {
          comments: [
            { id: 1, body: 'comment 1' },
            { id: 2, body: 'comment 2' },
          ],
        },
      },
    ];
    const store = mockStore({ Comments: [] });
    console.log(`expected`, expectedActions);
    return store.dispatch(actions.fetchPostComments(1)).then(() => {
      console.log(`received`, store.getActions());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_USERS_POSTS when fetching a posts of an user has been done', () => {
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
      {
        type: types.FETCH_USER_POSTS,
        posts: {
          posts: [
            { id: 1, title: 'post 1' },
            { id: 2, title: 'post 2' },
          ],
        },
      },
    ];
    const store = mockStore({ UserPosts: [] });
    console.log(`expected`, expectedActions);
    return store.dispatch(actions.fetchUserPosts(1)).then(() => {
      console.log(`received`, store.getActions());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
