import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader.jsx';
import Categories from './Categories.jsx';

const Bookmarks = ({ bmarks, displayConfirm, titlesUpdate }) => {
  return (
    <div className="bookmarks-container">
      <SidebarHeader sidebarHeader="MY BOOKMARKS" />
      <Categories bmarks={bmarks} height={'3.5rem'} displayConfirm={displayConfirm} titlesUpdate={titlesUpdate}/>
    </div>
  );
};

export default Bookmarks;



Bookmarks.propTypes = {
  bmarks: PropTypes.object,
  displayConfirm: PropTypes.func,
  titlesUpdate: PropTypes.array
};

Bookmarks.defaultProps = {
  bmarks: {},
  titlesUpdate: [],
  displayConfirm: () => {}
};
