import React, { useState, useCallback } from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Subjects from './Subjects.jsx';
import Category from './Category.jsx';
import helpers from '../lib/utils.js';

const Categories = ({ bmarks, showConfirm, setShowConfirm, titlesUpdate, setShowTitles, showTitles, setTitles, colors }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');
  const [toggle, setToggle] = useState(true);

  const exitCategories = (e) => {
    let categoryClasses = ['category', 'category-text'];
    if (e.target.className === 'app' || e.target.innerText === category) {
      document.removeEventListener('click', exitCategories);
      setToggle(false);
      setIsOpen(false);
      setCategory('');
      setShowTitles(false);
    } else if (_.contains(categoryClasses, e.target.className)) {
      setShowTitles(false);
      setCategory(e.target.innerText);
    }
  };

  const handleCatClick = (e) => {
    if (!isOpen) {
      setIsOpen(true);
      setToggle(true);
      setCategory(e.target.innerText);
      document.addEventListener('click', exitCategories);
    } else if (e.target.className === 'app' || e.target.innerText === category) {
      document.removeEventListener('click', exitCategories);
      setToggle(false);
      setIsOpen(false);
      setCategory('');
      setShowTitles(false);
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
             <Category category={category} cat={key} isOpen={isOpen} colors={colors}/>
           </div>
           <div className="dropdown-container" key={cat[0]}>
             {
              category === key
              ? (
                <div className="dropdown-wrapper" >
                  {
                    isOpen
                      ? ( <Subjects bmarks={bmarks} category={category} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} handleCatClick={handleCatClick} setIsOpen={setIsOpen} setCategory={setCategory} toggle={toggle}/>)
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

