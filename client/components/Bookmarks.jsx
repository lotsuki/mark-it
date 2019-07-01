import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader';
import Categories from './Categories';

const Bookmarks = ({ bmarks, showConfirm, setShowConfirm, titlesUpdate, setShowTitles, showTitles, setTitles, colors }) => {

  return (
    <div className="bookmarks-container">
      <SidebarHeader sidebarHeader={"COLLECTIONS"} />
      <Categories bmarks={bmarks} setShowTitles={setShowTitles} setTitles={setTitles} height={'3.5rem'} showConfirm={showConfirm} showTitles={showTitles}  setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} colors={colors}/>
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
