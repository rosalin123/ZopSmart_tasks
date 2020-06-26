import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Posts from './Posts';
import { findfindbyTestAttr, checkProps } from '../Utils/testUtil';
import { indigo } from '@material-ui/core/colors';
import { middleware } from '../store';

const mockStore = configureMockStore(middleware);

const setUp = (initialState) => {
  const store = mockStore(initialState);
  const component = render(
    <Provider store={store}>
      <Posts />
    </Provider>
  );

  return component;
};

describe('Posts Component', () => {
  let component;

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
    const initialState = {
      Posts: { loading: false, error: '', posts: [] },
      Users: { loading: false, error: '', users: [] },
    };
    component = setUp(initialState);
    expect(component).toMatchSnapshot();
  });
});
