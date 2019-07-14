import React from 'react';
import PropTypes from 'prop-types';

const IconFolderClosed = ({ viewBox, color, width, height }) => (
  <svg className="icon-folder" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={color} >
    <title>folder</title>
    <path d="M14 4l4 4h14v22h-32v-26z"></path>
  </svg>
);

export default IconFolderClosed;

IconFolderClosed.propTypes = {
  viewBox: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  folderOpen: PropTypes.bool,
};

IconFolderClosed.defaultProps = {
  viewBox: '',
  color: '',
  width: '',
  height: '',
  folderOpen: false
};