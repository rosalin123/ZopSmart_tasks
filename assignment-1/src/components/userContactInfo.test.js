import React from 'react';
import { shallow } from 'enzyme';
import UserContactInfo from './UserContactInfo';
import { findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<UserContactInfo {...props} />);
  return component;
};

describe('UserComponent component', () => {
  let component;
  beforeEach(() => {
    const props = {
      user: {
        phone: 124567,
        email: 'r@gmail.com',
        website: 'xyz.com',
      },
    };
    component = setUp(props);
  });

  it('should render without errors', () => {
    const wrapper = findbyTestAttr(component, 'userContactInfoComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render phone ', () => {
    const wrapper = findbyTestAttr(component, 'phone');
    expect(wrapper.length).toBe(1);
  });

  it('should render website', () => {
    const wrapper = findbyTestAttr(component, 'website');

    expect(wrapper.length).toBe(1);
  });
});
