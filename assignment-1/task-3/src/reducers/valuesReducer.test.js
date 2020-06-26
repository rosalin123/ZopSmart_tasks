import * as actiontypes from '../actions/actionConstants';
import valuesReducer from './valuesReducer';

const initialState = { values: null, sumProduct: null };

describe('Values reducer', () => {
  it('should return default state', () => {
    const newState = valuesReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('should return new state  if receiving type UPDATE_VALUES', () => {
    const values = [
      [0, 0],
      [0, 0],
    ];
    const sumProduct = [
      [0, 0],
      [0, 0],
    ];
    const expectedState = { values, sumProduct };
    const newState = valuesReducer(initialState, {
      type: actiontypes.UPDATE_VALUES,
      payload: { values, sumProduct },
    });
    expect(newState).toEqual(expectedState);
  });
});
