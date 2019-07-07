import React, { useState, useEffect, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Titles from './Titles';
import Subject from './Subject';
import utils from '../lib/utils';
import {useTrail, animated} from 'react-spring';
import MainContext from './MainContext';
import CategoriesContext from './CategoriesContext';


const Subjects = ({ color }) => {
  const [ subj, setSubj ] = useState('');
  const [ update, setUpdate ] = useState(false);
  const [ subjects, setSubjects ] = useState([]);
  const [ catID, setCatID ] = useState('');
  const [ subjectToEdit, setSubjectToEdit ] = useState('');
  const { groups, groupsID, showConfirm, showTitles, setShowTitles, setTitles, setGroupToDelete, isEditingSubject } = useContext(MainContext);
  const { category, setCategory, setIsOpen } = useContext(CategoriesContext);

  useEffect(() => {
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].category === category) {
        setSubjects(groups[i].subjects);
        setCatID(groups[i].id);
        break;
      }
    }
  }, [])

  const titleClasses = ['title', 'title-wrapper', 'titles-sub-container', 'titles-container', 'confirm-button yes-button', 'confirm-button no-button', 'delete-icon'];
  const subjectClasses = ['subject', 'subject-text'];

  const exitTitles = (e) => {
    let target = e.target;
    if (utils.isCustomMenu(target, 'custom-menu') || target.id === 'edit-subject') {
      return;
    }
    if (target.className === 'app' || target.id === 'titles-container'){
      setIsOpen(false);
      setCategory('');
      setShowTitles(false);
      document.removeEventListener('click', exitTitles);
    } else if (!_.contains(titleClasses, target.className)) {
     setShowTitles(false);
     document.removeEventListener('click', exitTitles);
    }
  };

  const handleSubjClick = (e) => {
    //refactor to use group obj, get rid of api calls and titles state

    let isCustomMenuIcon = utils.isCustomMenuIcon(e.target);
    if (isCustomMenuIcon) {
      console.log('custom menu for subject click')
      // console.log(e.target, 'TARGET')
      // setElementForCustomMenu(e.target);
      setGroupToDelete('subject');
      //setElementToEdit(e.target.value);
    } else if (isEditingSubject) {
      setSubjectToEdit(e.target.value);
    }
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
      document.addEventListener('click', exitTitles);
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
               <Subject clickedSubj={subj} subject={subject.subject} id={subject.id} catID={catID} subjectToEdit={subjectToEdit} setSubjectToEdit={setSubjectToEdit} color={color}/>
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

