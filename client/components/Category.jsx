import React from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';
import IconCustomMenu from './IconCustomMenu';
 

const Category = ({ category, cat, isOpen, colors, customMenuClick}) => {
  const resetInput = (e) => {
    let defaultVal = e.target.defaultValue;
    e.target.value = defaultVal;
  };

  return (
    <div>
      {
        category === cat && isOpen
        ? (
            <div className="category"
                 key={cat}
                 style={{backgroundColor: '#ECECEE'}}>
              <IconFolderOpen viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} />
              <input  className="category-text" type="text" readOnly value={cat} onBlur={resetInput} style={{backgroundColor: '#ECECEE'}}/>
              <IconCustomMenu customMenuClick={customMenuClick}/>
            </div>
           )
        : (
            <div className="category" key={cat} >
              <IconFolder viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} />
              <input  className="category-text" type="text" readOnly value={cat} onBlur={resetInput} />
              <IconCustomMenu customMenuClick={customMenuClick}/>
            </div>
          )
      }
    </div>
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
