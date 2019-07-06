import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Bookmarks from './Bookmarks';
import Form from './Form';
import Confirm from './Confirm';
import Titles from './Titles';
import CustomMenu from './CustomMenu';
import utils from '../lib/utils';
import { useSpring, animated } from 'react-spring';

//try wihtout fragments

const Main = ({ groups, groupsID, links }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showTitles, setShowTitles ] = useState(false);
  const [ titles, setTitles ] = useState([]);
  const [ titleToDelete, setTitleToDelete ] = useState('');
  const [ titlesUpdate, setTitlesUpdate ] = useState(null);
  const [ cords, setCords ] = useState([]);
  const [ elementForCustomMenu, setElementForCustomMenu ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);
  const [ categoryID, setCategoryID ] = useState('');
  const [ groupToDelete, setGroupToDelete ] = useState('');
  const [ group, setGroup ] = useState('');
  const [ isEditingSubject, setIsEditingSubject ] = useState(false);

  console.log(groupsID, 'groupsID')

  const deleteTitle = (target) => {
    let title = target.parentElement.firstChild.innerText;
    setTitleToDelete(title);
  };

  const displayContainer = () => {
    if (showForm) {
      return <Form groups={groups} showForm={showForm} setShowForm={setShowForm} categoryID={categoryID} setCategoryID={setCategoryID}/>
    } else if (showConfirm) {
      return <Confirm groups={groups} groupsID={groupsID} showConfirm={showConfirm} setShowConfirm={setShowConfirm} titleToDelete={titleToDelete} titles={titles} groupToDelete={groupToDelete} categoryID={categoryID} setCategoryID={setCategoryID}  elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} setTitlesUpdate={setTitlesUpdate} isEditingSubject={isEditingSubject}/>
    }
  };

  const openCustomMenu = (e) => {
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

    if (elementForCustomMenu) {
      elementForCustomMenu.style.visibility = '';
    }
    if ((group === 'category' )&& ( !elementForCustomMenu || elementForCustomMenu && elementForCustomMenu.className.baseVal !== target.className.baseVal )) {
      let cat = target.parentElement.children[1].innerText;
      let id = utils.findCategoryID(groups, cat);
      if (id >= 0) { setCategoryID(id); }

      target.style.visibility = 'visible';
      setCords([top, rect.left]);
      setElementForCustomMenu(target);
    } else if ((group === 'subject') && ( !elementForCustomMenu || elementForCustomMenu && elementForCustomMenu.className.baseVal !== target.className.baseVal )){
      let subject = target.parentElement.children[1].innerText;
      target.style.visibility = 'visible';
      setCords([top, rect.left]);
      setElementForCustomMenu(target);
    }
  };
console.log('main render')

//refactor structure
  return (
    <div id="container">
      <Navbar showForm={showForm} setShowForm={setShowForm} links={links} />
      <div id="app-container" className="app" data-testid="app-container">
        <div className="sidebar-container">
          <Bookmarks groups={groups} groupsID={groupsID} categoryID={categoryID} setCategoryID={setCategoryID} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} openCustomMenu={openCustomMenu} setIsEditing={setIsEditing} isEditing={isEditing} setElementForCustomMenu={setElementForCustomMenu} elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} setGroupToDelete={setGroupToDelete} isEditingSubject={isEditingSubject} setIsEditingSubject={setIsEditingSubject}/>
        </div>
        {
          elementForCustomMenu
          &&  <CustomMenu cords={cords} elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} isEditing={isEditing} setIsEditing={setIsEditing} showConfirm={showConfirm} setShowConfirm={setShowConfirm} group={group} setIsEditingSubject={setIsEditingSubject}/>
        }
        <Fragment>
          {
            showTitles
            ? (<Titles titles={titles} links={links} showConfirm={showConfirm} setShowConfirm={setShowConfirm} deleteTitle={deleteTitle} setGroupToDelete={setGroupToDelete} />)
            : (null)
          }
        </Fragment>
      </div>
      <Fragment>
        { displayContainer() }
      </Fragment>
    </div>
  );
};

export default Main;

Main.propTypes = {
  bmarks: PropTypes.object,
  titles: PropTypes.array
};

Main.defaultProps = {
  bmarks: {},
  titles: []
};


