import { FETCH_COMMENTS, CLEAR_COMMENTS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return [...action.comments];

    case CLEAR_COMMENTS:
      return [];

    default:
      return state;
  }
};
