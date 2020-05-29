import { FETCH_POSTS, GET_POST } from '../actions/types';

const initialState = { items: [], item: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, items: action.posts };
    case GET_POST:
      return { ...state, item: { ...action.post } };
    default:
      return state;
  }
};
