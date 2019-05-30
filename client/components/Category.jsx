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
             style={{backgroundColor: '#F1F1F1'}}>
          <span className="leftSide">{cat}</span>
          <i className="fas fa-chevron-down"></i>
        </div>
         )
      : (
          <div className="category" key={cat}>
            <span className="leftSide">{cat}</span>
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