import React from 'react';
import { shallow } from 'enzyme';
import UserWorkInfo from './userWorkInfo';
import { findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<UserWorkInfo {...props} />);
  return component;
};

describe('UserDetails component', () => {
  let component;
  beforeEach(() => {
    const props = {
      user: {
        company: { name: 'abc' },
      },
    };
    component = setUp(props);
  });

  it('should render without errors', () => {
    const wrapper = findbyTestAttr(component, 'userWorkInfoComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render header ', () => {
    const wrapper = findbyTestAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  });

  it('should render workIcon', () => {
    const wrapper = findbyTestAttr(component, 'workIcon');

    expect(wrapper.length).toBe(1);
  });

  it('should render companyDesc', () => {
    const wrapper = findbyTestAttr(component, 'companyDesc');

    expect(wrapper.length).toBe(1);
  });
});
