import React, { useState, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';
import IconCustomMenu from './IconCustomMenu';
import IconDown from './IconDown';
import axios from 'axios';
 

const Category = ({ groups, categoryID, setCategoryID, setCategory, category, exitCategories, cat, isOpen, setIsOpen, color, openCustomMenu, setIsEditing, isEditing, setElementToEdit, elementToEdit, elementForCustomMenu, setElementForCustomMenu}) => {
  const [ catEdited, setCatEdited ] = useState('');
  const reset = (e) => {
    setElementToEdit('');
    setIsEditing(false);
  };

  const handleCatEdit = (e) => {
    setCatEdited(e.target.value);
  };

  const editGroups = () => {

  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      console.log(catEdited, 'catEdited');
      console.log(categoryID, 'categoryID');
      axios.get(`/update/cat/${catEdited}/${categoryID}`, {
        method: 'PATCH'
        })
        .then(res => {
          console.log(res);
          for (var i = 0; i < groups.length; i++) {
            if (groups[i].id === categoryID) {
              groups[i].category = catEdited;
            }
          }
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
  let target;

  if (elementForCustomMenu && elementForCustomMenu.className.baseVal.includes('icon-custom-menu')) {
    target = elementForCustomMenu.parentElement.children[1].innerText;
  } else if (elementForCustomMenu) {
    target = elementForCustomMenu.innerText;
  }
  if (target && cat === target || elementToEdit && cat === elementToEdit) {
    return (
      <Fragment>
        <IconDown setIsOpen={setIsOpen} setCategory={setCategory} exitCategories={exitCategories}/>
        <input id="edit-category" type="text" onBlur={reset} onKeyUp={handleEnter} onChange={handleCatEdit} defaultValue={cat} autoComplete="off" style={{border: '1px solid lightgray', boxShadow: '0px 1px 10px 0px rgba(32, 33, 36, 0.10)', padding: '7px 12px', marginRight: '8px', color: '#9E9D9D'}}/>
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
              <IconCustomMenu openCustomMenu={openCustomMenu} name={cat}/>
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
              <IconCustomMenu openCustomMenu={openCustomMenu} name={cat}/>
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


