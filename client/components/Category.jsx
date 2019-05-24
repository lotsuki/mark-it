import React from 'react';

const Category = ({ section, category, cat}) => {
  const displayLinkIcons = (sec, category) => {
    if (sec === 'quicklinks') {
      if (category === 'Favorites') {
        return <span className="linkIcon"><i className="fas fa-heart"></i></span>;
      } else if (category === 'Starred') {
        return <span className="linkIcon"><i className="fas fa-star"></i></span>;
      } else if (category === 'Read') {
        return <span className="linkIcon"><i className="fas fa-check"></i></span>;
      }
    }
  };

  return (
    <div>
    {
      category === cat
      ? (
        <div className="category"
             className={section}
             key={cat}
             style={{backgroundColor: '#BDC18A'}}>
          <span className="leftSide">{displayLinkIcons(section, cat)}{cat}</span>
          <i className="fas fa-chevron-down"></i>
        </div>
         )
      : (
          <div className="category" className={section} key={cat}>
            <span className="leftSide">{displayLinkIcons(section, cat)}{cat}</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        )
     }
     </div>
  )
}

export default Category;