import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar.jsx';

const Navbar = ({ showForm, setShowForm, showEdit, setShowEdit, titles }) => {
  const hideDisplay = (e) => {
    if (e.target.className !== 'form-inputs') {
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
      editContainer.style.gridRow ='2/3';
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
        <div className="name">MarkIt</div>
       <i className="fas fa-bookmark"></i>
      </div>
      <Searchbar titles={titles}/>
      <div className="icons-wrapper">
        <div className="plus-icon" data-testid="plus-icon" onClick={displayForm}><i className="fas fa-plus" ></i></div>
        <div className="edit-icon" data-testid="edit-icon" onClick={displayEdit}><i className="fas fa-edit"></i></div>
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