import React from 'react';
import {ChatBox} from "./Chatbox";
import {configure, mount} from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe ('Purchase Tester', () => {
    it('There should be these number of purchase in purhcase', () => {
        const wrapper = mount(<ChatBox messageArray={["1","2"]}/>);
  
        const Link1 = wrapper.find('div');
        expect(Link1.length).toBe(2);
    });  
  });