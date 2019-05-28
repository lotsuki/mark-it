/**
 * @jest-environment jsdom
*/


import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';


describe('<Navbar />', () => {
  it('renders without error', () => {
     shallow(<Navbar />);
  });
  it('renders <Searchbar /> ', () => {
     const wrapper = shallow(<Navbar />);
     expect(wrapper.children().find(Searchbar)).toBeDefined();
  });
  it('displays plus and edit icon ', () => {
     const wrapper = shallow(<Navbar />);
     expect(wrapper.containsAnyMatchingElements([<i className="fas fa-plus" ></i>, <i className="fas fa-edit"></i>])).toBe(true);
  });
});


