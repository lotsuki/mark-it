import React, { useState, useCallback } from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Subjects from './Subjects';
import Category from './Category';

const Categories = ({ bmarks, showConfirm, setShowConfirm, titlesUpdate, setShowTitles, showTitles, setTitles, colors, customMenuClick }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');
  const [ toggle, setToggle ] = useState(true);

  const exitCategories = (e) => {
    let categoryClasses = ['category', 'category-text'];
    if (e.target.className === 'app' || e.target.value === category ||
      (e.target.className === 'category' && e.target.children[1].value === category)) {
      document.removeEventListener('click', exitCategories);
      setToggle(false);
      setIsOpen(false);
      setCategory('');
      setShowTitles(false);
    } else if (_.contains(categoryClasses, e.target.className)) {
      setShowTitles(false);
      if (e.target.className === 'category') {
      setCategory(e.target.children[1].value);
    } else { setCategory(e.target.value); }

    }
  };

  const handleCatClick = (e, ev) => {
    let cat;
    if (e.target.className === 'category') {
      cat = e.target.children[1].value;
    } else { cat = e.target.value; }
    if (!isOpen) {
      setIsOpen(true);
      setToggle(true);
      setCategory(cat);
      document.addEventListener('click', exitCategories);
    } else if (e.target.className === 'app' || cat === category) {
      document.removeEventListener('click', exitCategories);
      setToggle(false);
      setIsOpen(false);
      setCategory('');
      setShowTitles(false);
    }
  };

  // let sectionWrapper = document.getElementById('section-wrapper');
  // if (sectionWrapper) {
  //   sectionWrapper.addEventListener('contextmenu', function(ev) {
  //     ev.preventDefault();
  //     alert('success!');
  //     return false;
  //   }, false);
  // }



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
             <Category category={category} cat={key} isOpen={isOpen} colors={colors} handleCatClick={handleCatClick} customMenuClick={customMenuClick}/>
           </div>
           <div className="dropdown-container" key={cat[0]}>
             {
              category === key
              ? (
                <div className="dropdown-wrapper" >
                  {
                    isOpen
                      ? ( <Subjects bmarks={bmarks} category={category} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} handleCatClick={handleCatClick} setIsOpen={setIsOpen} setCategory={setCategory} toggle={toggle} colors={colors}/>)
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

