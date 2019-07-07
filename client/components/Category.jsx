import React, { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';
import IconCustomMenu from './IconCustomMenu';
import IconDown from './IconDown';
import utils from '../lib/utils';
import axios from 'axios';
import ContentContext from './ContentContext';
import CategoriesContext from './CategoriesContext';

const Category = ({ cat, color }) => {
  const [ catEdited, setCatEdited ] = useState('');
  const { groups, groupsID, categoryID, setCategoryID, setIsEditing, isEditing, setElementForCustomMenu, elementForCustomMenu } = useContext(ContentContext);
  const { setCategory, category, isOpen, elementToEdit, setElementToEdit } = useContext(CategoriesContext);

  const reset = (e) => {
    console.log('no')
    setElementToEdit('');
    setIsEditing(false);
  };

  //check if categoryID, setCategoryID is necessary, can get catID here without state value?

  const handleFocus = (e) => {
    setElementToEdit(e.target.value);
    //console.log(e.target, 'handleFocus')
  };

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

const displayCatOnEdit = () => {
  let categoryToEdit = utils.getCategoryText(null, elementForCustomMenu, null, 'display');
  // console.log(cat, 'cat')
  // console.log(elementToEdit, 'el to edit')
  //  console.log(categoryToEdit, 'cat to edit')
  //  console.log(elementForCustomMenu, 'el menu')
  //  console.log(elementForCustomMenu.parentElement.children[1].innerText)
  if (categoryToEdit && categoryToEdit === cat || elementToEdit && cat === elementToEdit) {
    return (
      <Fragment>
        <IconDown />
        <input id="edit-category" type="text" onBlur={reset} onFocus={handleFocus} onKeyUp={handleEnter} onChange={handleCatEdit} defaultValue={cat} autoComplete="off" style={{border: '1px solid lightgray', boxShadow: '0px 1px 10px 0px rgba(32, 33, 36, 0.10)', padding: '7px 12px', marginRight: '8px', color: '#9E9D9D'}}/>
      </Fragment>)
  }
  return(
    <Fragment>
      <IconFolder viewBox={"-20 -9 55 55"} color={color} width={"30"} height={"30"} />
      <div className="category-text">{cat}</div>
    </Fragment>
    )
};

   const hoverOn = (e) => {
   };

   const hoverOff = (e) => {
  };

  return (
    <Fragment>
      {
        category === cat && isOpen
        ? (
            <div className="category"
                 key={cat}
                 style={{backgroundColor: '#ECECEE'}}
                 >
              {
                isEditing
                ? (
                  displayCatOnEdit()
                  )
                : (
                  <Fragment>
                    <IconFolderOpen viewBox={"-20 -9 55 55"} color={color} width={"30"} height={"30"} />
                    <div className="category-text">{cat}</div>
                  </Fragment>
                  )
              }
              <IconCustomMenu name={cat}/>
            </div>
           )
        : (
            <div className="category" key={cat} >
              {
                isEditing
                ? (
                  displayCatOnEdit()
                  )
                : (
                  <Fragment>
                    <IconFolder viewBox={"-20 -9 55 55"} color={color} width={"30"} height={"30"}/>
                    <div className="category-text">{cat}</div>
                  </Fragment>
                  )
              }
              <IconCustomMenu name={cat}/>
            </div>
          )
      }
    </Fragment>
  );
}

export default Category;

// Category.propTypes = {
//   category: PropTypes.string,
//   cat: PropTypes.string
// };

// Category.defaultProps = {
//   category: '',
//   cat: ''
// };


