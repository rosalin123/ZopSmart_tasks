import { FETCH_USER_POSTS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return [...action.posts];

    default:
      return state;
  }
};
