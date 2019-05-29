import React from 'react';
import { shallow, mount } from 'enzyme';
import Bookmarks from '../components/Bookmarks';
import SidebarHeader from '../components/SidebarHeader';
import Categories from '../components/Categories';


describe('<Bookmarks />', () => {
  it('renders without error', () => {
    shallow(<Bookmarks />)
  });
  it('renders <SidebarHeader /> component', () => {
    const wrapper = shallow(<Bookmarks />)
    expect(wrapper.children().find(SidebarHeader)).toBeDefined()
    expect(wrapper.children(SidebarHeader).props('sidebarHeader')).toBeDefined()
  });
  it('renders <Categories /> component with 4 props: bmarks, height, displayConfirm, titlesUpdate', () => {
    const wrapper = shallow(<Bookmarks />)
    expect(wrapper.children().find(Categories)).toBeDefined()
    expect(wrapper.children(Categories).props().height).toBe('3.5rem')
    expect(wrapper.children(Categories).props().bmarks).toEqual({})
    expect(wrapper.children(Categories).props().displayConfirm).toBeDefined()
    expect(wrapper.children(Categories).props().titlesUpdate).toEqual([])
  });
});
