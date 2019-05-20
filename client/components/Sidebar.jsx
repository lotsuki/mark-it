import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar.jsx';
import Quicklinks from './Quicklinks.jsx';
import Bookmarks from './Bookmarks.jsx';
import Form from './Form.jsx';


const Sidebar = ({ qlinks, bmarks }) => {
  return (
    <div className="container">
      <Navbar />
      <div className="appContainer" data-testid="appContainer">
        <div className="sidebarContainer">
          <Quicklinks qlinks={qlinks}/>
          <Bookmarks bmarks={bmarks}/>
        </div>
        <div className="sidebarBorder"></div>
        <Form />
      </div>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  qlinks: PropTypes.array,
  bmarks: PropTypes.array
};

Sidebar.defaultProps = {
  qlinks: [],
  bmarks: []
};