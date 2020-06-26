import * as actionTypes from './actionConstants';

export const updateValues = (values, sumProduct) => ({
  type: actionTypes.UPDATE_VALUES,
  payload: { values, sumProduct },
});
