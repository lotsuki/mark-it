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
             style={{backgroundColor: '#FA6B6B'}}>
          <svg className="icon-folder-open" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-20 -9 55 55" fill={colors[cat]}>
              <title>folder-open</title>
              <path d="M26 30l6-16h-26l-6 16zM4 12l-4 18v-26h9l4 4h13v4z"></path>
           </svg>
          <span className="category-text">{cat}</span>
        </div>
         )
      : (
          <div className="category" key={cat}>
            <svg className="icon-folder" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-20 -9 55 55" fill={colors[cat]}>
              <title>folder</title>
              <path d="M14 4l4 4h14v22h-32v-26z"></path>
           </svg>
            <span className="category-text">{cat}</span>
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