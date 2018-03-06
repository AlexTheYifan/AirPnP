import React from 'react';
import SignIn from "./SignIn";
import {configure, mount} from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe ('Purchase Tester', () => {
    it('There should be these number of purchase in purhcase', () => {
        const wrapper = mount(<SignIn />);
  
        const Link1 = wrapper.find('input');
        expect(Link1.length).toBe(2);
    });  
  });