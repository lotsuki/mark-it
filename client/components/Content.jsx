import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import DynamicContent from './DynamicContent';
import ContentContext from './ContentContext';
import utils from '../lib/utils';
//import { useSpring, animated } from 'react-spring';

const Content = ({ groups, groupsID, links, updatePage }) => {
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showTitles, setShowTitles ] = useState(false);
  const [ titles, setTitles ] = useState([]);
  const [ titleToDelete, setTitleToDelete ] = useState([]);
  const [ elementForCustomMenu, setElementForCustomMenu ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);
  const [ categoryID, setCategoryID ] = useState('');
  const [ groupToDelete, setGroupToDelete ] = useState('');
  const [ isEditingSubject, setIsEditingSubject ] = useState(false);
  const [ showForm, setShowForm, ] = useState(false);
  const [ cords, setCords ] = useState([]);
  const [ showMenu, setShowMenu ] = useState(false);
  const [ categoryToDelete, setCategoryToDelete ] = useState('');
  const [ subjectToDelete, setSubjectToDelete ] = useState('');

  // const memoizedSidebar = useMemo(() => {
  //   return <Sidebar />;
  // }, [ groups ]);

  return (
    <ContentContext.Provider value={{ groups, groupsID, categoryID, setCategoryID, showTitles, setShowTitles, titles, setTitles, showConfirm, setShowConfirm, showForm, setShowForm, isEditing,setIsEditing, elementForCustomMenu, setElementForCustomMenu, groupToDelete, setGroupToDelete, isEditingSubject, setIsEditingSubject, titleToDelete, setTitleToDelete, cords, setCords, categoryToDelete, setCategoryToDelete, subjectToDelete, setSubjectToDelete, updatePage }}>
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