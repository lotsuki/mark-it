import React, { useState, useCallback } from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Subjects from './Subjects';
import Category from './Category';

const Categories = ({ bmarks, showConfirm, setShowConfirm, titlesUpdate, setShowTitles, showTitles, setTitles, colors, openCustomMenu, isEditing }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');

  const exitCategories = (e) => {
    if (e.target.className === 'app') {
      document.removeEventListener('click', exitCategories);
      setIsOpen(false);
      setCategory('');
      setShowTitles(false);
    }
    // else if (_.contains(categoryClasses, e.target.className)) {
    //   setShowTitles(false);
    //   if (e.target.className === 'category') {
    //   setCategory(e.target.children[1].value);
    // } else { setCategory(e.target.value); }

    // }
  };

  const handleCatClick = (e) => {
    let cat;
    if (e.target.className === 'category') {
      cat = e.target.children[1].value;
    } else {
      cat = e.target.value;
    }
    if (e.target.className === 'app' || cat === category) {
      document.removeEventListener('click', exitCategories);
      setIsOpen(false);
      setCategory('');
      setShowTitles(false);
    } else {
      setIsOpen(true);
      setCategory(cat);
      setShowTitles(false);
      document.addEventListener('click', exitCategories);
    }
  };

  return (
    <div className="section-container" >
     <div id="section-wrapper">
       {_.map(bmarks, (cat, key) => {
         return (
          <div className="category-container" key={key}>
           <div
             className="category-wrapper"
             onClick={handleCatClick}
             key={key}>
             <Category category={category} cat={key} isOpen={isOpen} colors={colors} handleCatClick={handleCatClick} openCustomMenu={openCustomMenu} isEditing={isEditing}/>
           </div>
           <div className="dropdown-container" key={cat[0]}>
             {
              category === key
              ? (
                <div className="dropdown-wrapper" >
                  {
                    isOpen
                      ? ( <Subjects bmarks={bmarks} category={category} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} handleCatClick={handleCatClick} setIsOpen={setIsOpen} setCategory={setCategory} colors={colors} isOpen={isOpen}/>)
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

