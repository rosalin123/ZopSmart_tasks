import React from 'react';
import { shallow } from 'enzyme';
import About from './about';
import { findbyTestAttr } from '../Utils/testUtil';

let setUp = (props) => {
  let component = shallow(<About {...props} />);
  return component;
};

describe('About Component', () => {
  let component;

  beforeEach(() => {
    let props = {
      name: 'rose',
      username: 'rosy',
      email: 'r@gmail.com',
      company: { name: 'abc' },
      address: { street: 'abc', city: 'def', zipcode: '123', suite: 'ghi' },
      phone: '123',
      website: 'aa.com',
    };
    component = setUp(props);
  });

  it('About should render without throwing an error', () => {
    expect(component).toMatchSnapshot();
  });

  // it('handleClick method should update state as expected', () => {
  //   const classInstance = component.instance();
  //   classInstance.handleClick('work');
  //   const newState = classInstance.state.work;
  //   expect(newState).toBe(true);
  // });
  // it('should render header', () => {
  //   let wrapper = findbyTestAttr(component, 'header');
  //   expect(wrapper.length).toBe(1);
  // });

  // it('should render buttons', () => {
  //   let wrapper = findbyTestAttr(component, 'buttons');
  //   expect(wrapper.length).toBe(1);
  // });

  // it('should render detailsButton', () => {
  //   let wrapper = findbyTestAttr(component, 'detailsButton');
  //   expect(wrapper.length).toBe(1);
  // });

  // it('should render workDetailsButton', () => {
  //   let wrapper = findbyTestAttr(component, 'buttons');
  //   expect(wrapper.length).toBe(1);
  // });

  // it('should render addressButton', () => {
  //   let wrapper = findbyTestAttr(component, 'addressButton');
  //   expect(wrapper.length).toBe(1);
  // });

  // it('should render contactInfoButton', () => {
  //   let wrapper = findbyTestAttr(component, 'contactInfoButton');
  //   expect(wrapper.length).toBe(1);
  // });

  // it('should render details', () => {
  //   let wrapper = findbyTestAttr(component, 'details');
  //   expect(wrapper.length).tobe(1);
  // });
});
