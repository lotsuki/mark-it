import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader.jsx';
import Dropdown from './Dropdown.jsx';
import Categories from 'Categories.jsx';


const Quicklinks = ({ qlinks }) => {
  return (
    <SidebarHeader sidebarHeader="QUICK LINKS" />
    <Categories qlinks={qlinks}/>
  );
};

// class Quicklinks extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//     }
//   }

//   render() {
//     const { quicklinks } = this.props;
//     return(
//       <div className="quicklinksContainer">
//
//
//       </div>
//     );
//   }
// };

export default Quicklinks;


Quicklinks.propTypes = {
  quicklinks: PropTypes.array
};

Quicklinks.defaultProps = {
  quicklinks: []
};