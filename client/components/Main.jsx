import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Content from './Content';
import MainContext from './MainContext';

const Main = ({ groups, groupsID, links, updatePage }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ groupState, setGroupState ] = useState(groups);

  return (
    <MainContext.Provider value={{showForm, setShowForm, links}}>
    <div id="container">
      <Navbar />
      <Content groups={groups} groupsID={groupsID} updatePage={updatePage}/>
    </div>
    </MainContext.Provider>
  );
};

export default Main;

Main.propTypes = {
  groups: PropTypes.array,
  groupsID: PropTypes.string,
  links: PropTypes.array
};

