import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Titles from './Titles.jsx';
import axios from 'axios';

const Subjects = ({ sidebarSection, category, target }) => {
  //when subject is clicked, submit get request for titles using e
  const [ titles, setTitles ] = useState([]);
  const [ subj, setSubj ] = useState('');

  const getTitles = (e) => {
    setSubj(e.target.innerText)

    axios.get(`/titles/${category}/${e.target.innerText}`)
     .then(result => {
       console.log(result, 'result')
       setTitles(result.data);
      })
     .catch(err => { console.log('Error at GET', err); });

    // await axios
    //  .get(`/titles/${category}/${subj}`)
    //  .then(result => {
    //    console.log(result, 'result')
    //    setTitles(result.data);
    //   })
    //  .catch(err => { console.log('Error at GET', err); });

  };

  const subjects = () => {
    return sidebarSection.reduce((a, b) => {
      if(b[category]) { return b[category]; }
      return a;
    }, {});
  };

  return (
    <ul className="subjectContainer" >
      {
        subjects().map((subject, i) => (
          <div className="subjectWrapper" key={subject}>
             <li
               className="subject"
               onClick={getTitles}
               key={subject}
               style={{
                transitionDelay:`${i * 0.5 / subjects().length}s`
             }}>{subject}</li>

             <div className="titlesDropdown" key={`${subject}${i}`}>
               {
                titles && subj === subject
                ? (
                    <Titles titles={titles}/>
                  )
                : (null)
               }
             </div>
           </div>
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

