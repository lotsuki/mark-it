import React, { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';
import IconCustomMenu from './IconCustomMenu';
import IconDown from './IconDown';
import SubjectChild from './SubjectChild';
import utils from '../lib/utils';
import axios from 'axios';
import ContentContext from './ContentContext';

const Subject = ({ clickedSubj, subject, id, catID, subjectToEdit, setSubjectToEdit, color }) => {
  const [ subEdited, setSubEdited ] = useState('');
  const { groups, groupsID, setElementForCustomMenu, elementForCustomMenu, setIsEditingSubject, isEditingSubject } = useContext(ContentContext);

  console.log(subEdited, 'SUBJECT subEdited');
  console.log(catID, 'SUBJECT catID');
  console.log(groups, clickedSubj, elementForCustomMenu, isEditingSubject, subjectToEdit, 'SUBJECT');

  const resetSub = (e) => {
    console.log(e.target, 'SUBJECT resetSub');
    setSubjectToEdit('');
    setIsEditingSubject(false);
  };

  const handleSubEdit = (e) => {
    console.log(e.target, 'SUBJECT handleSubEdit');
    setSubEdited(e.target.value);
  };

  const handleSubEnter = (e) => {
    console.log(e.keyCode, 'SUBJECT handleSubEnter');
    if (e.keyCode === 13) {
      let subjID = utils.findSubjectID(groups, catID, subjectToEdit);
      console.log(subjID, 'SUBJECT handleSubEnter subjID');
      axios.get(`/update/${subEdited}/${subjID}/${catID}/${groupsID}`, {
        method: 'PATCH'
        })
        .then(res => {
           console.log(catID, subjectToEdit, subEdited, 'SUBJECT patch api res');
           utils.editSubjects(groups, catID, subjectToEdit, subEdited);
           elementForCustomMenu.style.visibility = '';
           setIsEditingSubject(false);
           setElementForCustomMenu('');
          console.log('PATCH request successful');
        })
        .catch(err => { console.log('Error at PATCH request', err); });
    }
  };


  const displaySubInputOnEdit = (subject, subjectToEdit) => {
    let sub = utils.getSubjectText(null, elementForCustomMenu, null, 'display');
    console.log(sub, 'SUBJECT displaySubOnEdit func sub');
    if (sub && sub === subject || subjectToEdit && subject === subjectToEdit) {
      console.log(sub, 'SUBJECT displaySubOnEdit func, return input');
      return (
         <div className="edit-subject-wrapper" >
          <IconDown />
          <input id="edit-subject" type="text" onBlur={resetSub} onKeyUp={handleSubEnter} onChange={handleSubEdit} defaultValue={subject} autoComplete="off" style={{border: '1px solid lightgray', boxShadow: '0px 1px 10px 0px rgba(32, 33, 36, 0.10)', padding: '7px 12px', marginRight: '8px', color: '#9E9D9D'}}/>
        </div>)
    }
    console.log(sub, 'SUBJECT displaySubOnEdit func, return div');
    return(
      <div className="subject-wrapper">
        <IconFolder viewBox={"-50 -15 85 72"} color={color} width={"45"} height={"38"}/>
        <div className="subject-text">{subject}</div>
      </div>
      )
  };

  return (
    <Fragment>
      {
        isEditingSubject
        ? ( displaySubInputOnEdit(subject, subjectToEdit) )
        : ( <SubjectChild color={color} subject={subject} subjectID={id} catID={catID} clickedSubj={clickedSubj}/> )
      }
    </Fragment>
  );
};

export default Subject;


Subject.propTypes = {
  clickedSubj: PropTypes.string,
  subject: PropTypes.string
};

Subject.defaultProps = {
  clickedSubj: '',
  subject: ''
};

