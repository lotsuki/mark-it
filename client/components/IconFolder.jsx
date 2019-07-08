import React, { Fragment } from 'react';
import IconFolderClosed from './IconFolderClosed';
import IconFolderOpen from './IconFolderOpen';

const IconFolder = ({ viewBox, color, width, height, isOpen }) => (
  <Fragment>
    {
      isOpen
      ? ( <IconFolderOpen viewBox={viewBox} color={color} width={width} height={height}/> )
      : ( <IconFolderClosed viewBox={viewBox} color={color} width={width} height={height}/> )
    }
  </Fragment>
);

export default IconFolder;