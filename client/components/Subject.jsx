import React from 'react';
import PropTypes from 'prop-types';


const Subject = ({ clickedSubj, subject }) => {
  return (
    <div className="subject-wrapper">
    {
      clickedSubj === subject
      ? (
        <div
          className="subject"
          style={{ background:'#92ECCA' }}>
          <svg className="icon-folder-open" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="-40 -17 75 75" fill="gray">
              <title>folder-open</title>
              <path d="M26 30l6-16h-26l-6 16zM4 12l-4 18v-26h9l4 4h13v4z"></path>
           </svg>
          <span className="subject-text" style={{ background:'#92ECCA'}}>{subject}</span>
        </div>
        )
      : (
        <div
          className="subject"
          style={{ }}>
          <svg className="icon-folder" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="-40 -17 75 75" fill="gray">
              <title>folder</title>
              <path d="M14 4l4 4h14v22h-32v-26z"></path>
           </svg>
          <span className="subject-text">{subject}</span>
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