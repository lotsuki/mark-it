import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Content from './Content';
import MainContext from './MainContext';
import axios from 'axios';

const Main = ({ userID }) => {
  const [ showForm, setShowForm, ] = useState(false);
  const [ groups, setGroups ] = useState([]);
  const [ links, setLinks ] = useState([]);
  const [ groupsID, setGroupsID ] = useState('');
  const countRetry = useRef(0);
 // const [ groupState, setGroupState ] = useState(groups);
  useEffect(() => {
    // console.log('hi')
    // fetchData('/user', updateUserID);
    fetchData('/groups', updateGroups);
    fetchData('/titles', updateLinks);
  }, []);

  const updateGroups = (data) => {
    setGroups(data.groups);
    setGroupsID(data._id);
  };
  const updateLinks = data => setLinks(data);

  const fetchRetry = (err, url, updateFunc) => {
    countRetry.current++;
    //fix error handle
    if (countRetry.current >= 3) { return err; }
    fetchData(url, updateFunc);
  };

  const fetchData = (url, updateFunc) => {
    axios.get(url)
      .then(res =>  {
        let data = res.data;
        updateFunc(data);
      })
      .catch(err => {
        fetchRetry(err);
      });
  };



  return (
    <MainContext.Provider value={{showForm, setShowForm, links}}>
    <div id="container">
      <Navbar />
      <Content groups={groups} setGroups={setGroups} groupsID={groupsID}/>
    </div>
    </MainContext.Provider>
  );
};

export default Main;

Main.propTypes = {
  groups: PropTypes.array,
  setGroups: PropTypes.func,
  groupsID: PropTypes.string,
  links: PropTypes.array,
};

Main.defaultProps = {
  groups: [],
  setGroups: () => {},
  groupsID: '',
  links: [],
};

