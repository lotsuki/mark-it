import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader';
import Categories from './Categories';

const Bookmarks = () => (
  <div className="bookmarks-container">
    <SidebarHeader sidebarHeader={"COLLECTIONS"} />
    <Categories />
  </div>
);


export default Bookmarks;



// Bookmarks.propTypes = {
//   bmarks: PropTypes.object,
//   displayConfirm: PropTypes.func,
//   titlesUpdate: PropTypes.array
// };

// Bookmarks.defaultProps = {
//   bmarks: {},
//   titlesUpdate: [],
//   displayConfirm: () => {}
// };
