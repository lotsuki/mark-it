import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Titles from './Titles.jsx';
import axios from 'axios';
import {useTrail, animated} from 'react-spring';

const Subjects = ({ bmarks, category, displayConfirm, titlesUpdate }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ titles, setTitles ] = useState([]);
  const [ subj, setSubj ] = useState('');
  const [ update, setUpdate ] = useState(false);

  const handleClick = (e) => {
    if (isOpen) {
      setIsOpen(false);
      setTitles('');
    } else {
      setSubj(e.target.innerText)

      axios.get(`/titles/${category}/${e.target.innerText}`)
       .then(result => {
         setTitles(result.data);
         setIsOpen(true);
        })
       .catch(err => { console.log('Error at GET', err); });
    }
  };

  let subjects = [];
  _.forEach(bmarks, (cat, key) => {
    if( category === key) {
      subjects = subjects.concat(cat);
    }
  });

  const trail = useTrail(subjects.length, {
    opacity: 1,
    height: 50,
    from: {opacity: 0, height: 0}}
  );

  const showTitles = (subject) => {
    if (titlesUpdate && subj === subject) {
      return <Titles titles={titlesUpdate} setTitles={setTitles} displayConfirm={displayConfirm} />
    } else if (isOpen && subj === subject) {
      return <Titles titles={titles} setTitles={setTitles} displayConfirm={displayConfirm} />
    } else {
      return null
    }
  };

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
               <span className="leftSide">{subjects[index]}</span>
               <i className="fas fa-chevron-down"></i>
             </animated.div>
           </div>
           <div>
             {
               (showTitles(subjects[index]))
             }
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
  titlesUpdate: PropTypes.func,
  displayConfirm: PropTypes.func
};

Subjects.defaultProps = {
  bmarks: {},
  category: ''
};

