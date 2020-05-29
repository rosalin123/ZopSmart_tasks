import { FETCH_USERS, GET_USER } from '../actions/types';

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, items: action.users };
    case GET_USER:
      return { ...state, item: [action.user] };
    default:
      return state;
  }
};
