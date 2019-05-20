import React from 'react';
import PropTypes from 'prop-types';

const SidebarHeader = ({ sidebarHeader }) => (
  <div className="sidebarHeaderWrapper">
    <div className="sidebarHeader" data-testid="sidebarHeader">{sidebarHeader}</div>
    <div className="add">+</div>
  </div>
);


export default SidebarHeader;


SidebarHeader.propTypes = {
  sidebarHeader: PropTypes.string
};

SidebarHeader.defaultProps = {
  sidebarHeader: 'Header'
};