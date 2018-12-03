import React from 'react';

const Subjects = ({ props, subjects, handleChange }) => (
  <div>
    <label>Subject</label>
    <select id="subjects" onChange={handleChange}>
      <option value="subjects">Subjects</option>
      {subjects.map(subject => {
        return <option key={subject} value={subject}>{subject}</option>
      })}
    </select>
  </div>
);


export default Subjects;