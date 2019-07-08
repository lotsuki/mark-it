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


// Navbar.propTypes = {
//   links:
// };

// Navbar.defaultProps = {
//   links:
// };