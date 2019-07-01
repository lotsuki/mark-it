import React from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import IconFolderOpen from './IconFolderOpen';


const Subject = ({ clickedSubj, subject, color }) => {
  return (
    <div className="subject-wrapper">
    {
      clickedSubj === subject
      ? (
        <div
          className="subject"
          style={{ background:'#D1D0D3' }}>
          <IconFolderOpen viewBox={"-50 -17 85 72"} color={color} width={"45"} height={"38"}/>
          <span className="subject-text" style={{ background:'#D1D0D3'}}>{subject}</span>
        </div>
        )
      : (
        <div
          className="subject"
          style={{ }}>
          <IconFolder viewBox={"-50 -15 85 72"} color={color} width={"45"} height={"38"}/>
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