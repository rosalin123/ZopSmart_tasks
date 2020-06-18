import * as types from './types';
import * as userActions from './userActions';

describe('User actions', () => {
  it('should return user action for FETCH_USERS', () => {
    const expectedAction = {
      type: types.FETCH_USERS,
      users: [
        { id: 1, name: 'Rose' },
        { id: 2, name: 'Smita' },
      ],
    };
    expect(
      userActions.fetch_users([
        { id: 1, name: 'Rose' },
        { id: 2, name: 'Smita' },
      ])
    ).toEqual(expectedAction);
  });

  it('should return user action for GET_USER', () => {
    const expectedAction = {
      type: types.GET_USER,
      user: { id: 1, name: 'Rose' },
    };
    expect(userActions.get_user({ id: 1, name: 'Rose' })).toEqual(
      expectedAction
    );
  });
});
