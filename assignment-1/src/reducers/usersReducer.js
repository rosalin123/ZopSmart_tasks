import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actions/actionConstants';

const initialState = { loading: false, users: [], error: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action.users, error: '' };
    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.error };
    default:
      return state;
  }
};
