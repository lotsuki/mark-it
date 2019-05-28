/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow, mount } from 'enzyme';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Bookmarks from '../components/Bookmarks';


describe('Sidebar', () => {
  it('renders without error', () => {
    shallow(<Sidebar />)
  });
  it('renders <Navbar />', () => {
    const wrapper = shallow(<Sidebar/>);
    expect(wrapper.children().find(Navbar)).toBeDefined();
  });
  it('renders <Bookmarks />', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.children().find(Bookmarks)).toBeDefined();
  });
});
