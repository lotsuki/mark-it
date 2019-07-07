import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';
import IconCustomMenu from './IconCustomMenu';
import IconDown from './IconDown';
import utils from '../lib/utils';
import axios from 'axios';

const Subject = ({ groups, groupsID, clickedSubj, subject, color, openCustomMenu, id, catID, elementToEdit, elementForCustomMenu, isEditingSubject, setIsEditingSubject, subjectToEdit, setSubjectToEdit, setElementForCustomMenu }) => {
  const [ subEdited, setSubEdited ] = useState('');
  const [ subID, setSubID ] = useState('');

  // useEffect(() => {
  //   console.log('render')
  // }, [subEdited])



  const resetSub = (e) => {
    setSubjectToEdit('');
    setIsEditingSubject(false);
  };

  const handleSubEdit = (e) => {
    setSubEdited(e.target.value);
  };

   const handleSubEnter = (e) => {
    let subjID = utils.findSubjectID(groups, catID, subjectToEdit);
    console.log(elementForCustomMenu, 'elem')
    console.log(subjectToEdit, 'sub to edit')
    console.log(subject, 'subj')
    console.log(clickedSubj, 'clicked sub')
    console.log(elementToEdit, 'elem to edit')
    if (e.keyCode === 13) {
      axios.get(`/update/${subEdited}/${subjID}/${catID}/${groupsID}`, {
        method: 'PATCH'
        })
        .then(res => {
           utils.editSubjects(groups, catID, subjectToEdit, subEdited);
           elementForCustomMenu.style.visibility = '';
           // setCategory('');
           // setCategoryID('');
           // setIsEditing(false);
           setIsEditingSubject(false);
           setElementForCustomMenu('');
          console.log('PATCH request successful');
        })
        .catch(err => { console.log('Error at PATCH request', err); });
    }
  };

const displaySubOnEdit = () => {
  let sub = utils.getSubjectText(null, elementForCustomMenu, null, 'display');
  if (sub && sub === subject || subjectToEdit && subject === subjectToEdit) {
    return (
      <Fragment>
        <IconDown />
        <input id="edit-subject" type="text" onBlur={resetSub} onKeyUp={handleSubEnter} onChange={handleSubEdit} defaultValue={subject} autoComplete="off" style={{border: '1px solid lightgray', boxShadow: '0px 1px 10px 0px rgba(32, 33, 36, 0.10)', padding: '7px 12px', marginRight: '8px', color: '#9E9D9D'}}/>
      </Fragment>)
  }
  return(
    <Fragment>
      <IconFolder viewBox={"-50 -15 85 72"} color={color} width={"45"} height={"38"}/>
      <div className="subject-text">{subject}</div>
    </Fragment>
    )
};
// const displaySubOnEdit = () => {
//   let subjectToEdit = utils.getSubjectText(null, elementForCustomMenu, null, 'display');
//   // console.log(subjectToEdit, 'subjectToEdit')
//   //  console.log(subject, 'subject')
//    console.log(elementToEdit, 'elementToEdit')
//   if (subjectToEdit && subjectToEdit === subject) {
//     console.log('yes')
//     return (<div className="edit-subject">YAY</div>);
//   } else {
//     return (<div className="subject-text">what</div>);
//   }

// };

  return (
    <div className="subject-wrapper">
    {
      clickedSubj === subject
      ? (
        <div
          className="subject"
          style={{ background:'#D1D0D3' }}>
          <IconFolderOpen viewBox={"-50 -17 85 72"} color={color} width={"45"} height={"38"}/>
          <div className="subject-text" style={{ background:'#D1D0D3'}}>{subject}</div>
          <IconCustomMenu openCustomMenu={openCustomMenu} name={subject} subjectID={id} catID={catID}/>
        </div>
        )
      : (
        <div className="subject">
        {
          isEditingSubject
          ? ( displaySubOnEdit() )
          : (
            <Fragment>
            <IconFolder viewBox={"-50 -15 85 72"} color={color} width={"45"} height={"38"}/>
             <div className="subject-text">{subject}</div>
            </Fragment>
            )
        }
         <IconCustomMenu openCustomMenu={openCustomMenu} name={subject} subjectID={id} catID={catID}/>
       </div>
      )
    }
    </div>
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

