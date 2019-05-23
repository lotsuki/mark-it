import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Subjects from './Subjects.jsx';

const Categories = ({ sidebarSection, section }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');
  const [ target, setTarget ] = useState('');

  const handleClick = (e) => {
    if (isOpen) {
      //e.target.style.backgroundColor = '#fff';
      setIsOpen(false);
      setCategory('');
      setTarget('');
    } else {
      //e.target.style.backgroundColor = '#BDC18A';
      setIsOpen(true);
      setCategory(e.target.innerText);
      setTarget(e.target)
    }
  };

  const findLinkIcons = (category) => {
    if (category === 'Favorites') {
      return <i class="fas fa-heart"></i>;
    } else if (category === 'Starred') {
      return <i class="fas fa-star"></i>;
    } else if (category === 'Read') {
      return <i class="fas fa-check"></i>;
    }
  };

  const findMarkIcons = (category) => {
     if (category !== 'Favorites' &&
        category !== 'Starred' &&
        category !== 'Read') {
      return <span class="bookmarkIcons">
               <i class="fas fa-heart"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-check"></i>
             </span>
    }
  };

  return (
    <div className="sectionContainer" >
     <div className="sectionWrapper">
       {sidebarSection.map((obj, i) => {
         let cat = Object.keys(obj)[0];
         return (
          <div className="categoryContainer" key={cat}>
           <div
             className="categoryWrapper"
             onClick={handleClick}
             key={cat}>
             {

              category === cat
              ? (
                <div className="category"
                     className={section}
                     key={cat}
                     style={{backgroundColor: '#BDC18A'}}>
                     <span className="linkIcon">{findLinkIcons(cat)}</span>
                     {cat}
                     <span className="markIcon">{findMarkIcons(cat)}</span>
                </div>
                 )
              : (
                  <div className="category" className={section} key={cat}>
                    <span className="linkIcon">{findLinkIcons(cat)}</span>
                    {cat}
                   <span className="markIcon">{findMarkIcons(cat)}</span>
                  </div>
                )
             }
           </div>
           <div className="dropdownContainer" key={`${cat}${i}`}>
             {
              category === cat
              ? (
                <div className="dropdownWrapper" >
                  {
                    isOpen
                      ? ( <Subjects sidebarSection={sidebarSection} category={category} target={target}/>)
                      : ( null )
                  }
                </div>
              )
              : ( null )
             }
            </div>
          </div>
         );
        })}
       </div>
    </div>
  );
};


export default Categories;

Categories.propTypes = {
  sidebarSection: PropTypes.array
};

Categories.defaultProps = {
  sidebarSection: []
};

