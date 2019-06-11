import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Titles from './Titles.jsx';
import Subject from './Subject.jsx';
import {useTrail, animated} from 'react-spring';
import helpers from '../lib/utils.js';


const Subjects = ({ bmarks, category, showConfirm, setShowConfirm, titlesUpdate, showTitles, setShowTitles, setTitles, handleCatClick }) => {
  const [ subj, setSubj ] = useState('');
  const [ update, setUpdate ] = useState(false);

  let subjects = [];
  _.forEach(bmarks, (cat, key) => {
    if( category === key) {
      subjects = subjects.concat(cat);
    }
  });

  const titleClasses = ['far fa-trash-alt', 'title', 'title-wrapper', 'titles-sub-container', 'titles-container', 'confirm-button yes-button', 'confirm-button no-button'];

  const displayNew = (e) => {
    let subjectClasses = ['subject', 'subject-text'];
    let className = e.target.className

    // if (_.contains(subjectClasses, className)) {
    //   handleSubjClick(e);
    // } else if (_.contains(categoryClasses, className)) {
    //   //TODO: double check this func
    //   handleCatClick(e);
    // }
  };

  const exitTitles = (e) => {
    if (!_.contains(titleClasses, e.target.className)) {
      setShowTitles(false);
      document.removeEventListener('click', exitTitles);
    } else {
      console.log('hey')
      //displayNew(e);
    }

  };

  const handleSubjClick = (e) => {
    if (!showTitles) {
      setSubj(e.target.innerText)
      document.addEventListener('click', exitTitles);
      fetch(`/titles/${category}/${e.target.innerText}`)
        .then(res => res.json())
        .then(data => {
         setTitles(data);
         setShowTitles(true);
        })
       .catch(err => { console.log('Error at GET', err); });
    } else {
      setShowTitles(false);
      setTitles([]);
      setSubj('');
    }
  };



  const trail = useTrail(subjects.length, {
    opacity: 1,
    height: 50,
    from: {opacity: 0, height: 0}}
  );

  return (
    <div className="subject-container">
      {trail.map(({height, opacity}, index) => (
         <div className="subject-wrapper" key={subjects[index]}>
           <div>
             <animated.div
               className="subject"
               onClick={handleSubjClick}
               style={{height, opacity}}
               key={subjects[index]}>
               <Subject clickedSubj={subj} subject={subjects[index]}/>
             </animated.div>
           </div>
         </div>
      ))}
    </div>
  )
};



export default Subjects;

Subjects.propTypes = {
  bmarks: PropTypes.object,
  category: PropTypes.string,
  titlesUpdate: PropTypes.array,
  displayConfirm: PropTypes.func
};

Subjects.defaultProps = {
  bmarks: {},
  category: '',
  titlesUpdate: [],
  displayConfirm: () => {}
};

