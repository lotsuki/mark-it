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

