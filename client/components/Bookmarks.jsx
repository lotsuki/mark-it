import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader';
import Categories from './Categories';


const Bookmarks = ({ groups, categoryID, setCategoryID, showConfirm, setShowConfirm, titlesUpdate, setShowTitles, showTitles, setTitles, openCustomMenu, isEditing, setIsEditing,setElementForCustomMenu, elementForCustomMenu, setGroupToDelete, isEditingSubject, setIsEditingSubject}) => {

  return (
    <div className="bookmarks-container">
      <SidebarHeader sidebarHeader={"COLLECTIONS"} />
      <Categories groups={groups} categoryID={categoryID} setCategoryID={setCategoryID} setShowTitles={setShowTitles} setTitles={setTitles} height={'3.5rem'} showConfirm={showConfirm} showTitles={showTitles}  setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} openCustomMenu={openCustomMenu} setIsEditing={setIsEditing}  isEditing={isEditing} setElementForCustomMenu={setElementForCustomMenu} elementForCustomMenu={elementForCustomMenu} setGroupToDelete={setGroupToDelete} isEditingSubject={isEditingSubject} setIsEditingSubject={setIsEditingSubject}/>
    </div>
  );
};


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
