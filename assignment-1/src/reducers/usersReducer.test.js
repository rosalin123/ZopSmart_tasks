import * as types from '../actions/types';
import usersReducer from './usersReducer';

describe('Users reducer', () => {
  it('should return default state', () => {
    const newState = usersReducer(undefined, {});
    expect(newState).toEqual({ items: [], item: [] });
  });
  it('should return new state if receiving type FETCH_USERS', () => {
    const users = [
      { id: 1, name: 'Rose' },
      { id: 2, name: 'Smita' },
    ];
    const newState = usersReducer(undefined, {
      type: types.FETCH_USERS,
      users,
    });
    expect(newState).toEqual({ items: users, item: [] });
  });

  it('should return new state if receiving type  GET_USER', () => {
    const user = { id: 1, name: 'rose' };
    const newState = usersReducer(undefined, {
      type: types.GET_USER,
      user,
    });
    expect(newState).toEqual({ items: [], item: [user] });
  });
});
