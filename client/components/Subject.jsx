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
          style={{ background:'#92ECCA', color: '#fff' }}>
          <i className="fas fa-folder-open" style={{ background:'#92ECCA', color: '#fff' }}></i>
          <span className="subject-text" style={{ background:'#92ECCA', color: '#fff' }}>{subject}</span>
          <i className="fas fa-chevron-right" style={{visibility: 'visible', color: '#fff'}}></i>
        </div>
        )
      : (
        <div
          className="subject"
          style={{ }}>
          <i className="fas fa-folder"></i>
          <span className="subject-text">{subject}</span>
          <i className="fas fa-chevron-right"></i>
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