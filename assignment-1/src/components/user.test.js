import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import User, { User as UserComponent } from './User';
import { BrowserRouter as Router } from 'react-router-dom';
import { findbyTestAttr } from '../Utils/testUtil';
import { mapDispatchToProps } from './User';
import { middleware } from '../store';

const mockStore = configureMockStore(middleware);

const setUp = (initialState) => {
  const store = mockStore(initialState);
  const component = render(
    <Router>
      <Provider store={store}>
        <User />
      </Provider>
    </Router>
  );
  return component;
};

describe('User Component', () => {
  let component;

  describe('renders user component when when loading is false and no errors have occured  ', () => {
    const initialState = {
      User: {
        loading: false,
        user: { name: 'ros', username: 'ros', email: 'r@gmail.com' },
        error: '',
      },
      UserPosts: {
        loading: false,
        posts: [{ title: 'title 1', body: 'post 1' }],
        error: '',
      },
    };

    beforeEach(() => {
      component = setUp(initialState);
    });

    it('should render user component without any error', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render username', () => {
      const wrapper = findbyTestAttr(component, 'username');
      expect(wrapper.length).toBe(1);
      expect(wrapper.text()).toEqual('ros');
    });

    it('should render navbar', () => {
      expect(findbyTestAttr(component, 'navbar').length).toBe(1);
    });

    it('should render avatar', () => {
      expect(findbyTestAttr(component, 'avatar').length).toBe(1);
    });

    it('should render email', () => {
      const wrapper = findbyTestAttr(component, 'useremail');
      expect(wrapper.length).toBe(1);
      expect(wrapper.text()).toEqual('r@gmail.com');
    });
  });

  describe('component did mount and handleClick method', () => {
    const props = {
      match: { params: { id: 1 } },
      getUser: jest.fn(),
      fetchUserPosts: jest.fn(),
      user: { name: 'ros', username: 'ros', email: 'r@gmail.com' },
      userLoading: false,
      userErr: '',
      posts: [{ title: 'title 1', body: 'post 1' }],
      postsLoading: false,
      postsErr: '',
      classes: {
        root: {},
        square: {},
        lineStyles: {},
        avatar: {},
        userNameStyles: {},
        postStyles: {},
        aboutStyles: {},
        typographyStyles: {},
      },
    };

    beforeEach(() => {
      component = shallow(<UserComponent {...props} />);
    });

    it('handleClick should work as expected', () => {
      let postButton = findbyTestAttr(component, 'postsButton');
      let aboutButton = findbyTestAttr(component, 'aboutUserButton');
      expect(postButton.length).toBe(1);
      expect(aboutButton.length).toBe(1);
      postButton.simulate('click');
      expect(component.state('showPosts')).toBe(true);
      expect(component.state('showAbout')).toBe(false);
      aboutButton.simulate('click');
      expect(component.state('showPosts')).toBe(false);
      expect(component.state('showAbout')).toBe(true);
    });

    it('componentDidMount should call the methods as expected', () => {
      const instance = component.instance();

      jest.spyOn(instance.props, 'getUser');
      jest.spyOn(instance.props, 'fetchUserPosts');
      instance.componentDidMount();
      expect(instance.props.getUser).toHaveBeenCalledTimes(1);
      expect(instance.props.fetchUserPosts).toHaveBeenCalledTimes(1);
    });
  });

  it(' should render loader when loading is true', () => {
    const initialState = {
      User: {
        loading: true,
        error: '',
      },
      UserPosts: {
        loading: false,
        error: '',
      },
    };
    component = setUp(initialState);
    expect(findbyTestAttr(component, 'loader').length).toBe(1);
  });

  it('should render ErrorComponent when error occurs', () => {
    const initialState = {
      User: {
        loading: false,
        error: 'Something wrong',
      },
      UserPosts: {
        loading: false,
        error: '',
      },
    };
    component = setUp(initialState);

    let wrapper = findbyTestAttr(component, 'errorComponent');
    expect(wrapper.length).toBe(1);
    expect(findbyTestAttr(component, 'loader').length).toBe(0);
  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getUser(1);
    mapDispatchToProps(dispatch).fetchUserPosts(1);
    expect(typeof dispatch.mock.calls[0][0]).toBe('function');
    expect(typeof dispatch.mock.calls[1][0]).toBe('function');
  });
});
