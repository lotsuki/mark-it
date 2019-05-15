import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader.jsx';
import Dropdown from './Dropdown.jsx';

class Quicklinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    const { quicklinks } = this.props;
    return(
      <div className="quicklinksContainer">
        <SidebarHeader sidebarHeader="Quick links" />
        <Dropdown data={quicklinks}/>
      </div>
    );
  }
};

export default Quicklinks;


Quicklinks.propTypes = {
  quicklinks: PropTypes.array
};

Quicklinks.defaultProps = {
  quicklinks: []
};