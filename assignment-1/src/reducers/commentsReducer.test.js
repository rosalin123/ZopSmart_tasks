import * as types from '../actions/actionConstants';
import commentsReducer from './commentsReducer';

describe('Comments reducer', () => {
  const initialState = { loading: false, comments: [], error: '' };

  it('should return default state', () => {
    const newState = commentsReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('should return new state if receiving type FETCH_COMMENTS_REQUEST', () => {
    const expectedState = { loading: true, comments: [], error: '' };

    const newState = commentsReducer(initialState, {
      type: types.FETCH_COMMENTS_REQUEST,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state if receiving type FETCH_COMMENTS_SUCCESS', () => {
    const comments = [
      { id: 1, body: 'nice' },
      { id: 2, body: 'bravo' },
    ];
    const expectedState = { loading: false, comments, error: '' };
    const newState = commentsReducer(initialState, {
      type: types.FETCH_COMMENTS_SUCCESS,
      comments,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state if receiving type FETCH_COMMENTS_FAILURE', () => {
    const error = 'Something went wrong';

    const expectedState = { loading: false, comments: [], error };
    const newState = commentsReducer(initialState, {
      type: types.FETCH_COMMENTS_FAILURE,
      error,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state if receiving type  CLEAR_COMMENTS', () => {
    const expectedState = { ...initialState, comments: [] };
    const newState = commentsReducer(initialState, {
      type: types.CLEAR_COMMENTS,
    });
    expect(newState).toEqual(expectedState);
  });
});
