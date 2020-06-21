import React from 'react';
import { shallow } from 'enzyme';
import { findbyTestAttr } from '../Utils/testUtil';
import Header from './header';

let wrapper = shallow(<Header />);

describe('Header Component', () => {
  it('Header should render without throwing an error', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render homeButton', () => {
    let component = findbyTestAttr(wrapper, 'homeButton');
    expect(component.length).toBe(1);
  });

  it('should render allUsersButton', () => {
    let component = findbyTestAttr(wrapper, 'allUsersButton');
    expect(component.length).toBe(1);
  });

  it('should render albumButton', () => {
    let component = findbyTestAttr(wrapper, 'albumButton');
    expect(component.length).toBe(1);
  });

  it('should render roundIcon', () => {
    let component = findbyTestAttr(wrapper, 'roundIcon');
    expect(component.length).toBe(1);
  });
});
