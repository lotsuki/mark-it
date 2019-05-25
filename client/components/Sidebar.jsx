import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar.jsx';
import Bookmarks from './Bookmarks.jsx';
import Form from './Form.jsx';
import { useSpring, animated } from 'react-spring';


const Sidebar = ({ bmarks }) => {
  const [url, setUrl] = useState('');
  const [ isForm, setIsForm, ] = useState(false);
  const getUrl = (url) => {
    setUrl(url);
  };

  const displayForm = () => {
    if(isForm) {
      setIsForm(false);
    } else {
      setIsForm(true);
    }

  };

  return (
    <div id="container">
      <Navbar displayForm={displayForm}/>
      <div className="appContainer" data-testid="appContainer">
        <div className="sidebarContainer">
          <Bookmarks bmarks={bmarks} getUrl={getUrl}/>
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

