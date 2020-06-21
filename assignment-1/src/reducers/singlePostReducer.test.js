import * as types from '../actions/actionConstants';
import SinglePostReducer from './singlePostReducer';

describe('Single post reducer', () => {
  const initialState = { loading: false, post: {}, error: '' };

  it('should return default state', () => {
    const newState = SinglePostReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('should return new state  if receiving type GET_POST_REQUEST ', () => {
    const expectedState = { ...initialState, loading: true };
    const newState = SinglePostReducer(initialState, {
      type: types.GET_POST_REQUEST,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state  if receiving type GET_POST_SUCCESS ', () => {
    const post = { title: 'title 1' };

    const expectedState = { loading: false, post, error: '' };
    const newState = SinglePostReducer(initialState, {
      type: types.GET_POST_SUCCESS,
      post,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state  if receiving type GET_POST_FAILURE', () => {
    const error = 'Something went wrong';

    const expectedState = { loading: false, post: {}, error };
    const newState = SinglePostReducer(initialState, {
      type: types.GET_POST_FAILURE,
      error,
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return new state  if receiving type CLEAR_POST ', () => {
    const expectedState = { ...initialState, post: {} };
    const newState = SinglePostReducer(initialState, {
      type: types.CLEAR_POST,
    });
    expect(newState).toEqual(expectedState);
  });
});
