import React from 'react';
import { render, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Users, { Users as UsersComponent } from './Users';
import { mapDispatchToProps } from './Users';
import { findbyTestAttr } from '../Utils/testUtil';

const mockStore = configureMockStore();

const setUp = (initialState = {}) => {
  const store = mockStore(initialState);
  const component = render(
    <Router>
      <Provider store={store}>
        <Users />
      </Provider>
    </Router>
  );
  return component;
};

describe('Users Component', () => {
  let component;
  it('Users component should render without throwing an error', () => {
    const initialState = {
      Users: {
        loading: false,
        users: [{ username: 'ros', email: 'r@gmail.com', id: 1 }],
        error: '',
      },
    };
    component = setUp(initialState);
    expect(component).toMatchSnapshot();
  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchUsers();
    mapDispatchToProps(dispatch).clearUserPosts();
    expect(typeof dispatch.mock.calls[0][0]).toBe('function');
    expect(typeof dispatch.mock.calls[1][0]).toBe('function');
  });

  it('componentDidMount calls methods as expected', () => {
    const props = {
      loading: false,
      error: '',
      users: [],
      classes: { root: {}, userStyles: {} },
      fetchUsers: jest.fn(),
      clearUserPosts: jest.fn(),
    };

    component = shallow(<UsersComponent {...props} />);
    const instance = component.instance();

    jest.spyOn(instance.props, 'fetchUsers');
    jest.spyOn(instance.props, 'clearUserPosts');
    instance.componentDidMount();
    expect(instance.props.fetchUsers).toHaveBeenCalledTimes(1);
    expect(instance.props.clearUserPosts).toHaveBeenCalledTimes(1);
  });

  it('loader should render when loading is true', () => {
    const props = {
      loading: true,
      error: '',
      users: [],
      classes: { root: {}, userStyles: {} },
      fetchUsers: jest.fn(),
      clearUserPosts: jest.fn(),
    };

    component = shallow(<UsersComponent {...props} />);
    let wrapper = findbyTestAttr(component, 'loaderComponent');
    expect(wrapper.length).toBe(1);
  });

  it('ErrorComponent should be rendered when there is any error', () => {
    const props = {
      loading: false,
      error: 'Something wrong',
      users: [],
      classes: { root: {}, userStyles: {} },
      fetchUsers: jest.fn(),
      clearUserPosts: jest.fn(),
    };

    component = shallow(<UsersComponent {...props} />);
    expect(findbyTestAttr(component, 'errorComponent').length).toBe(1);
    expect(findbyTestAttr(component, 'loaderComponent').length).toBe(0);
  });
});
