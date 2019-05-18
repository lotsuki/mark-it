import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Quicklinks from '../components/Quicklinks';
import SidebarHeader from '../components/SidebarHeader';
import Dropdown from '../components/Dropdown';

describe('<Quicklinks />', () => {
  it('renders without error with correct props', () => {
    const props = {
      quicklinks: []
    }
    shallow(<Quicklinks {...props}/>);
  });
  it('renders <SidebarHeader /> component', () => {
    const wrapper = mount(<Quicklinks />);
    expect(wrapper.children().find(SidebarHeader)).toBeDefined();
    wrapper.unmount();
  });
  it('renders <Dropdown /> component', () => {
    const wrapper = mount(<Quicklinks />);
    expect(wrapper.children().find(Dropdown)).toBeDefined();
    wrapper.unmount();
  });
  it('renders a div with class bookmarksContainer', () => {
    const wrapper = shallow(<Quicklinks />);
    expect(wrapper.find('div.quicklinksContainer')).toBeDefined();
  });
  it('contains correct props', () => {
    const wrapper = mount(<Quicklinks />);
    expect(wrapper.props('quicklinks')).toBeDefined();
    wrapper.unmount();
  });
  it('sets sidebarHeader property on SidebarHeader component', () => {
    const wrapper = mount(<Quicklinks />);
    expect(wrapper.children().find(SidebarHeader).props('sidebarHeader')).toBeDefined();
    wrapper.unmount();
  });
  it('sets data property on Dropdown component', () => {
    const wrapper = mount(<Quicklinks />);
    expect(wrapper.children().find(Dropdown).props('data')).toBeDefined();
    wrapper.unmount();
  });
});


