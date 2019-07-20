import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';

const SubjectChild = ({ color, subject, clickedSubj }) => {
  let folderOpen = clickedSubj === subject;

  return (
    <Fragment>
      <IconFolder viewBox={"-50 -15 85 72"} color={color} width={"45"} height={"38"} folderOpen={folderOpen}/>
      <div className="subject-text">{subject}</div>
    </Fragment>
  )
};

export default SubjectChild;

SubjectChild.propTypes = {
  clickedSubj: PropTypes.string,
  subject: PropTypes.string,
  color: PropTypes.string
};

SubjectChild.defaultProps = {
  clickedSubj: '',
  subject: '',
  color: ''
};