import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  CLEAR_USER_POSTS,
} from '../actions/actionConstants';

const initialState = { loading: false, posts: [], error: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.posts,
        error: '',
      };
    case FETCH_USER_POSTS_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.error,
      };
    case CLEAR_USER_POSTS:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
};
