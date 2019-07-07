import React from 'react';
import IconPlus from './IconPlus';

const NavbarIcons = ({ showForm, setShowForm, showEdit, setShowEdit }) => {
  return (
    <div className="icons-wrapper">
      <IconPlus showForm={showForm} setShowForm={setShowForm}/>
    </div>
  )
};

export default NavbarIcons;