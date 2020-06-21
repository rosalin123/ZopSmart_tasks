import * as types from '../actions/actionConstants';
import usersReducer from './usersReducer';

describe('Users reducer', () => {
  const initialState = { loading: false, users: [], error: '' };

  it('should return default state', () => {
    const newState = usersReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('should return new state if receiving type FETCH_USERS_REQUEST', () => {
    const expectedState = { ...initialState, loading: true };
    const newState = usersReducer(initialState, {
      type: types.FETCH_USERS_REQUEST,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state if receiving type FETCH_USERS_SUCCESS', () => {
    const users = [
      { id: 1, name: 'Rose' },
      { id: 2, name: 'Smita' },
    ];

    const expectedState = { loading: false, users, error: '' };
    const newState = usersReducer(initialState, {
      type: types.FETCH_USERS_SUCCESS,
      users,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state if receiving type FETCH_USERS_FAILURE', () => {
    const error = 'Something went wrong';

    const expectedState = { loading: false, users: [], error };
    const newState = usersReducer(initialState, {
      type: types.FETCH_USERS_FAILURE,
      error,
    });
    expect(newState).toEqual(expectedState);
  });
});
