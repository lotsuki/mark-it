import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar.jsx';
import Bookmarks from './Bookmarks.jsx';
import Form from './Form.jsx';
import { useSpring, animated } from 'react-spring';


const Sidebar = ({ bmarks, titles }) => {
  const [ isForm, setIsForm, ] = useState(false);

  const displayForm = () => {
    if(isForm) {
      setIsForm(false);
    } else {
      setIsForm(true);
    }
  };

  return (
    <div id="container">
      <Navbar displayForm={displayForm} titles={titles}/>
      <div className="appContainer" data-testid="appContainer">
        <div className="sidebarContainer">
          <Bookmarks bmarks={bmarks} />
        </div>
        <div className="rightContainer">
          {
            isForm
            ? (<Form/>)
            : (null)
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  qlinks: PropTypes.array,
  bmarks: PropTypes.array
};

Sidebar.defaultProps = {
  qlinks: [],
  bmarks: []
};

