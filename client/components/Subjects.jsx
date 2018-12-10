import React from 'react';
import style from '../style.css.js';

const Subjects = ({ props, subjects, handleChange }) => {
  if(!subjects || subjects.length < 0) {
    return (
      <div style={style.subjectsContainer}>
        <div style={style.subjectsLabel}>
          <label>Subject</label>
        </div>
        <div style={style.subjectsSelect}>
          <select id="subjects" onChange={handleChange}>
            <option value="subjects">All Subjects</option>
            </select>
        </div>
      </div>
      )
  } else {
    return (
      <div style={style.subjectsContainer}>
        <div style={style.subjectsLabel}>
          <label>Subject</label>
        </div>
        <div style={style.subjectsSelect}>
          <select id="subjects" onChange={handleChange}>
            <option value="subjects">All Subjects</option>
            {subjects.map(subject => {
              console.log(subject)
              return <option key={subject} value={subject}>{subject}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
};


export default Subjects;