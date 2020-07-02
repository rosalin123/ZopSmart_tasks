import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  CLEAR_COMMENTS,
} from '../actions/actionConstants';

const initialState = { loading: false, comments: [], error: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_COMMENTS_SUCCESS:
      return { loading: false, comments: action.comments, error: '' };

    case FETCH_COMMENTS_FAILURE:
      return { loading: false, comments: [], error: action.error };

    case CLEAR_COMMENTS:
      return { ...state, comments: [] };

    default:
      return state;
  }
};
