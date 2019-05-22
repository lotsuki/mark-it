import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Subjects from './Subjects.jsx';

const Categories = ({ sidebarSection, height, size }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');
  const [ target, setTarget ] = useState('');

  const handleClick = (e) => {
    if (isOpen) {
      e.target.style.backgroundColor = '#fff';
      setIsOpen(false);
      setCategory('');
      setTarget('');
    } else {
      e.target.style.backgroundColor = '#BDC18A';
      setIsOpen(true);
      setCategory(e.target.innerText);
      setTarget(e.target)
    }
  };

  return (
    <div className="sectionContainer">
       <div className="section" onClick={handleClick}>
         {sidebarSection.map(obj => {
           let cat = Object.keys(obj)[0];
           return (
             <div className="categoryWrapper" key={cat}>
               <div className="category" key={cat} style={{height:height, fontSize: size}}>{cat}</div>

               {
                category === cat
                ? (
                  <div id="dropdownContainer">
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

