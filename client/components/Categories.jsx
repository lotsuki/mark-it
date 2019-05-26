import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Subjects from './Subjects.jsx';
import Category from './Category.jsx';


const Categories = ({ bmarks }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');

  const handleClick = (e) => {
    if (isOpen) {
      setIsOpen(false);
      setCategory('');
    } else {
      setIsOpen(true);
      setCategory(e.target.innerText);
    }
  };

  return (
    <div className="sectionContainer" >
     <div className="sectionWrapper">
       {bmarks.map((obj, i) => {
         let cat = Object.keys(obj)[0];
         return (
          <div className="categoryContainer" key={cat}>
           <div
             className="categoryWrapper"
             onClick={handleClick}
             key={cat}>
             <Category category={category} cat={cat}/>
           </div>
           <div className="dropdownContainer" key={`${cat}${i}`}>
             {
              category === cat
              ? (
                <div className="dropdownWrapper" >
                  {
                    isOpen
                      ? ( <Subjects bmarks={bmarks} category={category} />)
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
  bmarks: PropTypes.array
};

Categories.defaultProps = {
  bmarks: []
};

