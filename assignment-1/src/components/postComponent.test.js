import React from 'react';
import { shallow } from 'enzyme';
import PostComponent from './PostComponent';
import { findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<PostComponent {...props} />);
  return component;
};

describe('PostCard Component', () => {
  let component;
  beforeEach(() => {
    const props = {
      title: 'Testing in React',
      user: { id: 1, username: 'Rose' },
      body: 'Best testing practices in react',
      comments: [
        { name: 'rose', body: 'great', email: 'r@gmail.com' },
        { name: 'riya', body: 'wow', email: 'riya@gmail.com' },
      ],
    };
    component = setUp(props);
  });

  it('should render without errors', () => {
    const wrapper = findbyTestAttr(component, 'postDetails');
    expect(wrapper.length).toBe(1);
  });

  it('should render header', () => {
    const wrapper = findbyTestAttr(component, 'postHeader');
    expect(wrapper.length).toBe(1);
  });

  it('should render postBody', () => {
    const wrapper = findbyTestAttr(component, 'postBody');

    expect(wrapper.length).toBe(1);
  });

  it('should render link', () => {
    const wrapper = findbyTestAttr(component, 'postLink');
    expect(wrapper.length).toBe(1);
  });

  it('should render postTitle', () => {
    const wrapper = findbyTestAttr(component, 'postTitle');
    expect(wrapper.length).toBe(1);
  });

  it('should render postContent', () => {
    const wrapper = findbyTestAttr(component, 'postContent');
    expect(wrapper.length).toBe(1);
  });

  it('should render post comments', () => {
    const wrapper = findbyTestAttr(component, 'postComments');
    expect(wrapper.length).toBe(1);
  });
});
