import React, { useState, useEffect, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Titles from './Titles';
import Subject from './Subject';
import utils from '../lib/utils';
import ContentContext from './ContentContext';
import CategoriesContext from './CategoriesContext';


const Subjects = ({ color }) => {
  const [ subj, setSubj ] = useState('');
  const [ update, setUpdate ] = useState(false);
  const [ subjects, setSubjects ] = useState([]);
  const [ catID, setCatID ] = useState('');
  const [ subjectToEdit, setSubjectToEdit ] = useState('');
  const { groups, groupsID, showConfirm, showTitles, setShowTitles, setTitles, setGroupToDelete, isEditingSubject } = useContext(ContentContext);
  const { category, setCategory, setIsOpen } = useContext(CategoriesContext);

  console.log(subj, 'SUBJECTS subj');
  console.log(update, 'SUBJECTS update');
  console.log(catID, 'SUBJECTS catID');
  console.log(subjectToEdit, 'SUBJECTS subjectToEdit');
  console.log(groups, showConfirm, showTitles, isEditingSubject, category, 'SUBJECTS');

  useEffect(() => {
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].category === category) {
        console.log(groups[i].subjects, 'SUBJECTS initial render setSubjects');
        console.log(groups[i].id, 'SUBJECTS initial render setCatID');
        setSubjects(groups[i].subjects);
        setCatID(groups[i].id);
        break;
      }
    }
  }, [])

  const titleClasses = ['title', 'title-wrapper', 'titles-sub-container', 'titles-container', 'confirm-button yes-button', 'confirm-button no-button', 'delete-icon'];
  const subjectClasses = ['subject', 'subject-text'];

  const exitTitles = (e) => {
    console.log(e.target, 'SUBJECTS exitTitles func');
    let target = e.target;
    console.log(utils.isCustomMenu(target, 'custom-menu'), 'SUBJECTS exitTitles func isCustomMenu?')
    if (utils.isCustomMenu(target, 'custom-menu') || target.id === 'edit-subject') {
      console.log('SUBJECTS exitTitles func, isCustomMenu == true')
      return;
    }
    if (target.className === 'app' || target.id === 'titles-container'){
      console.log('SUBJECTS exitTitles func, class == app or titles-container');
      setIsOpen(false);
      setCategory('');
      setShowTitles(false);
      document.removeEventListener('click', exitTitles);
    } else if (!_.contains(titleClasses, target.className)) {
     console.log('SUBJECTS exitTitles func, is titles elem or confirm button');
     setShowTitles(false);
     document.removeEventListener('click', exitTitles);
    }
  };

  const handleSubjClick = (e) => {
     console.log(e.target, 'SUBJECTS handleSubjClick func');
    //refactor to use group obj, get rid of api calls and titles state

    let isCustomMenuIcon = utils.isCustomMenuIcon(e.target);
    if (isCustomMenuIcon) {
      console.log(e.target, 'SUBJECTS handleSubjClick func, isCustomMenuIcon == true');
      setGroupToDelete('subject');
    } else if (isEditingSubject) {
      console.log(e.target, 'SUBJECTS handleSubjClick func, isEditingSubject == true');
      setSubjectToEdit(e.target.value);
    }
    let subject;
    let target = e.target;
    // if (!showTitles) {
    //   console.log(category, 'category');

    //   setSubj(e.target.innerText);
    //   document.addEventListener('click', exitTitles);
    //   fetch(`/titles/${category}/${e.target.innerText}`)
    //     .then(res => res.json())
    //     .then(data => {
    //      setTitles(data);
    //      setShowTitles(true);
    //     })
    //    .catch(err => { console.log('Error at GET', err); });
    // } else

    if (e.target.innerText === subj) {
      console.log(e.target, 'SUBJECTS handleSubjClick func, if same subj clicked');
      setShowTitles(false);
      setTitles([]);
      setSubj('');
    } else if(_.contains(subjectClasses, e.target.className)) {
      if (e.target.className === 'subject-text') {
        subject = e.target.innerText;
      } else if (e.target.className === 'subject') {
        subject = e.target.children[1].innerText;
      }
      console.log(subject, category, 'SUBJECTS handleSubjClick func, if diff subj clicked');
      document.addEventListener('click', exitTitles);
      setSubj(subject);
      fetch(`/titles/${category}/${subject}`)
        .then(res => res.json())
        .then(data => {
         console.log(data, 'SUBJECTS handleSubjClick func, get titles api res')
         setTitles(data);
         setShowTitles(true);
        })
    }
  };

  //get rid of subject wrapper or put subject element as conatiner div for subject component

  return (
    <div className="subject-container">
      {
        subjects.map(subject => (
         <div className="subject-wrapper" key={subject.subject}>
           <div
             className="subject"
             onClick={handleSubjClick}
             key={subject.subject}
             style={subj === subject ? {background: '#D1D0D3'} : {background: ''}}>
               <Subject clickedSubj={subj} subject={subject.subject} id={subject.id} catID={catID} subjectToEdit={subjectToEdit} setSubjectToEdit={setSubjectToEdit} color={color} />
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


