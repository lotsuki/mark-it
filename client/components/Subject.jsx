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

const Subject = ({ clickedSubj, subject, catID, subjectToEdit, setSubjectToEdit, color }) => {
  const [ subEdited, setSubEdited ] = useState('');
  const { groups, groupsID, setElementForCustomMenu, elementForCustomMenu, setIsEditingSubject, isEditingSubject } = useContext(ContentContext);

  //handle enter when user edits subject
  const handleSubEnter = (e) => {
    if (e.keyCode === 13) {
      let subjID = utils.findSubjectID(groups, catID, subjectToEdit);
      axios.get(`/update/${subEdited}/${subjID}/${catID}/${groupsID}`, {
        method: 'PATCH'
        })
        .then(res => {
          //update react data and exit custom menu
           utils.editSubjects(groups, catID, subjectToEdit, subEdited);
           setIsEditingSubject(false);
           setElementForCustomMenu('');
        })
        .catch(err => { console.log('Error at PATCH request', err); });
    }
  };

  //when edit button clicked, displays input field
  const displaySubInputOnEdit = (subject, subjectToEdit) => {
    let sub = utils.getSubjectText(null, elementForCustomMenu, null, 'display');
    //if subject is subject clicked, render input
    if (sub && sub === subject || subjectToEdit && subject === subjectToEdit) {
      return (
         <Fragment>
          <IconDown />
          <input id="edit-subject" type="text" onKeyUp={handleSubEnter} onChange={e => setSubEdited(e.target.value)} defaultValue={subject} autoComplete="off" style={{border: '1px solid lightgray', boxShadow: '0px 1px 10px 0px rgba(32, 33, 36, 0.10)', padding: '7px 12px', marginRight: '8px', color: '#9E9D9D'}}/>
        </Fragment>)
    }

    //if subject is not subject clicked, render div
    return(
       <Fragment>
        <IconFolder viewBox={"-50 -15 85 72"} color={color} width={"45"} height={"38"}/>
        <div className="subject-text">{subject}</div>
      </Fragment>
      )
  };

  return (
    <Fragment>
      {
        isEditingSubject
        ? ( displaySubInputOnEdit(subject, subjectToEdit) )
        : ( <SubjectChild color={color} subject={subject} clickedSubj={clickedSubj}/> )
      }
      <IconCustomMenu name={subject}/>
    </Fragment>
  );
};

export default Subject;


Subject.propTypes = {
  clickedSubj: PropTypes.string,
  subject: PropTypes.string,
  catID: PropTypes.number,
  subjectToEdit: PropTypes.string,
  setSubjectToEdit: PropTypes.func,
  color: PropTypes.string
};

Subject.defaultProps = {
  clickedSubj: '',
  subject: '',
  catID: null,
  subjectToEdit: '',
  setSubjectToEdit: () => {},
  color: ''
};

