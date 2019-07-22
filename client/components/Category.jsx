import React, { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconDown from './IconDown';
import IconCustomMenu from './IconCustomMenu';
import CategoryChild from './CategoryChild';
import utils from '../lib/utils';
import axios from 'axios';
import ContentContext from './ContentContext';
import CategoriesContext from './CategoriesContext';

const Category = ({ color, cat, folderOpen }) => {
  const [ catEdited, setCatEdited ] = useState('');
  const { groups, groupsID, group,categoryID, setCategoryID, setIsEditing, isEditing, setElementForCustomMenu, elementForCustomMenu } = useContext(ContentContext);
  const { setCategory, elementToEdit, categoryText } = useContext(CategoriesContext);

  //handle category edit
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      axios.get(`/update/${catEdited}/${categoryID}/${groupsID}`, {
        method: 'PATCH'
        })
        .then(() => {
            //updates data in react and exits menu
           utils.editCategories(groups, cat, catEdited);
           //hides custom menu and resets state
           elementForCustomMenu.style.visibility = '';
           setCategory('');
           setCategoryID('');
           setIsEditing(false);
           setElementForCustomMenu('');
        })
        .catch(err => { console.log('Error at PATCH request', err); });
    }
  };

  //when edit button clicked, displays input field
  const displayInputOnEdit = () => {
    let categoryToEdit = elementForCustomMenu.parentElement.children[1];
    if (categoryToEdit.className === 'category-text') { categoryToEdit = categoryToEdit.innerText; }
    else if (categoryToEdit.id === 'edit-category-input') { categoryToEdit = categoryToEdit.defaultValue; }
    //if category is category clicked, render input
    if (categoryToEdit && categoryToEdit === cat || elementToEdit && cat === elementToEdit) {
      return (
        <Fragment>
          <IconDown />
          <input id="edit-category-input" type="text" onKeyUp={handleEnter} onChange={e => setCatEdited(e.target.value)} defaultValue={cat} autoComplete="off" />
          </Fragment>
        );
    }
    //if category is not category clicked, render div
    return (
      <Fragment>
        <IconFolder viewBox={"-20 -9 55 55"} color={color} width={"30"} height={"30"} folderOpen={folderOpen}/>
        <div className="category-text" ref={categoryText}>{cat}</div>
      </Fragment>
    );
  };

  return (
     <div className="category" key={cat}>
      {
        isEditing && group === 'category'
        ? ( displayInputOnEdit() )
        : (<CategoryChild color={color} cat={cat} folderOpen={folderOpen}/>)
      }
      <IconCustomMenu name={cat}/>
    </div>
  );
};

export default Category;

Category.propTypes = {
  color: PropTypes.string,
  cat: PropTypes.string,
  folderOpen: PropTypes.bool
};

Category.defaultProps = {
  color: '',
  cat: '',
  folderOpen: false
};


