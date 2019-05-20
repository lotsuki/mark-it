
// import Dropdown from './Dropdown.jsx';
// import Navbar from './Navbar.jsx';
// import utils from '../lib/utils.js';


import React from 'react';
import Quicklinks from './Quicklinks.jsx';
import Bookmarks from './Bookmarks.jsx';


const Sidebar = ({ userID, qlinks, bmarks }) => {
  return (
    <Quicklinks qlinks={qlinks}/>
    <Bookmarks bmarks={bmarks}/>
  )
}

export default Sidebar;


// //FIX WITH HOOKS
//   updateStateAfterPostReq(data) {
//     //this.setState({ data })
//     location.reload();
//   }
//   render() {
//     const { data, quicklinks, bookmarks} = this.state;
//     return (
//       <div className="container">
//         <Navbar />
//         <div className="navbarBorder"></div>
//         <div className="appContainer" data-testid="appContainer">
//           <div className="sidebarContainer">
//             <Quicklinks quicklinks={quicklinks} />
//             <Bookmarks bookmarks={bookmarks} />
//           </div>
//           <div className="sidebarBorder"></div>
//           <Form updateStateAfterPostReq={this.updateStateAfterPostReq}/>
//         </div>
//       </div>
//     );
//   }
// };
//   render() {
//     const { data, quicklinks, bookmarks} = this.state;
//     return (
//       <div className="container">
//         <div className="appContainer" data-testid="appContainer">
//           <Quicklinks quicklinks={quicklinks} />
//           <Bookmarks bookmarks={bookmarks} />
//         </div>
//         <Form updateStateAfterPostReq={this.updateStateAfterPostReq}/>
//       </div>
//     );
//   }
// };
