import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar.jsx';
import Bookmarks from './Bookmarks.jsx';
import Form from './Form.jsx';
import Edit from './Edit.jsx';
import Confirm from './Confirm.jsx';
import Titles from './Titles.jsx';
import { useSpring, animated } from 'react-spring';

//TODO: when titles are displayed, and category is clicked, titles and subjects close (pass down boolean state to show if categories is open)
const Main = ({ bmarks, links }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ showEdit, setShowEdit ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showTitles, setShowTitles ] = useState(false);
  const [ titles, setTitles ] = useState([]);
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
  // const displayTitles = (subject, subj) => {
  //   if (titlesUpdate && subj === subject) {
  //     return <Titles titles={titlesUpdate} setTitles={setTitles} showConfirm={showConfirm} setShowConfirm={setShowConfirm} />
  //   } else if (showTitles && subj === subject) {
  //     return <Titles links={links} setTitles={setTitles} showConfirm={showConfirm} setShowConfirm={setShowConfirm} />
  //   } else {
  //     return null
  //   }
  // };


  return (
    <div id="container">
      <Navbar showForm={showForm} setShowForm={setShowForm} showEdit={showEdit} setShowEdit={setShowEdit} links={links}/>
      <div id="app-container" data-testid="app-container">
        <div className="sidebar-container">
          <Bookmarks bmarks={bmarks} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate}/>
        </div>
        <div className="titles-container">
          {
            showTitles
            ? (<Titles titles={titles} links={links} setTitles={setTitles} showConfirm={showConfirm} setShowConfirm={setShowConfirm} />)
            : (null)
          }
        </div>
      </div>
      <div className="form-container">
          {
            showForm
            ? (<Form showForm={showForm} bmarks={bmarks}/>)
            : (null)
          }
      </div>
      <div id="edit-container">
        {
          showEdit
          ? (<Edit bmarks={bmarks} links={links}  editUpdate={editUpdate}/>)
          : (null)
        }
      </div>
      <div className="confirm-container">
      {
        showConfirm
        ? (<Confirm showConfirm={showConfirm} setShowConfirm={setShowConfirm} titleToDelete={showConfirm[1]} subjectOfTitle={showConfirm[0]} showTitlesUpdate={showTitlesUpdate}/>)
        : (null)
      }
      </div>
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

