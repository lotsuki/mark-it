import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category, cat}) => {
  return (
    <div>
    {
      category === cat
      ? (
        <div className="category"
             key={cat}
             style={{backgroundColor: '#FA6B6B', color: '#fff'}}>
          <i className="fas fa-folder-open"></i>
          <span className="category-text">{cat}</span>
          <i className="fas fa-chevron-up"></i>
        </div>
         )
      : (
          <div className="category" key={cat}>
            <i className="fas fa-folder"></i>
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