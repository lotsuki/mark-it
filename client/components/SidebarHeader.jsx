import React from 'react';
import PropTypes from 'prop-types';

const SidebarHeader = ({ sidebarHeader }) => (
  <div className="sidebar-header-wrapper">
    <div className="sidebar-header" data-testid="sidebar-header">{sidebarHeader}</div>
  </div>
);


export default SidebarHeader;

SidebarHeader.propTypes = {
  sidebarHeader: PropTypes.string
};

SidebarHeader.defaultProps = {
  sidebarHeader: 'Header'
};