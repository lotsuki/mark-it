import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IconFolderClosed from './IconFolderClosed';
import IconFolderOpen from './IconFolderOpen';

const IconFolder = ({ viewBox, color, width, height, folderOpen }) => (
  <Fragment>
    {
      folderOpen
      ? ( <IconFolderOpen viewBox={viewBox} color={color} width={width} height={height}/> )
      : ( <IconFolderClosed viewBox={viewBox} color={color} width={width} height={height}/> )
    }
  </Fragment>
);

export default IconFolder;

IconFolder.propTypes = {
  viewBox: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  folderOpen: PropTypes.bool,
};

IconFolder.defaultProps = {
  viewBox: '',
  color: '',
  width: '',
  height: '',
  folderOpen: false
};