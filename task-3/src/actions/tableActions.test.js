import * as actionTypes from './actionConstants';
import * as tableActions from './tableActions';

describe('table actions', () => {
  it('returns action for UPDATE_VALUES', () => {
    const values = [[0, 0, [0, 0]]];
    const sumProduct = [
      [0, 0],
      [0, 0],
    ];
    const expectedAction = {
      type: actionTypes.UPDATE_VALUES,
      payload: { values, sumProduct },
    };

    expect(tableActions.updateValues(values, sumProduct)).toEqual(
      expectedAction
    );
  });
});
