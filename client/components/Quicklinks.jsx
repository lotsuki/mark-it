import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader.jsx';
import Categories from './Categories.jsx';


const Quicklinks = ({ qlinks }) => {
  return (
    <div className="quicklinksContainer">
      <SidebarHeader sidebarHeader="QUICK LINKS" />
      <Categories sidebarSection={qlinks} height={'2rem'} size={'.95rem'}/>
    </div>
  );
};


export default Quicklinks;


Quicklinks.propTypes = {
  qlinks: PropTypes.array
};

Quicklinks.defaultProps = {
  qlinks: []
};