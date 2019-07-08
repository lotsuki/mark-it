import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import Logo from './Logo';
import NavbarIcons from './NavbarIcons';


const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <Logo />
      <Searchbar links={links}/>
      <NavbarIcons />
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