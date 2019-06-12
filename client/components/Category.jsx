import React from 'react';
import PropTypes from 'prop-types';
 

const Category = ({ category, cat, isOpen, colors}) => {
  return (
    <div>
    {
      category === cat && isOpen
      ? (
        <div className="category"
             key={cat}
             style={{backgroundColor: '#FA6B6B', color: colors[cat]}}>
          <i className="fas fa-folder-open"></i>
          <span className="category-text">{cat}</span>
          <i className="fas fa-chevron-up"></i>
        </div>
         )
      : (
          <div className="category" key={cat}>

            <i className="far fa-folder" style={{color: colors[cat]}}></i>
            <span className="category-text">{cat}</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        )
     }
     </div>
  );
};

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