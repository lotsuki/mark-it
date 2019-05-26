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
    let appContainer = document.getElementById('app-container');
    let editContainer = document.getElementById('edit-container');
    if (!showEdit) {
      appContainer.style.height = '0';
      appContainer.style.visibility = 'hidden';
      editContainer.style.gridRow ='2/3';
      setShowEdit(true);
    } else {
      appContainer.style.height = '100%';
      appContainer.style.visibility = 'visible';
      editContainer.style.gridRow ='';
      setShowEdit(false);
    }
  };

  const editUpdate = (target) => {
   console.log(target)
  };

  return (
    <div id="container">
      <Navbar displayForm={displayForm} displayEdit={displayEdit} titles={titles}/>
      <div id="app-container" data-testid="app-container">
        <div className="sidebar-container">
          <Bookmarks bmarks={bmarks} />
        </div>
        <div className="right-container">
          {
            showForm
            ? (<Form/>)
            : (null)
          }
        </div>
      </div>
      <div id="edit-container">
        {
          showEdit
          ? (<Edit bmarks={bmarks} titles={titles} displayEdit={displayEdit} editUpdate={editUpdate}/>)
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

