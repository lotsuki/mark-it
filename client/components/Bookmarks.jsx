import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader.jsx';
import Dropdown from './Dropdown.jsx';
import Categories from 'Categories.jsx';

const Bookmarks = ({ bmarks }) => {
  return (
    <SidebarHeader sidebarHeader="MY BOOKMARKS" />
    <Categories qlinks={qlinks}/>
  );
};

// class Bookmarks extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//     }
//   }

//   render() {
//     const { bookmarks } = this.props;
//     return(
//       <div className="bookmarksContainer">
//         <SidebarHeader sidebarHeader="MY BOOKMARKS"/>
//         <Dropdown data={bookmarks}/>
//       </div>
//     );
//   }
// };


export default Bookmarks;



Bookmarks.propTypes = {
  bookmarks: PropTypes.array
};

Bookmarks.defaultProps = {
  bookmarks: []
};
