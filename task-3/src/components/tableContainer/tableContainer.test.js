import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TableContainer from './index';
import { findbyTestAttr } from '../../Utils/testUtil';

const setUp = () => {
  const component = shallow(<TableContainer />).dive();
  return component;
};

describe('TableContainer component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('TableContainer should render without throuwing any error', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render header', () => {
    let wrapper = findbyTestAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  });

  it('should render form', () => {
    let wrapper = findbyTestAttr(component, 'form');
    expect(wrapper.length).toBe(1);
  });

  it('should render input fields', () => {
    let wrapper = findbyTestAttr(component, 'input');
    expect(wrapper.length).toBe(2);
  });

  it('should render submit button', () => {
    let wrapper = findbyTestAttr(component, 'submit');
    expect(wrapper.length).toBe(1);
  });

  it('check submit', () => {
    const formEventMocked = { preventDefault: jest.fn() };

    findbyTestAttr(component, 'form').simulate('submit', formEventMocked);
    expect(formEventMocked.preventDefault).toBeCalledTimes(1);
    expect(component.state('showTable')).toBe(true);
  });

  it('should call onChange prop', () => {
    const event = {
      target: { value: 2 },
    };
    findbyTestAttr(component, 'columnInput').simulate('change', event);
    findbyTestAttr(component, 'rowsInput').simulate('change', event);
    expect(component.state('columns')).toBe(2);
    expect(component.state('rows')).toBe(2);
  });
});
