import React from 'react';
import SidebarHeader from './SidebarHeader';
import Categories from './Categories';

const Sidebar = () => (
  <div className="sidebar-container">
    <SidebarHeader sidebarHeader={"COLLECTIONS"} />
    <Categories />
  </div>
);

export default Sidebar;