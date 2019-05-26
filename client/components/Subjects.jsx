import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Titles from './Titles.jsx';
import axios from 'axios';
import {useTrail, animated} from 'react-spring';

const Subjects = ({ bmarks, category }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ titles, setTitles ] = useState([]);
  const [ subj, setSubj ] = useState('');

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

  const subjects = (() => {
    return bmarks.reduce((a, b) => {
      if(b[category]) { return b[category]; }
      return a;
    }, {});
  })();

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
               <span className="leftSide">{subjects[index]}</span>
               <i className="fas fa-chevron-down"></i>
             </animated.div>
            </div>
           <div>
            {
              isOpen && subj === subjects[index]
              ? (
                  <Titles titles={titles} setTitles={setTitles} />
                )
              : (null)
             }
            </div>
          </div>
      ))}
    </div>
  )
};



export default Subjects;

Subjects.propTypes = {
  sidebarSection: PropTypes.array,
  category: PropTypes.string
};

Subjects.defaultProps = {
  sidebarSection: [],
  category: ''
};

