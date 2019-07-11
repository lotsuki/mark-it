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
  const { groups, setCategoryID, setShowTitles, setGroupToDelete, setElementForCustomMenu } = useContext(ContentContext);

  console.log(isOpen, 'CATEGORIES isOpen');
  console.log(category, 'CATEGORIES category');
  console.log(elementToEdit, 'CATEGORIES elementToEdit');
  console.log(isOpen, 'CATEGORIES isOpen');
  console.log(groups, 'CATEGORIES');

  const exitCategories = (e) => {
    console.log(e.target, 'CATEGORIES exitCategories');
    if (e.target.className === 'app' || e.target.className === 'sidebar-container') {
      console.log('CATEGORIES exitCategories if target == app or sidebar');
      document.removeEventListener('click', exitCategories);
      setIsOpen(false);
      setCategory('');
      setCategoryID('');
      setShowTitles(false);
      setGroupToDelete('');
    }
  };

  const handleCatClick = (e) => {
    console.log(e.target, 'CATEGORIES handleCatClick');
    //if isCusotmMenuIcon, if isOpen, is the cateogry clicked teh one that is open?
    let isCustomMenuIcon = utils.isCustomMenuIcon(e.target);
    console.log(isCustomMenuIcon, 'iscustmenu')
    if (isCustomMenuIcon) {
      console.log('CATEGORIES handleCatClick isCustomMenuIcon == true');
      let target;
    //    console.log('click')
      if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
        target = e.target.parentElement;
      } else if (e.target.className.baseVal.includes('icon-custom-menu')) {
        target = e.target
      }
      // let currentElem = utils.getCategoryText(e, e.target, null, 'handle');
       setGroupToDelete('category');
     } else if (e.target.id === 'edit-category') {
      console.log(e.target.value, 'CATEGOIRES handleCatClick isEdit == true')
        setElementToEdit(e.target.value);
      //}
      //IF CLICK ON MENU AND ANOTHER DROPDOWN IS OPEN
      // if (isOpen && category !== currentElem) {
      //   let rect = target.getBoundingClientRect();
      //   let top = rect.top + 8;
      //   console.log(rect, 'RECT')
      //   setCords([top, rect.left]);
        //setElementForCustomMenu(target);
        //setIsOpen(false);
     // }

    } else {
      console.log('CATEGORIES handleCatClick isCustomMenuIcon !== true');
      let cat = utils.getCategoryText(e, e.target, e.target.className, 'handle');
      if (e.target.className === 'app' || cat === category) {
        console.log('CATEGORIES handleCatClick isCustomMenuIcon !== true && class == app or category is different');
        document.removeEventListener('click', exitCategories);
        setIsOpen(false);
        setCategory('');
        setShowTitles(false);
        setGroupToDelete('');
      } else {
        let catID = utils.findCategoryID(groups, cat);
        console.log('CATEGORIES handleCatClick openDropdown');
        setIsOpen(true);
        setCategory(cat);
        setShowTitles(false);
        setCategoryID(catID);
        document.addEventListener('click', exitCategories);
      }
    }
  };


//refactor dropdown container
  return (
    <CategoriesContext.Provider value={{ setCategory, category, exitCategories, setIsOpen, isOpen, elementToEdit, setElementToEdit }}>
      <div className="section-container" >
       <div id="section-wrapper">
         {groups.map(group => {
          let folderOpen = category === group.category;
           return (
            <div className="category-container" key={group.category}>
             <div
               className="category-wrapper"
               onClick={handleCatClick}
               key={group.category}>
               <Category cat={group.category} color={group.color} folderOpen={folderOpen}/>
             </div>
             <div className='dropdown-container' key={group.color} >
               {
                category === group.category && isOpen &&
                <Subjects color={group.color} folderOpen/>
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


