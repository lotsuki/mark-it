import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Subjects from './Subjects.jsx';
import Category from './Category.jsx';


const Categories = ({ bmarks, displayConfirm, titlesUpdate }) => {
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
    <div className="section-container" >
     <div className="section-wrapper">
       {bmarks.map((obj, i) => {
         let cat = Object.keys(obj)[0];
         return (
          <div className="category-container" key={cat}>
           <div
             className="category-wrapper"
             onClick={handleClick}
             key={cat}>
             <Category category={category} cat={cat}/>
           </div>
           <div className="dropdown-container" key={`${cat}${i}`}>
             {
              category === cat
              ? (
                <div className="dropdown-wrapper" >
                  {
                    isOpen
                      ? ( <Subjects bmarks={bmarks} category={category} displayConfirm={displayConfirm} titlesUpdate={titlesUpdate}/>)
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

