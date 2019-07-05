import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Titles from './Titles';
import Subject from './Subject';
import {useTrail, animated} from 'react-spring';


const Subjects = ({ groups, category, showConfirm, setShowConfirm, titlesUpdate, showTitles, setShowTitles, setTitles, handleCatClick, setIsOpen, setCategory, color, isOpen }) => {
  const [ subj, setSubj ] = useState('');
  const [ update, setUpdate ] = useState(false);
  const [ subjects, setSubjects ] = useState([]);

  //let subjects = [];
  useEffect(() => {
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].category === category) {
        setSubjects(groups[i].subjects);
        break;
      }
    }
  }, [])

  // _.forEach(bmarks, (cat, key) => {
  //   if( category === key) {
  //     subjects = subjects.concat(cat.slice(1));
  //   }
  // });


  const titleClasses = ['far fa-trash-alt', 'title', 'title-wrapper', 'titles-sub-container', 'titles-container', 'confirm-button yes-button', 'confirm-button no-button', 'delete-icon'];
  const subjectClasses = ['subject', 'subject-text'];

  const exitTitles = (e) => {
    console.log(e.target)
    let target = e.target;
    if (!_.contains(titleClasses, target.className)) {
     setShowTitles(false);
     document.removeEventListener('click', exitTitles);
    }
    if (target.className === 'app' || target.id === 'titles-container'){
      setIsOpen(false);
      setCategory('');
    }
  };

  const handleSubjClick = (e) => {
    let subject;
    let target = e.target;
    if (!showTitles) {
      setSubj(e.target.innerText);
      document.addEventListener('click', exitTitles);
      fetch(`/titles/${category}/${e.target.innerText}`)
        .then(res => res.json())
        .then(data => {
         setTitles(data);
         setShowTitles(true);
        })
       .catch(err => { console.log('Error at GET', err); });
    } else if (e.target.innerText === subj) {
      setShowTitles(false);
      setTitles([]);
      setSubj('');
    } else if(_.contains(subjectClasses, e.target.className)) {
      if (e.target.className === 'subject-text') {
        subject = e.target.innerText;
      } else if (e.target.className === 'subject') {
        subject = e.target.children[1].innerText;
      }
      setSubj(subject);
      fetch(`/titles/${category}/${subject}`)
        .then(res => res.json())
        .then(data => {
         setTitles(data);
         setShowTitles(true);
        })
    }
  };

  // const trail = useTrail(subjects.length, {
  //   opacity: isOpen ? 1 : 0,
  //   height: isOpen ? 50 : 0,
  //   from: {opacity: isOpen ? 0 : 1, height: isOpen ? 0 : 50}},
  // );
  // {trail.map(({height, opacity}, index) => (
  //   )}
  // {<div>
  //            <animated.div
  //              className="subject"
  //              onClick={handleSubjClick}
  //              style={{height, opacity}}
  //              key={subjects[index]}>
  //              <Subject clickedSubj={subj} subject={subjects[index]} color={color}/>
  //            </animated.div>
  //          </div>}

  return (
    <div className="subject-container">
      {
        subjects.map(subject => (
         <div className="subject-wrapper" key={subject.subject}>
           <div
             className="subject"
             onClick={handleSubjClick}
             key={subject.subject}>
               <Subject clickedSubj={subj} subject={subject.subject} color={color}/>
           </div>
         </div>
        ))
      }
    </div>
  )
};



export default Subjects;

// Subjects.propTypes = {
//   bmarks: PropTypes.object,
//   category: PropTypes.string,
//   titlesUpdate: PropTypes.array,
//   displayConfirm: PropTypes.func
// };

// Subjects.defaultProps = {
//   bmarks: {},
//   category: '',
//   titlesUpdate: [],
//   displayConfirm: () => {}
// };

