import React from 'react';
import Header from "./Header";
import {configure, mount} from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe ('Header Tester', () => {
    it('Header should have all the navigation link displayed', () => {
        const wrapper = mount(<Header />);
  
        const Link1 = wrapper.find('Link');
        expect(Link1.length).toBe(5);
    });  
  });