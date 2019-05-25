import React from 'react';

const Category = ({ category, cat}) => {

  return (
    <div>
    {
      category === cat
      ? (
        <div className="category"
             key={cat}
             style={{backgroundColor: '#923192', color: '#fff'}}>
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
  )
}

export default Category;