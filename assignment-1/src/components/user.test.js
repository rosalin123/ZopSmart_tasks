import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import User from './User';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
  <Provider store={store}>
    <User />
  </Provider>
);

describe('User Component', () => {
  it('User should render without throwing an error', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
