import React from 'react';
import { shallow } from 'enzyme';
import Comment from './comment';
import { findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<Comment {...props} />);
  return component;
};

describe('Comment Component', () => {
  let component;
  beforeEach(() => {
    const props = { name: 'Rosy', email: 'rose@gmail.com', body: 'nice' };
    component = setUp(props);
  });

  it('should render without errors', () => {
    const wrapper = findbyTestAttr(component, 'comment');
    expect(wrapper.length).toBe(1);
  });

  it('should render avatar', () => {
    const wrapper = findbyTestAttr(component, 'avatar');
    expect(wrapper.length).toBe(1);
  });

  it('should render name', () => {
    const wrapper = findbyTestAttr(component, 'name');

    expect(wrapper.length).toBe(1);
  });

  it('should render body', () => {
    const wrapper = findbyTestAttr(component, 'body');
    expect(wrapper.length).toBe(1);
  });
});
