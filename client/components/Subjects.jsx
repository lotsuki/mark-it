import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Subjects = ({ sidebarSection, category, target }) => {
  //when subject is clicked, submit get request for titles using e
  const [ titles, setTitles ] = useState([]);

  const getTitles = (e) => {
    let subjParam = e.target.innerText;

    axios
     .get(`/titles/${category}/${subjParam}`)
     .then(result => {
       console.log(result, 'result')
       // setTitles(result.data);
      })
     .catch(err => { console.log('Error at GET', err); });

  };

  const subjects = () => {
    return sidebarSection.reduce((a, b) => {
      if(b[category]) { return b[category]; }
      return a;
    }, {});
  };

  return (
    <ul className="subjectContainer" onClick={getTitles} style={{
      zIndex: 1
    }}>
      {
        subjects().map((subject, i) => (
           <li className="subject"
              key={subject}
             style={{
              transitionDelay:`${i * 0.5 / subjects().length}s`
           }}>{subject}</li>
        ))
      }
    </ul>
  );
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

