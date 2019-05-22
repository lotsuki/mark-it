import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader.jsx';
import Categories from './Categories.jsx';

const Bookmarks = ({ bmarks }) => {
  return (
    <div className="bookmarksContainer">
      <SidebarHeader sidebarHeader="MY BOOKMARKS" />
      <Categories sidebarSection={bmarks}/>
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
