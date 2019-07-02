import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';
import IconCustomMenu from './IconCustomMenu';
 

const Category = ({ category, cat, isOpen, colors, openCustomMenu, isEditing}) => {
  const resetInput = (e) => {
    let defaultVal = e.target.defaultValue;
    e.target.value = defaultVal;
  };

  return (
    <Fragment>
      {
        category === cat && isOpen
        ? (
            <div className="category"
                 key={cat}
                 style={{backgroundColor: '#ECECEE'}}>
              <IconFolderOpen viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} />
              {
                isEditing
                ? (<input className="category-text" type="text" value={cat} onBlur={resetInput} style={{backgroundColor: '#ECECEE'}}/>)
                : (<input className="category-text" type="text" readOnly value={cat} style={{backgroundColor: '#ECECEE'}}/>)
              }
              <IconCustomMenu openCustomMenu={openCustomMenu}/>
            </div>
           )
        : (
            <div className="category" key={cat} >

               {
                isEditing
                ? (
                  <div>V
                  <input className="category-text" type="text" defaultValue={cat} onBlur={resetInput} style={{border: '1px solid gray'}}/>
                  </div>
                  )
                : (
                  <>
                    <IconFolder viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} />
                    <input className="category-text" type="text" readOnly value={cat} />
                    </>
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



// <i className="fas fa-folder" style={{color: color}}></i>
//<span className="category-text">{cat}</span>
// {
//                 isEditing
//                 ? (<input className="category-text"type="text" value={cat} onBlur={resetInput} />)
//                 : (<span className="category-text">{cat}</span>)
//               }
