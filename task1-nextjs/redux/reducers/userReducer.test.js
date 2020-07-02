import * as types from '../actions/actionConstants';
import UserReducer from './userReducer';

describe('User reducer', () => {
  const initialState = { loading: false, user: {}, error: '' };

  it('should return default state', () => {
    const newState = UserReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('should return new state  if receiving type GET_USER_REQUEST ', () => {
    const expectedState = { ...initialState, loading: true };
    const newState = UserReducer(initialState, {
      type: types.GET_USER_REQUEST,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state  if receiving type GET_USER_SUCCESS ', () => {
    const user = { id: 1, name: 'Rosy' };

    const expectedState = { loading: false, user, error: '' };
    const newState = UserReducer(initialState, {
      type: types.GET_USER_SUCCESS,
      user,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state  if receiving type GET_USER_FAILURE', () => {
    const error = 'Something went wrong';

    const expectedState = { loading: false, user: {}, error };
    const newState = UserReducer(initialState, {
      type: types.GET_USER_FAILURE,
      error,
    });

    expect(newState).toEqual(expectedState);
  });

  it('should return new state if receiving type CLEAR_USER ', () => {
    const expectedState = { ...initialState, user: {} };
    const newState = UserReducer(initialState, {
      type: types.CLEAR_USER,
    });
    expect(newState).toEqual(expectedState);
  });
});
