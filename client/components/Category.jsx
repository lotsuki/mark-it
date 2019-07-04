import React, { useState, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';
import IconCustomMenu from './IconCustomMenu';
import IconDown from './IconDown';
 

const Category = ({ setCategory, category, exitCategories, cat, isOpen, setIsOpen, colors, openCustomMenu, setIsEditing, isEditing, setElementToEdit, elementToEdit, elementForCustomMenu}) => {
  const [ catEdited, setCatEdited ] = useState('');
  const reset = (e) => {
    console.log('reset')
    setElementToEdit('');
    setIsEditing(false);
  };

//const handleCatEdit = (e) => {
//  setCatEdited(e.target.value);
  // console.log(e.target, 'target')
  // setIsOpen(false);
//};


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
        <input id="edit-category" type="text" onBlur={reset} defaultValue={cat} style={{border: '1px solid lightgray', boxShadow: '0px 1px 10px 0px rgba(32, 33, 36, 0.10)', padding: '7px 12px', marginRight: '8px', color: '#9E9D9D'}}/>
      </Fragment>)
  }
  return(
    <Fragment>
      <IconFolder viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} />
      <div className="category-text">{cat}</div>
    </Fragment>
    )
};

   const hoverOn = (e) => {
  //
  //   if (isEditing) {
  //     categoryToEdit
  //
  //   }
   };

   const hoverOff = (e) => {
  //   if (isEditing) {
  //   let categoryToEdit = document.getElementById('edit-category');
  //   console.log(categoryToEdit)
    //categoryToEdit.parentElement.style.background = '';
  //}
  //   console.log(e.target, 'off')
    // e.target.style.background = '';
    // e.target.parentElement.style.background = '';
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
                    <IconFolderOpen viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} />
                    <div className="category-text">{cat}</div>
                  </Fragment>
                  )
              }
              <IconCustomMenu openCustomMenu={openCustomMenu}/>
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
                    <IconFolder viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"}/>
                    <div className="category-text">{cat}</div>

                  </Fragment>
                  )
              }
              <IconCustomMenu openCustomMenu={openCustomMenu} cat={cat}/>
            </div>
          )
      }
    </Fragment>
  );
}

export default Category;

Category.propTypes = {
  category: PropTypes.string,
  cat: PropTypes.string
};

Category.defaultProps = {
  category: '',
  cat: ''
};


