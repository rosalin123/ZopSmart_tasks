import { FETCH_ALBUM_PHOTOS, CLEAR_PHOTOS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_PHOTOS:
      return [...action.photos];
    case CLEAR_PHOTOS:
      return [];
    default:
      return state;
  }
};
