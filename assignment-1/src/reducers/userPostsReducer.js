import { FETCH_USER_POSTS, CLEAR_USER_POSTS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return [...action.posts];
    case CLEAR_USER_POSTS:
      return [];
    default:
      return state;
  }
};
