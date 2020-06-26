import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Table, mapDispatchToProps } from './index';
import { findbyTestAttr } from '../../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<Table {...props} />);
  return component;
};

describe('TableContainer component', () => {
  let component;
  let props = {
    rows: 2,
    columns: 2,
    values: [
      [0, 0],
      [0, 0],
    ],
    sumProduct: [
      [0, 0],
      [0, 0],
    ],
    updateValues: jest.fn(),
  };

  beforeEach(() => {
    component = setUp(props);
  });

  it('Table should render without throwing any error', () => {
    expect(component).toMatchSnapshot();
  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).updateValues(props.values, props.sumProduct);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'UPDATE_VALUES',
      payload: { values: props.values, sumProduct: props.sumProduct },
    });
  });

  it('componentDidMount must call methods as expected', () => {
    const instance = component.instance();

    jest.spyOn(instance.props, 'updateValues');
    instance.componentDidMount();
    expect(instance.props.updateValues).toBeCalledTimes(1);
  });

  it('updateValues method must be called when an onchange event is triggered', () => {
    const instance = component.instance();
    const event = { target: { dataset: { row: 1, column: 1 } }, value: 2 };
    const { row, column } = event.target.dataset;
    let { values, sumProduct } = props;
    let prevValue = values[row][column];
    values[row][column] = Number(event.target.value);
    sumProduct[row][0] =
      sumProduct[row][0] - prevValue + Number(event.target.value);
    sumProduct[row][1] = values[row].reduce((product, value) => {
      product *= value;
      return product;
    }, 1);
    instance.handleChange(event);
    expect(instance.props.updateValues).toBeCalledWith(values, sumProduct);
  });

  it('should handle change on input', () => {
    const instance = component.instance();
    jest.spyOn(instance.props, 'updateValues');
    jest.spyOn(instance, 'handleChange');
    const wrapper = findbyTestAttr(component, 'input');
    const event = { target: { dataset: { row: 1, column: 1 } }, value: 2 };
    wrapper.at(0).simulate('change', event);
    wrapper.at(1);
    expect(instance.handleChange).toBeCalledTimes(1);
    expect(instance.props.updateValues).toBeCalled();
  });
});
