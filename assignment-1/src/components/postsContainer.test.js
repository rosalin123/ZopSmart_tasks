import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import PostsContainer from './postsContainer';
import { findbyTestAttr, checkProps } from '../util/test_util';

const mockStore = configureMockStore();
const store = mockStore({});

const setUp = (props) => {
  const component = shallow(
    <Provider store={store}>
      <PostsContainer {...props} />
    </Provider>
  );
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
      console.log('component', component);
      expect(component).toMatchSnapshot();
    });
  });
});
