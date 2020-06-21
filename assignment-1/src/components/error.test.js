import React from 'react';
import { shallow } from 'enzyme';
import ErrorComponent from './error';
import { findbyTestAttr } from '../Utils/testUtil';

const setUp = (props) => {
  const component = shallow(<ErrorComponent {...props} />);
  return component;
};

describe('Error Component', () => {
  let component;
  beforeEach(() => {
    const props = { message: 'Something went wrong' };
    component = setUp(props);
  });

  it('should render without errors', () => {
    const wrapper = findbyTestAttr(component, 'errorComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render disappointedEmoticon', () => {
    const wrapper = findbyTestAttr(component, 'disappointedEmoticon');
    expect(wrapper.length).toBe(1);
  });

  it('should render errorMessage', () => {
    const wrapper = findbyTestAttr(component, 'errorMessage');

    expect(wrapper.length).toBe(1);
  });
});
