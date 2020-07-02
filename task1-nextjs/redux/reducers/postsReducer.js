import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/actionConstants';

const initialState = { loading: false, posts: [], error: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_POSTS_SUCCESS:
      return { loading: false, posts: action.posts, error: '' };

    case FETCH_POSTS_FAILURE:
      return { loading: false, posts: [], error: action.error };

    default:
      return state;
  }
};
