import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  CLEAR_POST,
} from '../actions/actionConstants';

const initialState = { loading: false, post: {}, error: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return { ...state, loading: true };

    case GET_POST_SUCCESS:
      return { loading: false, post: action.post, error: '' };

    case GET_POST_FAILURE:
      return { loading: false, post: {}, error: action.error };

    case CLEAR_POST:
      return { ...state, post: {} };

    default:
      return state;
  }
};
