import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Content from './Content';

//try wihtout fragments

const Main = ({ groups, groupsID, links }) => {
  const [ showForm, setShowForm, ] = useState(false);
  console.log('main render')

  return (
    <div id="container">
      <Navbar showForm={showForm} setShowForm={setShowForm} links={links} />
      <Content groups={groups} groupsID={groupsID}/>
    </div>
  );
};

export default Main;

Main.propTypes = {
  groups: PropTypes.array,
  groupsID: PropTypes.string,
  links: PropTypes.array
};


