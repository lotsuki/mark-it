import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Titles from './Titles.jsx';
import Subject from './Subject.jsx';
import axios from 'axios';
import {useTrail, animated} from 'react-spring';

//if subject is clicked, titles comp gets rendered

const Subjects = ({ bmarks, category, showConfirm, setShowConfirm, titlesUpdate, showTitles, setShowTitles, setTitles }) => {
  const [ subj, setSubj ] = useState('');
  const [ update, setUpdate ] = useState(false);

  let subjects = [];
  _.forEach(bmarks, (cat, key) => {
    if( category === key) {
      subjects = subjects.concat(cat);
    }
  });

  const handleClick = (e) => {
    if (showTitles) {
      setShowTitles(false)
      setTitles([]);
      setSubj('')
    } else {
      setSubj(e.target.innerText)

      axios.get(`/titles/${category}/${e.target.innerText}`)
       .then(result => {
         setTitles(result.data)
         setShowTitles(true)
        })
       .catch(err => { console.log('Error at GET', err); });
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
               onClick={handleClick}
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

