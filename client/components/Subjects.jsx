import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Titles from './Titles.jsx';
import axios from 'axios';
import {useTrail, animated} from 'react-spring';

const Subjects = ({ sidebarSection, category }) => {
  //when subject is clicked, submit get request for titles using e
  const [ titles, setTitles ] = useState([]);
  const [ subj, setSubj ] = useState('');

  const getTitles = (e) => {
    setSubj(e.target.innerText)

    axios.get(`/titles/${category}/${e.target.innerText}`)
     .then(result => {
       setTitles(result.data);
      })
     .catch(err => { console.log('Error at GET', err); });
  };

  const subjects = (() => {
    return sidebarSection.reduce((a, b) => {
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
    <div className="subjectContainer">
      {trail.map(({height, opacity}, index) => (
        <div className="subjectWrapper" key={subjects[index]}>
               <animated.div
                 className="subject"
                 onClick={getTitles}
                 style={{height, opacity}}
                 key={subjects[index]}>{subjects[index]}</animated.div>
                 <div className="titlesDropdown" key={`${subjects[index]}${index}`}>
               {
                titles && subj === subjects[index]
                ? (
                    <Titles titles={titles}/>
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



