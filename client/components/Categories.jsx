import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Subjects from './Subjects';
import Category from './Category';

const Categories = ({ groups, categoryID, setCategoryID, showConfirm, setShowConfirm, titlesUpdate, setShowTitles, showTitles, setTitles, openCustomMenu, setIsEditing, isEditing, elementToEdit, setElementToEdit, setElementForCustomMenu, elementForCustomMenu }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ category, setCategory ] = useState('');
  const [ categories, setCategories ] = useState([]);
  const [ subjects, setSubjects ] = useState([]);


  // if (categories)
  // const setCatsAndSubs = () => {
  //   let tempCats = [];
  //   let tempSubs = [];
  //   for (var key in bmarks) {
  //     console.log(key, 'key')
  //     for (var prop in bmarks[key]) {
  //       console.log(prop, 'hi')
  //       tempCats.push(prop);
  //       tempSubs = tempSubs.concat(bmarks[key][prop])
  //     }
  //   }
  //   setCategories(tempCats);
  //   setSubjects(tempSubs);
  // };

  // useEffect(() => {
  //   console.log('categoreis')
  //   let categories = [];
  //   groups.forEach
  //   setCatsAndSubs();
  //    _.map(bmarks, (obj, index) => {
  //     _.map(obj, (value, key) => {
  //       console.log(key, 'KEY')
  //     })
  // }, [])

  console.log(groups, 'groups in categories')
    //console.log(categories)
    //return false;
  //}, [])

  const exitCategories = (e) => {
    if (e.target.className === 'app' || e.target.className === 'sidebar-container') {
      document.removeEventListener('click', exitCategories);
      setIsOpen(false);
      setCategory('');
      setCategoryID('');
      setShowTitles(false);
    }
    // else if (_.contains(categoryClasses, e.target.className)) {
    //   setShowTitles(false);
    //   if (e.target.className === 'category') {
    //   setCategory(e.target.children[1].value);
    // } else { setCategory(e.target.value); }

    // }
  };

  // (e.target.className.baseVal && e.target.className.baseVal.includes('icon-custom-menu')) || (e.target.tagName === 'path' && e.currentTarget.firstChild.lastChild.className.baseVal.includes('icon-custom-menu')))

  const handleCatClick = (e) => {
    if (e.target.className.baseVal && e.target.className.baseVal.includes('icon-custom-menu') || e.target.parentElement.className.baseVal && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
      console.log('SVG')
    } else if (e.target.style.border === '1px solid lightgray') {
      setElementToEdit(e.target.value);
    } else {
      let cat;
      if (e.target.className === 'category') {
        cat = e.target.children[1].innerText;
      } else if (e.currentTarget.className === 'category-wrapper') {
        cat = e.currentTarget.firstChild.children[1].innerText;
      } else {
        cat = e.target.innerText;
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
    }

  };

  // const groups = new Document({
  // groups: [
  // {
  //   id: 0,
  //   category: 'Tech',
  //   color: '#E58129',
  //   subjects: [
  //     {
  //       id: 0,
  //       subject: 'React'
  //     },
  //     {
  //       id: 1,
  //       subject: 'Python'
  //     }
  //   ]
  // },


  return (
    <div className="section-container" >
     <div id="section-wrapper">
       {groups.map(group => {

         return (
          <div className="category-container" key={group.category}>
           <div
             className="category-wrapper"
             onClick={handleCatClick}
             key={group.category}>
             <Category groups={groups} categoryID={categoryID} setCategoryID={setCategoryID} setCategory={setCategory} category={category} exitCategories={exitCategories} cat={group.category} color={group.color} setIsOpen={setIsOpen} isOpen={isOpen} openCustomMenu={openCustomMenu} setIsEditing={setIsEditing} isEditing={isEditing} setElementToEdit={setElementToEdit} elementToEdit={elementToEdit} elementForCustomMenu={elementForCustomMenu} setElementForCustomMenu={setElementForCustomMenu}/>
           </div>
           <div className="dropdown-container" key={group.color}>
             {
              category === group.category
              ? (
                <div className="dropdown-wrapper" >
                  {
                    isOpen
                      ? ( <Subjects groups={groups} category={category} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} handleCatClick={handleCatClick} setIsOpen={setIsOpen} setCategory={setCategory} color={group.color} isOpen={isOpen}/>)
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

// Categories.propTypes = {
//   bmarks: PropTypes.object,
//   displayConfirm: PropTypes.func,
//   titlesUpdate: PropTypes.array
// };

// Categories.defaultProps = {
//   bmarks: {},
//   titlesUpdate: [],
//   displayConfirm: () => {}
// };

