//renders 3 ul elements that parent Element with text
//every li should have an input and an img elem

/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow, mount } from 'enzyme';
import Edit from '../components/Edit';


describe('<Edit/>', () => {
  it('renders without error', () => {
     shallow(<Edit />);
  });
  it('renders 3 ul lists', () => {
     const wrapper = shallow(<Edit />);
     const lists = wrapper.find('ul').map(list => list);
     expect(lists.length).toBe(3);
  });
  it('renders 3 divs with text', () => {
     const wrapper = shallow(<Edit />);
     const headers = wrapper.find('.edit-header').map(div => div.text());
     expect(headers.length).toBe(3);
  });
  it('every li should have an input and img', () => {
     const wrapper = shallow(<Edit />);
     const headers = wrapper.find('li');
     console.log(headers.length)
  });
});

