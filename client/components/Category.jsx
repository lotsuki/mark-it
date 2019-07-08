import React, { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconDown from './IconDown';
import CategoryChild from './CategoryChild';
import utils from '../lib/utils';
import axios from 'axios';
import ContentContext from './ContentContext';
import CategoriesContext from './CategoriesContext';

const Category = ({ color, cat }) => {
  const [ catEdited, setCatEdited ] = useState('');
  const { groups, groupsID, categoryID, setCategoryID, setIsEditing, isEditing, setElementForCustomMenu, elementForCustomMenu } = useContext(ContentContext);
  const { setCategory, category, isOpen, elementToEdit, setElementToEdit } = useContext(CategoriesContext);

  console.log(catEdited, 'CATEGORY catEdited');
  console.log(groups, categoryID, isEditing, elementForCustomMenu, category, isOpen, elementToEdit, 'CATEGORY');

  const reset = (e) => {
    console.log(e.target, 'CATEGORY reset input');
    setElementToEdit('');
    setIsEditing(false);
  };

  //check if categoryID, setCategoryID is necessary, can get catID here without state value?

  const handleCatEdit = (e) => {
    console.log(e.target.value, 'CATEGORY handleCatEdit');
    setCatEdited(e.target.value);
  };

  const handleEnter = (e) => {
    console.log(e.keyCode, catEdited, categoryID, groupsID, 'CATEGORY handleEnter');
    if (e.keyCode === 13) {
      axios.get(`/update/${catEdited}/${categoryID}/${groupsID}`, {
        method: 'PATCH'
        })
        .then(res => {
          console.log(cat, catEdited, elementForCustomMenu, 'CATEGORY patch response');
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

  const displayCatOnEdit = (cat) => {
    let categoryToEdit = elementForCustomMenu.parentElement.children[1];
    if (categoryToEdit.className === 'category-text') { categoryToEdit = categoryToEdit.innerText; }
    else if (categoryToEdit.id === 'edit-category') { categoryToEdit = categoryToEdit.value; }
    // let categoryToEdit = utils.getCategoryText(null, elementForCustomMenu, null, 'display');
    console.log(elementForCustomMenu, 'elformenu', categoryToEdit, 'cattoedit', cat, 'cat', elementToEdit, 'eltoedit', 'CATEGORY displayCatOnEdit func');
    if (categoryToEdit && categoryToEdit === cat || elementToEdit && cat === elementToEdit) {
      console.log(categoryToEdit, cat, elementToEdit,'CATEGORY displayCatOnEdit func return input');
      return (
        <div className="edit-category-wrapper" key={cat} style={{background: '#fff'}}>
          <IconDown />
          <input id="edit-category" type="text" onBlur={reset} onKeyUp={handleEnter} onChange={handleCatEdit} defaultValue={cat} autoComplete="off" style={{border: '1px solid lightgray', boxShadow: '0px 1px 10px 0px rgba(32, 33, 36, 0.10)', padding: '7px 12px', marginRight: '8px', color: '#9E9D9D'}}/>
        </div>);
    }
    console.log(categoryToEdit, cat, elementToEdit,'CATEGORY displayCatOnEdit func return div');
    return (
      <div className="category" key={cat}>
        <IconFolder viewBox={"-20 -9 55 55"} color={color} width={"30"} height={"30"} />
        <div className="category-text">{cat}</div>
      </div>
    );
  };

   const hoverOn = (e) => {
   };

   const hoverOff = (e) => {
  };

  return (
    <Fragment>
      {
        isEditing
        ? ( displayCatOnEdit(cat) )
        : <CategoryChild color={color} cat={cat}/>
      }
    </Fragment>
  );
}

export default Category;

Category.propTypes = {
  color: PropTypes.string,
  cat: PropTypes.string
};

Category.defaultProps = {
  color: '',
  cat: ''
};


