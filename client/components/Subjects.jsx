import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Subject from './Subject';
import utils from '../lib/utils';
import ContentContext from './ContentContext';
import CategoriesContext from './CategoriesContext';
import axios from 'axios';

const Subjects = ({ color }) => {
  const [ subj, setSubj ] = useState('');
  const [ subjects, setSubjects ] = useState([]);
  const [ catID, setCatID ] = useState('');
  const [ subjectToEdit, setSubjectToEdit ] = useState('');
  const { groups, setGroup, setTitles, isEditing } = useContext(ContentContext);
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

  //hides titles
  const exitTitles = (e) => {
    let target = e.target;
    if (target.className === 'app' || target.id === 'titles-container'){
      setIsOpen(false);
      setCategory('');
      setTitles(null);
      document.removeEventListener('click', exitTitles);
    } else if (titleClasses.indexOf(target.className) === -1) {
      setTitles(null);
     document.removeEventListener('click', exitTitles);
    }
  };

  //handles subject click
  const handleSubjClick = (e) => {
    let isCustomMenuIcon = utils.isCustomMenuIcon(e.target);
    if (isCustomMenuIcon) {
      //if user clicked on custom menu icon, set group to delete (category or subject)
      setGroup('subject');
    } else if (isEditing) {
      //if user clicked on edit button in custom menu
      setSubjectToEdit(e.target.value);
    }
    let subject;

    //if user clicks on subject that is open, close subject
    if (e.target.innerText === subj) {
      setTitles(null);
      setSubj('');

    //if user click on new subject
    } else if(subjectClasses.indexOf(e.target.className) !== -1) {
      //set subject based on target clicked
      if (e.target.className === 'subject-text') {
        subject = e.target.innerText;
      } else if (e.target.className === 'subject') {
        subject = e.target.children[1].innerText;
      }

      //get titles of subject clicked
      document.addEventListener('click', exitTitles);
      setSubj(subject);
      axios.get(`/titles/${category}/${subject}`)
        .then(res => setTitles(res.data))
    }
  };

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
               <Subject clickedSubj={subj} subject={subject.subject} catID={catID} subjectToEdit={subjectToEdit} setSubjectToEdit={setSubjectToEdit} color={color} />
           </div>
         </div>
        ))
      }
    </div>
  )
};


export default Subjects;

Subjects.propTypes = {
  color: PropTypes.string
};

Subjects.defaultProps = {
  color: ''
};


