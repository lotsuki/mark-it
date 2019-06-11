import React, { useState, useCallback } from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Subjects from './Subjects.jsx';
import Category from './Category.jsx';
import helpers from '../lib/utils.js';



const Categories = ({ bmarks, showConfirm, setShowConfirm, titlesUpdate, setShowTitles, showTitles, setTitles }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');

  const exitCategories = (e) => {
    let categoryClasses = ['category', 'category-text'];
    if (e.target.innerText === category) {
      setIsOpen(false);
      setCategory('');
    } else if (_.contains(categoryClasses, e.target.className)) {
      setCategory(e.target.innerText);
    }
    //FINISH: get cateogry parent elem and check class name with helper func
      // if (!helpers.findChild(findCatparent, e.target.className)) {
      //   setIsOpen(false);
      //   document.removeEventListner('click', exitCategories);
      // }
    //If target is another category, display subj from that category

  };

  const handleCatClick = (e) => {
    if (!isOpen) {
      setIsOpen(true);
      setCategory(e.target.innerText);
      document.addEventListener('click', exitCategories);
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
             onClick={handleCatClick}
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
                      ? ( <Subjects bmarks={bmarks} category={category} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} handleCatClick={handleCatClick}/>)
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

