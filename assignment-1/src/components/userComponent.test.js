import React from 'react';
import { shallow } from 'enzyme';
import UserComponent from './UserComponent';
import { findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<UserComponent {...props} />);
  return component;
};

describe('UserComponent component', () => {
  let component;
  beforeEach(() => {
    const props = {
      username: 'Rose',
      email: 'rose@gmail.com',
    };
    component = setUp(props);
  });

  it('should render without errors', () => {
    const wrapper = findbyTestAttr(component, 'userComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render avatar', () => {
    const wrapper = findbyTestAttr(component, 'avatar');
    expect(wrapper.length).toBe(1);
  });

  it('should render userInfo', () => {
    const wrapper = findbyTestAttr(component, 'userInfo');

    expect(wrapper.length).toBe(1);
  });
});
