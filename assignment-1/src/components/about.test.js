import React from 'react';
import { shallow, mount } from 'enzyme';
import { render } from 'enzyme';
import About from './about';
import { findbyTestAttr } from '../Utils/testUtil';

let setUp = (props) => {
  let component = render(<About {...props} />);
  return component;
};

describe('About Component', () => {
  let component;
  let props = {
    user: {
      name: 'rose',
      username: 'rosy',
      email: 'r@gmail.com',
      company: { name: 'abc' },
      address: { street: 'abc', city: 'def', zipcode: '123', suite: 'ghi' },
      phone: '123',
      website: 'aa.com',
    },
  };
  describe('renders all', () => {
    beforeEach(() => {
      component = setUp(props);
    });

    it('About should render without throwing an error', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render header', () => {
      let wrapper = findbyTestAttr(component, 'header');
      expect(wrapper.length).toBe(1);
    });

    it('should render buttons', () => {
      let wrapper = findbyTestAttr(component, 'buttons');
      expect(wrapper.length).toBe(1);
    });

    it('should render detailsButton', () => {
      let wrapper = findbyTestAttr(component, 'detailsButton');
      expect(wrapper.length).toBe(1);
    });

    it('should render workDetailsButton', () => {
      let wrapper = findbyTestAttr(component, 'buttons');
      expect(wrapper.length).toBe(1);
    });

    it('should render addressButton', () => {
      let wrapper = findbyTestAttr(component, 'addressButton');
      expect(wrapper.length).toBe(1);
    });

    it('should render contactInfoButton', () => {
      let wrapper = findbyTestAttr(component, 'contactInfoButton');
      expect(wrapper.length).toBe(1);
    });

    it('should render details', () => {
      let wrapper = findbyTestAttr(component, 'details');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('checks all buttons and methods work as expected', () => {
    it('handleClick method should update state as expected', () => {
      let component = shallow(<About {...props} />).dive();

      findbyTestAttr(component, 'workDetailsButton').simulate('click');
      expect(component.state('work')).toBe(true);
    });

    it('should render user details when user details button is clicked', () => {
      let component = shallow(<About {...props} />).dive();

      findbyTestAttr(component, 'detailsButton').simulate('click');
      expect(component.state('details')).toBe(true);
      expect(findbyTestAttr(component, 'UserWorkInfoComponent').length).toBe(0);
      expect(findbyTestAttr(component, 'UserDetailsComponent').length).toBe(1);
      expect(findbyTestAttr(component, 'UseAddressComponent').length).toBe(0);
      expect(findbyTestAttr(component, 'UserContactInfoComponent').length).toBe(
        0
      );
    });

    it('should render work details when work details button is clicked', () => {
      let component = shallow(<About {...props} />).dive();

      findbyTestAttr(component, 'workDetailsButton').simulate('click');
      expect(component.state('work')).toBe(true);
      expect(findbyTestAttr(component, 'UserWorkInfoComponent').length).toBe(1);
      expect(findbyTestAttr(component, 'UserDetailsComponent').length).toBe(0);
      expect(findbyTestAttr(component, 'UseAddressComponent').length).toBe(0);
      expect(findbyTestAttr(component, 'UserContactInfoComponent').length).toBe(
        0
      );
    });

    it('should render user details when user details button is clicked', () => {
      let component = shallow(<About {...props} />).dive();

      findbyTestAttr(component, 'addressButton').simulate('click');
      expect(component.state('places')).toBe(true);
      expect(findbyTestAttr(component, 'UserWorkInfoComponent').length).toBe(0);
      expect(findbyTestAttr(component, 'UserDetailsComponent').length).toBe(0);
      expect(findbyTestAttr(component, 'UseAddressComponent').length).toBe(1);
      expect(findbyTestAttr(component, 'UserContactInfoComponent').length).toBe(
        0
      );
    });

    it('should render contact details when user details button is clicked', () => {
      let component = shallow(<About {...props} />).dive();

      findbyTestAttr(component, 'contactInfoButton').simulate('click');
      expect(component.state('contact')).toBe(true);
      expect(findbyTestAttr(component, 'UserWorkInfoComponent').length).toBe(0);
      expect(findbyTestAttr(component, 'UserDetailsComponent').length).toBe(0);
      expect(findbyTestAttr(component, 'UseAddressComponent').length).toBe(0);
      expect(findbyTestAttr(component, 'UserContactInfoComponent').length).toBe(
        1
      );
    });
  });
});
