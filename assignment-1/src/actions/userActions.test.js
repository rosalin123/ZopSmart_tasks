import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as userActions from './userActions';
import * as types from './actionConstants';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('post actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('fetching users', () => {
    it('should return user action for FETCH_USERS_REQUEST', () => {
      const expectedAction = {
        type: types.FETCH_USERS_REQUEST,
      };
      expect(userActions.fetchUsersRequest()).toEqual(expectedAction);
    });

    it('should return user action for FETCH_USERS_SUCCESS', () => {
      const expectedAction = {
        type: types.FETCH_USERS_SUCCESS,
        users: [
          { id: 1, name: 'Rose' },
          { id: 2, name: 'Smita' },
        ],
      };
      expect(
        userActions.fetchUsersSuccess([
          { id: 1, name: 'Rose' },
          { id: 2, name: 'Smita' },
        ])
      ).toEqual(expectedAction);
    });

    it('should return user action for FETCH_USERS_FAILURE', () => {
      const expectedAction = {
        type: types.FETCH_USERS_FAILURE,
        error: 'Something went wrong',
      };
      expect(userActions.fetchUsersFailure('Something went wrong')).toEqual(
        expectedAction
      );
    });

    it('creates FETCH_USERS_SUCCESS when fetching users has been done', () => {
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
        { type: types.FETCH_USERS_REQUEST },
        {
          type: types.FETCH_USERS_SUCCESS,
          users: {
            users: [
              { id: 1, name: 'rose' },
              { id: 2, name: 'smita' },
            ],
          },
        },
      ];
      const store = mockStore({ users: [] });

      return store.dispatch(userActions.fetchUsers()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('get an user by id', () => {
    it('should return user action for GET_USER_REQUEST', () => {
      const expectedAction = {
        type: types.GET_USER_REQUEST,
      };
      expect(userActions.getUserRequest()).toEqual(expectedAction);
    });

    it('should return user action for GET_USER_SUCCESS', () => {
      const expectedAction = {
        type: types.GET_USER_SUCCESS,
        user: { id: 1, name: 'Rose' },
      };
      expect(userActions.getUserSuccess({ id: 1, name: 'Rose' })).toEqual(
        expectedAction
      );
    });

    it('should return user action for GET_USER_FAILURE', () => {
      const expectedAction = {
        type: types.GET_USER_FAILURE,
        error: 'Something went wrong',
      };
      expect(userActions.getUserFailure('Something went wrong')).toEqual(
        expectedAction
      );
    });

    it('creates GET_USER_SUCCESS when fetching an user has been done', () => {
      fetchMock.getOnce('https://jsonplaceholder.typicode.com/users/1', {
        body: {
          user: { id: 1, name: 'rose' },
        },

        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.GET_USER_REQUEST },
        {
          type: types.GET_USER_SUCCESS,
          user: {
            user: { id: 1, name: 'rose' },
          },
        },
      ];
      const store = mockStore({ users: { items: [], item: [] } });

      return store.dispatch(userActions.getUser(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  it('returns user action for CLEAR_USER', () => {
    const expectedAction = { type: types.CLEAR_USER };
    expect(userActions.clearUserRequest()).toEqual(expectedAction);
  });
});
