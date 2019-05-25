import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader.jsx';
import Categories from './Categories.jsx';


const Quicklinks = ({ qlinks, height, getUrl }) => {
  return (
    <div className="quicklinksContainer">
      <SidebarHeader sidebarHeader="QUICK LINKS" />
      <Categories sidebarSection={qlinks} height={'2.5rem'} section={'quicklinks'} getUrl={getUrl}/>
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

 // const displayTitleIcons = () => {
 //    // return <span className="bookmarkIcons">
 //    //          <select name="icone" id="icone" style={{fontFamily: "'FontAwesome', Arial"}}>
 //    //          <option>&#xf044;</option>


 //    //          </select>
 //    //        </span>

 //  };

 //  const addToQuicklinks = (e) => {
 //    // if(e.target.className.contains('heart')) {
 //    //   //axios.patch(update)
 //    //   //add to favorites
 //    // } else if (e.target.className.contains('star')) {
 //    //   //add to starred
 //    // } else if (e.target.className.contains('check')) {
 //    //   //delete from bookmarks
 //    //   //add to read
 //    // }
 //  };