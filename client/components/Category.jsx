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
  const { groups, groupsID, categoryID, setCategoryID, setIsEditing, isEditing, setElementForCustomMenu, elementForCustomMenu } = useContext(ContentContext);
  const { setCategory, category, isOpen, elementToEdit, setElementToEdit } = useContext(CategoriesContext);

  const reset = (e) => {
    setElementToEdit('');
    setIsEditing(false);
  };

  //check if categoryID, setCategoryID is necessary, can get catID here without state value?

  const handleCatEdit = (e) => {
    setCatEdited(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      axios.get(`/update/${catEdited}/${categoryID}/${groupsID}`, {
        method: 'PATCH'
        })
        .then(res => {
           utils.editCategories(groups, cat, catEdited);
           elementForCustomMenu.style.visibility = '';
           setCategory('');
           setCategoryID('');
           setIsEditing(false);
           setElementForCustomMenu('');
          console.log('PATCH request successful');
        })
        .catch(err => { console.log('Error at PATCH request', err); });
    }
  };

  const displayInputOnEdit = () => {
    let categoryToEdit = elementForCustomMenu.parentElement.children[1];
    if (categoryToEdit.className === 'category-text') { categoryToEdit = categoryToEdit.innerText; }
    else if (categoryToEdit.id === 'edit-category-input') { categoryToEdit = categoryToEdit.defaultValue; }
    if (categoryToEdit && categoryToEdit === cat || elementToEdit && cat === elementToEdit) {
      return (
        <Fragment>
          <IconDown />
          <input id="edit-category-input" type="text" onBlur={reset} onKeyUp={handleEnter} onChange={handleCatEdit} defaultValue={cat} autoComplete="off" />
          </Fragment>
        );
    }
    return (
      <Fragment>
        <IconFolder viewBox={"-20 -9 55 55"} color={color} width={"30"} height={"30"} folderOpen={folderOpen}/>
        <div className="category-text">{cat}</div>
      </Fragment>
    );
  };

  return (
     <div className="category" key={cat}>
      {
        isEditing
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
  cat: PropTypes.string
};

Category.defaultProps = {
  color: '',
  cat: ''
};


