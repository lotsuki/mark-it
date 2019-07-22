import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import DynamicContent from './DynamicContent';
import ContentContext from './ContentContext';
//import MainContext from './MainContext';

const Content = ({ groups, setGroups, groupsID }) => {
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ titles, setTitles ] = useState(null);
  const [ titleToDelete, setTitleToDelete ] = useState([]);
  const [ elementForCustomMenu, setElementForCustomMenu ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);
  const [ categoryID, setCategoryID ] = useState('');
  const [ group, setGroup ] = useState('');
  const [ showForm, setShowForm, ] = useState(false);
  const [ cords, setCords ] = useState([]);
  const [ categoryToDelete, setCategoryToDelete ] = useState('');
  const [ subjectToDelete, setSubjectToDelete ] = useState('');

  //const { showForm, setShowForm } = useContext(MainContext);

  return (
    <ContentContext.Provider value={{ groups, setGroups, groupsID, categoryID, setCategoryID, titles, setTitles, showConfirm, setShowConfirm, showForm, setShowForm, isEditing,setIsEditing, elementForCustomMenu, setElementForCustomMenu, group, setGroup, titleToDelete, setTitleToDelete, cords, setCords, categoryToDelete, setCategoryToDelete, subjectToDelete, setSubjectToDelete }}>
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
  setGroups: PropTypes.func,
  groupsID: PropTypes.string,
  links: PropTypes.array,
};

Content.defaultProps = {
  groups: [],
  setGroups: () => {},
  groupsID: '',
  links: [],
};