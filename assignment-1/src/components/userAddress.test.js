import React from 'react';
import { shallow } from 'enzyme';
import UserAddress from './userAddress';
import { findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<UserAddress {...props} />);
  return component;
};

describe('User Address Component', () => {
  let component;
  beforeEach(() => {
    const props = {
      user: {
        address: { street: 'abc', city: 'def', suite: 'ghi', zipcode: '123' },
      },
    };
    component = setUp(props);
  });

  it('should render without errors', () => {
    const wrapper = findbyTestAttr(component, 'userAddressComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render addressHeader', () => {
    const wrapper = findbyTestAttr(component, 'addressHeader');
    expect(wrapper.length).toBe(1);
  });

  it('should render addressDetails', () => {
    const wrapper = findbyTestAttr(component, 'addressDetails');

    expect(wrapper.length).toBe(1);
  });
});
