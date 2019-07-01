import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Bookmarks from './Bookmarks';
import Form from './Form';
import Edit from './Edit';
import Confirm from './Confirm';
import Titles from './Titles';
import { useSpring, animated } from 'react-spring';

//try wihtout fragments

const Main = ({ bmarks, links, colors }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ showEdit, setShowEdit ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showTitles, setShowTitles ] = useState(false);
  const [ titles, setTitles ] = useState([]);
  const [ titleToDelete, setTitleToDelete ] = useState('');
  const [ subjectOfTitle, setSubjectOfTitle ] = useState('');
  const [ titlesUpdate, setTitlesUpdate ] = useState(null);

  const showTitlesUpdate = (data) => {
    setTitlesUpdate(data);
    setShowTitles(true);
  };

  const findSubject = (titl) => {
    let subj;
    links.forEach(obj => {
      if (obj.title === titl) { subj = obj.subject; }
    });
    return subj;
  };

  const deleteTitle = (target) => {
    let title = target.parentElement.firstChild.innerText;
    let subject = findSubject(title)
    setTitleToDelete(title);
    setSubjectOfTitle(subject);
  };

  const displayContainer = () => {
    if (showForm) {
      return <Form showForm={showForm} setShowForm={setShowForm} bmarks={bmarks}/>
    } else if (showEdit) {
      return <Edit bmarks={bmarks} links={links} />
    } else if (showConfirm) {
      return <Confirm showConfirm={showConfirm} setShowConfirm={setShowConfirm} titleToDelete={titleToDelete} subjectOfTitle={subjectOfTitle} showTitlesUpdate={showTitlesUpdate} setTitles={setTitles} titles={titles}/>
    }
  };

  return (
    <div id="container">
      <Navbar showForm={showForm} setShowForm={setShowForm} showEdit={showEdit} setShowEdit={setShowEdit} links={links} />
      <div id="app-container" className="app" data-testid="app-container">
        <div className="sidebar-container">
          <Bookmarks bmarks={bmarks} setShowTitles={setShowTitles} setTitles={setTitles} showConfirm={showConfirm} showTitles={showTitles} setShowConfirm={setShowConfirm} titlesUpdate={titlesUpdate} colors={colors}/>
        </div>
        <Fragment>
          {
            showTitles
            ? (<Titles titles={titles} links={links} setTitles={setTitles} showConfirm={showConfirm} setShowConfirm={setShowConfirm} deleteTitle={deleteTitle} titlesUpdate={titlesUpdate}/>)
            : (null)
          }
        </Fragment>
      </div>
      <Fragment>
        { displayContainer() }
      </Fragment>
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


