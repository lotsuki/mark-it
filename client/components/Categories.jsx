import React, { useState, useContext } from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Subjects from './Subjects';
import Category from './Category';
import utils from '../lib/utils';
import ContentContext from './ContentContext';
import CategoriesContext from './CategoriesContext';


const Categories = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');
  const [ elementToEdit, setElementToEdit ] = useState('');
  const { groups, setCategoryID, setShowTitles, isEditing, setGroupToDelete } = useContext(ContentContext);
  const exitCategories = (e) => {
    console.log('hey')
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
      // if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
      //   target = e.target.parentElement;
      // } else if (e.target.className.baseVal.includes('icon-custom-menu')) {
      //   target = e.target
      // }
      // let currentElem = utils.getCategoryText(e, e.target, null, 'handle');

// else if (isEditing) {
//       setElementToEdit(e.target.value);
//     }
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
//refactor dropdown container
  return (
    <CategoriesContext.Provider value={{ setCategory, category, exitCategories, setIsOpen, isOpen, setElementToEdit }}>
      <div className="section-container" >
       <div id="section-wrapper">
         {groups.map(group => {
           return (
            <div className="category-container" key={group.category}>
             <div
               className="category-wrapper"
               onClick={handleCatClick}
               key={group.category}>
               <Category cat={group.category} color={group.color}/>
             </div>
             <div className="dropdown-container" key={group.color}>
               {
                category === group.category
                ? (
                  <div className="dropdown-wrapper" >
                    {
                      isOpen
                        ? ( <Subjects color={group.color}/>)
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
    </CategoriesContext.Provider>
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

