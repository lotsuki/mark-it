import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar.jsx';
import Quicklinks from './Quicklinks.jsx';
import Bookmarks from './Bookmarks.jsx';
import Form from './Form.jsx';
import TestGrid from './TestGrid.jsx';


const Sidebar = ({ qlinks, bmarks }) => {
  return (
    <div id="container">
      <Navbar />
      <div className="appContainer" data-testid="appContainer">
        <div className="sidebarContainer">
          <Quicklinks qlinks={qlinks}/>
          <Bookmarks bmarks={bmarks}/>
        </div>
        <div className="previewContainer">
          <Form />
        </div>
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

// <div className="sidebarBorder"></div>