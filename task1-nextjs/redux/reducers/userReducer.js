import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  CLEAR_USER,
} from '../actions/actionConstants';

const initialState = { loading: false, user: {}, error: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, user: action.user, error: '' };
    case GET_USER_FAILURE:
      return { loading: false, user: {}, error: action.error };
    case CLEAR_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};
