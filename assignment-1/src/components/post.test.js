import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import { BrowserRouter as Router } from 'react-router-dom';
import Post, { Post as PostComponent } from './Post';
import { mapDispatchToProps } from './Post';
import { findbyTestAttr, findByAltText } from '../Utils/testUtil';
import { middleware } from '../store';

const mockStore = configureMockStore(middleware);

const setUp = (initialState = {}) => {
  const store = mockStore(initialState);
  const component = render(
    <Router>
      <Provider store={store}>
        <Post />
      </Provider>
    </Router>
  );
  return component;
};

describe('Post component', () => {
  let component;

  it('should render without throwing any error', () => {
    const initialState = {
      Post: {
        loading: false,
        post: { title: 'abc', body: 'def' },
        error: '',
      },
      User: {
        loading: false,
        user: { id: 1, name: 'rose', email: 'r@gmail.com' },
        error: '',
      },
      Comments: {
        loading: false,
        comments: [{ name: 'abc', body: 'abc', email: 'abc' }],
        error: '',
      },
    };
    component = setUp(initialState);

    expect(component).toMatchSnapshot();
    expect(findbyTestAttr(component, 'PostComponent').length).toBe(1);
    expect(findbyTestAttr(component, 'loader').length).toBe(0);
  });

  it('should render Loader when loading is true', () => {
    const initialState = {
      Post: { loading: true, error: '' },
      User: { loading: false, error: '' },
      Comments: { loading: false, error: '' },
    };
    component = setUp(initialState);
    expect(findbyTestAttr(component, 'loader').length).toBe(1);
  });

  it('should render ErrorComponent when error occurs', () => {
    const initialState = {
      Post: { loading: false, post: [], error: 'Something wrong' },
      User: { loading: false, user: {}, error: '' },
      Comments: { loading: false, comments: [], error: '' },
    };
    component = setUp(initialState);

    let wrapper = findbyTestAttr(component, 'errorComponent');
    expect(wrapper.length).toBe(1);
    expect(findbyTestAttr(component, 'loader').length).toBe(0);
  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getPost(1);
    mapDispatchToProps(dispatch).getUser(1);
    mapDispatchToProps(dispatch).fetchPostComments(1);
    expect(typeof dispatch.mock.calls[0][0]).toBe('function');
    expect(typeof dispatch.mock.calls[1][0]).toBe('function');
    expect(typeof dispatch.mock.calls[2][0]).toBe('function');
  });

  it('componentDidMount calls the methods as expected', () => {
    const props = {
      match: { params: { id: 1 } },
      getPost: jest.fn(),
      getUser: jest.fn(),
      fetchPostComments: jest.fn(),
      postLoading: false,
      commentsLoading: false,
      postError: '',
      commentsError: '',
      userLoading: false,
      userError: '',
      post: [],
      user: {},
      comments: [],
    };

    component = shallow(<PostComponent {...props} />);
    const instance = component.instance();

    jest.spyOn(instance.props, 'getPost');
    jest.spyOn(instance.props, 'fetchPostComments');
    instance.componentDidMount();
    expect(instance.props.getPost).toHaveBeenCalledTimes(1);
    expect(instance.props.fetchPostComments).toHaveBeenCalledTimes(1);
  });
});
