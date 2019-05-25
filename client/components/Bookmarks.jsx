import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader.jsx';
import Categories from './Categories.jsx';

const Bookmarks = ({ bmarks }) => {
  return (
    <div className="bookmarksContainer">
      <SidebarHeader sidebarHeader="MY BOOKMARKS" />
      <Categories sidebarSection={bmarks} height={'3.5rem'} />
    </div>
  );
};

export default Bookmarks;



Bookmarks.propTypes = {
  bmarks: PropTypes.array
};

Bookmarks.defaultProps = {
  bmarks: []
};
