import React from 'react';
import Wishlist from "./Wishlist";
import {configure, mount} from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe ('Purchase Tester', () => {
    it('There should be these number of purchase in purhcase', () => {
        const wrapper = mount(<Wishlist />);
  
        const Link1 = wrapper.find('#card');
        expect(Link1.length).toBe(0);
    });  
  });