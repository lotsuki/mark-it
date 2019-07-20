
import React from 'react';
import { shallow } from 'enzyme';
import SidebarHeader from '../components/SidebarHeader.jsx';


describe('<SidebarHeader />', () => {
  it('renders without error', () => {
    shallow(<SidebarHeader />)
  });
  it('renders a div with text passed down from props sidebarHeader', () => {
    const props = {
      sidebarHeader: 'header'
    }
    const wrapper = shallow(<SidebarHeader {...props}/>)
    expect(wrapper.childAt(0).text()).toEqual(props.sidebarHeader)
  });
});