import { FETCH_ALBUMS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return [...action.albums];
    default:
      return state;
  }
};
