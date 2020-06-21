import React from 'react';
import { shallow } from 'enzyme';
import Loader from './loader';
import { findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<Loader />);
  return component;
};

describe('Error Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findbyTestAttr(component, 'loader');
    expect(wrapper.length).toBe(1);
  });

  it('should render spinner', () => {
    const wrapper = findbyTestAttr(component, 'spinner');
    expect(wrapper.length).toBe(1);
  });

  it('should render loadingMessage', () => {
    const wrapper = findbyTestAttr(component, 'loadingMessage');

    expect(wrapper.length).toBe(1);
  });
});
