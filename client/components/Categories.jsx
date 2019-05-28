import React, { useState, useCallback } from 'react';
import _ from 'underscore';
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
       {_.map(bmarks, (cat, key) => {
         return (
          <div className="category-container" key={key}>
           <div
             className="category-wrapper"
             onClick={handleClick}
             key={key}>
             <Category category={category} cat={key}/>
           </div>
           <div className="dropdown-container" key={cat[0]}>
             {
              category === key
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
  bmarks: PropTypes.object,
  displayConfirm: PropTypes.func,
  titlesUpdate: PropTypes.array
};

Categories.defaultProps = {
  bmarks: {},
  titlesUpdate: [],
  displayConfirm: () => {}
};

