import React from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';
 

const Category = ({ category, cat, isOpen, colors}) => {
  return (
    <div>
      {
        category === cat && isOpen
        ? (
            <div className="category"
                 key={cat}
                 style={{backgroundColor: '#ECECEE'}}>
              <IconFolderOpen viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} />
              <span className="category-text">{cat}</span>
            </div>
           )
        : (
            <div className="category" key={cat}>
              <IconFolder viewBox={"-20 -9 55 55"} color={colors[cat]} width={"30"} height={"30"} />
              <span className="category-text">{cat}</span>
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