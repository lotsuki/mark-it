import React from 'react';
import AddSubjects from './AddSubjects.jsx';
import Dropdown from './Dropdown.jsx';
import style from '../style.css.js';


const Board = ({ subjects, sites, subjectToAdd, subjectToAddChange, addSubject, deleteSubject }) => (
  <div style={style.boardContainer}>
    <div style={style.boardHeader}>
      <div>Bookmarks</div>
    </div>
     <AddSubjects subjects={subjects} subjectToAdd={subjectToAdd} subjectToAddChange={subjectToAddChange} addSubject={addSubject} deleteSubject={deleteSubject}/>
     <div style={style.boardWrapper}>
    {subjects.map(subject => {
      return <Dropdown  key={subject} subject={subject} sites={sites}/>
    })}
    </div>
  </div>
);


export default Board;