import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import DynamicContent from './DynamicContent';
import ContentContext from './ContentContext';
import utils from '../lib/utils';
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
  const [ showForm, setShowForm, ] = useState(false);
  const [ cords, setCords ] = useState([]);

  // const memoizedSidebar = useMemo(() => {
  //   return <Sidebar />;
  // }, [ groups ]);

  console.log(showConfirm, 'CONTENT showConfirm');
  console.log(showTitles, 'CONTENT showTitles');
  console.log(titles, 'CONTENT titles');
  console.log(titleToDelete, 'CONTENT titleToDelete');
  console.log(elementForCustomMenu, 'CONTENT elementForCustomMenu');
  console.log(isEditing, 'CONTENT isEditing');
  console.log(categoryID, 'CONTENT categoryID');
  console.log(groupToDelete, 'CONTENT groupToDelete');
  console.log(isEditingSubject, 'CONTENT isEditingSubject');
  console.log(showForm, 'CONTENT showForm');
  console.log(cords, 'CONTENT cords');

  const openCustomMenu = (e) => {
    console.log(e.target, 'CONTENT openCustomMenu func');
    //make recurse function to check if other dropdowns are open
    let target;
    let wrapper = document.getElementById('section-wrapper');

    if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
      target = e.target.parentElement;
    } else if (e.target.className.baseVal.includes('icon-custom-menu')) {
      target = e.target
    }
    let group = utils.whichGroup(groups, target);
    let rect = target.getBoundingClientRect();
    let top = rect.top + 8;

    console.log(group, target, 'GROUP AND TARGET IN OPEN CUSTOM MENU')

    if (elementForCustomMenu) {
      elementForCustomMenu.style.visibility = '';
    }
    if ((group === 'category' )&& ( !elementForCustomMenu || elementForCustomMenu && elementForCustomMenu.className.baseVal !== target.className.baseVal )) {
      console.log('CONTENT openCustomMenu, group === category');
      let cat = target.parentElement.children[1].innerText;
      let id = utils.findCategoryID(groups, cat);
      if (id >= 0) { setCategoryID(id); }

      target.style.visibility = 'visible';
      setCords([top, rect.left]);
      setElementForCustomMenu(target);
    } else if ((group === 'subject') && ( !elementForCustomMenu || elementForCustomMenu && elementForCustomMenu.className.baseVal !== target.className.baseVal )){
       console.log('CONTENT openCustomMenu, group === subject');
      let subject = target.parentElement.children[1].innerText;
      target.style.visibility = 'visible';
      setCords([top, rect.left]);
      setElementForCustomMenu(target);
    }
  };

  return (
    <ContentContext.Provider value={{ groups, groupsID, categoryID, setCategoryID, showTitles, setShowTitles, titles, setTitles, showConfirm, setShowConfirm, showForm, setShowForm, isEditing, setIsEditing, elementForCustomMenu, setElementForCustomMenu, groupToDelete, setGroupToDelete, isEditingSubject, setIsEditingSubject, titleToDelete, setTitleToDelete, openCustomMenu, cords, setCords }}>
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