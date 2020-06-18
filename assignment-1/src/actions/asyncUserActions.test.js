import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './userActions';
import * as types from './types';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async post actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_USERS when fetching users has been done', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
      body: {
        users: [
          { id: 1, name: 'rose' },
          { id: 2, name: 'smita' },
        ],
      },

      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: types.FETCH_USERS,
        users: {
          users: [
            { id: 1, name: 'rose' },
            { id: 2, name: 'smita' },
          ],
        },
      },
    ];
    const store = mockStore({ users: [] });
    console.log(`expected`, expectedActions);
    return store.dispatch(actions.fetchUsers()).then(() => {
      console.log(`received`, store.getActions());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_USER when fetching an user has been done', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/users/1', {
      body: {
        user: { id: 1, name: 'rose' },
      },

      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: types.GET_USER,
        user: {
          user: { id: 1, name: 'rose' },
        },
      },
    ];
    const store = mockStore({ users: { items: [], item: [] } });
    console.log(`expected`, expectedActions);
    return store.dispatch(actions.getUser(1)).then(() => {
      console.log(`received`, store.getActions());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
