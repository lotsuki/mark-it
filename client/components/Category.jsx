import React from 'react';
import PropTypes from 'prop-types';
 

const Category = ({ category, cat, isOpen, colors}) => {
  // const colors = ['#8FFF9C', '#BAFF7E', '#7EE3C8', '#77D0FF', '#5897FF', '#6558FF', '#D758FF', '#FF5858', '#FFC558', '#FF9758', '#EDFF58'];
  let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

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