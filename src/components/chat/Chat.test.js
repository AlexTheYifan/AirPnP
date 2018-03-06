import React from 'react';
import Chat from "./Chat";
import {configure, mount} from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe ('Header Tester', () => {
    it('Header should have all the navigation link displayed', () => {
        const wrapper = mount(<Chat />);
  
        const Link1 = wrapper.find('div');
        expect(Link1.length).toBe(4);       
  
    });  
  });

  describe ('Header Tester', () => {
    it('Header should have all the navigation link displayed', () => {
        const wrapper = mount(<Chat />);
        const Link2 = wrapper.find('#sendMessage');
        expect(Link2.length).toBe(1);     
  
    });  
  });



  describe ('Header Tester', () => {
    it('Header should have all the navigation link displayed', () => {
        const wrapper = mount(<Chat />);

        const Link3 = wrapper.find('#chatDisp');
        expect(Link3.length).toBe(1);     
    });  
  });