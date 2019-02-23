import React from 'react';
import style from '../style.css.js';

const AddSubjects = ({ subjects, subjectToAdd, subjectToAddChange, addSubject, deleteSubject }) =>(
  <div className="subjectContainer">
    <div>
      <div>
        <label>Add Subject</label>
      </div>
      <input type="text" placeholder="Enter subject" value={subjectToAdd} onChange={subjectToAddChange} />
      <input type="submit" value="Add" onClick={addSubject}/>
      <input type="submit" value="Delete" onClick={deleteSubject}/>
    </div>
  </div>
);

export default AddSubjects;