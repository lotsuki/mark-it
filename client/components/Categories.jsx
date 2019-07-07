import React, { useState } from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Subjects from './Subjects';
import Category from './Category';
import utils from '../lib/utils';

const Categories = ({ groups, groupsID, categoryID, setCategoryID, showConfirm, setShowConfirm, titlesUpdate, setShowTitles, showTitles, setTitles, openCustomMenu, setIsEditing, isEditing,  setElementForCustomMenu, elementForCustomMenu, setGroupToDelete, isEditingSubject, setIsEditingSubject, setCords, cords }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');
  const [ elementToEdit, setElementToEdit ] = useState('');

  console.log()
  const exitCategories = (e) => {
    if (e.target.className === 'app' || e.target.className === 'sidebar-container') {
      document.removeEventListener('click', exitCategories);
      setIsOpen(false);
      setCategory('');
      setCategoryID('');
      setShowTitles(false);
      setGroupToDelete('');
    }
  };

  const handleCatClick = (e) => {
    console.log('click')
    //if isCusotmMenuIcon, if isOpen, is the cateogry clicked teh one that is open?
    let isCustomMenuIcon = utils.isCustomMenuIcon(e.target);
    if (isCustomMenuIcon) {
      let target;
      if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
        target = e.target.parentElement;
      } else if (e.target.className.baseVal.includes('icon-custom-menu')) {
        target = e.target
      }
      let currentElem = utils.getCategoryText(e, e.target, null, 'handle');


      //IF CLICK ON MENU AND ANOTHER DROPDOWN IS OPEN
      // if (isOpen && category !== currentElem) {
      //   let rect = target.getBoundingClientRect();
      //   let top = rect.top + 8;
      //   console.log(rect, 'RECT')
      //   setCords([top, rect.left]);
        //setElementForCustomMenu(target);
        //setIsOpen(false);
     // }
      setGroupToDelete('category');
    } else if (isEditing) {
      setElementToEdit(e.target.value);
    } else {
      let cat = utils.getCategoryText(e, e.target, e.target.className, 'handle');
      if (e.target.className === 'app' || cat === category) {
        document.removeEventListener('click', exitCategories);
        setIsOpen(false);
        setCategory('');
        setShowTitles(false);
        setGroupToDelete('');
      } else {
        setIsOpen(true);
        setCategory(cat);
        setShowTitles(false);
        document.addEventListener('click', exitCategories);
      }
    }

  };

  return (
    <div className="section-container" >
     <div id="section-wrapper">
       {groups.map(group => {
         return (
          <div className="category-container" key={group.category}>
           <div
             className="category-wrapper"
             onClick={handleCatClick}
             key={group.category}>
             <Category groups={groups} groupsID={groupsID} categoryID={categoryID} setCategoryID={setCategoryID} setCategory={setCategory} category={category} exitCategories={exitCategories} cat={group.category} color={group.color} setIsOpen={setIsOpen} isOpen={isOpen} openCustomMenu={openCustomMenu} setIsEditing={setIsEditing} isEditing={isEditing} setElementToEdit={setElementToEdit} elementToEdit={elementToEdit} elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu} setCords={setCords} cords={cords}/>
           </div>
           <div className="dropdown-container" key={group.color}>
             {
              category === group.category
              ? (
                <div className="dropdown-wrapper" >
                  {
                    isOpen
                      ? ( <Subjects groups={groups} groupsID={groupsID} category={category} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} handleCatClick={handleCatClick} setIsOpen={setIsOpen} setCategory={setCategory} color={group.color} isOpen={isOpen} openCustomMenu={openCustomMenu} setGroupToDelete={setGroupToDelete} isEditingSubject={isEditingSubject} elementToEdit={elementToEdit} setElementToEdit={setElementToEdit} elementForCustomMenu={elementForCustomMenu} setIsEditingSubject={setIsEditingSubject} setElementForCustomMenu={setElementForCustomMenu}/>)
                      : ( null )
                  }
                </div>
              )
              : ( null )
             }
            </div>
          </div>
         );
        })}
       </div>
    </div>
  );
};


export default Categories;

// Categories.propTypes = {
//   bmarks: PropTypes.object,
//   displayConfirm: PropTypes.func,
//   titlesUpdate: PropTypes.array
// };

// Categories.defaultProps = {
//   bmarks: {},
//   titlesUpdate: [],
//   displayConfirm: () => {}
// };

