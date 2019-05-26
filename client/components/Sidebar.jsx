import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar.jsx';
import Bookmarks from './Bookmarks.jsx';
import Form from './Form.jsx';
import Edit from './Edit.jsx';
import { useSpring, animated } from 'react-spring';


const Sidebar = ({ bmarks, titles }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ showEdit, setShowEdit ] = useState(false);

  const displayForm = () => {
    if (!showForm) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  const displayEdit = () => {
    let appContainer = document.getElementById('appContainer');
    if (!showEdit) {
      appContainer.style.visibility = 'hidden';
      setShowEdit(true);
    } else {
      appContainer.style.visibility = 'visible';
      setShowEdit(false);
    }
  };

  return (
    <div id="container">
      <Navbar displayForm={displayForm} displayEdit={displayEdit} titles={titles}/>
      <div id="appContainer" data-testid="appContainer">
        <div className="sidebarContainer">
          <Bookmarks bmarks={bmarks} />
        </div>
        <div className="rightContainer">
          {
            showForm
            ? (<Form/>)
            : (null)
          }
        </div>
      </div>
      <div className="editContainer">
        {
          showEdit
          ? (<Edit bmarks={bmarks} titles={titles} displayEdit={displayEdit}/>)
          : (null)
        }
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

