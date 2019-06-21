import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar.jsx';


const Navbar = ({ showForm, setShowForm, showEdit, setShowEdit, links, showContainer, exitContainer }) => {
  const hideDisplay = (e) => {
    if (e.target.name !== 'form') {
      setShowForm(false);
      document.removeEventListener('click', hideDisplay);
    }
  };

  const displayForm = (e) => {
    if (!showForm) {
      setShowForm(true);
      document.addEventListener('click', hideDisplay);
    } else {
      setShowForm(false);
    }
  };

  const displayEdit = () => {
    var appContainer = document.getElementById('app-container');
    var editContainer = document.getElementById('edit-container');
    if (!showEdit) {
      appContainer.style.height = '0';
      appContainer.style.visibility = 'hidden';
      //editContainer.style.gridRow ='2/3';
      setShowEdit(true)
    } else {
      appContainer.style.height = '100%';
      appContainer.style.visibility = 'visible';
      editContainer.style.gridRow ='';
      setShowEdit(false)
    }
  };


  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <div className="name">Booksmart</div>
        <svg className="icon-bookmark" xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="10 -28 85 85" fill="#fff">
          <title>bookmark</title>
          <path d="M6 0v32l10-10 10 10v-32z"></path>
        </svg>
      </div>
      <Searchbar links={links}/>
      <div className="icons-wrapper">
        <div className="plus-icon" data-testid="plus-icon" onClick={displayForm}>
          <svg className="icon-plus" xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="-30 -25 85 85" fill="#fff" style={{cursor: "pointer"}}>
            <title>plus</title>
            <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
          </svg>
        </div>
        <div className="edit-icon" data-testid="edit-icon" onClick={displayEdit}>
          <svg className="icon-pencil" xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="10 -25 85 85" fill="#fff" style={{cursor: "pointer"}}>
            <title>pencil</title>
            <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};




export default Navbar;


Navbar.propTypes = {
  titles: PropTypes.array,
  displayEdit: PropTypes.func,
  displayForm:PropTypes.func
};

Navbar.defaultProps = {
  titles: [],
  displayForm: () => {},
  displayEdit: () => {}
};