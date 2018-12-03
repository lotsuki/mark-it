import React from 'react';
import AddSubjects from './AddSubjects.jsx';
import style from '../style.css.js';


const Board = ({ subjects, subjectToAdd, subjectToAddChange, addSubject, deleteSubject }) => (
  <div style={style.boardContainer}>
    <div style={style.boardHeader}>
      <div>Bookmarks</div>
    </div>
     <AddSubjects subjects={subjects} subjectToAdd={subjectToAdd} subjectToAddChange={subjectToAddChange} addSubject={addSubject} deleteSubject={deleteSubject}/>
     <div style={style.boardWrapper}>
    {subjects.map(subject => {
      return <div style={style.boardButtons}><input key={subject} type="submit" value={subject}/></div>
    })}
    </div>
  </div>
);


export default Board;