import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Bookmarks from './Bookmarks';
import Form from './Form';
import Confirm from './Confirm';
import Titles from './Titles';
import CustomMenu from './CustomMenu';
import { useSpring, animated } from 'react-spring';

//try wihtout fragments

const Main = ({ groups, links }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showTitles, setShowTitles ] = useState(false);
  const [ titles, setTitles ] = useState([]);
  const [ titleToDelete, setTitleToDelete ] = useState('');
  const [ titlesUpdate, setTitlesUpdate ] = useState(null);
  const [ cords, setCords ] = useState([]);
  const [ elementForCustomMenu, setElementForCustomMenu ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);
  const [ elementToEdit, setElementToEdit ] = useState('');
  const [ categoryID, setCategoryID ] = useState('');
  const [ groupToDelete, setGroupToDelete ] = useState('');
  const [ group, setGroup ] = useState('');
  const [ isEditingSubject, setIsEditingSubject ] = useState(false);

  const findSubject = (titl) => {
    let subj;
    for (var i = 0; i < links.length; i++) {
      if (links[i].title === titl) {
        subj = links[i].subject;
        break;
      }
    }
    return subj;
  };

  const deleteTitle = (target) => {
    let title = target.parentElement.firstChild.innerText;
    let subject = findSubject(title)
    setTitleToDelete(title);
  };

  const displayContainer = () => {
    if (showForm) {
      return <Form groups={groups} showForm={showForm} setShowForm={setShowForm} categoryID={categoryID} setCategoryID={setCategoryID}/>
    } else if (showConfirm) {
      return <Confirm groups={groups} showConfirm={showConfirm} setShowConfirm={setShowConfirm} titleToDelete={titleToDelete} setShowTitles={setShowTitles} setTitles={setTitles} titles={titles} groupToDelete={groupToDelete} categoryID={categoryID} setCategoryID={setCategoryID}  elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} titlesUpdate={titlesUpdate} setTitlesUpdate={setTitlesUpdate} isEditingSubject={isEditingSubject}/>
    }
  };

  const whichGroup = (element) => {
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].category === element.parentElement.children[1].innerText) {
        return 'category';
      }
    }
    return 'subject';
  };

  const openCustomMenu = (e) => {
    let target;
    let wrapper = document.getElementById('section-wrapper');

    if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
      target = e.target.parentElement;
    } else if (e.target.className.baseVal.includes('icon-custom-menu')) {
      target = e.target
    }
    let group = whichGroup(target);

    let rect = target.getBoundingClientRect();
    let top = rect.top + 8;
    let left = rect.left;

    if (elementForCustomMenu) {
      elementForCustomMenu.style.visibility = '';
      setElementForCustomMenu('');
      setIsEditing(false);
      setCategoryID('');
      setCords([]);
     // setCategory('');
    }
    if ((group === 'category' )&& ( !elementForCustomMenu || elementForCustomMenu && elementForCustomMenu.className.baseVal !== target.className.baseVal )) {
      let cat = target.parentElement.children[1].innerText;
      console.log(cat, 'CAT IN OPENCUSTMENU')
      for (var i = 0; i < groups.length; i++) {
        if (groups[i].category === cat) {
          setCategoryID(groups[i].id);
        }
      }
      target.style.visibility = 'visible';
      setCords([top, left]);
      setElementForCustomMenu(target);
    } else if ((group === 'subject') && ( !elementForCustomMenu || elementForCustomMenu && elementForCustomMenu.className.baseVal !== target.className.baseVal )){
      let subject = target.parentElement.children[1].innerText;
      target.style.visibility = 'visible';
      setCords([top, left]);
      setElementForCustomMenu(target);
    }
  };

  return (
    <div id="container">
      <Navbar showForm={showForm} setShowForm={setShowForm} links={links} />
      <div id="app-container" className="app" data-testid="app-container">
        <div className="sidebar-container">
          <Bookmarks groups={groups} categoryID={categoryID} setCategoryID={setCategoryID} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} openCustomMenu={openCustomMenu} setIsEditing={setIsEditing} isEditing={isEditing} setElementToEdit={setElementToEdit} elementToEdit={elementToEdit} setElementForCustomMenu={setElementForCustomMenu} elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} setGroupToDelete={setGroupToDelete} />
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


