import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import About from './about';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
  <Provider store={store}>
    <About />
  </Provider>
);

describe('About Component', () => {
  it('About should render without throwing an error', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
