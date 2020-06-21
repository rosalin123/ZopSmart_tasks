import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Posts from './Posts';
import { findfindbyTestAttr, checkProps } from '../Utils/testUtil';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
  <Provider store={store}>
    <Posts />
  </Provider>
);

describe('Posts Component', () => {
  describe('Checking prop types', () => {
    it('should not return a warning', () => {
      const expectedProps = {
        posts: ['post1', 'post2'],
        users: ['user1', 'user2'],
      };

      const propsErr = checkProps(Posts, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  it('Posts should render without throwing an error', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
