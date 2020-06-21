import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Post from './Post';
import sinon from 'sinon';
import { checkProps } from '../Utils/testUtil';

const mockStore = configureMockStore();
const store = mockStore({});

const setUp = () => {
  const component = shallow(
    <Provider store={store}>
      <Post />
    </Provider>
  );

  return component;
};

describe('Post Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Post should render without throwing an error', () => {
    expect(component).toMatchSnapshot();
  });
});
