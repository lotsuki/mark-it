import React, { useState, useContext } from 'react';
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
    let isCustomMenuIcon = utils.isCustomMenuIcon(e.target);
    if (isCustomMenuIcon) {
      let target;
      if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
        target = e.target.parentElement;
      } else if (e.target.className.baseVal.includes('icon-custom-menu')) {
        target = e.target
      }
       setGroupToDelete('category');
     } else if (e.target.id === 'edit-category') {
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
        let catID = utils.findCategoryID(groups, cat);
        setIsOpen(true);
        setCategory(cat);
        setShowTitles(false);
        setCategoryID(catID);
        document.addEventListener('click', exitCategories);
      }
    }
  };

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



