import React from 'react';
import IconPlus from './IconPlus';
import IconEdit from './IconEdit';

const NavbarIcons = ({ showForm, setShowForm, showEdit, setShowEdit }) => {


  return (
    <div className="icons-wrapper">
      <IconPlus showForm={showForm} setShowForm={setShowForm}/>
      <IconEdit showEdit={showEdit} setShowEdit={setShowEdit}/>
    </div>
  )
};

export default NavbarIcons;