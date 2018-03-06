import React from 'react';
import Compare from "./Compare";
import {configure, mount} from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe ('Purchase Tester', () => {
    it('There should be these number of purchase in purhcase', () => {
        const wrapper = mount(<Compare />);
  
        const Link1 = wrapper.find('th');
        expect(Link1.length).toBe(8);
    });  
  });