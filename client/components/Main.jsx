import React, { useState, Fragment } from 'react';
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

const Main = ({ bmarks, links, colors }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ showEdit, setShowEdit ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showTitles, setShowTitles ] = useState(false);
  const [ titles, setTitles ] = useState([]);
  const [ titleToDelete, setTitleToDelete ] = useState('');
  const [ subjectOfTitle, setSubjectOfTitle ] = useState('');
  const [ titlesUpdate, setTitlesUpdate ] = useState(null);
  const [ top, setTop ] = useState(0);
  const [ elementForCustomMenu, setElementForCustomMenu ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);
  const [ elementToEdit, setElementToEdit ] = useState('');

  const showTitlesUpdate = (data) => {
    setTitlesUpdate(data);
    setShowTitles(true);
  };

  const findSubject = (titl) => {
    let subj;
    links.forEach(obj => {
      if (obj.title === titl) { subj = obj.subject; }
    });
    return subj;
  };

  const deleteTitle = (target) => {
    let title = target.parentElement.firstChild.innerText;
    let subject = findSubject(title)
    setTitleToDelete(title);
    setSubjectOfTitle(subject);
  };

  const displayContainer = () => {
    if (showForm) {
      return <Form showForm={showForm} setShowForm={setShowForm} bmarks={bmarks}/>
    } else if (showEdit) {
      return <Edit bmarks={bmarks} links={links} />
    } else if (showConfirm) {
      return <Confirm showConfirm={showConfirm} setShowConfirm={setShowConfirm} titleToDelete={titleToDelete} subjectOfTitle={subjectOfTitle} showTitlesUpdate={showTitlesUpdate} setTitles={setTitles} titles={titles}/>
    }
  };

  const openCustomMenu = (e) => {

   // console.log(e.target, 'custom e.target');
   // console.log(e.currentTarget, 'custom curr');
    let target;
    if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
      //console.log(e.target.parentElement, 'PARENTELEM')
      target = e.target.parentElement;
    } else if (e.target.className.baseVal.includes('icon-custom-menu')) { target = e.target }
    // console.log(elementForCustomMenu === target, 'openmenuelem');
    //   console.log(target, 'openmenutarget');
    //document.removeEventListener('click', exitCategories);
    if (elementForCustomMenu) {
      elementForCustomMenu.style.visibility = '';
      setElementForCustomMenu('');
      setIsEditing(false);
    }

    if (!elementForCustomMenu || elementForCustomMenu.className.baseVal !== target.className.baseVal) {
      console.log('hiiiii');

      let count = 0;
      for (var key in bmarks) {
        if (key === target.parentElement.children[1].innerText) {
          break;
        }
        ++count;
      }
      target.style.visibility = 'visible';
      let result = 165 + (count*53);
      setTop(result);
      console.log(target, 'CHANGE')
      setElementForCustomMenu(target);

    }
  };

  return (
    <div id="container">
      <Navbar showForm={showForm} setShowForm={setShowForm} showEdit={showEdit} setShowEdit={setShowEdit} links={links} />
      <div id="app-container" className="app" data-testid="app-container">
        <div className="sidebar-container">
          <Bookmarks bmarks={bmarks} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} colors={colors} openCustomMenu={openCustomMenu} setIsEditing={setIsEditing} isEditing={isEditing} setElementToEdit={setElementToEdit} elementToEdit={elementToEdit} setElementForCustomMenu={setElementForCustomMenu} elementForCustomMenu={elementForCustomMenu}/>
        </div>
        {
          elementForCustomMenu
          &&  <CustomMenu top={top} elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} isEditing={isEditing} setIsEditing={setIsEditing}/>
        }
        <Fragment>
          {
            showTitles
            ? (<Titles titles={titles} links={links} setTitles={setTitles} showConfirm={showConfirm} setShowConfirm={setShowConfirm} deleteTitle={deleteTitle} titlesUpdate={titlesUpdate}/>)
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


