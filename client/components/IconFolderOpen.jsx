import React from 'react';
import PropTypes from 'prop-types';

const IconFolderOpen = ({ viewBox, color, width, height }) => (
  <svg className="icon-folder-open" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={color}>
    <title>folder-open</title>
    <path d="M26 30l6-16h-26l-6 16zM4 12l-4 18v-26h9l4 4h13v4z"></path>
  </svg>
);

export default IconFolderOpen;

IconFolderOpen.propTypes = {
  viewBox: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  folderOpen: PropTypes.bool,
};

IconFolderOpen.defaultProps = {
  viewBox: '',
  color: '',
  width: '',
  height: '',
  folderOpen: false
};