import React from 'react';
import { shallow } from 'enzyme';

import PostsContainer from './postsContainer';
import { checkProps, findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<PostsContainer {...props} />);
  return component;
};

describe('Posts container Component', () => {
  describe('Checking prop types', () => {
    it('should not return a warning', () => {
      const expectedProps = {
        posts: ['post1', 'post2'],
        users: ['user1', 'user2'],
      };

      const propsErr = checkProps(PostsContainer, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('with props', () => {
    let component;
    beforeEach(() => {
      const props = { posts: ['post1', 'post2'], users: ['user1', 'user2'] };
      component = setUp(props);
    });

    it('Posts Container should render without throwing an error', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render header', () => {
      let wrapper = findbyTestAttr(component, 'header');
      expect(wrapper.length).toBe(1);
    });

    it('should render posts', () => {
      let wrapper = findbyTestAttr(component, 'post');
      expect(wrapper.length).toBe(2);
    });
  });
});
