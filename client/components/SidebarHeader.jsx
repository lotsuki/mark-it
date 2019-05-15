import React from 'react';
import PropTypes from 'prop-types';

const SidebarHeader = ({sidebarHeader, addCategory}) => (
  <div className="sidebarHeaderWrapper">
    <div className="sidebarHeader" >{sidebarHeader}</div>
    <div className="add" onClick={addCategory}>+</div>
  </div>
);


export default SidebarHeader;

SidebarHeader.propTypes = {
  sidebarHeader: PropTypes.string
}
SidebarHeader.defaultProps = {
  sidebarHeader: 'Header'
}