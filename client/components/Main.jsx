import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar.jsx';
import Bookmarks from './Bookmarks.jsx';
import Form from './Form.jsx';
import Edit from './Edit.jsx';
import Confirm from './Confirm.jsx';
import { useSpring, animated } from 'react-spring';


const Main = ({ bmarks, titles }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ showEdit, setShowEdit ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ titleToDelete, setTitleToDelete ] = useState('');
  const [ subjectOfTitle, setSubjectOfTitle ] = useState('');
  const [ titlesUpdate, setTitlesUpdate ] = useState(null);

  const showTitlesUpdate = (data) => {
    setTitlesUpdate(data)
  };

  const editUpdate = () => {
    // (async () => {
    //   await displayEdit();
    //   await waitForPromise()
    // })()
  };


  return (
    <div id="container">
      <Navbar showForm={showForm} setShowForm={setShowForm} showEdit={showEdit} setShowEdit={setShowEdit} titles={titles}/>
      <div id="app-container" data-testid="app-container">
        <div className="sidebar-container">
          <Bookmarks bmarks={bmarks} showConfirm={showConfirm} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} />
        </div>
        <div className="right-container">
          {
            showForm
            ? (<Form showForm={showForm} bmarks={bmarks}/>)
            : (null)
          }
        </div>
      </div>
      <div id="edit-container">
        {
          showEdit
          ? (<Edit bmarks={bmarks} titles={titles}  editUpdate={editUpdate}/>)
          : (null)
        }
      </div>
      {
        showConfirm
        ? (<Confirm showConfirm={showConfirm} setShowConfirm={setShowConfirm} titleToDelete={showConfirm[1]} subjectOfTitle={showConfirm[0]} showTitlesUpdate={showTitlesUpdate}/>)
        : (null)
      }

    </div>
  );
};

export default Main;

Main.propTypes = {
  bmarks: PropTypes.object,
  titles: PropTypes.array
};

Main.defaultProps = {
  bmarks: {},
  titles: []
};

