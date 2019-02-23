import React from 'react';


const Subjects = ({ props, subjects, handleChange }) => {
  if(!subjects || subjects.length < 0) {
    return (
      <div className="subjectsContainer">
        <div className="subjectsLabel">
          <label>Subject</label>
        </div>
        <div className="subjectsSelect">
          <select id="subjects" onChange={handleChange}>
            <option value="subjects">All Subjects</option>
            </select>
        </div>
      </div>
      )
  } else {
    return (
      <div className="subjectsContainer">
        <div className="subjectsLabel">
          <label>Subject</label>
        </div>
        <div className="subjectsSelect">
          <select id="subjects" onChange={handleChange}>
            <option value="subjects">All Subjects</option>
            {subjects.map(subject => {
              return <option key={subject} value={subject}>{subject}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
};


export default Subjects;