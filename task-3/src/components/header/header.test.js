import React from 'react';
import { shallow } from 'enzyme';
import { findbyTestAttr } from '../../Utils/testUtil';
import Header from './index';

let wrapper = shallow(<Header />);

describe('Header Component', () => {
  it('Header should render without throwing an error', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render header text', () => {
    let component = findbyTestAttr(wrapper, 'text');
    expect(component.length).toBe(1);
    expect(component.text()).toEqual('Simple Calculator');
  });
});
