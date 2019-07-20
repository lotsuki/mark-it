/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow } from 'enzyme';
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
  it('renders 3 divs with text', () => {
  });
});
