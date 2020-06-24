import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from './userDetails';
import { findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<UserDetails {...props} />);
  return component;
};

describe('UserDetails component', () => {
  let component;
  const props = {
    user: {
      name: 'Rojalin Mahalik',
      email: 'r@gmail.com',
      username: 'rose',
    },
  };
  beforeEach(() => {
    component = setUp(props);
  });

  it('should render without errors', () => {
    const wrapper = findbyTestAttr(component, 'userDetailsComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render name ', () => {
    const wrapper = findbyTestAttr(component, 'name');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toEqual(props.user.name);
  });

  it('should render username ', () => {
    const wrapper = findbyTestAttr(component, 'username');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toEqual(props.user.username);
  });

  it('should render email', () => {
    const wrapper = findbyTestAttr(component, 'email');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toEqual(props.user.email);
  });
});
