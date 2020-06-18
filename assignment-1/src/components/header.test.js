import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Header from './header';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
  <Provider store={store}>
    <Header />
  </Provider>
);

describe('Header Component', () => {
  it('Header should render without throwing an error', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
