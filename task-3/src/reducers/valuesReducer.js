import { UPDATE_VALUES } from '../actions/actionConstants';

const initialState = { values: null, sumProduct: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VALUES:
      return {
        ...state,
        values: [...action.payload.values],
        sumProduct: [...action.payload.sumProduct],
      };

    default:
      return state;
  }
};
