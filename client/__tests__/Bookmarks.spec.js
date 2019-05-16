import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Bookmarks from '../components/Bookmarks';
import SidebarHeader from '../components/SidebarHeader';
import Dropdown from '../components/Dropdown';


describe('<Bookmarks />', () => {
  it('renders without error with correct props', () => {
    const props = {
      bookmarks: []
    }
    shallow(<Bookmarks {...props}/>);
  });
  it('renders <SidebarHeader /> component', () => {
    const wrapper = mount(<Bookmarks />);
    expect(wrapper.children().find(SidebarHeader)).toBeDefined();
    wrapper.unmount();
  });
  it('renders <Dropdown /> component', () => {
    const wrapper = mount(<Bookmarks />);
    expect(wrapper.children().find(Dropdown)).toBeDefined();
    wrapper.unmount();
  });
  it('renders a div with class bookmarksContainer', () => {
    const wrapper = shallow(<Bookmarks />);
    expect(wrapper.find('div.bookmarksContainer')).toBeDefined();
  });
  it('contains correct props', () => {
    const wrapper = mount(<Bookmarks />);
    expect(wrapper.props('bookmarks')).toBeDefined();
    wrapper.unmount();
  });
});