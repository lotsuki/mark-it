import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';
import IconCustomMenu from './IconCustomMenu';
import IconDown from './IconDown';
 

const Category = ({ setCategory, category, exitCategories, cat, isOpen, setIsOpen, colors, openCustomMenu, isEditing, elementToEdit, elementForCustomMenu, handleCatClick}) => {
  const [ catEdited, setCatEdited ] = useState('');
  const resetInput = (e) => {
    console.log('reset')
    let defaultVal = e.target.defaultValue;
    e.target.value = defaultVal;
  };

// if (element) {
//   console.log(element.parentElement.children[1].value, 'cat')
// }

const hoverOn = (e) => {
  e.target.style.background = '#fff';
  e.target.parentElement.style.background = '#fff';
};

//const handleCatEdit = (e) => {
//  setCatEdited(e.target.value);
  // console.log(e.target, 'target')
  // setIsOpen(false);
//};

const displayCatOnEdit = () => {
  let target;
  if (elementForCustomMenu && elementForCustomMenu.className.baseVal === 'icon-custom-menu') {
    target = elementForCustomMenu.parentElement.children[1].value;
  } else if (elementForCustomMenu) {
    target = elementForCustomMenu.value;
  }
  if (target && cat === target || elementToEdit && cat === elementToEdit) {
    return (
      <Fragment>
        <IconDown setIsOpen={setIsOpen} setCategory={setCategory} exitCategories={exitCategories}/>
        <input className="edit-category" type="text" value={cat} onBlur={resetInput} onMouseEnter={hoverOn} style={{border: '1px solid lightgray', boxShadow: '0px 1px 10px 0px rgba(32, 33, 36, 0.10)', padding: '7px 12px', marginRight: '8px', color: '#9E9D9D'}}/>
      </Fragment>)
  }
  return(
    <Fragment>
      <IconFolder viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} handleCatClick={handleCatClick}/>
      <input className="category-text" type="text" readOnly value={cat}/>
    </Fragment>
    )
};


  return (
    <Fragment>
      {
        category === cat && isOpen
        ? (
            <div className="category"
                 key={cat}
                 style={{backgroundColor: '#ECECEE'}}>
              {
                isEditing
                ? (
                  displayCatOnEdit()
                  )
                : (
                  <Fragment>
                    <IconFolderOpen viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} />
                    <input className="category-text" type="text" readOnly value={cat} />
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
                    <IconFolder viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} handleCatClick={handleCatClick}/>
                    <input className="category-text" type="text" readOnly value={cat} />
                  </Fragment>
                  )
              }
              <IconCustomMenu openCustomMenu={openCustomMenu}/>
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


