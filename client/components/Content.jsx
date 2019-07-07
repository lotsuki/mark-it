import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import DynamicContent from './DynamicContent';
import ContentContext from './ContentContext';
//import { useSpring, animated } from 'react-spring';

const Content = ({ groups, groupsID, links }) => {
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showTitles, setShowTitles ] = useState(false);
  const [ titles, setTitles ] = useState([]);
  const [ titleToDelete, setTitleToDelete ] = useState('');
  const [ elementForCustomMenu, setElementForCustomMenu ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);
  const [ categoryID, setCategoryID ] = useState('');
  const [ groupToDelete, setGroupToDelete ] = useState('');
  const [ isEditingSubject, setIsEditingSubject ] = useState(false);

  return (
    <ContentContext.Provider value={{ groups, groupsID, categoryID, setCategoryID, setShowTitles, setTitles, setShowConfirm, setIsEditing, isEditing, setElementForCustomMenu, elementForCustomMenu, setGroupToDelete, isEditingSubject, setIsEditingSubject }}>
      <div id="app-container" className="app" data-testid="app-container">
        <Sidebar />
        <DynamicContent />
      </div>
    </ContentContext.Provider>
  )
};

export default Content;


Content.propTypes = {
  groups: PropTypes.array,
  groupsID: PropTypes.string,
  links: PropTypes.array
};