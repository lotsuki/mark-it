import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Bookmarks from './Bookmarks';
import Form from './Form';
import Edit from './Edit';
import Confirm from './Confirm';
import Titles from './Titles';
import CustomMenu from './CustomMenu';
import { useSpring, animated } from 'react-spring';

//try wihtout fragments

const Main = ({ groups, links }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ showEdit, setShowEdit ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showTitles, setShowTitles ] = useState(false);
  const [ titles, setTitles ] = useState([]);
  const [ titleToDelete, setTitleToDelete ] = useState('');
  const [ subjectOfTitle, setSubjectOfTitle ] = useState('');
  const [ titlesUpdate, setTitlesUpdate ] = useState(null);
  const [ cords, setCords ] = useState([]);
  const [ elementForCustomMenu, setElementForCustomMenu ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);
  const [ elementToEdit, setElementToEdit ] = useState('');
  const [ categoryID, setCategoryID ] = useState('');
  const [ groupToDelete, setGroupToDelete ] = useState('');

  const showTitlesUpdate = (data) => {
  //   console.log(data, 'data')
  //   setTitlesUpdate(data);
  //   setShowTitles(true);
  };

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
    } else if (showEdit) {
      return <Edit groups={groups} links={links} />
    } else if (showConfirm) {
      return <Confirm groups={groups} showConfirm={showConfirm} setShowConfirm={setShowConfirm} titleToDelete={titleToDelete} subjectOfTitle={subjectOfTitle} setShowTitles={setShowTitles} showTitlesUpdate={showTitlesUpdate} setTitles={setTitles} titles={titles} groupToDelete={groupToDelete} categoryID={categoryID} setCategoryID={setCategoryID}  elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} titlesUpdate={titlesUpdate} setTitlesUpdate={setTitlesUpdate} />
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
    let group = whichGroup(target);

    if ((group === 'category' )&& ( !elementForCustomMenu || elementForCustomMenu && elementForCustomMenu.className.baseVal !== target.className.baseVal )) {
      let category = target.parentElement.children[1].innerText;

      for (var i = 0; i < groups.length; i++) {
        if (groups[i].category === category) {
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

  console.log('MAIN RENDER')

  return (
    <div id="container">
      <Navbar showForm={showForm} setShowForm={setShowForm} showEdit={showEdit} setShowEdit={setShowEdit} links={links} />
      <div id="app-container" className="app" data-testid="app-container">
        <div className="sidebar-container">
          <Bookmarks groups={groups} categoryID={categoryID} setCategoryID={setCategoryID} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} openCustomMenu={openCustomMenu} setIsEditing={setIsEditing} isEditing={isEditing} setElementToEdit={setElementToEdit} elementToEdit={elementToEdit} setElementForCustomMenu={setElementForCustomMenu} elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} setGroupToDelete={setGroupToDelete} />
        </div>
        {
          elementForCustomMenu
          &&  <CustomMenu cords={cords} elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} isEditing={isEditing} setIsEditing={setIsEditing} showConfirm={showConfirm} setShowConfirm={setShowConfirm} />
        }
        <Fragment>
          {
            showTitles
            ? (<Titles titles={titles} links={links} setTitles={setTitles} showConfirm={showConfirm} setShowConfirm={setShowConfirm} deleteTitle={deleteTitle} titlesUpdate={titlesUpdate} setGroupToDelete={setGroupToDelete} subjectOfTitle={subjectOfTitle}/>)
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


