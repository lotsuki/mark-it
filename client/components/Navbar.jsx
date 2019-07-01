import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import Logo from './Logo';
import NavbarIcons from './NavbarIcons';


const Navbar = ({ showForm, setShowForm, showEdit, setShowEdit, links, showContainer, exitContainer }) => {
  return (
    <nav className="navbar">
      <Logo />
      <Searchbar links={links}/>
      <NavbarIcons showForm={showForm} setShowForm={setShowForm} showEdit={showEdit} setShowEdit={setShowEdit}/>
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