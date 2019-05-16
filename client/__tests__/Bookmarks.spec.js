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
    const wrapper = shallow(<Bookmarks />);
    expect(wrapper.find(SidebarHeader)).to.have.lengthOf(1);
  });
  it('renders <Dropdown /> component', () => {
    const wrapper = shallow(<Bookmarks />);
    expect(wrapper.find(Dropdown)).to.have.lengthOf(1);
  });
  it('includes 1 div with the class bookmarksContainer', () => {
    const wrapper = shallow(<Bookmarks />);
    expect(wrapper.find('div.bookmarksContainer')).to.have.lengthOf(1);
  });
});