import * as types from '../actions/types';
import commentsReducer from './commentsReducer';

describe('Comments reducer', () => {
  it('should return default state', () => {
    const newState = commentsReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('should return new state if receiving type FETCH_COMMENTS', () => {
    const comments = [
      { id: 1, body: 'nice' },
      { id: 2, body: 'bravo' },
    ];
    const newState = commentsReducer(undefined, {
      type: types.FETCH_COMMENTS,
      comments,
    });
    expect(newState).toEqual(comments);
  });

  it('should return new state if receiving type  CLEAR_COMMENTS', () => {
    const newState = commentsReducer(undefined, {
      type: types.CLEAR_COMMENTS,
    });
    expect(newState).toEqual([]);
  });
});
