import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Bookmarks from '../components/Bookmarks';


describe('Main', () => {
  it('renders without error', () => {
    shallow(<Main />)
  });
  it('renders <Navbar />', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.children().find(Navbar)).toBeDefined();
  });
  it('renders <Bookmarks />', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.children().find(Bookmarks)).toBeDefined();
  });
});
