import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader.jsx';
import Categories from './Categories.jsx';

const Bookmarks = ({ bmarks, showConfirm, setShowConfirm, titlesUpdate }) => {
  return (
    <div className="bookmarks-container">
      <SidebarHeader sidebarHeader="MY BOOKMARKS" />
      <Categories bmarks={bmarks} height={'3.5rem'} showConfirm={showConfirm} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate}/>
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
